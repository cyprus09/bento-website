import { useState, useEffect } from "react";
import BentoCard from "@/components/bento/BentoCard";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { books } from "../../data/booksData";
import { accent } from "@/data/accentColors";

const ReadingCard = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentBookIndex(prev => (prev + 1) % books.length);

        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentBook = books[currentBookIndex];

  return (
    <BentoCard
      hoverGlow={accent.glow}
      className="text-gray-900 dark:text-gray-100"
      contentClassName="p-4 lg:p-6 lg:py-3 lg:mt-3"
      isClickable={true}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-1 rounded-lg ${accent.iconBg}`}>
            <BookOpen className={`w-5 h-5 ${accent.iconText}`} />
          </div>
          <h3 className="font-serif font-semibold text-lg">Currently Reading</h3>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-20 rounded-lg overflow-hidden group transition-opacity duration-2000">
              <Image
                src={currentBook.cover}
                alt={`${currentBook.title} artwork`}
                fill
                className="object-cover group-hover:scale-110"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3
                className={`font-medium text-sm transition-opacity duration-2000 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
                title={currentBook.title}
              >
                {currentBook.title}
              </h3>
              <p
                className={`text-gray-500 dark:text-gray-400 text-xs transition-opacity duration-2000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                title={currentBook.author}
              >
                {currentBook.author}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around text-xs mt-1 mb-3">
          <div className="flex gap-1">
            {books.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-2000 ${
                  index === currentBookIndex ? accent.bullet : "bg-gray-300 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
};

export default ReadingCard;
