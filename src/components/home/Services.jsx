import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ACCENT = "#8a9a5b";
const ACCENT_HOVER = "#7a8a4b";

const services = [
  {
    number: "01",
    title: "React Development",
    description:
      "Modern, scalable web applications built with React, hooks, context API, and component-driven architecture.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "WordPress + Bricks",
    description:
      "Custom WordPress websites with Bricks Builder — flexible layouts, custom post types, and easy content management.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "E-Commerce Solutions",
    description:
      "Fully functional online stores with WooCommerce, payment gateways, product catalogs, and inventory management.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Performance Optimization",
    description:
      "Lightning-fast load times through optimized code, image compression, caching, and Core Web Vitals tuning.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }) {
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
          padding: "36px 28px",
          background: hovered ? "#fdf9f4" : "#ffffff",
          border: `1px solid ${hovered ? "#d4c4a8" : "#ece5d8"}`,
          borderTop: `3px solid ${hovered ? ACCENT : "transparent"}`,
          borderRadius: "2px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          transition: "all 0.3s ease",
          cursor: "default",
          boxSizing: "border-box",
        }}
      >
        {/* Number */}
        <span
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            fontSize: "14px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            letterSpacing: "2px",
            color: hovered ? ACCENT : "#c8bfb0",
            transition: "color 0.3s ease",
          }}
        >
          {service.number}
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
          {service.icon}
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
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontFamily: "'Montserrat', sans-serif",
            color: "#7a6e60",
            lineHeight: 1.75,
            flex: 1,
          }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/service");
  };

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
            What I Offer
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
              fontWeight: 600,
              color: "#2e2820",
              lineHeight: 1.2,
            }}
          >
            Services to help you succeed online
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
            Tailored frontend solutions — from concept to a live, polished product.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Button */}
        <div style={{ textAlign: "center", marginTop: "52px" }}>
          <button
            onClick={handleViewAll}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              background: btnHovered ? ACCENT : "none",
              border: `1.5px solid ${ACCENT}`,
              padding: "14px 40px",
              fontSize: "14px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: btnHovered ? "#ffffff" : ACCENT,
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: "2px",
            }}
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}