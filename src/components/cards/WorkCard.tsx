import BentoCard from '@/components/bento/BentoCard';
import { Briefcase, TrendingUp } from 'lucide-react';

const WorkCard = () => {
  return (
    <BentoCard 
      gradient="from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700"
      className="text-white"
      isClickable={true}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Work Experience</h3>
            <p className="text-white/80 text-xs">Currently at Sprinklr</p>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">3+</div>
            <div className="text-white/80 text-xs">Internships</div>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-white/80 text-xs mt-auto">
          <TrendingUp className="w-3 h-3" />
          <span>25% regression reduction</span>
        </div>
      </div>
    </BentoCard>
  );
};

export default WorkCard;