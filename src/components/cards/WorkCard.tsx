"use client";

import { useState } from "react";
import BentoCard from "@/components/bento/BentoCard";
import { Briefcase } from "lucide-react";
import WorkModal from "@/components/modals/WorkModal";
import { experienceCard } from "@/data/workData";
import { accent } from "@/data/accentColors";

const WorkCard = () => {
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
              <Briefcase className={`w-4 h-4 ${accent.iconText}`} />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Work Experience</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Click to Expand</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-evenly">
            {experienceCard.map((exp, index) => (
              <div key={index} className="text-left">
                <div className="text-sm font-medium">{exp.title}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">{exp.company}</div>
                {exp.current && (
                  <div className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Current</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </BentoCard>

      <WorkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default WorkCard;
