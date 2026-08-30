import BentoCard from "@/components/bento/BentoCard";
import { Zap, ChevronRight } from "lucide-react";
import { useState } from "react";
import SkillsModal from "../modals/SkillsModal";
import { accent } from "@/data/accentColors";
import { skillCategories } from "@/data/skillCategories";

const featuredSkills = [
  "TypeScript",
  "React.js",
  "C/C++",
  "GraphQL",
  "Golang",
  "gRPC",
  "PostgreSQL",
  "Next.js",
  "Docker",
  "AWS",
  "Redis",
  "Python",
];

const SkillsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BentoCard
        hoverGlow={accent.glow}
        className="text-gray-900 dark:text-gray-100"
        contentClassName="p-4 lg:p-6 lg:py-10"
        isClickable={true}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${accent.iconBg}`}>
              <Zap className={`w-4 h-4 ${accent.iconText}`} />
            </div>
            <h3 className="font-serif font-semibold text-xl flex items-center gap-1">
              Tech Stack
              <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </h3>
          </div>

          <div className="flex-1 flex flex-wrap content-center gap-3 mt-2">
            {featuredSkills.map(skill => (
              <span
                key={skill}
                className={`font-mono px-2 py-1 rounded-lg text-xs font-medium border ${accent.chip} whitespace-nowrap`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </BentoCard>

      <SkillsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default SkillsCard;
