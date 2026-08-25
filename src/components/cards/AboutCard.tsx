import BentoCard from "@/components/bento/BentoCard";
import { User, Heart } from "lucide-react";
import { accent } from "@/data/accentColors";

const AboutCard = () => {
  return (
    <BentoCard className="text-gray-900 dark:text-gray-100" isClickable={false}>
      <div className="flex items-start gap-4 h-full lg:h-full">
        <div className={`p-3 rounded-xl shrink-0 ${accent.iconBg}`}>
          <User className={`w-6 h-6 ${accent.iconText}`} />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between lg:h-full">
          <div>
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Software Engineer exploring System Design and GenAI, with a growing interest in building AI-native products. Always happy to connect.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-200/70 dark:border-white/10">
            <Heart className="w-5 h-5 text-rose-500" />
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              Building the future, one line at a time
            </span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
};

export default AboutCard;
