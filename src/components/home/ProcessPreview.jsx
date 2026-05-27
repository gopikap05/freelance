import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ACCENT = "#8a9a5b";
const ACCENT_HOVER = "#7a8a4b";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your goals, audience, and project requirements before a single line of code.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes, layouts, and visual direction crafted to match your brand and user needs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Develop",
    description: "Clean, performant code built with the right tools — React, WordPress, or whatever fits best.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch",
    description: "Thorough testing, deployment, and handoff — with post-launch support to keep things running.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function ProcessPreview() {
  const navigate = useNavigate();
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "#f5f0e8",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
            My Process
          </p>

          <div
            style={{
              width: "32px",
              height: "1.5px",
              background: ACCENT,
              margin: "0 auto 20px",
              opacity: 0.6,
            }}
          />

          <h2
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontWeight: 500,
              color: "#2e2820",
              lineHeight: 1.2,
            }}
          >
            How I Bring Ideas to Life
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "440px",
              fontSize: "16px",
              color: "#7a6e60",
              lineHeight: 1.7,
            }}
          >
            A simple, transparent process from first conversation to final launch.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              style={{
                position: "relative",
                padding: "36px 32px",
                borderLeft: i === 0 ? "1px solid #e0d8cc" : "none",
                borderRight: "1px solid #e0d8cc",
                borderTop: "1px solid #e0d8cc",
                borderBottom: "1px solid #e0d8cc",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Connector dot */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "52px",
                    right: "-6px",
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#f5f0e8",
                    border: `2px solid ${ACCENT}`,
                    zIndex: 1,
                  }}
                />
              )}

              {/* Step number */}
              <span
                style={{
                  fontSize: "14px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  color: ACCENT,
                }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${ACCENT}15`,
                  borderRadius: "50%",
                  color: ACCENT,
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontWeight: 600,
                  color: "#2e2820",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#7a6e60",
                  lineHeight: 1.75,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "52px" }}>
          <button
            onClick={() => navigate("/process")}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "inline-block",
              padding: "12px 36px",
              background: "transparent",
              border: `1.5px solid ${btnHovered ? ACCENT_HOVER : ACCENT}`,
              color: btnHovered ? ACCENT_HOVER : ACCENT,
              fontSize: "14px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              backgroundColor: btnHovered ? "rgba(138,154,91,0.07)" : "transparent",
            }}
          >
            Learn More About My Process
          </button>
        </div>
      </div>
    </section>
  );
}