'use client';

import { useState, useEffect } from 'react';
import BentoCard from '@/components/bento/BentoCard';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const HeroCard = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <BentoCard 
      gradient="from-orange-400 via-red-500 to-pink-600 dark:from-orange-500 dark:via-red-600 dark:to-pink-700"
      className="text-white"
    >
      {/* Status indicators */}
      <div className="flex items-center justify-end text-white/80 text-sm mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{currentTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Gurgaon, IN</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2 leading-tight">
          Mayank
          <br />
          <span className="text-yellow-300">Pallai</span>
        </h1>
        <p className="text-white/90 text-lg mb-6 leading-relaxed">
          Software Engineer crafting scalable solutions at{' '}
          <span className="font-semibold text-yellow-300">Sprinklr</span>
        </p>
        
        <div className="flex items-center gap-2 text-white/80">
          <span>Explore my work</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
    </BentoCard>
  );
};

export default HeroCard;