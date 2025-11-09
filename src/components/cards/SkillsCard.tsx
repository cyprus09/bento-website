import BentoCard from "@/components/bento/BentoCard";
import { Zap } from "lucide-react";
import { useState } from "react";
import SkillsModal from "../modals/SkillsModal";

const SkillsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BentoCard
        gradient="from-orange-200/90 to-amber-100/90 dark:from-amber-600 dark:to-orange-900/40"
        className="text-orange-800 dark:text-orange-100 cursor-pointer hover:scale-105"
        isClickable={true}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-row h-full justify-center items-center text-center">
          <div className="p-3 bg-orange-500/20 rounded-lg mb-3">
            <Zap className="w-6 h-6 text-orange-700 dark:text-orange-200" />
          </div>
          <h3 className="font-semibold text-lg mb-1 ml-3">Tech Stack</h3>
        </div>
        <div className="flex justify-center">
          <p className="text-sm opacity-70">Click to expand</p>
        </div>
      </BentoCard>

      <SkillsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default SkillsCard;
