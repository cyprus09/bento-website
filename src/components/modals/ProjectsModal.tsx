'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github } from 'lucide-react';
import { projects } from '@/data/projectData';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectsModal = ({ isOpen, onClose }: ProjectsModalProps) => {
  return (
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
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="sticky top-0 bg-gradient-to-r from-red-500 to-orange-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
                  <p className="text-red-100">Showcasing technical expertise and problem-solving skills</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="space-y-8">
                {projects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-red-200 dark:border-red-800 rounded-2xl p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-red-500/20 rounded-lg">
                              <IconComponent className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {project.title}
                              </h3>
                              <p className="text-red-600 dark:text-red-400 font-medium">
                                {project.category}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-4 md:mt-0">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                              <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Project Overview</h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
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
                <div className="inline-flex items-center gap-2 text-red-600 dark:text-red-400">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">More projects available on GitHub</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectsModal;