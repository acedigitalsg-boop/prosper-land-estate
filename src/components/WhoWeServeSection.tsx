import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Building, Landmark } from "lucide-react";

const personas = [
  { icon: User, title: "Private Investors", desc: "Discerning individuals seeking secure, long-term asset growth outside traditional markets." },
  { icon: Building, title: "Developers", desc: "Partners looking for strategically located land to build impactful and profitable projects." },
  { icon: Landmark, title: "Long-Term Land Holders", desc: "Families and entities focused on generational wealth preservation through tangible assets." },
];

export default function WhoWeServeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="who-we-serve" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Who We Serve
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {personas.map((p) => (
            <div
              key={p.title}
              className="bg-cream-dark border-t-4 border-gold rounded-lg p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <p.icon className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-heading text-xl mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
