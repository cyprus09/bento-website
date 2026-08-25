import BentoCard from "@/components/bento/BentoCard";
import { Zap } from "lucide-react";
import { useState } from "react";
import SkillsModal from "../modals/SkillsModal";
import { accent } from "@/data/accentColors";

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
        <div className="flex flex-row h-full justify-center items-center text-center">
          <div className={`p-3 rounded-lg mb-3 ${accent.iconBg}`}>
            <Zap className={`w-6 h-6 ${accent.iconText}`} />
          </div>
          <h3 className="font-semibold text-lg mb-1 ml-3">Tech Stack</h3>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Click to expand</p>
        </div>
      </BentoCard>

      <SkillsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default SkillsCard;
