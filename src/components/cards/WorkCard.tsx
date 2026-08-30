"use client";

import { useState } from "react";
import BentoCard from "@/components/bento/BentoCard";
import { Briefcase, ChevronRight } from "lucide-react";
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
        contentClassName="p-4 lg:p-6 lg:py-8"
        isClickable={true}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${accent.iconBg}`}>
              <Briefcase className={`w-4 h-4 ${accent.iconText}`} />
            </div>
            <h3 className="font-serif font-semibold text-xl flex items-center gap-1">
              Work Experience
              <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </h3>
          </div>

          <div className="flex-1 flex flex-col justify-evenly">
            {experienceCard.map((exp, index) => (
              <div key={index} className="text-left">
                <div className="text-sm font-medium">{exp.title}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">{exp.company}</div>
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
