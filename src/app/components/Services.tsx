import { useState } from "react";
import { motion } from "motion/react";
import { Monitor, Layers, Figma, Briefcase, Rocket, RefreshCw } from "lucide-react";

const services = [
  { icon: Monitor, title: "Website Design", desc: "Bespoke websites that reflect your brand identity and captivate your audience.", price: "Starting ₹15,000" },
  { icon: Layers, title: "Landing Pages", desc: "High-converting single pages designed to capture leads and drive action.", price: "Starting ₹8,000" },
  { icon: Figma, title: "UI/UX Design", desc: "Intuitive, research-backed designs that delight users and reduce friction.", price: "Starting ₹12,000" },
  { icon: Briefcase, title: "Business Websites", desc: "Professional multi-page sites for local businesses and growing brands.", price: "Starting ₹20,000" },
  { icon: Rocket, title: "Startup Websites", desc: "Fast, modern, investor-ready websites that communicate your vision clearly.", price: "Starting ₹18,000" },
  { icon: RefreshCw, title: "Website Redesigns", desc: "Transform your outdated site into a high-performance digital asset.", price: "Starting ₹14,000" },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        background: "#F5F0E8",
        padding: "100px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>What We Offer</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#2B1D16", lineHeight: 1.2 }}>
            Our{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Services</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHovered ? "#2B1D16" : "#fff",
                  border: "1px solid rgba(220,200,176,0.5)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: isHovered ? "0 16px 40px rgba(43,29,22,0.2)" : "0 4px 16px rgba(43,29,22,0.05)",
                  transform: isHovered ? "translateY(-4px)" : "none",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: isHovered ? "rgba(199,154,99,0.2)" : "rgba(199,154,99,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    transition: "background 0.3s",
                  }}
                >
                  <Icon size={22} color="#C79A63" />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: isHovered ? "#F5F0E8" : "#2B1D16", marginBottom: 10, transition: "color 0.3s" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: isHovered ? "rgba(245,240,232,0.7)" : "#8D857D", lineHeight: 1.7, marginBottom: 20, transition: "color 0.3s" }}>
                  {s.desc}
                </p>
                <div style={{ fontSize: 13, color: "#C79A63", fontWeight: 600 }}>{s.price}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
