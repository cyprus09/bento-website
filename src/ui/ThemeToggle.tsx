"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Reads localStorage/matchMedia, which can't run during render — must sync theme state on mount.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="glass-surface rounded-xl w-9 h-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="glass-surface p-2 rounded-xl hover:bg-white/90 dark:hover:bg-gray-800/70 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-offwhite" /> : <Moon className="w-5 h-5 text-nearblack" />}
    </button>
  );
};

export default ThemeToggle;
