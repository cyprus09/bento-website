"use client";

import { motion } from "framer-motion";
import HeroCard from "@/components/cards/HeroCard";
import WorkCard from "@/components/cards/WorkCard";
import ProjectsCard from "@/components/cards/ProjectsCard";
import SkillsCard from "@/components/cards/SkillsCard";
import ReadingCard from "@/components/cards/ReadingCard";
import MusicCard from "@/components/cards/MusicCard";
import ContactCard from "@/components/cards/ContactCard";

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
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-3"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:items-stretch">
        <div className="md:col-span-2 lg:col-span-2">
          <HeroCard />
        </div>

        <div className="lg:col-span-1">
          <WorkCard />
        </div>

        <div className="lg:col-span-1">
          <SkillsCard />
        </div>
      </div>

      <div>
        <ProjectsCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:items-stretch">
        <div className="lg:col-span-1">
          <ReadingCard />
        </div>

        <div className="lg:col-span-1">
          <MusicCard />
        </div>

        <div className="md:col-span-1 lg:col-span-2">
          <ContactCard />
        </div>
      </div>

    </motion.div>
  );
};

export default BentoGrid;
