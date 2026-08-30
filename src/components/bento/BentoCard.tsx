"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  /** Full-bleed gradient background, e.g. for the hero card. Overrides the default glass surface. */
  gradient?: string;
  /** Full-bleed solid background, e.g. "bg-terracotta". Overrides the default glass surface. */
  background?: string;
  /** Subtle radial glow shown on hover, e.g. "from-blue-400/20 to-cyan-400/10". */
  hoverGlow?: string;
  onClick?: () => void;
  isClickable?: boolean;
  /** Override the default inner content padding, e.g. "p-4 lg:p-8" for a taller card. */
  contentClassName?: string;
}

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1.0],
    },
  },
};

const BentoCard = ({
  children,
  className = "",
  gradient,
  background,
  hoverGlow,
  onClick,
  isClickable = false,
  contentClassName = "p-4 lg:p-6",
}: BentoCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        y: -6,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={isClickable ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`
        relative h-full w-full rounded-3xl overflow-hidden group
        ${gradient ? `bg-gradient-to-br ${gradient}` : background ? background : "glass-surface"}
        ${isClickable ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {hoverGlow && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${hoverGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
      )}

      <div className={`relative z-10 h-full flex flex-col ${contentClassName}`}>{children}</div>
    </motion.div>
  );
};

export default BentoCard;
