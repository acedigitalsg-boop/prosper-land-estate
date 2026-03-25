import { useState } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-lg shadow-2xl w-full max-w-lg p-8 animate-fade-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <h3 className="font-heading text-2xl mb-2 text-foreground">Thank You</h3>
            <p className="text-muted-foreground font-body">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-2xl mb-1 text-foreground">Book a Consultation</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">Tell us about your investment goals.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="border border-border rounded px-4 py-3 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="border border-border rounded px-4 py-3 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <select
                required
                className="border border-border rounded px-4 py-3 text-sm font-body bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                defaultValue=""
              >
                <option value="" disabled>Investment Budget</option>
                <option>$50k – $200k</option>
                <option>$200k – $500k</option>
                <option>$500k+</option>
              </select>
              <textarea
                placeholder="Tell us about your goals…"
                rows={3}
                className="border border-border rounded px-4 py-3 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold py-3 rounded transition-colors text-sm"
              >
                Submit Inquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
