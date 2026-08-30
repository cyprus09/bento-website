import { Zap, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skillCategories";
import { accent } from "@/data/accentColors";
import ModalPortal from "./ModalPortal";

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal = ({ isOpen, onClose }: SkillsModalProps) => {
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
                  <h2 className="font-serif text-2xl font-bold mb-1">Tech Stack</h2>
                  <p className="text-offwhite/80 dark:text-nearblack/80 text-sm">Technologies and tools I work with</p>
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
                {skillCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, type: "spring", damping: 22, stiffness: 260 }}
                      whileHover={{ y: -3 }}
                      className={`rounded-2xl p-6 border ${accent.sectionBorder} bg-gray-50/80 dark:bg-white/[0.03] transition-shadow hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 rounded-xl ${accent.iconBg}`}>
                          <IconComponent className={`w-5 h-5 ${accent.iconText}`} />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-gray-100">{category.title}</h3>
                          <p className={`text-sm ${accent.iconText}`}>{category.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.08 + skillIndex * 0.03 }}
                            whileHover={{ scale: 1.05 }}
                            className={`font-mono px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-default ${accent.chip}`}
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
                <div className={`inline-flex items-center gap-2 text-sm ${accent.iconText}`}>
                  <Zap className="w-4 h-4" />
                  <span>Always learning and exploring new technologies</span>
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

export default SkillsModal;
