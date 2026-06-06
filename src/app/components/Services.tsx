import { useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter Website",
    price: "₹2,999",
    period: "onwards",
    bestFor: "Small Businesses, Cafes, Portfolios",
    inclusions: [
      "Responsive Website Design",
      "Mobile-Friendly Layout",
      "Up to 3 Pages",
      "Contact Form",
      "WhatsApp Integration",
      "Basic Deployment Support",
    ],
    ctaText: "Get Started",
    ctaLink: "#contact",
    popular: false,
  },
  {
    name: "Growth Website",
    price: "₹4,999",
    period: "onwards",
    bestFor: "Restaurants, Local Businesses, Startups",
    inclusions: [
      "Everything in Starter Website",
      "Up to 5 Pages",
      "Menu / Services Section",
      "Gallery Integration",
      "Google Maps Integration",
      "Enhanced UI/UX",
    ],
    ctaText: "Book a Call",
    ctaLink: "#contact",
    popular: true,
  },
  {
    name: "Business Pro Website",
    price: "₹7,999",
    period: "onwards",
    bestFor: "Growing Businesses and Startups",
    inclusions: [
      "Everything in Growth Website",
      "Backend Integration (Basic)",
      "Database Integration (Basic)",
      "Advanced Forms",
      "Additional Custom Features",
    ],
    ctaText: "Discuss Project",
    ctaLink: "#contact",
    popular: false,
  },
];

const addons = [
  { title: "Extra Page", price: "₹500 onwards" },
  { title: "Custom Forms / Backend", price: "₹800 onwards" },
  { title: "Admin Dashboard", price: "₹3,000 onwards" },
  { title: "Monthly Maintenance", price: "₹300–₹1,000/month" },
];

export function Services() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        background: "#FAF8F5",
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
            Pricing Plans
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
            Simple, Transparent{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Pricing</span>
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
            Choose a plan that fits your business needs. No hidden charges.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
            alignItems: "stretch",
            marginBottom: 72,
          }}
        >
          {pricingTiers.map((tier, idx) => {
            const isHovered = hoveredTier === idx;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredTier(idx)}
                onMouseLeave={() => setHoveredTier(null)}
                style={{
                  background: tier.popular ? "#2B1D16" : "#ffffff",
                  color: tier.popular ? "#FAF8F5" : "#2B1D16",
                  border: tier.popular
                    ? "2px solid #C79A63"
                    : "1px solid rgba(220,200,176,0.6)",
                  borderRadius: 24,
                  padding: "48px 32px 40px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: tier.popular
                    ? "0 20px 40px rgba(43,29,22,0.15)"
                    : isHovered
                    ? "0 16px 36px rgba(43,29,22,0.08)"
                    : "0 4px 16px rgba(43,29,22,0.03)",
                  transform: isHovered ? "translateY(-6px)" : "none",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  zIndex: tier.popular ? 2 : 1,
                }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#C79A63",
                      color: "#FAF8F5",
                      padding: "6px 16px",
                      borderRadius: 100,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      boxShadow: "0 4px 12px rgba(199,154,99,0.3)",
                    }}
                  >
                    <Sparkles size={12} /> Most Popular
                  </div>
                )}

                {/* Card Title & Best For */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: tier.popular ? "rgba(250,248,245,0.7)" : "#8D857D",
                    marginBottom: 28,
                    minHeight: 36,
                    lineHeight: 1.4,
                  }}
                >
                  Best for: {tier.bestFor}
                </p>

                {/* Price Display */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    marginBottom: 32,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 44,
                      fontWeight: 700,
                      color: tier.popular ? "#FAF8F5" : "#2B1D16",
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: tier.popular ? "rgba(250,248,245,0.6)" : "#8D857D",
                      marginLeft: 8,
                      fontWeight: 500,
                    }}
                  >
                    {tier.period}
                  </span>
                </div>

                {/* Divider Line */}
                <div
                  style={{
                    height: 1,
                    background: tier.popular
                      ? "rgba(250,248,245,0.15)"
                      : "rgba(220,200,176,0.3)",
                    marginBottom: 32,
                  }}
                />

                {/* Inclusions List */}
                <div style={{ flexGrow: 1, marginBottom: 40 }}>
                  {tier.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        marginBottom: 16,
                      }}
                    >
                      <Check
                        size={16}
                        color="#C79A63"
                        style={{ marginTop: 2, flexShrink: 0 }}
                      />
                      <span
                        style={{
                          fontSize: 14,
                          lineHeight: 1.5,
                          opacity: 0.9,
                        }}
                      >
                        {inc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={tier.ctaLink}
                  style={{
                    background: tier.popular ? "#C79A63" : "#2B1D16",
                    color: "#FAF8F5",
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "16px 24px",
                    borderRadius: 14,
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    boxShadow: tier.popular
                      ? "0 8px 20px rgba(199,154,99,0.25)"
                      : "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = tier.popular
                      ? "#b58752"
                      : "#402c22";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = tier.popular
                      ? "#C79A63"
                      : "#2B1D16";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {tier.ctaText}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Add-On Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#F5F0E8",
            border: "1px solid rgba(220,200,176,0.6)",
            borderRadius: 24,
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#2B1D16",
              marginBottom: 12,
            }}
          >
            Need Something Custom?
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "#8D857D",
              marginBottom: 32,
              maxWidth: 600,
              margin: "0 auto 32px",
              lineHeight: 1.5,
            }}
          >
            We offer flexible add-on features and support options to grow alongside your website.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 16,
            }}
          >
            {addons.map((addon) => (
              <div
                key={addon.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(220,200,176,0.5)",
                  borderRadius: 100,
                  padding: "12px 24px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#2B1D16",
                  boxShadow: "0 2px 8px rgba(43,29,22,0.02)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontWeight: 600 }}>{addon.title}</span>
                <span style={{ color: "#C79A63" }}>→</span>
                <span style={{ color: "#8D857D" }}>{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
