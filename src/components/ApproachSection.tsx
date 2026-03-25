import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import approachImg from "@/assets/approach-land.jpg";

export default function ApproachSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="relative rounded-lg overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
            <img
              src={approachImg}
              alt="Lush Indonesian tropical land with palm trees at sunset"
              className="w-full h-full object-cover"
              loading="lazy"
              width={960}
              height={1080}
            />
          </div>

          <div>
            <p className="section-label mb-3">Our Approach</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Good Land. Clear Paperwork. Real Opportunity.
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
              <p>
                We acquire land at under-market value through deep local networks, zoning expertise, and off-market access. Every property undergoes rigorous physical and legal verification before we present it to investors.
              </p>
              <p>
                Our approach is grounded in honesty. We communicate risks transparently, provide realistic projections, and focus exclusively on properties with sound long-term fundamentals.
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-4 border-gold">
              <p className="font-heading text-lg italic text-gold-dark">
                "We communicate risks honestly — because your trust is the foundation of every deal."
              </p>
            </blockquote>

            <a
              href="#process"
              onClick={(e) => { e.preventDefault(); document.querySelector("#process")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-block mt-8 text-gold hover:text-gold-dark font-semibold text-sm transition-colors"
            >
              Learn More About Our Process →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
