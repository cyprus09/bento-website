import BentoGrid from "@/components/bento/BentoGrid";
import ThemeToggle from "@/ui/ThemeToggle";
import AnimatedBackground from "@/ui/AnimatedBackground";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-offwhite dark:bg-nearblack transition-colors duration-300 flex flex-col items-center justify-center lg:overflow-hidden">
      <AnimatedBackground />
      <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:px-6 lg:py-0 max-w-6xl lg:scale-[1.05]">
        <BentoGrid />
      </div>
    </main>
  );
}
