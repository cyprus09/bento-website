"use client";

import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  time: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const [isDark, setIsDark] = useState(false);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const root = document.documentElement;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(root.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastPoint: { x: number; y: number } | null = null;
    const minSpacing = 8;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const { clientX: x, clientY: y } = e;

      if (!lastPoint) {
        lastPoint = { x, y };
        trailRef.current.push({ x, y, time: now });
        return;
      }

      const dx = x - lastPoint.x;
      const dy = y - lastPoint.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < minSpacing) return;

      const steps = Math.floor(dist / minSpacing);
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        trailRef.current.push({
          x: lastPoint.x + dx * t,
          y: lastPoint.y + dy * t,
          time: now,
        });
      }

      lastPoint = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const trailColor = "60, 131, 246";
    const trailLifetime = 550;

    const animate = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now();
      trailRef.current = trailRef.current.filter(p => now - p.time < trailLifetime);

      for (const point of trailRef.current) {
        const age = now - point.time;
        const lifeRatio = 1 - age / trailLifetime;
        if (lifeRatio <= 0) continue;

        const size = 14 * lifeRatio;
        ctx.fillStyle = `rgba(${trailColor}, ${0.5 * lifeRatio})`;
        ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  );
};

export default AnimatedBackground;
