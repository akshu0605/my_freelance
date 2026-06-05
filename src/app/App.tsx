import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { motion } from "motion/react";
import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { CaseStudy } from "./components/CaseStudy";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.me/917876816051"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 999,
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.15)",
          textDecoration: "none",
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 2C8.268 2 2 8.268 2 16c0 2.493.678 4.832 1.86 6.84L2 30l7.38-1.832A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
            fill="#fff"
          />
          <path
            d="M23.5 19.93c-.31-.155-1.833-.904-2.117-1.007-.284-.103-.49-.155-.697.155-.206.31-.8 1.007-.98 1.214-.18.206-.362.23-.672.077-.31-.155-1.308-.482-2.491-1.537-.92-.82-1.54-1.832-1.72-2.142-.18-.31-.02-.477.135-.63.14-.138.31-.36.465-.54.155-.18.206-.31.31-.516.103-.207.051-.387-.026-.542-.077-.155-.697-1.68-.955-2.3-.252-.604-.508-.522-.697-.532l-.593-.01c-.207 0-.542.077-.826.387-.284.31-1.084 1.059-1.084 2.582 0 1.523 1.11 2.995 1.265 3.202.155.206 2.185 3.337 5.296 4.68.74.32 1.318.51 1.768.653.743.236 1.42.203 1.954.123.596-.089 1.833-.749 2.092-1.473.258-.723.258-1.343.18-1.473-.077-.13-.284-.207-.593-.362z"
            fill="#25D366"
          />
        </svg>
      </motion.a>

      <Navbar />
      <Hero />
      <WhyUs />
      <Process />
      <CaseStudy />
      <Projects />
      <Testimonials />
      <Stats />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
