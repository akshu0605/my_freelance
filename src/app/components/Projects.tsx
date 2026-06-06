import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, MessageSquare } from "lucide-react";

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
    visitUrl: "#contact", // Scrolls to contact as fallback
    tags: ["Portfolio", "Web Design", "CMS"],
  },
  {
    id: 5,
    name: "NovaSpark",
    industry: "Tech Startup",
    desc: "High-converting landing page for a SaaS startup with animated feature reveals, pricing tables, and a demo booking flow.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    visitUrl: "#contact", // Scrolls to contact as fallback
    tags: ["Landing Page", "SaaS", "Conversion"],
  },
];

export function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: 12,
              color: "#C79A63",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Selected Work
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#2B1D16",
              lineHeight: 1.2,
            }}
          >
            Projects We're{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Proud Of</span>
          </h2>
        </motion.div>

        {/* Projects Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: 32,
            alignItems: "stretch",
          }}
        >
          {projects.map((p, i) => {
            const isHovered = hoveredCard === p.id;
            const isContactLink = p.visitUrl === "#contact";

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid rgba(220,200,176,0.4)",
                  boxShadow: isHovered
                    ? "0 20px 48px rgba(43,29,22,0.12)"
                    : "0 4px 16px rgba(43,29,22,0.04)",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Website Screenshot Mockup Container */}
                <div style={{ height: 240, overflow: "hidden", position: "relative" }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      display: "block",
                    }}
                  />
                  {/* Overlay shadow for premium look */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, rgba(43,29,22,0) 60%, rgba(43,29,22,0.3))",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Card Details Body */}
                <div
                  style={{
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  {/* Header: Name and Industry */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                      gap: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#2B1D16",
                        margin: 0,
                      }}
                    >
                      {p.name}
                    </h3>
                    <span
                      style={{
                        fontSize: 10,
                        color: "#8D857D",
                        border: "1px solid rgba(220,200,176,0.6)",
                        borderRadius: 20,
                        padding: "3px 10px",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {p.industry}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "#8D857D",
                      lineHeight: 1.6,
                      marginBottom: 20,
                      flexGrow: 1,
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                      marginBottom: 28,
                    }}
                  >
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 10,
                          background: "rgba(199,154,99,0.08)",
                          color: "#C79A63",
                          borderRadius: 6,
                          padding: "4px 10px",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Visit Website always visible */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: "auto",
                    }}
                  >
                    <a
                      href={p.visitUrl}
                      target={isContactLink ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        background: "#2B1D16",
                        color: "#FAF8F5",
                        textAlign: "center",
                        padding: "12px 16px",
                        borderRadius: 12,
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#C79A63";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#2B1D16";
                      }}
                    >
                      {isContactLink ? (
                        <>
                          Request Preview <MessageSquare size={13} />
                        </>
                      ) : (
                        <>
                          Visit Website <ExternalLink size={13} />
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
