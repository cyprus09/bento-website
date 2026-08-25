import { useState } from "react";
import BentoCard from "@/components/bento/BentoCard";
import { Code } from "lucide-react";
import ProjectsModal from "@/components/modals/ProjectsModal";
import { accent } from "@/data/accentColors";
import { projects } from "@/data/projectData";

const ProjectsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollToTitle, setScrollToTitle] = useState<string | null>(null);
  const featured = projects.slice(0, 4);

  const openModal = (title?: string) => {
    setScrollToTitle(title ?? null);
    setIsModalOpen(true);
  };

  return (
    <>
      <BentoCard
        hoverGlow={accent.glow}
        className="text-gray-900 dark:text-gray-100"
        isClickable={true}
        onClick={() => openModal()}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${accent.iconBg}`}>
              <Code className={`w-4 h-4 ${accent.iconText}`} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Featured Projects</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Click to expand</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {featured.map((project) => {
              const Icon = project.icon;
              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(project.title);
                  }}
                  className={`rounded-xl border text-left ${accent.sectionBorder} bg-gray-50/80 dark:bg-white/[0.03] p-3 flex flex-col gap-2 transition-colors hover:bg-gray-100 dark:hover:bg-white/[0.06]`}
                >
                  <div className={`p-1.5 rounded-lg w-fit ${accent.iconBg}`}>
                    <Icon className={`w-4 h-4 ${accent.iconText}`} />
                  </div>
                  <span className="text-xs font-medium leading-snug line-clamp-2">{project.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </BentoCard>

      <ProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        scrollToTitle={scrollToTitle}
      />
    </>
  );
};

export default ProjectsCard;
