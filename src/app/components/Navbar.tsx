import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Work", "Services", "About", "Contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(245,240,232,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(220,200,176,0.4)" : "none",
        transition: "all 0.3s ease",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#2B1D16", letterSpacing: "-0.02em" }}>
            Akshit & Aditi
          </span>
          <span style={{ display: "block", fontSize: 10, color: "#8D857D", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: -4 }}>
            Studio
          </span>
        </a>

        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "#2B1D16", textDecoration: "none", fontSize: 14, letterSpacing: "0.02em", opacity: 0.8, fontWeight: 500 }}>
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "#2B1D16",
              color: "#F5F0E8",
              padding: "10px 24px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#2B1D16", display: "none" }}
          className="menu-btn"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "#FAF8F5", padding: "16px 32px 24px", borderTop: "1px solid rgba(220,200,176,0.4)" }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{ display: "block", padding: "12px 0", color: "#2B1D16", textDecoration: "none", fontSize: 16, borderBottom: "1px solid rgba(220,200,176,0.3)" }}>
              {l}
            </a>
          ))}
          <a href="#contact" style={{ display: "inline-block", marginTop: 16, background: "#2B1D16", color: "#F5F0E8", padding: "12px 28px", borderRadius: 100, fontSize: 14, textDecoration: "none" }}>
            Book a Call
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
