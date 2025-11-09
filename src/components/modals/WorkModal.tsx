"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar } from "lucide-react";
import { experienceModal } from "@/data/workData";
import Image from "next/image";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkModal = ({ isOpen, onClose }: WorkModalProps) => {
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
            <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
                </div>
                <button onClick={onClose} className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="space-y-8">
                {experienceModal.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-orange-200 dark:border-orange-800 rounded-2xl p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-orange-500/10 rounded-lg flex items-center justify-center w-12 h-12">
                            <Image
                              src={exp.companyLogo}
                              alt={exp.company}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                            <p className="text-orange-600 dark:text-orange-400 font-medium">{exp.company}</p>
                          </div>
                          {exp.current && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Current</span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-1">
                          {exp.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 mt-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">About {exp.company}</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.companyDescription}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Role Description</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
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
  );
};

export default WorkModal;
