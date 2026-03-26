import logo from "@/assets/logo.png";

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Prosper Land Indonesia" className="h-10 w-auto" />
              <span className="text-cream font-heading text-lg">Prosper Land</span>
            </div>
            <p className="text-cream/50 font-body text-sm leading-relaxed">
              Transparent Land Investment in Indonesia
            </p>
          </div>

          <div>
            <h4 className="text-cream font-body text-sm font-semibold mb-4 tracking-wide uppercase">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Opportunities", href: "#locations" },
                { label: "Philosophy", href: "#philosophy" },
                { label: "Process", href: "#process" },
                { label: "Who We Serve", href: "#who-we-serve" },
              ].map((l) => (
                <button
                  key={l.label}
                  onClick={() => handleNav(l.href)}
                  className="text-cream/50 hover:text-gold font-body text-sm text-left transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-cream font-body text-sm font-semibold mb-4 tracking-wide uppercase">Contact</h4>
            <div className="flex flex-col gap-2 text-cream/50 font-body text-sm">
              <a href="mailto:info@prosperlandindonesia.com" className="hover:text-gold transition-colors">
                info@prosperlandindonesia.com
              </a>
              <span>WhatsApp: +62 xxx xxxx xxxx</span>
            </div>
            <div className="flex gap-4 mt-4 text-cream/40 font-body text-xs">
              <span className="hover:text-cream/60 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-cream/60 cursor-pointer transition-colors">Terms</span>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/30 font-body text-xs">
          © 2026 Prosper Land. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
