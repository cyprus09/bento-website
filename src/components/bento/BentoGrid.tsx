'use client';

import { motion } from 'framer-motion';
import HeroCard from '@/components/cards/HeroCard';
import AboutCard from '@/components/cards/AboutCard';
import WorkCard from '@/components/cards/WorkCard';
import ProjectsCard from '@/components/cards/ProjectsCard';
import SkillsCard from '@/components/cards/SkillsCard';
import ReadingCard from '@/components/cards/ReadingCard';
import MusicCard from '@/components/cards/MusicCard';
import ContactCard from '@/components/cards/ContactCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const BentoGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[160px] lg:auto-rows-[140px]"
    >
      {/* Hero - Large prominent card */}
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
        <HeroCard />
      </div>

      {/* Work - Top right */}
      <div className="md:col-span-1 lg:col-span-1">
        <WorkCard />
      </div>

      {/* Skills - Below work */}
      <div className="md:col-span-1 lg:col-span-1">
        <SkillsCard />
      </div>

      {/* About - Wide card */}
      <div className="md:col-span-2 lg:col-span-2">
        <AboutCard />
      </div>

      {/* Reading & Music - Side by side */}
      <div className="md:col-span-1 lg:col-span-1">
        <ReadingCard />
      </div>

      <div className="md:col-span-1 lg:col-span-1">
        <MusicCard />
      </div>

      {/* Projects - Wide card */}
      <div className="md:col-span-3 lg:col-span-2 lg:row-span-1">
        <ProjectsCard />
      </div>

      {/* Contact - Full width bottom */}
      <div className="md:col-span-3 lg:col-span-4">
        <ContactCard />
      </div>
    </motion.div>
  );
};

export default BentoGrid;