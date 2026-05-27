import { useState } from "react";
import { motion } from "framer-motion";

const ACCENT = "#8a9a5b";

const services = [
  {
    number: "01",
    title: "React Development",
    description: "Modern, scalable web applications built with React, hooks, context API, and best practices.",
    features: ["Custom Components", "State Management", "API Integration", "Responsive Design"],
    price: "₹0",
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
    description: "Custom WordPress websites with Bricks Builder. Flexible, powerful, and easy to manage.",
    features: ["Bricks Builder Expert", "Custom Post Types", "ACF Integration", "SEO Optimized"],
    price: "₹0",
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
    description: "Fully functional online stores with WooCommerce, payment gateways, and inventory management.",
    features: ["Product Catalogs", "Payment Integration", "Inventory Management", "Cart & Checkout"],
    price: "₹0",
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
    description: "Lightning-fast websites with optimized code, images, and Core Web Vitals improvements.",
    features: ["Speed Optimization", "Core Web Vitals", "Image Optimization", "Code Splitting"],
    price: "₹0",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const gridStyles = `
  .services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(20px, 4vw, 28px);
  }
  @media (max-width: 640px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
`;

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
          padding: "clamp(24px, 4vw, 36px) clamp(20px, 4vw, 32px)",
          background: hovered ? "#fdf9f4" : "#faf7f2",
          border: `1px solid ${hovered ? "#d4c4a8" : "#e8e0d5"}`,
          borderTop: `3px solid ${hovered ? ACCENT : "transparent"}`,
          borderRadius: "2px",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(16px, 3vw, 20px)",
          height: "100%",
          boxSizing: "border-box",
          transition: "all 0.3s ease",
        }}
      >
        {/* Number */}
        <span
          style={{
            position: "absolute",
            top: "clamp(16px, 3vw, 20px)",
            right: "clamp(16px, 3vw, 24px)",
            fontSize: "clamp(12px, 3vw, 14px)",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            letterSpacing: "2px",
            color: hovered ? ACCENT : "#c8bfb0",
            transition: "color 0.3s ease",
          }}
        >
          {service.number}
        </span>

        {/* Icon + Title row */}
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 3vw, 14px)", flexWrap: "wrap" }}>
          <div
            style={{
              width: "clamp(40px, 8vw, 48px)",
              height: "clamp(40px, 8vw, 48px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: hovered ? `${ACCENT}18` : "#eee8da",
              borderRadius: "50%",
              color: hovered ? ACCENT : "#9a8c78",
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
          >
            {service.icon}
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(18px, 4vw, 20px)",
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontWeight: 600,
              color: "#2e2820",
              lineHeight: 1.2,
            }}
          >
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontFamily: "'Montserrat', sans-serif",
            color: "#7a6e60",
            lineHeight: 1.8,
          }}
        >
          {service.description}
        </p>

        {/* Features */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(12px, 3vw, 14px)",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: ACCENT,
            }}
          >
            What's Included
          </p>
          {service.features.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "clamp(6px, 2vw, 8px) 0",
                borderBottom: i < service.features.length - 1 ? "1px solid #ece5d8" : "none",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={ACCENT}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span
                style={{
                  fontSize: "clamp(13px, 3vw, 14px)",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#4a3f33",
                  fontWeight: 500,
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "clamp(16px, 3vw, 20px)",
            borderTop: "1px solid #e8e0d5",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "clamp(12px, 3vw, 14px)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#a89880",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Starting at
            </span>
            <span
              style={{
                fontSize: "clamp(22px, 5vw, 26px)",
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontWeight: 600,
                color: ACCENT,
                lineHeight: 1,
              }}
            >
              {service.price}
            </span>
          </div>
          <span
            style={{
              fontSize: "clamp(12px, 3vw, 14px)",
              fontFamily: "'Montserrat', sans-serif",
              color: "#b8ad9e",
              textAlign: "right",
              maxWidth: "110px",
              lineHeight: 1.4,
            }}
          >
            Based on project requirements
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServiceCards() {
  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <style>{gridStyles}</style>
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 8vw, 64px)" }}>
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
              fontSize: "clamp(28px, 5vw, 42px)",
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontWeight: 500,
              color: "#2e2820",
              lineHeight: 1.2,
            }}
          >
            What I Offer
          </h2>
          <p
            style={{
              margin: "0 auto",
              maxWidth: "clamp(280px, 80vw, 560px)",
              fontSize: "clamp(14px, 3vw, 16px)",
              color: "#7a6e60",
              lineHeight: 1.7,
            }}
          >
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* 2 columns on desktop, 1 column on mobile */}
        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Note about pricing */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(40px, 8vw, 48px)",
            padding: "clamp(14px, 3vw, 16px) clamp(16px, 4vw, 24px)",
            background: "#faf7f2",
            border: "1px solid #e8e0d5",
            borderRadius: "2px",
            maxWidth: "min(90%, 600px)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <span
            style={{
              fontSize: "clamp(12px, 3vw, 14px)",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              color: "#7a6e60",
              letterSpacing: "0.5px",
            }}
          >
            ✨ All services start from <strong style={{ color: ACCENT, fontSize: "clamp(18px, 4vw, 20px)" }}>₹15,000</strong> — based on your specific requirements
          </span>
        </div>
      </div>
    </section>
  );
}