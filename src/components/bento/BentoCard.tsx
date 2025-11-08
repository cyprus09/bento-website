'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  onClick?: () => void;
  isClickable?: boolean;
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1.000],
    },
  },
};

const BentoCard = ({
  children,
  className = '',
  gradient = 'from-orange-100 to-amber-100 dark:from-orange-900 dark:to-amber-900',
  onClick,
  isClickable = false,
}: BentoCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        y: -6,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={isClickable ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`
        relative h-full w-full rounded-3xl bg-gradient-to-br ${gradient}
        border border-orange-200/30 dark:border-orange-800/30 backdrop-blur-sm
        shadow-lg shadow-orange-500/10 dark:shadow-orange-900/20
        overflow-hidden group
        ${isClickable ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent" />
      
      {/* Hover effect overlay */}
      {isClickable && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full p-4 lg:p-6 flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default BentoCard;