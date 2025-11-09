import BentoGrid from '@/components/bento/BentoGrid';
import ThemeToggle from '@/ui/ThemeToggle';
import AnimatedBackground from '@/ui/AnimatedBackground';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-orange-100 via-amber-65 to-stone-50 dark:from-orange-700 dark:via-red-600 dark:to-amber-750 transition-colors duration-300 flex flex-col overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-4 lg:px-6 lg:py-6 max-w-6xl flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4 lg:mb-6">
          <ThemeToggle />
        </div>

        <div className="flex-1">
          <BentoGrid />
        </div>
      </div>
    </main>
  );
}