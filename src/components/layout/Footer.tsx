const currentYear = new Date().getFullYear();

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Work: [
    { label: "Photography", href: "#photography" },
    { label: "Video", href: "#film" },
    { label: "Campaigns", href: "#services" },
    { label: "Branding", href: "#services" },
  ],
  Studio: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#contact" },
  ],
};

const social = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Vimeo", href: "#" },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-[#030405] border-t border-white/[0.05]"
    >
      {/* Multi-column top section */}
      <div className="inner py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-heading text-3xl tracking-[0.25em] text-white mb-4">
              GAMMA
            </p>
            <p className="text-white/30 text-sm leading-relaxed max-w-[200px]">
              Premium photography and creative studio for brands that demand
              excellence.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <p className="text-[10px] uppercase tracking-[0.38em] text-white/25 mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white/75 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Social */}
          <nav aria-label="Social media links">
            <p className="text-[10px] uppercase tracking-[0.38em] text-white/25 mb-5">
              Social
            </p>
            <ul className="space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-white/40 text-sm hover:text-white/75 transition-colors duration-300"
                    rel="noopener noreferrer"
                    aria-label={`Gamma Studio on ${s.label}`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Centered bottom legal bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 text-white/20 text-[10px] uppercase tracking-[0.24em]">
          <span>© {currentYear} Gamma Studio. All Rights Reserved.</span>
          <span className="hidden sm:block text-white/10" aria-hidden="true">·</span>
          <a href="#" className="hover:text-white/45 transition-colors duration-300">
            Privacy Policy
          </a>
          <span className="hidden sm:block text-white/10" aria-hidden="true">·</span>
          <a href="#" className="hover:text-white/45 transition-colors duration-300">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
