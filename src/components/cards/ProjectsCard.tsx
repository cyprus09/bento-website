import { useState } from "react";
import BentoCard from "@/components/bento/BentoCard";
import { Code } from "lucide-react";
import ProjectsModal from "@/components/modals/ProjectsModal";
import { accent } from "@/data/accentColors";

const ProjectsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BentoCard
        hoverGlow={accent.glow}
        className="text-gray-900 dark:text-gray-100"
        isClickable={true}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col h-full justify-center items-center text-center">
          <div className={`p-3 rounded-lg mb-3 ${accent.iconBg}`}>
            <Code className={`w-6 h-6 ${accent.iconText}`} />
          </div>
          <h3 className="font-semibold text-lg mb-1">Featured Projects</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Click to expand</p>
        </div>
      </BentoCard>

      <ProjectsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProjectsCard;
