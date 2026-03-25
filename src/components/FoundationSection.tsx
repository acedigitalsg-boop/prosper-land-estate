import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { num: "01", title: "Clear Paperwork", desc: "Every document verified and transparent, ensuring you have complete confidence in your land ownership from day one." },
  { num: "02", title: "Legal Transparency", desc: "Full legal due diligence on every property — we leave no stone unturned in protecting your investment." },
  { num: "03", title: "Local Expertise", desc: "Deep relationships and decades of combined experience across Indonesia's most promising regions." },
  { num: "04", title: "Investor-First Mindset", desc: "Your goals drive every decision. We align our success with yours, ensuring mutual prosperity." },
  { num: "05", title: "Long-Term Thinking", desc: "We focus on enduring value, selecting land with fundamentals that appreciate over decades." },
];

export default function FoundationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="foundation" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-label mb-3">Our Foundation</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Why Partner with Prosper Land?
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {features.map((f) => (
            <div
              key={f.num}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-5">
                <span className="text-gold font-heading font-bold text-sm">{f.num}</span>
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
