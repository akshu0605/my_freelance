import { motion } from "motion/react";

const metrics = [
  { value: "+40%", label: "Engagement" },
  { value: "+25%", label: "Conversion" },
  { value: "+60%", label: "Mobile Traffic" },
];

const CAFE_IMG = "https://images.unsplash.com/photo-1774989423979-6a7bf5add3f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=85";

export function CaseStudy() {
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
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Case Study</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#2B1D16", lineHeight: 1.2 }}>
            Featured{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Project</span>
          </h2>
        </motion.div>

        <div
          style={{
            background: "linear-gradient(135deg, #2B1D16 0%, #1A1A1A 100%)",
            borderRadius: 28,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: 500,
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ padding: "60px 52px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <span style={{ fontSize: 11, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid rgba(199,154,99,0.4)", borderRadius: 100, padding: "4px 12px" }}>
                F&B Industry
              </span>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#F5F0E8", lineHeight: 1.2, margin: "24px 0 20px" }}>
                Artisan Café<br />
                <span style={{ fontStyle: "italic", color: "#C79A63" }}>Digital Presence</span>
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { label: "Challenge", text: "An upscale café struggling with poor online presence and low footfall from digital channels." },
                  { label: "Solution", text: "A premium website with evocative visuals, online reservations, and an immersive menu experience." },
                  { label: "Result", text: "Within 2 months, the café saw a 40% surge in engagement and became the top result for local searches." },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontSize: 10, color: "#C79A63", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</p>
                    <p style={{ fontSize: 14, color: "rgba(245,240,232,0.75)", lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 28, marginTop: 40 }}>
              {metrics.map((m) => (
                <div key={m.label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: "#C79A63" }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: "rgba(245,240,232,0.55)", marginTop: 2 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Real café image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ position: "relative", overflow: "hidden" }}
          >
            {/* Photo fills the right panel */}
            <img
              src={CAFE_IMG}
              alt="Elegant restaurant interior with warm lighting"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                minHeight: 400,
              }}
            />

            {/* Gradient overlay blending into dark left side */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(26,26,26,0.55) 0%, transparent 40%)",
              }}
            />

            {/* Floating metric card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 28,
                right: 24,
                background: "rgba(245,240,232,0.95)",
                backdropFilter: "blur(8px)",
                borderRadius: 16,
                padding: "14px 20px",
                boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
              }}
            >
              <div style={{ fontSize: 10, color: "#8D857D", marginBottom: 2, fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}>Conversion Rate</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#C79A63" }}>+25%</div>
            </motion.div>

            {/* Top-right tag */}
            <div
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: "rgba(43,29,22,0.75)",
                backdropFilter: "blur(6px)",
                borderRadius: 20,
                padding: "6px 14px",
                fontSize: 11,
                color: "#C79A63",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Live Project
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.cs-wrap{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
