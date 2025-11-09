import { useState } from "react";
import BentoCard from "@/components/bento/BentoCard";
import { Code } from "lucide-react";
import ProjectsModal from "@/components/modals/ProjectsModal";

const ProjectsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BentoCard
        gradient="from-red-500 to-orange-400 dark:from-red-600 dark:to-orange-600"
        className="text-white cursor-pointer hover:scale-105 transition-transform duration-200"
        isClickable={true}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col h-full justify-center items-center text-center">
          <div className="p-3 bg-white/20 rounded-lg mb-3">
            <Code className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg mb-1">Featured Projects</h3>
          <p className="text-white/70 text-sm">Click to expand</p>
        </div>
      </BentoCard>

      <ProjectsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProjectsCard;
