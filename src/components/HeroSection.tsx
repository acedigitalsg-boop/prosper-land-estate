import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bali.jpg";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Aerial view of lush Balinese rice terraces at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-charcoal/55" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-semibold leading-tight animate-fade-up">
          Secure Your Legacy: Transparent Land Investment in Indonesia
        </h1>
        <p className="mt-6 text-cream/80 font-body text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-1">
          Prosper Land offers mid to high-net-worth investors a clear path to acquiring valuable land with verified ownership and significant long-term potential.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
          <button
            onClick={onOpenContact}
            className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-3.5 rounded text-sm transition-colors"
          >
            Explore Opportunities
          </button>
          <button
            onClick={onOpenContact}
            className="border border-cream/60 text-cream hover:bg-cream/10 font-semibold px-8 py-3.5 rounded text-sm transition-colors"
          >
            Talk to Our Team
          </button>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#foundation")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
