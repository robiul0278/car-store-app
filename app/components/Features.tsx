// components/Features.tsx
import FeatureCard from "./FeatureCard";
import {
  BadgeCheck,
  PackageCheck,
  Headphones,
  ShieldCheck,
} from "lucide-react";

export default function Features() {
  const features = [
    { icon: BadgeCheck, title: "AUTHENTIC PRODUCT" },
    { icon: PackageCheck, title: "FAST DELIVERY" },
    { icon: Headphones, title: "10AM–12PM SUPPORT" },
    { icon: ShieldCheck, title: "SECURE CHECKOUT" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:py-10 lg:py-10">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-snap-x scroll-snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
        {features.map((feature, index) => (
          <div className="min-w-[200px] snap-start sm:min-w-0" key={index}>
            <FeatureCard icon={feature.icon} title={feature.title} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}