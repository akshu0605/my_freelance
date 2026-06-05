import { useState } from "react";
import { motion } from "motion/react";
import { Send, Calendar, Mail, Phone } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", details: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Enquiry from ${form.business || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\nProject Details:\n${form.details}`
    );
    window.open(`mailto:aditiakshitwork@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: "1.5px solid rgba(220,200,176,0.6)",
    background: "#fff",
    color: "#2B1D16",
    fontSize: 15,
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #F5F0E8 0%, #EDE4D8 100%)",
        padding: "100px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p style={{ fontSize: 12, color: "#C79A63", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#2B1D16", lineHeight: 1.2, marginBottom: 20 }}>
            Let's Build Something{" "}
            <span style={{ fontStyle: "italic", color: "#C79A63" }}>Great</span>{" "}
            Together.
          </h2>
          <p style={{ fontSize: 15, color: "#8D857D", lineHeight: 1.75, marginBottom: 40 }}>
            Whether you're starting from scratch or looking to redesign, we'd love to hear about your project. Let's create something you'll be proud of.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="mailto:aditiakshitwork@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "#fff",
                border: "1px solid rgba(220,200,176,0.5)",
                borderRadius: 14,
                padding: "16px 20px",
                textDecoration: "none",
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(199,154,99,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail size={18} color="#C79A63" />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#8D857D", letterSpacing: "0.05em" }}>Email Us</div>
                <div style={{ fontSize: 14, color: "#2B1D16", fontWeight: 500 }}>aditiakshitwork@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:+917876816051"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "#fff",
                border: "1px solid rgba(220,200,176,0.5)",
                borderRadius: 14,
                padding: "16px 20px",
                textDecoration: "none",
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(199,154,99,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Phone size={18} color="#C79A63" />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#8D857D", letterSpacing: "0.05em" }}>WhatsApp / Call</div>
                <div style={{ fontSize: 14, color: "#2B1D16", fontWeight: 500 }}>+91 78768 16051</div>
              </div>
            </a>
          </div>

          <a
            href="https://wa.me/917876816051?text=Hi%20Akshit%20%26%20Aditi%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              marginTop: 20,
              background: "#2B1D16",
              borderRadius: 16,
              padding: "20px 24px",
              alignItems: "center",
              gap: 14,
              textDecoration: "none",
            }}
          >
            <Calendar size={22} color="#C79A63" />
            <div>
              <div style={{ color: "#F5F0E8", fontWeight: 600, fontSize: 15 }}>Book a Discovery Call</div>
              <div style={{ color: "rgba(245,240,232,0.6)", fontSize: 12, marginTop: 2 }}>30 minutes · Free · No commitment</div>
            </div>
          </a>
        </motion.div>

        {/* Right — Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div style={{ background: "#fff", borderRadius: 28, padding: "40px 36px", boxShadow: "0 8px 32px rgba(43,29,22,0.08)", border: "1px solid rgba(220,200,176,0.4)" }}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#C79A63", marginBottom: 16 }}>✦</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#2B1D16", marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: "#8D857D", fontSize: 15, lineHeight: 1.7 }}>
                  We'll get back to you within 24 hours.<br />Looking forward to working with you!
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{ marginTop: 24, background: "#2B1D16", color: "#F5F0E8", border: "none", borderRadius: 100, padding: "12px 28px", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#2B1D16", marginBottom: 28 }}>Get a Free Website Audit</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { key: "name", label: "Your Name", placeholder: "Priya Sharma", type: "text" },
                    { key: "email", label: "Email Address", placeholder: "priya@yourbrand.com", type: "email" },
                    { key: "business", label: "Business Name", placeholder: "Bloom Interiors", type: "text" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ fontSize: 13, color: "#2B1D16", fontWeight: 500, display: "block", marginBottom: 6 }}>{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(form as any)[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        style={inputStyle}
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontSize: 13, color: "#2B1D16", fontWeight: 500, display: "block", marginBottom: 6 }}>Project Details</label>
                    <textarea
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      background: "#2B1D16",
                      color: "#F5F0E8",
                      border: "none",
                      borderRadius: 100,
                      padding: "16px 32px",
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      marginTop: 4,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Send size={16} /> Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){#contact > div{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
