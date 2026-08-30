"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar } from "lucide-react";
import { experienceModal } from "@/data/workData";
import { accent } from "@/data/accentColors";
import Image from "next/image";
import ModalPortal from "./ModalPortal";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkModal = ({ isOpen, onClose }: WorkModalProps) => {
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
                    <h2 className="font-serif text-2xl font-bold mb-1">Work Experience</h2>
                    <p className="text-offwhite/80 dark:text-nearblack/80 text-sm">Where I&apos;ve built things</p>
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

              <div className="p-6 overflow-y-auto">
                <div className="space-y-6">
                  {experienceModal.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, type: "spring", damping: 22, stiffness: 260 }}
                      whileHover={{ y: -3 }}
                      className={`rounded-2xl p-6 ${accent.sectionBorder} border bg-gray-50/80 dark:bg-white/[0.03] transition-shadow hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`rounded-xl flex items-center justify-center w-12 h-12 shrink-0 bg-white dark:bg-white/90 border ${accent.sectionBorder} shadow-sm`}
                            >
                              <Image
                                src={exp.companyLogo}
                                alt={exp.company}
                                width={28}
                                height={28}
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {exp.title}
                              </h3>
                              <p className={`font-medium text-sm ${accent.iconText}`}>{exp.company}</p>
                            </div>
                            {exp.current && (
                              <span className="px-2 py-1 bg-emerald-500 text-white text-xs rounded-full font-medium">
                                Current
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <span className={`font-mono px-2 py-0.5 rounded-full border text-xs ${accent.chip}`}>
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.08 + techIndex * 0.03 }}
                                className="font-mono px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/70 dark:border-white/10"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 p-4 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1 text-sm">
                          About {exp.company}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.companyDescription}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1 text-sm">Role Description</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 text-sm">Key Achievements</h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${accent.bullet}`} />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
};

export default WorkModal;
