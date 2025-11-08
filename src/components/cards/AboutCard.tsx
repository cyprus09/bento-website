import BentoCard from '@/components/bento/BentoCard';
import { User, GraduationCap } from 'lucide-react';

const AboutCard = () => {
  return (
    <BentoCard 
      gradient="from-amber-400 to-orange-600 dark:from-amber-500 dark:to-orange-700"
      className="text-white"
      isClickable={true}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-white/20 rounded-xl">
          <User className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Product Engineer passionate about building scalable systems. 
            Recent NTU graduate with a love for problem-solving and innovation.
          </p>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-white/20">
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <GraduationCap className="w-4 h-4" />
          <span>B.Eng. Electrical & Electronic Engineering</span>
        </div>
      </div>
    </BentoCard>
  );
};

export default AboutCard;