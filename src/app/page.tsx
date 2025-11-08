import BentoGrid from '@/components/bento/BentoGrid';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-orange-950 dark:via-red-950 dark:to-amber-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 lg:px-6 lg:py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 lg:mb-8">
          <ThemeToggle />
        </div>

        <BentoGrid />

        <footer className="mt-12 lg:mt-16 text-center text-xs lg:text-sm text-orange-600 dark:text-orange-400">
          <p>&copy; 2025 Mayank Pallai. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  );
}