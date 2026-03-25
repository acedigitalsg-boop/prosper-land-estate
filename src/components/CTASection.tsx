import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTASectionProps {
  onOpenContact: () => void;
}

export default function CTASection({ onOpenContact }: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-6 text-center max-w-3xl" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Start Your Investment Journey Today
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether exploring new avenues or diversifying your portfolio, connect with our team to discuss your goals and discover opportunities in Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-3.5 rounded text-sm transition-colors w-full sm:w-auto"
            >
              Book a Consultation Call
            </button>
            <button
              onClick={onOpenContact}
              className="border-2 border-forest text-forest hover:bg-forest hover:text-cream font-semibold px-8 py-3.5 rounded text-sm transition-colors w-full sm:w-auto"
            >
              Request Land Availability
            </button>
          </div>
          <a
            href="#locations"
            onClick={(e) => { e.preventDefault(); document.querySelector("#locations")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-block mt-6 text-gold hover:text-gold-dark font-medium text-sm transition-colors"
          >
            Learn About Bali vs. Rote →
          </a>
        </div>
      </div>
    </section>
  );
}
