'use client';

import { useState, useEffect } from 'react';
import BentoCard from '@/components/bento/BentoCard';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Avatar from '../../../public/images/avatar.jpg';

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
      gradient="from-orange-400 via-amber-500 to-red-500 dark:from-orange-600 dark:via-amber-600 dark:to-red-600"
      className="text-white"
    >
      <div className="flex items-center justify-end text-white/80 text-xs mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{currentTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>Gurgaon, IN</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-4">
          <div className="relative w-[120px] h-[120px] mx-auto">
            <Image 
              src={Avatar}
              alt="Mayank Pallai" 
              fill
              className="rounded-full object-cover border-2 border-white/20" 
            />
          </div>
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          Mayank <span className="text-yellow-300">Pallai</span>
        </h1>
        
        <p className="text-white/90 text-m mb-4 leading-relaxed max-w-xs">
          Software Engineer at{' '}
          <span className="font-semibold text-yellow-300"><a href='https://www.sprinklr.com/' target='_blank'><u>Sprinklr</u></a></span>
        </p>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10" />
    </BentoCard>
  );
};

export default HeroCard;