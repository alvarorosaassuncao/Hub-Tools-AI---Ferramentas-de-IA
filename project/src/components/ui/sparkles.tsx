"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = React.memo(
  ({
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  }: {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [particles, setParticles] = useState<any[]>([]);
    const animationFrameId = useRef<number>();

    useEffect(() => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // Particle animation
    useEffect(() => {
      if (!context || !canvasRef.current) return;

      const particleCount = particleDensity || 100;
      const minParticleSize = minSize || 0.5;
      const maxParticleSize = maxSize || 1.5;
      const particleSpeed = speed || 1;
      const color = particleColor || "#FFF";

      const createParticles = () => {
        const particles = [];
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvasRef.current!.width,
            y: Math.random() * canvasRef.current!.height,
            size: Math.random() * (maxParticleSize - minParticleSize) + minParticleSize,
            speedX: (Math.random() - 0.5) * particleSpeed,
            speedY: (Math.random() - 0.5) * particleSpeed,
          });
        }
        return particles;
      };

      setParticles(createParticles());

      const animate = () => {
        if (!context || !canvasRef.current) return;

        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        if (background) {
          context.fillStyle = background;
          context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }

        context.fillStyle = color;
        particles.forEach((particle, i) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x < 0) particle.x = canvasRef.current!.width;
          if (particle.x > canvasRef.current!.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvasRef.current!.height;
          if (particle.y > canvasRef.current!.height) particle.y = 0;

          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          context.fill();
        });

        animationFrameId.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }, [context, minSize, maxSize, speed, particleColor, particleDensity, background]);

    return (
      <canvas
        ref={canvasRef}
        id={id}
        className={cn("fixed inset-0 pointer-events-none", className)}
      />
    );
  }
);

SparklesCore.displayName = "SparklesCore";