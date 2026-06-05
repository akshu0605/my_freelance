import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const stats = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Businesses Served" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "%", label: "Custom Built" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1600;
          const step = (timestamp: number, startTime: number) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame((ts) => step(ts, startTime));
          };
          requestAnimationFrame((ts) => step(ts, ts));
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(44px, 5vw, 64px)", fontWeight: 700, color: "#C79A63" }}>
      {count}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2B1D16 0%, #1A1A1A 100%)",
        padding: "100px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>By the Numbers</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.2 }}>
            Studio{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Statistics</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <Counter target={s.value} suffix={s.suffix} />
              <div style={{ fontSize: 14, color: "rgba(245,240,232,0.6)", marginTop: 8, letterSpacing: "0.04em" }}>{s.label}</div>
              <div style={{ width: 40, height: 2, background: "rgba(199,154,99,0.4)", margin: "16px auto 0" }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </section>
  );
}
