import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-forest">
      <div className="container mx-auto px-6 text-center max-w-4xl" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-gold font-heading text-7xl md:text-8xl leading-none select-none">"</span>
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-cream leading-snug -mt-8">
            Prosper Land provided unparalleled transparency and expertise, helping us navigate the Indonesian market with absolute confidence.
          </blockquote>
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="mt-4 text-cream/60 font-body text-sm tracking-wide">— Satisfied Investor</p>
        </div>
      </div>
    </section>
  );
}
