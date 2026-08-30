"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react";
import { projects } from "@/data/projectData";
import { accent } from "@/data/accentColors";
import ModalPortal from "./ModalPortal";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToTitle?: string | null;
}

const ProjectsModal = ({ isOpen, onClose, scrollToTitle }: ProjectsModalProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!isOpen || !scrollToTitle) return;

    const raf = requestAnimationFrame(() => {
      const target = sectionRefs.current[scrollToTitle];
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(raf);
  }, [isOpen, scrollToTitle]);

  return (
    <ModalPortal>
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-nearblack rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className={`shrink-0 ${accent.modalHeader} p-6 text-offwhite dark:text-nearblack`}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-1">Projects</h2>
                  <p className="text-offwhite/80 dark:text-nearblack/80 text-sm">
                    Showcasing technical expertise and problem-solving skills
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-offwhite/10 hover:bg-offwhite/20 dark:bg-nearblack/10 dark:hover:bg-nearblack/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div ref={scrollContainerRef} className="p-6 overflow-y-auto">
              <div className="space-y-6">
                {projects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.div
                      key={index}
                      ref={el => {
                        sectionRefs.current[project.title] = el;
                      }}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, type: "spring", damping: 22, stiffness: 260 }}
                      whileHover={{ y: -3 }}
                      className={`rounded-2xl p-6 border ${accent.sectionBorder} bg-gray-50/80 dark:bg-white/[0.03] transition-shadow hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 scroll-mt-6`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2.5 rounded-xl ${accent.iconBg}`}>
                              <IconComponent className={`w-5 h-5 ${accent.iconText}`} />
                            </div>
                            <div>
                              <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {project.title}
                              </h3>
                              <p className={`font-medium text-sm ${accent.iconText}`}>{project.category}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.08 + techIndex * 0.03 }}
                                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/70 dark:border-white/10"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-4 md:mt-0">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-lg border transition-colors ${accent.chip} hover:brightness-95 dark:hover:brightness-110`}
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1 text-sm">Project Overview</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 text-sm">Key Highlights</h4>
                        <ul className="space-y-1.5">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${accent.bullet}`} />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center"
              >
                <div className={`inline-flex items-center gap-2 text-sm ${accent.iconText}`}>
                  <Github className="w-4 h-4" />
                  <span>More projects available on GitHub</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </ModalPortal>
  );
};

export default ProjectsModal;
