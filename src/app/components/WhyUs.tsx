import { motion } from "motion/react";
import { Palette, Zap, Smartphone, Search, TrendingUp, HeartHandshake } from "lucide-react";

const cards = [
  { icon: Palette, title: "Custom Design", desc: "Every pixel crafted uniquely for your brand — no templates, no shortcuts." },
  { icon: Zap, title: "Fast Development", desc: "From concept to launch in weeks, not months. Efficient, clean code." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless experience across all devices — phones, tablets, desktops." },
  { icon: Search, title: "SEO Ready", desc: "Built with search engines in mind from day one. Rank higher, attract more." },
  { icon: TrendingUp, title: "Conversion Focused", desc: "Every element designed to guide visitors toward becoming customers." },
  { icon: HeartHandshake, title: "Ongoing Support", desc: "We're your long-term partners, not just a one-time agency." },
];

export function WhyUs() {
  return (
    <section
      style={{
        background: "#FAF8F5",
        padding: "100px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Why Choose Us</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#2B1D16", lineHeight: 1.2, marginBottom: 16 }}>
            Built for Businesses That{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Mean Business</span>
          </h2>
          <p style={{ fontSize: 16, color: "#8D857D", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            We combine design craft with strategic thinking to build websites that truly work for you.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(220,200,176,0.5)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  boxShadow: "0 4px 20px rgba(43,29,22,0.05)",
                  cursor: "default",
                  transition: "box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(199,154,99,0.1)",
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={22} color="#C79A63" />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: "#2B1D16", marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: "#8D857D", lineHeight: 1.7 }}>{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
