import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can foreigners own land in Indonesia?",
    a: "Foreigners cannot directly hold freehold title (Hak Milik) but can secure long-term usage rights (Hak Pakai) or structure ownership through a legally compliant Indonesian entity (PT PMA). We guide every investor through the most suitable and secure legal pathway.",
  },
  {
    q: "What kind of returns can I expect?",
    a: "Returns vary by location, timing, and market conditions. In Bali, well-located land has historically appreciated 10–20% annually. Rote Island, as an emerging market, offers higher upside potential but with longer time horizons. We provide realistic projections — never speculative hype.",
  },
  {
    q: "How do you verify land ownership and legality?",
    a: "Every property undergoes rigorous due diligence including title certificate verification at the local land office (BPN), boundary surveys, zoning compliance checks, and environmental assessments. We ensure clear, dispute-free ownership before any transaction proceeds.",
  },
  {
    q: "What ongoing support do you provide after purchase?",
    a: "Post-acquisition, we offer ongoing guidance including property management referrals, tax advisory, regulatory updates, and resale assistance. Our relationship with investors extends well beyond the initial transaction.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-3xl" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-label mb-3">Common Questions</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:text-gold transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
