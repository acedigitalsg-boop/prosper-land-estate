import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onOpenContact: () => void;
}

const navLinks = [
  { label: "Opportunities", href: "#locations" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Process", href: "#process" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          <a href="#" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Prosper Land Indonesia"
              className="h-10 lg:h-14 w-auto"
            />
            <span className="text-cream font-heading text-xl font-semibold tracking-wide">
              Prosper Land
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-cream/80 hover:text-gold text-sm font-body font-medium tracking-wide transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={onOpenContact}
              className="bg-gold hover:bg-gold-dark text-charcoal text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Book a Consultation
            </button>
          </div>

          <button
            className="lg:hidden text-cream"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-charcoal/60" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-charcoal shadow-2xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <span className="text-cream font-heading text-lg">Menu</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6 text-cream" />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-6">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-cream/80 hover:text-gold text-left py-3 text-base font-body transition-colors border-b border-cream/10"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onOpenContact(); }}
              className="mt-4 bg-gold hover:bg-gold-dark text-charcoal text-sm font-semibold px-5 py-3 rounded transition-colors"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
