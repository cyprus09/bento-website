"use client";

import { motion } from "framer-motion";
import HeroCard from "@/components/cards/HeroCard";
import AboutCard from "@/components/cards/AboutCard";
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
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-3 auto-rows-[minmax(140px,auto)] lg:auto-rows-[minmax(185px,1fr)] lg:h-full lg:max-h-[calc(100vh-200px)]"
    >
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 lg:order-1">
        <HeroCard />
      </div>

      <div className="md:col-span-2 lg:col-span-2 lg:order-6">
        <AboutCard />
      </div>

      <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 lg:order-2">
        <WorkCard />
      </div>

      <div className="md:col-span-3 lg:col-span-3 lg:row-span-1 lg:order-8">
        <ProjectsCard />
      </div>

      <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 lg:order-4">
        <SkillsCard />
      </div>

      <div className="md:col-span-1 lg:col-span-1 lg:order-5">
        <ReadingCard />
      </div>

      <div className="md:col-span-1 lg:col-span-1 lg:order-3">
        <MusicCard />
      </div>

      <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 lg:order-7">
        <ContactCard />
      </div>
    </motion.div>
  );
};

export default BentoGrid;
