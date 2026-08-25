"use client";

import { useState, useEffect } from "react";
import BentoCard from "@/components/bento/BentoCard";
import { MapPin, Clock, GraduationCap } from "lucide-react";
import Image from "next/image";
import Avatar from "../../../public/images/avatar.jpg";

const HeroCard = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BentoCard background="bg-claudeOrange" className="text-cream">
      <div className="flex items-center justify-end text-cream/80 text-xs mb-4">
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
              className="rounded-full object-cover border-2 border-cream/20"
            />
          </div>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          Mayank <span className="text-espresso">Pallai</span>
        </h1>

        <p className="text-cream/90 text-m mb-2 leading-relaxed max-w-xs">
          Software Engineer at{" "}
          <span className="font-semibold text-espresso">
            <a href="https://www.sprinklr.com/" target="_blank">
              <u>Sprinklr</u>
            </a>
          </span>
        </p>

        <div className="flex items-center gap-1 text-cream/80 text-sm">
          <GraduationCap className="w-4 h-4" />
          <span>B.Eng. Electrical & Electronic Engineering, </span>
          <span className="font-semibold text-espresso">
            <a href="https://www.ntu.edu.sg/" target="_blank">
              <u>(NTU Singapore)</u>
            </a>
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 blur-2xl" />
    </BentoCard>
  );
};

export default HeroCard;
