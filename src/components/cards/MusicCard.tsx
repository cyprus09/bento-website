import { useState, useEffect } from "react";
import BentoCard from "@/components/bento/BentoCard";
import { Music } from "lucide-react";
import Image from "next/image";
import { playlist } from "@/data/musicData";

const MusicCard = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentTrackIndex(prev => (prev + 1) % playlist.length);

        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentTrack = playlist[currentTrackIndex];

  return (
    <BentoCard
      gradient={`${currentTrack.color}`}
      className="text-white transition-all ease-in duration-500"
      isClickable={true}
    >
      <div
        className="hidden
        from-blue-400 to-purple-500
        from-amber-300 to-orange-500
        from-orange-400 to-red-500"
      />
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Music className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm">Songs on Repeat</h3>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white/20 rounded-lg overflow-hidden group">
              <Image
                src={currentTrack.artwork}
                alt={`${currentTrack.album} artwork`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="flex gap-1 items-end">
                  <div
                    className="w-1 bg-white rounded-full animate-pulse"
                    style={{ height: "8px", animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white rounded-full animate-pulse"
                    style={{ height: "12px", animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="w-1 bg-white rounded-full animate-pulse"
                    style={{ height: "6px", animationDelay: "400ms" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4
                className={`font-medium text-xs truncate transition-opacity duration-2000 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                title={currentTrack.title}
              >
                {currentTrack.title}
              </h4>
              <p
                className={`text-white/80 text-xs truncate transition-opacity duration-2000 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                title={currentTrack.artist}
              >
                {currentTrack.artist}
              </p>
              <p
                className={`text-white/60 text-xs truncate transition-opacity duration-2000 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                title={currentTrack.album}
              >
                {currentTrack.album}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around text-white/80 text-xs mt-3">
          <div className="flex gap-1">
            {playlist.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-2000 ${
                  index === currentTrackIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
};

export default MusicCard;
