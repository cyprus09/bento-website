import BentoCard from '@/components/bento/BentoCard';
import { BookOpen, Clock } from 'lucide-react';

const ReadingCard = () => {
  return (
    <BentoCard 
      gradient="from-teal-400 to-orange-500 dark:from-teal-500 dark:to-orange-600"
      className="text-white"
      isClickable={true}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm">Currently Reading</h3>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-20 bg-white/20 rounded-lg mb-3 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white/60" />
          </div>
          <h4 className="font-medium text-sm mb-1">System Design Interview</h4>
          <p className="text-white/80 text-xs">Alex Xu</p>
        </div>
        
        <div className="flex items-center gap-2 text-white/80 text-xs">
          <Clock className="w-3 h-3" />
          <span>Chapter 4 of 15</span>
        </div>
      </div>
    </BentoCard>
  );
};

export default ReadingCard;