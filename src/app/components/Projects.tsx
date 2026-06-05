import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, BookOpen } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Farzi Café",
    industry: "F&B / Restaurant",
    desc: "A theatrical fine-dining experience brought online — immersive visuals, online reservations, and a storytelling-first approach.",
    img: "https://images.unsplash.com/photo-1631615625743-a4aaafea57c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    visitUrl: "https://www.farzicafe.com/",
    tags: ["Restaurant", "Branding", "Reservation"],
  },
  {
    id: 2,
    name: "AMA Café",
    industry: "Specialty Coffee",
    desc: "Minimalist storytelling with editorial photography, a specialty bean menu, and subscription flows for coffee lovers.",
    img: "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    visitUrl: "https://amacafe.co/pages/our-story",
    tags: ["Coffee", "UI/UX", "E-Commerce"],
  },
  {
    id: 3,
    name: "Warehouse Café",
    industry: "Industrial Café",
    desc: "Industrial-chic aesthetic with warm tones, event booking, and a community blog that drives organic footfall.",
    img: "https://images.unsplash.com/photo-1648462908676-8305f0eff8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    visitUrl: "https://www.warehousecafe.in/",
    tags: ["Café", "Events", "SEO"],
  },
  {
    id: 4,
    name: "Bloom Interiors",
    industry: "Interior Design",
    desc: "Portfolio-forward website showcasing project galleries, a process walkthrough, and seamless client inquiry flows.",
    img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    visitUrl: null,
    tags: ["Portfolio", "Web Design", "CMS"],
  },
  {
    id: 5,
    name: "NovaSpark",
    industry: "Tech Startup",
    desc: "High-converting landing page for a SaaS startup with animated feature reveals, pricing tables, and a demo booking flow.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    visitUrl: null,
    tags: ["Landing Page", "SaaS", "Conversion"],
  },
];

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      style={{
        background: "linear-gradient(180deg, #EDE4D8 0%, #FAF8F5 100%)",
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
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Selected Work</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#2B1D16", lineHeight: 1.2 }}>
            Projects We're{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Proud Of</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(220,200,176,0.4)",
                boxShadow: hovered === p.id ? "0 20px 48px rgba(43,29,22,0.15)" : "0 4px 16px rgba(43,29,22,0.06)",
                transition: "box-shadow 0.3s, transform 0.3s",
                transform: hovered === p.id ? "translateY(-6px)" : "translateY(0)",
                background: "#fff",
              }}
            >
              {/* Image preview */}
              <div style={{ height: 220, position: "relative", overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: hovered === p.id ? "scale(1.06)" : "scale(1)",
                    display: "block",
                  }}
                />

                {/* Hover overlay */}
                <AnimatePresence>
                  {hovered === p.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(43,29,22,0.72)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 12,
                      }}
                    >
                      {p.visitUrl ? (
                        <a
                          href={p.visitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: "#C79A63",
                            border: "none",
                            borderRadius: 20,
                            padding: "10px 20px",
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            textDecoration: "none",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <ExternalLink size={13} /> Visit Site
                        </a>
                      ) : (
                        <span
                          style={{
                            background: "rgba(199,154,99,0.4)",
                            border: "1px solid rgba(199,154,99,0.5)",
                            borderRadius: 20,
                            padding: "10px 20px",
                            color: "#F5F0E8",
                            fontSize: 13,
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <ExternalLink size={13} /> Coming Soon
                        </span>
                      )}
                      <button
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.25)",
                          borderRadius: 20,
                          padding: "10px 20px",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          backdropFilter: "blur(4px)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                        onClick={() => {
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <BookOpen size={13} /> Case Study
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Card body */}
              <div style={{ padding: "24px 24px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#2B1D16" }}>{p.name}</h3>
                  <span style={{ fontSize: 11, color: "#8D857D", border: "1px solid rgba(220,200,176,0.6)", borderRadius: 20, padding: "3px 10px", whiteSpace: "nowrap", marginLeft: 8 }}>
                    {p.industry}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#8D857D", lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ fontSize: 10, background: "rgba(199,154,99,0.1)", color: "#C79A63", borderRadius: 6, padding: "4px 10px", fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.visitUrl && (
                    <a
                      href={p.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 12,
                        color: "#2B1D16",
                        textDecoration: "none",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        borderBottom: "1px solid rgba(43,29,22,0.25)",
                        paddingBottom: 1,
                      }}
                    >
                      Visit <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
