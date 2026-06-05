import { motion } from "motion/react";

const steps = [
  { num: "01", title: "Discover", desc: "Deep-dive into your brand, goals, and audience to set the right foundation." },
  { num: "02", title: "Strategy", desc: "Define site structure, user journey, and conversion goals that align with your business." },
  { num: "03", title: "Design", desc: "Craft a visually stunning, on-brand design that communicates your value instantly." },
  { num: "04", title: "Launch", desc: "Develop, test, and deploy your website with precision — ready to convert from day one." },
];

export function Process() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #F5F0E8 0%, #EDE4D8 100%)",
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
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Our Process</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#2B1D16", lineHeight: 1.2 }}>
            From Idea to{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Live Website</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ position: "relative", padding: "0 24px" }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 28,
                    right: -1,
                    width: "50%",
                    height: 2,
                    background: "linear-gradient(90deg, rgba(199,154,99,0.6), rgba(199,154,99,0.1))",
                    zIndex: 0,
                  }}
                />
              )}

              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "#2B1D16" : "#C79A63",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#F5F0E8" }}>{step.num}</span>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#2B1D16", marginBottom: 12 }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: "#8D857D", lineHeight: 1.75 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){ .process-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  );
}
