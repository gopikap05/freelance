import { motion } from "framer-motion";

const ACCENT = "#8a9a5b";

export default function AboutHero() {
  return (
    <section
      style={{
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 60px) clamp(60px, 8vw, 100px)",
        background: "#faf7f2",
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background number watermark */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20px",
          right: "3%",
          fontSize: "clamp(120px, 18vw, 220px)",
          fontFamily: "'Finlandica Headline', system-ui, sans-serif",
          fontWeight: 700,
          color: "rgba(138,154,91,0.06)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-4px",
        }}
      >
        About
      </span>

      <div
        style={{
          position: "relative",
          maxWidth: "1350px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "end",
          gap: "40px",
        }}
      >
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ display: "flex", flexDirection: "column", gap: "0" }}
        >
          {/* Tag */}
          <p
            style={{
              margin: "0 0 18px",
              fontSize: "11px",
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: ACCENT,
              fontWeight: 600,
            }}
          >
            Get to Know Me
          </p>

          {/* Heading */}
          <h1
            style={{
              margin: "0 0 24px",
              fontSize: "clamp(40px, 7vw, 72px)",
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontWeight: 500,
              color: "#2e2820",
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            About Me
          </h1>

          {/* Accent line */}
          <div
            style={{
              width: "48px",
              height: "2px",
              background: ACCENT,
              marginBottom: "28px",
              opacity: 0.7,
            }}
          />

          {/* Subtext */}
          <p
            style={{
              margin: 0,
              maxWidth: "560px",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#6b5e4a",
              lineHeight: 1.8,
              fontWeight: 400,
            }}
          >
            I'm a frontend developer dedicated to crafting beautiful, functional,
            and user-centered digital experiences that help businesses grow.
          </p>
        </motion.div>

        {/* Right: vertical stat strip */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            borderLeft: "1px solid #e0d8cc",
            paddingLeft: "32px",
            alignSelf: "center",
          }}
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "18px 0",
                borderBottom: i < 2 ? "1px solid #e8e0d5" : "none",
                minWidth: "130px",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "28px",
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontWeight: 600,
                  color: ACCENT,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#a89880",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}