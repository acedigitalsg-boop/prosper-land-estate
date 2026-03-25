import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { title: "Sourcing", desc: "Exclusive, under-market-value properties via our local network and deep relationships." },
  { title: "Due Diligence", desc: "On-the-ground physical and environmental assessment of every property." },
  { title: "Legal Verification", desc: "Full ownership document and title verification with independent legal review." },
  { title: "Transaction Support", desc: "End-to-end acquisition guidance from negotiation through closing." },
  { title: "After-Sale Guidance", desc: "Ongoing support and advisory services post-acquisition." },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-label mb-3">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            A Streamlined Path to Ownership
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className={`hidden md:block transition-all duration-700 delay-200 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-border" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((s, i) => (
                <div key={s.title} className="relative pt-14">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-md">
                    <span className="text-charcoal font-heading font-bold text-sm">0{i + 1}</span>
                  </div>
                  <h4 className="font-heading text-base mb-2 text-foreground text-center">{s.title}</h4>
                  <p className="text-muted-foreground font-body text-xs leading-relaxed text-center">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical stepper */}
        <div className={`md:hidden space-y-0 transition-all duration-700 delay-200 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-charcoal font-heading font-bold text-xs">0{i + 1}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-1" />}
              </div>
              <div className="pb-8">
                <h4 className="font-heading text-base mb-1 text-foreground">{s.title}</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
