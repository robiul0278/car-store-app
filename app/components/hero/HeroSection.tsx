'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Car } from 'lucide-react';
import Link from 'next/link';
import HeroImage from './HeroImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

      gsap.fromTo(textContainerRef.current, {
        x: 100, opacity: 0
      }, {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out"
      });

      const animateTextEls = textContainerRef.current?.querySelectorAll('.animate-text');
      if (animateTextEls) {
        gsap.fromTo(animateTextEls, {
          x: 50, opacity: 0
        }, {
          x: 0, opacity: 1,
          duration: 1,
         ease: "elastic.out(1, 1)"
        });
      }

      gsap.fromTo(ctaRef.current, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1.0,
        ease: "elastic.out(1, 0.5)"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden py-10"
    >
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-pink-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-yellow-300 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 lg:px-0 py-10 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div ref={textContainerRef} className="space-y-6 text-center lg:text-left">
            <div className="animate-text inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium shadow">
              <Car className="h-4 w-4" />
              Premium Toy Cars
            </div>

            <div className="space-y-2">
              <h1 className="animate-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                  Drive Imagination with Toy Cars
                </span>
              </h1>

              <p className="animate-text md:text-xl text-muted-foreground max-w-2xl">
                Explore our exciting collection of toy vehicles that inspire fun, learning, and creativity for every child.
              </p>
            </div>

  <div ref={ctaRef} className="pt-4">
  <Link
    href="#toys"
    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white font-medium transition-all hover:scale-105 shadow-md"
  >
    Browse Cars
    <ArrowRight className="h-4 w-4 ml-1" />
  </Link>
</div>

          </div>

          <div className="relative h-[230px] md:h-[380px] lg:h-[385px] w-full max-w-lg">
            <HeroImage
              src="https://cdn.pixabay.com/animation/2023/01/24/23/10/23-10-50-478_512.gif"
              alt="Hot Wheels GIF"
              priority
              animationDelay={0.6}
              className="h-full w-full rounded-xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
}