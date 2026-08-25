import BentoCard from "@/components/bento/BentoCard";
import { Zap } from "lucide-react";
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
];

const SkillsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BentoCard
        hoverGlow={accent.glow}
        className="text-gray-900 dark:text-gray-100"
        isClickable={true}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${accent.iconBg}`}>
              <Zap className={`w-4 h-4 ${accent.iconText}`} />
            </div>
            <h3 className="font-semibold text-lg">Tech Stack</h3>
            <span className="ml-auto text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap">
              +{skillCategories.reduce((sum, c) => sum + c.skills.length, 0) - featuredSkills.length} more
            </span>
          </div>

          <div className="flex flex-wrap content-start gap-1.5 pb-1">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${accent.chip} whitespace-nowrap`}
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
