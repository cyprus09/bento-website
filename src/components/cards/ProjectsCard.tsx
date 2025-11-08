import BentoCard from '@/components/bento/BentoCard';
import { Code, Github, ExternalLink } from 'lucide-react';

const ProjectsCard = () => {
  const featuredProjects = [
    { name: 'Student Management Portal', tech: 'Go • React • PostgreSQL' },
    { name: 'Blockchain Implementation', tech: 'Go • UTXO • Distributed' },
    { name: 'Concurrent Servers', tech: 'C • Python • POSIX' },
  ];

  return (
    <BentoCard 
      gradient="from-red-500 to-orange-600 dark:from-red-600 dark:to-orange-700"
      className="text-white"
      isClickable={true}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Code className="w-5 h-5" />
          </div>
          <h3 className="font-semibold">Featured Projects</h3>
        </div>
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-white/80" />
          <ExternalLink className="w-4 h-4 text-white/80" />
        </div>
      </div>
      
      <div className="space-y-3 flex-1">
        {featuredProjects.map((project, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-3">
            <h4 className="font-medium text-sm mb-1">{project.name}</h4>
            <p className="text-white/70 text-xs">{project.tech}</p>
          </div>
        ))}
      </div>
      
      <div className="text-white/80 text-xs mt-4">
        Click to explore all projects →
      </div>
    </BentoCard>
  );
};

export default ProjectsCard;