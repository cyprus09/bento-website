'use client';

import { useState } from 'react';
import BentoCard from '@/components/bento/BentoCard';
import { Briefcase } from 'lucide-react';
import WorkModal from '@/components/modals/WorkModal';
import { experienceCard } from '@/data/workData';

const WorkCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <BentoCard 
        gradient="from-orange-400 to-red-500 dark:from-orange-600 dark:to-red-700"
        className="text-white"
        isClickable={true}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/20 rounded-lg mb-2">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Work Experience</h3>
              <p className="text-white/80 text-xs mb-2">Click to Expand</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-top space-y-3">
            {experienceCard.map((exp, index) => (
              <div key={index} className="text-left">
                <div className="text-m font-m">{exp.title}</div>
                <div className="text-white/80 text-xs">{exp.company}</div>
                {exp.current && (
                  <div className="text-green-300 text-xs">Current</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </BentoCard>

      <WorkModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default WorkCard;