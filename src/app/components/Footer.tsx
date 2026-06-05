import { Instagram, Linkedin, Globe } from "lucide-react";

const links = ["Home", "Work", "Services", "About", "Contact"];

export function Footer() {
  return (
    <footer
      style={{
        background: "#1A1A1A",
        padding: "60px 32px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#F5F0E8", marginBottom: 4 }}>Akshit & Aditi</div>
            <div style={{ fontSize: 11, color: "#8D857D", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Studio</div>
            <p style={{ fontSize: 14, color: "#8D857D", lineHeight: 1.75, maxWidth: 260 }}>
              A design and development studio helping businesses build websites that turn visitors into customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Quick Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "#8D857D", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8D857D")}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Connect</div>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Globe, label: "Behance" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  title={label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "rgba(245,240,232,0.06)",
                    border: "1px solid rgba(245,240,232,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8D857D",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(199,154,99,0.15)"; (e.currentTarget as HTMLElement).style.color = "#C79A63"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(245,240,232,0.06)"; (e.currentTarget as HTMLElement).style.color = "#8D857D"; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div style={{ marginTop: 24, fontSize: 14, color: "#8D857D" }}>
              <div style={{ marginBottom: 4 }}>aditiakshitwork@gmail.com</div>
              <div>+91 78768 16051</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, color: "#8D857D" }}>© 2024 Akshit & Aditi Studio. All rights reserved.</span>
          <span style={{ fontSize: 13, color: "#8D857D" }}>Crafted with ♥ in India</span>
        </div>
      </div>
    </footer>
  );
}
