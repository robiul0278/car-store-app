import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  animationDelay?: number;
}

export default function HeroImage({ 
  src, 
  alt, 
  className, 
  priority = false,
  animationDelay = 0 
}: HeroImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const el = imageRef.current;
    if (!el) return;

    // Fast right-to-left animation
    gsap.fromTo(
      el,
      {
        x: 500,        // Start off-screen right
        opacity: 0,
        scale: 0.95,
      },
      {
        x: 0,          // End in position
        opacity: 1,
        scale: 1,
        duration: 0.6, // 🔥 Faster animation
        delay: animationDelay,
          ease: "elastic.out(1, 1)"
      }
    );
  });

  return () => ctx.revert();
}, [animationDelay]);



  return (
    <div 
      ref={imageRef} 
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain "
      />
    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-60" />
<div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />

    </div>
  );
}