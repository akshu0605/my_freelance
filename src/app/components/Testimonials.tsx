import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Founder, Bloom Interiors",
    quote: "Akshit & Aditi transformed our online presence completely. Our new website looks stunning and we've seen a 3x increase in inquiries within the first month.",
    initials: "PS",
    accent: "#C79A63",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "Co-Founder, NovaSpark",
    quote: "They understood our startup's vision immediately. The landing page they built converts incredibly — our demo requests went up by 40% in weeks.",
    initials: "RM",
    accent: "#2B1D16",
  },
  {
    id: 3,
    name: "Asha Kapoor",
    role: "Owner, Artisan Café",
    quote: "Our café now has a digital identity that matches our in-person experience. Customers actually mention seeing our website before visiting us.",
    initials: "AK",
    accent: "#8D857D",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section
      style={{
        background: "#FAF8F5",
        padding: "100px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Client Love</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#2B1D16", lineHeight: 1.2, marginBottom: 56 }}>
            What Our Clients{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Say</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative", minHeight: 280 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div
                style={{
                  background: "#fff",
                  border: "1px solid rgba(220,200,176,0.5)",
                  borderRadius: 28,
                  padding: "48px 52px",
                  boxShadow: "0 8px 32px rgba(43,29,22,0.06)",
                  position: "relative",
                }}
              >
                {/* Quote mark */}
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 80, color: "rgba(199,154,99,0.15)", position: "absolute", top: 12, left: 32, lineHeight: 1 }}>"</div>

                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#C79A63" color="#C79A63" />
                  ))}
                </div>

                <p style={{ fontSize: 18, color: "#2B1D16", lineHeight: 1.8, fontStyle: "italic", marginBottom: 36, fontFamily: "'Playfair Display', serif", position: "relative" }}>
                  "{t.quote}"
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: t.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#F5F0E8",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 600, color: "#2B1D16", fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "#8D857D" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 32 }}>
          <button
            onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
            style={{ width: 44, height: 44, borderRadius: "50%", border: "1.5px solid rgba(220,200,176,0.6)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2B1D16" }}
          >
            <ChevronLeft size={18} />
          </button>
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIdx(i)}
              style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 8, background: i === idx ? "#C79A63" : "rgba(199,154,99,0.3)", cursor: "pointer", transition: "all 0.3s" }}
            />
          ))}
          <button
            onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
            style={{ width: 44, height: 44, borderRadius: "50%", border: "1.5px solid rgba(220,200,176,0.6)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2B1D16" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
