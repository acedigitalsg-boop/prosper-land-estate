import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import baliImg from "@/assets/bali-card.jpg";
import roteImg from "@/assets/rote-card.jpg";

const locations = [
  {
    img: baliImg,
    label: "Mature Market",
    heading: "Discover Opportunities: Bali",
    body: "Strong demand, increasing scarcity, under-market-value access through zoning knowledge and off-market networks. Stability and consistent long-term growth.",
    tags: ["Mature Market", "High Demand", "Off-Market Access"],
    cta: "Explore Bali Opportunities →",
    alt: "Luxury tropical villa with infinity pool overlooking Bali rice terraces",
  },
  {
    img: roteImg,
    label: "Emerging Gem",
    heading: "Discover Opportunities: Rote Island",
    body: "Eastern Indonesia's hidden gem — early-stage like Bali 20 years ago. Beachfront land up to 10× cheaper than Bali. Infrastructure-led growth and rising tourism.",
    tags: ["Early-Stage", "Beachfront Access", "High Upside"],
    cta: "Explore Rote Island →",
    alt: "Pristine white sand beach with turquoise water on Rote Island",
  },
];

export default function LocationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="locations" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-label mb-3">Investment Locations</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Where Opportunity Meets Paradise
          </h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {locations.map((loc) => (
            <div
              key={loc.heading}
              className="relative group rounded-lg overflow-hidden aspect-[4/3] cursor-pointer hover:scale-[1.02] transition-transform duration-500"
            >
              <img
                src={loc.img}
                alt={loc.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <span className="text-gold font-body text-xs font-semibold tracking-widest uppercase mb-2">
                  {loc.label}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-cream mb-3">{loc.heading}</h3>
                <p className="text-cream/75 font-body text-sm leading-relaxed mb-4 max-w-md">{loc.body}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {loc.tags.map((t) => (
                    <span key={t} className="border border-cream/30 text-cream/80 text-xs px-3 py-1 rounded-full font-body">
                      {t}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
