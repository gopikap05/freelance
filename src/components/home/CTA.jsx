import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ACCENT = "#8a9a5b";
const ACCENT_DARK = "#7a8a4b";

export default function CTA() {
  const navigate = useNavigate();
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      style={{
        padding: "clamp(70px, 10vw, 120px) 5%",
        background: ACCENT,
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture lines */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.04) 40px,
            rgba(255,255,255,0.04) 41px
          )`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1350px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            margin: "0 0 20px",
            fontSize: "14px",
            letterSpacing: "3.5px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 600,
          }}
        >
          Let's Work Together
        </p>

        {/* Heading */}
        <h2
          style={{
            margin: "0 0 20px",
            fontSize: "clamp(30px, 5vw, 50px)",
            fontFamily: "'Finlandica Headline', system-ui, sans-serif",
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: 1.15,
            letterSpacing: "-0.3px",
          }}
        >
          Ready to bring your idea to life?
        </h2>

        {/* Divider */}
        <div
          style={{
            width: "36px",
            height: "1.5px",
            background: "rgba(255,255,255,0.35)",
            margin: "0 0 24px",
          }}
        />

        {/* Subtext */}
        <p
          style={{
            margin: "0 0 40px",
            maxWidth: "560px",
            fontSize: "clamp(14px, 2vw, 16px)",
            color: "rgba(245,240,232,0.85)",
            lineHeight: 1.75,
            fontWeight: 400,
          }}
        >
          Let's discuss your project and build something great together.
          No pressure — just a conversation to see if we're a good fit.
        </p>

        {/* CTA button */}
        <button
          onClick={() => navigate("/contact")}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "15px 44px",
            background: btnHovered ? "#f5f0e8" : "#ffffff",
            color: btnHovered ? ACCENT_DARK : ACCENT,
            border: "none",
            borderRadius: "2px",
            fontSize: "14px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
        >
          Start a Project
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: btnHovered ? "translateX(3px)" : "translateX(0)",
              transition: "transform 0.25s ease",
            }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        {/* Reassurance note */}
        <p
          style={{
            margin: "20px 0 0",
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.3px",
          }}
        >
          Usually responds within 24 hours
        </p>
      </div>
    </section>
  );
}