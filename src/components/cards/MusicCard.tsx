import BentoCard from '@/components/bento/BentoCard';
import { Music, Play, Headphones } from 'lucide-react';

const MusicCard = () => {
  return (
    <BentoCard 
      gradient="from-amber-400 to-red-500 dark:from-amber-500 dark:to-red-600"
      className="text-white"
      isClickable={true}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Music className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-sm">Now Playing</h3>
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white/60" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">Focus Flow</h4>
              <p className="text-white/80 text-xs truncate">Coding Playlist</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-white/80 text-xs">
          <div className="flex items-center gap-1">
            <Play className="w-3 h-3" />
            <span>via Apple Music</span>
          </div>
          <span>24 tracks</span>
        </div>
      </div>
    </BentoCard>
  );
};

export default MusicCard;

// rgb(229,223,215)