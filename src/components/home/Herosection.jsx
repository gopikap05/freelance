import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    tag: "React Development",
    title: "Modern Web\nApplications",
    description:
      "High-performance React apps built with hooks, context API, and scalable component architecture. Fast, accessible, and production-ready.",
    cta: null,
    bg: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&auto=format&fit=crop",
  },
  {
    tag: "WordPress + Bricks",
    title: "E-Commerce &\nCMS Solutions",
    description:
      "Custom WordPress development with WooCommerce, Bricks Builder, advanced custom fields, and fully responsive storefronts.",
    cta: null,
    bg: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?w=1600&auto=format&fit=crop",
  },
  {
    tag: "Frontend Solutions",
    title: "Concept to\nDeployment",
    description:
      "End-to-end frontend services — landing pages, web apps, dashboards. Pixel-perfect, cross-browser, and built with clean code.",
    cta: { label: "View Portfolio", url: "https://gopikap05.github.io/Portfolio/" },
    bg: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?w=1600&auto=format&fit=crop",
  },
];

const ACCENT = "#c4a47a";
const BTN_BG = "#8a9a5b";
const BTN_HOVER = "#7a8a4b";
const INTERVAL = 4500;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [btnHover, setBtnHover] = useState(false);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      INTERVAL
    );
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "0px 5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Background layers */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url(${s.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      ))}

      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1350px",
          margin: "0 auto",
        }}
      >
        {/* Slide content */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              style={{ width: "100%" }}
            >
              {/* Tag */}
              <p
                style={{
                  margin: "0 0 16px",
                  fontSize: "14px",
                  letterSpacing: "3.5px",
                  textTransform: "uppercase",
                  color: ACCENT,
                  fontWeight: 600,
                }}
              >
                {slide.tag}
              </p>

              {/* Divider accent */}
              <div
                style={{
                  width: "32px",
                  height: "1.5px",
                  background: ACCENT,
                  margin: "0 auto 24px",
                  opacity: 0.7,
                }}
              />

              {/* Title */}
              <h1
                style={{
                  margin: "0 0 24px",
                  fontSize: "clamp(36px, 6vw, 60px)",
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontWeight: 600,
                  color: "#ffffff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                  whiteSpace: "pre-line",
                }}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                style={{
                  margin: "0 auto 36px",
                  maxWidth: "560px",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  color: "rgba(230, 220, 210, 0.88)",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                {slide.description}
              </p>

              {/* CTA */}
              {slide.cta && (
                <a
                  href={slide.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                  style={{
                    display: "inline-block",
                    padding: "13px 36px",
                    background: btnHover ? BTN_HOVER : BTN_BG,
                    color: "#fff",
                    fontSize: "14px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderRadius: "2px",
                    transition: "background 0.25s ease",
                  }}
                >
                  {slide.cta.label}
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: "4px",
              background:
                i === current ? ACCENT : "rgba(255,255,255,0.35)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          right: "max(36px, 5%)",
          zIndex: 3,
          fontSize: "14px",
          letterSpacing: "2px",
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        0{current + 1} / 0{slides.length}
      </div>
    </section>
  );
}