"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  index?: number; // optional for stagger effect
}

export default function FeatureCard({ icon: Icon, title, index = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          delay: index * 0.1, // stagger effect
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center justify-center rounded-xl shadow w-full py-6 border transition"
    >
      <Icon className="w-10 h-10 mb-3" />
      <h3 className="text-center text-sm md:text-lg lg:text-lg font-semibold">{title}</h3>
    </div>
  );
}