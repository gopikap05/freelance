import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ACCENT = "#8a9a5b";
const ACCENT_HOVER = "#7a8a4b";

const reasons = [
  {
    number: "01",
    title: "Fast Turnaround",
    description:
      "I respect your time and deliver projects on schedule without compromising quality.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Clear Communication",
    description:
      "Regular updates, transparent process, and always available to answer your questions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ongoing Support",
    description:
      "I don't just build and leave. I provide maintenance and support after launch.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Client Focused",
    description:
      "Your success is my success. I work closely with you to achieve your goals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

function ReasonCard({ reason, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          padding: "36px 28px 32px",
          background: "#ffffff",
          border: `1px solid ${hovered ? "#d4c4a8" : "#ece5d8"}`,
          borderTop: `3px solid ${hovered ? ACCENT : "transparent"}`,
          borderRadius: "2px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          transition: "all 0.3s ease",
          boxSizing: "border-box",
          height: "100%",
        }}
      >
        {/* Number */}
        <span
          style={{
            position: "absolute",
            top: "20px",
            right: "22px",
            fontSize: "14px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            letterSpacing: "2px",
            color: hovered ? ACCENT : "#c8bfb0",
            transition: "color 0.3s ease",
          }}
        >
          {reason.number}
        </span>

        {/* Icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: hovered ? `${ACCENT}18` : "#f5f0e8",
            borderRadius: "50%",
            color: hovered ? ACCENT : "#9a8c78",
            transition: "all 0.3s ease",
            flexShrink: 0,
          }}
        >
          {reason.icon}
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
          {reason.title}
        </h3>

        {/* Divider */}
        <div
          style={{
            width: hovered ? "36px" : "20px",
            height: "1.5px",
            background: ACCENT,
            opacity: hovered ? 0.7 : 0.3,
            transition: "all 0.3s ease",
          }}
        />

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
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyMe() {
  const navigate = useNavigate();
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "#ffffff",
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
            Why Choose Me
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
            What makes working with me different
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "560px",
              fontSize: "16px",
              color: "#7a6e60",
              lineHeight: 1.7,
            }}
          >
            More than technical skills — I bring reliability, clarity, and care to every project.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            marginBottom: "52px",
          }}
        >
          {reasons.map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} />
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/service")}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "inline-block",
              padding: "14px 40px",
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
            View My Services
          </button>
        </div>
      </div>
    </section>
  );
}