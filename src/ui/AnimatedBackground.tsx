'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  floatX: number;
  floatY: number;
  size: number;
  opacity: number;
  color: string;
  floatSpeedX: number;
  floatSpeedY: number;
  floatRange: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 380;
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        newParticles.push({
          x: x,
          y: y,
          originalX: x,
          originalY: y,
          floatX: 0,
          floatY: 0,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: Math.random() > 0.5 ? 'rgba(249, 115, 22, ' : 'rgba(234, 88, 12, ',
          floatSpeedX: (Math.random() - 0.5) * 0.5,
          floatSpeedY: (Math.random() - 0.5) * 0.5,
          floatRange: Math.random() * 30 + 20,
        });
      }
      particlesRef.current = newParticles;
    };

    createParticles();
    
    const handleResize = () => {
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const pushX = (particle.x - mousePosition.x) * force * 0.5;
          const pushY = (particle.y - mousePosition.y) * force * 0.5;
          
          particle.x = particle.originalX + particle.floatX + pushX;
          particle.y = particle.originalY + particle.floatY + pushY;
        } else {
          particle.floatX += particle.floatSpeedX;
          particle.floatY += particle.floatSpeedY;

          if (Math.abs(particle.floatX) > particle.floatRange) {
            particle.floatSpeedX *= -0.8; // Damping effect
          }
          if (Math.abs(particle.floatY) > particle.floatRange) {
            particle.floatSpeedY *= -0.8;
          }

          particle.floatSpeedX += (Math.random() - 0.5) * 0.01;
          particle.floatSpeedY += (Math.random() - 0.5) * 0.01;

          particle.floatSpeedX = Math.max(-0.5, Math.min(0.5, particle.floatSpeedX));
          particle.floatSpeedY = Math.max(-0.5, Math.min(0.5, particle.floatSpeedY));

          particle.x = particle.originalX + particle.floatX;
          particle.y = particle.originalY + particle.floatY;
        }

        particle.x = Math.max(particle.size, Math.min(canvas.width - particle.size, particle.x));
        particle.y = Math.max(particle.size, Math.min(canvas.height - particle.size, particle.y));


        ctx.beginPath();
        ctx.fillStyle = particle.color + particle.opacity + ')';
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index >= otherIndex) return; // Avoid drawing lines twice
          
          const particleDistance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (particleDistance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.1 * (1 - particleDistance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      if (mousePosition.x && mousePosition.y) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(249, 115, 22, 0.2)';
        ctx.lineWidth = 1;
        ctx.arc(mousePosition.x, mousePosition.y, 1, 0, Math.PI * 2);
        ctx.stroke();
        
        const gradient = ctx.createRadialGradient(
          mousePosition.x, mousePosition.y, 0,
          mousePosition.x, mousePosition.y, 60
        );
        gradient.addColorStop(0, 'rgba(249, 115, 22, 0.1)');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.arc(mousePosition.x, mousePosition.y, 60, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;