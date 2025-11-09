import { Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/skillCategories';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal = ({isOpen, onClose} : SkillsModalProps) => {
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
                    <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
                    <p className="text-orange-100">Technologies and tools I work with</p>
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
                  {skillCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-orange-200 dark:border-orange-800 rounded-2xl p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-orange-500/20 rounded-lg">
                            <IconComponent className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                              {category.title}
                            </h3>
                            <p className="text-orange-600 dark:text-orange-400 text-sm">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                              className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 border border-orange-200 dark:border-orange-700 text-orange-800 dark:text-orange-200 rounded-xl text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
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
                  <div className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Always learning and exploring new technologies</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
  );
};

export default SkillsModal;