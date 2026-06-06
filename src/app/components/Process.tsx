import { motion } from "motion/react";
import { MessageSquare, Compass, CreditCard, Code, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Requirement Discussion",
    desc: "We discuss your project goals, target audience, brand identity, and outline a clear scope of work.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Planning & Strategy",
    desc: "We map out the site structure, user journeys, content layout, and choose the optimal tech stack.",
  },
  {
    num: "03",
    icon: CreditCard,
    title: "50% Advance Payment",
    desc: "A standard 50% upfront payment secures your timeline slots and initiates active design and development.",
  },
  {
    num: "04",
    icon: Code,
    title: "Development & Feedback",
    desc: "We design and build the layouts, sharing private preview links for your feedback and collaborative review.",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Final Delivery & Deployment",
    desc: "After final approval and balance payment, we deploy the live site on Vercel or your hosting platform.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      style={{
        background: "linear-gradient(135deg, #F5F0E8 0%, #EDE4D8 100%)",
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
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
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
            How We Work
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#2B1D16",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Our{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Process</span>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#8D857D",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A simple and transparent workflow from idea to launch.
          </p>
        </motion.div>

        {/* Timeline Grid (Desktop Horizontal) */}
        <div className="desktop-timeline" style={{ position: "relative" }}>
          {/* Connector Line behind cards */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              top: 54,
              left: "10%",
              right: "10%",
              height: 2,
              background: "linear-gradient(90deg, #FAF8F5, #C79A63, #2B1D16, #C79A63, #FAF8F5)",
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 20,
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "0 10px",
                  }}
                >
                  {/* Icon Circle */}
                  <div
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: "50%",
                      background: idx % 2 === 0 ? "#2B1D16" : "#C79A63",
                      border: "4px solid #FAF8F5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      position: "relative",
                      boxShadow: "0 8px 20px rgba(43,29,22,0.12)",
                    }}
                  >
                    <Icon size={24} color="#FAF8F5" />
                    {/* Badge step index */}
                    <div
                      style={{
                        position: "absolute",
                        top: -6,
                        right: -6,
                        background: "#DCC8B0",
                        color: "#2B1D16",
                        fontSize: 10,
                        fontWeight: 700,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #FAF8F5",
                      }}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#2B1D16",
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#8D857D",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline (hidden on desktop) */}
        <div className="mobile-timeline" style={{ display: "none" }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{
                  display: "flex",
                  gap: 20,
                  marginBottom: 36,
                  position: "relative",
                }}
              >
                {/* Vertical Line Connector */}
                {idx < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: 28,
                      top: 60,
                      bottom: -36,
                      width: 2,
                      background: "rgba(199,154,99,0.4)",
                      zIndex: 0,
                    }}
                  />
                )}

                {/* Mobile Icon Circle */}
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    background: idx % 2 === 0 ? "#2B1D16" : "#C79A63",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 6px 16px rgba(43,29,22,0.1)",
                  }}
                >
                  <Icon size={20} color="#FAF8F5" />
                  <div
                    style={{
                      position: "absolute",
                      top: -4,
                      right: -4,
                      background: "#DCC8B0",
                      color: "#2B1D16",
                      fontSize: 8,
                      fontWeight: 700,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1.5px solid #FAF8F5",
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Mobile Step Info */}
                <div style={{ paddingTop: 4 }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#2B1D16",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#8D857D",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-timeline {
            display: none !important;
          }
          .mobile-timeline {
            display: block !important;
            padding: 0 12px;
          }
        }
      `}</style>
    </section>
  );
}
