import BentoCard from "@/components/bento/BentoCard";
import { User, Heart } from "lucide-react";

const AboutCard = () => {
  return (
    <BentoCard
      gradient="from-stone-100 to-orange-100 dark:from-orange-600 dark:via-orange-500 dark:to-amber-800"
      className="text-orange-900 dark:text-orange-100"
      isClickable={true}
    >
      <div className="flex items-start gap-4 h-full">
        <div className="p-3 bg-orange-500/20 rounded-xl shrink-0">
          <User className="w-6 h-6 text-orange-800 dark:text-orange-200" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-semibold mb-3">About Me</h2>
            <p className="text-orange-800/90 dark:text-orange-200/90 text-sm leading-relaxed">
              Currently learning full stack, cloud and GenAI. Excited to talk and connect with new passionate people about technology!
            </p>
          </div>

          <div className="flex items-center gap-2 mt-1 pt-1 border-t border-orange-500/20">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-orange-800/80 dark:text-orange-200/80 text-sm font-medium">
              Building the future, one line at a time
            </span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
};

export default AboutCard;