import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Mountain, Building2, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: TrendingUp, title: "Long-Term Value Creation", desc: "We focus on intrinsic value over decades, not quarters. True wealth is built patiently." },
  { icon: Mountain, title: "Land Scarcity Focus", desc: "Land is finite and increasingly rare. We target assets with natural supply constraints." },
  { icon: Building2, title: "Infrastructure-Led Growth", desc: "We identify areas primed for government and private investment that catalyze appreciation." },
  { icon: ShieldCheck, title: "No Speculative Hype", desc: "Sound fundamentals and realistic projections — never inflated promises or speculative bubbles." },
];

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-label mb-3">Investment Philosophy</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Building Lasting Value
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {pillars.map((p, i) => (
            <div key={p.title} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                  <span className="text-gold font-heading font-bold text-sm">0{i + 1}</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-lg mb-2 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
