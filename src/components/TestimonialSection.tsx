import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Prosper Land provided unparalleled transparency and expertise, helping us navigate the Indonesian market with absolute confidence.",
    name: "David Lee Wei Ming",
    title: "Private Investor, Singapore",
  },
  {
    quote: "From due diligence to final acquisition, the team made the entire process seamless. Our Bali investment has already exceeded expectations.",
    name: "Catherine Müller",
    title: "Real Estate Portfolio Manager, Zurich",
  },
  {
    quote: "What impressed me most was their deep local knowledge and commitment to legal clarity. I felt secure every step of the way.",
    name: "James Whitford",
    title: "Entrepreneur, Melbourne",
  },
  {
    quote: "Prosper Land turned what seemed like a complex foreign investment into a straightforward, rewarding experience. Highly recommended.",
    name: "Michelle Chan Yee Ling",
    title: "Family Office Director, Hong Kong",
  },
];

export default function TestimonialSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-forest">
      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-4xl text-cream">What Our Investors Say</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-cream/5 border border-cream/10 rounded-lg p-8 transition-all duration-700 delay-${idx * 100} ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            >
              <span className="text-gold font-heading text-5xl leading-none select-none">"</span>
              <blockquote className="font-body text-cream/80 text-base md:text-lg leading-relaxed -mt-4 mb-6">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading text-cream text-sm">{t.name}</p>
              <p className="text-cream/50 font-body text-xs tracking-wide">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
