import { motion } from "motion/react";

const akshitSkills = ["React & Next.js", "Node.js", "Webflow", "Framer", "SEO Strategy", "Performance Optimization"];
const aditiSkills = ["Figma & Prototyping", "Brand Identity", "Typography", "Motion Design", "User Research", "Visual Systems"];

export function About() {
  return (
    <section
      id="about"
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
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>The Team</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#2B1D16", lineHeight: 1.2 }}>
            Meet{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Akshit & Aditi</span>
          </h2>
          <p style={{ fontSize: 16, color: "#8D857D", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.75 }}>
            A design and development duo passionate about helping businesses grow through thoughtful, beautiful web experiences.
          </p>
        </motion.div>

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {[
            {
              name: "Akshit",
              role: "Web Development & Strategy",
              desc: "Akshit brings technical precision and strategic thinking to every project. He specializes in building fast, scalable websites that are engineered to convert.",
              skills: akshitSkills,
              accent: "#2B1D16",
              initials: "A",
            },
            {
              name: "Aditi",
              role: "UI/UX Design & Visual Direction",
              desc: "Aditi crafts the visual soul of every project. Her eye for detail and deep understanding of user psychology results in designs that feel intuitive and beautiful.",
              skills: aditiSkills,
              accent: "#C79A63",
              initials: "A",
            },
          ].map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{
                background: "#fff",
                border: "1px solid rgba(220,200,176,0.5)",
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(43,29,22,0.05)",
              }}
            >
              {/* Header band */}
              <div
                style={{
                  background: i === 0 ? "linear-gradient(135deg, #2B1D16, #4A2E1A)" : "linear-gradient(135deg, #C79A63, #DCC8B0)",
                  padding: "48px 40px 36px",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: i === 0 ? "rgba(199,154,99,0.2)" : "rgba(43,29,22,0.15)",
                    border: `3px solid ${i === 0 ? "rgba(199,154,99,0.5)" : "rgba(43,29,22,0.2)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 700,
                    color: i === 0 ? "#C79A63" : "#2B1D16",
                  }}
                >
                  {person.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: i === 0 ? "#F5F0E8" : "#2B1D16", lineHeight: 1.1 }}>{person.name}</div>
                  <div style={{ fontSize: 13, color: i === 0 ? "rgba(245,240,232,0.7)" : "rgba(43,29,22,0.65)", marginTop: 4 }}>{person.role}</div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "32px 40px" }}>
                <p style={{ fontSize: 15, color: "#8D857D", lineHeight: 1.75, marginBottom: 28 }}>{person.desc}</p>
                <div>
                  <div style={{ fontSize: 11, color: "#C79A63", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Skills & Tools</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {person.skills.map((skill) => (
                      <span key={skill} style={{ fontSize: 12, background: i === 0 ? "rgba(43,29,22,0.06)" : "rgba(199,154,99,0.08)", color: "#2B1D16", borderRadius: 8, padding: "5px 12px", fontWeight: 500 }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #about { padding: 60px 16px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .about-grid > div > div:first-child { padding: 32px 24px 24px !important; }
          .about-grid > div > div:last-child { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
}
