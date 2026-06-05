import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const badges = ["Startup Friendly", "Mobile Optimized", "Conversion Focused"];

// Real images shown inside the device mockup screens
const LAPTOP_IMG  = "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";
const TABLET_IMG  = "https://images.unsplash.com/photo-1648462908676-8305f0eff8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80";
const MOBILE_IMG  = "https://images.unsplash.com/photo-1631615625743-a4aaafea57c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80";

function MockupCard({
  style,
  img,
  label,
  accentColor = "#C79A63",
}: {
  style: React.CSSProperties;
  img: string;
  label: string;
  accentColor?: string;
}) {
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(43,29,22,0.22), 0 4px 16px rgba(43,29,22,0.1)",
        background: "#fff",
      }}
    >
      {/* Browser / device chrome bar */}
      <div
        style={{
          background: accentColor === "#2B1D16" ? "#2B1D16" : "#F5F0E8",
          padding: "7px 10px",
          display: "flex",
          alignItems: "center",
          gap: 5,
          flexShrink: 0,
        }}
      >
        {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
          <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
        ))}
        <div
          style={{
            flex: 1,
            marginLeft: 8,
            background: accentColor === "#2B1D16" ? "rgba(255,255,255,0.1)" : "rgba(43,29,22,0.08)",
            borderRadius: 4,
            height: 14,
          }}
        />
      </div>

      {/* Screen — real photo */}
      <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
        <img
          src={img}
          alt={label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Subtle overlay so it looks like a website render */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(43,29,22,0.35) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: 10,
            right: 10,
          }}
        >
          <div style={{ background: accentColor, borderRadius: 10, height: 18, width: 56, opacity: 0.9 }} />
        </div>
      </div>

      {/* Site label badge */}
      <div
        style={{
          position: "absolute",
          top: 32,
          right: 8,
          background: "rgba(245,240,232,0.9)",
          backdropFilter: "blur(4px)",
          borderRadius: 6,
          padding: "2px 7px",
          fontSize: 8,
          color: "#2B1D16",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FAF8F5 0%, #F5F0E8 50%, #EDE4D8 100%)",
        display: "flex",
        alignItems: "center",
        padding: "100px 32px 80px",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(199,154,99,0.12)",
              border: "1px solid rgba(199,154,99,0.3)",
              borderRadius: 100,
              padding: "6px 14px",
              marginBottom: 28,
            }}
          >
            <Sparkles size={13} color="#C79A63" />
            <span style={{ fontSize: 12, color: "#C79A63", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Design & Development Studio
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(44px, 5vw, 68px)",
              fontWeight: 700,
              color: "#2B1D16",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            We Build Websites{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>People</span>{" "}
            Remember.
          </h1>

          <p style={{ fontSize: 17, color: "#8D857D", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
            We're Akshit & Aditi — a design and development team helping startups and businesses create websites that look beautiful, communicate clearly, and drive growth.
          </p>

          <div style={{ display: "flex", gap: 14, marginBottom: 48, flexWrap: "wrap" }}>
            <a
              href="#work"
              style={{
                background: "#2B1D16",
                color: "#F5F0E8",
                padding: "15px 32px",
                borderRadius: 100,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View Our Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "#2B1D16",
                padding: "15px 32px",
                borderRadius: 100,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                border: "1.5px solid rgba(43,29,22,0.25)",
              }}
            >
              Book a Discovery Call
            </a>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {badges.map((b) => (
              <div
                key={b}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(220,200,176,0.6)",
                  borderRadius: 8,
                  padding: "7px 14px",
                  fontSize: 12,
                  color: "#2B1D16",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  boxShadow: "0 2px 8px rgba(43,29,22,0.06)",
                }}
              >
                ✦ {b}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — device mockups with real images */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ position: "relative", height: 480, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, rgba(199,154,99,0.18) 0%, transparent 70%)",
              borderRadius: 24,
            }}
          />

          {/* Laptop mockup — top-left, tallest */}
          <MockupCard
            style={{ width: 270, height: 178, top: 50, left: 10, zIndex: 3, display: "flex", flexDirection: "column" }}
            img={LAPTOP_IMG}
            label="ama-cafe.co"
            accentColor="#C79A63"
          />

          {/* Tablet mockup — bottom-left */}
          <MockupCard
            style={{ width: 200, height: 140, bottom: 60, left: 60, zIndex: 2, display: "flex", flexDirection: "column" }}
            img={TABLET_IMG}
            label="warehouse.in"
            accentColor="#DCC8B0"
          />

          {/* Mobile mockup — right side, taller & narrower */}
          <MockupCard
            style={{ width: 108, height: 210, top: 80, right: 20, zIndex: 4, borderRadius: 20, display: "flex", flexDirection: "column" }}
            img={MOBILE_IMG}
            label="farzi.com"
            accentColor="#2B1D16"
          />

          {/* Floating metric card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: 24,
              right: 10,
              background: "#fff",
              border: "1px solid rgba(220,200,176,0.6)",
              borderRadius: 14,
              padding: "12px 18px",
              boxShadow: "0 8px 24px rgba(43,29,22,0.12)",
              zIndex: 5,
            }}
          >
            <div style={{ fontSize: 11, color: "#8D857D", marginBottom: 4, fontFamily: "'Inter', sans-serif" }}>Avg Conversion Lift</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#C79A63", fontFamily: "'Playfair Display', serif" }}>+40%</div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){ section > div { grid-template-columns:1fr!important; } }`}</style>
    </section>
  );
}
