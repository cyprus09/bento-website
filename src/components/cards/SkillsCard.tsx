import BentoCard from '@/components/bento/BentoCard';
import { Zap } from 'lucide-react';

const SkillsCard = () => {
  const skills = ['React', 'Go', 'TypeScript', 'Python', 'PostgreSQL'];

  return (
    <BentoCard 
      gradient="from-pink-500 to-orange-600 dark:from-pink-600 dark:to-orange-700"
      className="text-white"
      isClickable={true}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="font-semibold">Tech Stack</h3>
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-2">
            {skills.slice(0, 3).map((skill, index) => (
              <div key={skill} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-white/60`} />
                <span className="text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-white/80 text-xs mt-auto">
          +{skills.length - 3} more technologies
        </div>
      </div>
    </BentoCard>
  );
};

export default SkillsCard;