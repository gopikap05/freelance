import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ACCENT = "#8a9a5b";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "WordPress / Bricks", level: 88 },
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "HTML / CSS / Tailwind", level: 92 },
];

const tools = [
  "VS Code",
  "Git / GitHub",
  "Figma",
  "Bricks Builder",
  "WooCommerce",
  "Tailwind CSS",
  "Framer Motion",
  "Vite / Webpack",
];

function SkillBar({ skill, index, animate }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            color: "#2e2820",
            letterSpacing: "0.3px",
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontFamily: "'Finlandica Headline', system-ui, sans-serif",
            fontWeight: 600,
            color: ACCENT,
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div
        style={{
          width: "100%",
          height: "5px",
          background: "#ece5d8",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${skill.level}%` : "0%",
            background: ACCENT,
            borderRadius: "3px",
            transition: `width 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsTools() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.5, delay, ease: "easeOut" },
  });

  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "#f5f0e8",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
        }}
      >
        {/* Left — Skills */}
        <motion.div
          ref={ref}
          {...fadeUp(0)}
          style={{ display: "flex", flexDirection: "column" }}
        >
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
            My Expertise
          </p>

          <div
            style={{
              width: "32px",
              height: "1.5px",
              background: ACCENT,
              marginBottom: "20px",
              opacity: 0.6,
            }}
          />

          <h2
            style={{
              margin: "0 0 36px",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontWeight: 500,
              color: "#2e2820",
              lineHeight: 1.2,
            }}
          >
            Skills & Strengths
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {skills.map((skill, i) => (
              <SkillBar key={i} skill={skill} index={i} animate={animate} />
            ))}
          </div>
        </motion.div>

        {/* Right — Tools + Work Style */}
        <motion.div {...fadeUp(0.15)} style={{ display: "flex", flexDirection: "column" }}>
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
            My Toolkit
          </p>

          <div
            style={{
              width: "32px",
              height: "1.5px",
              background: ACCENT,
              marginBottom: "20px",
              opacity: 0.6,
            }}
          />

          <h2
            style={{
              margin: "0 0 28px",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontWeight: 500,
              color: "#2e2820",
              lineHeight: 1.2,
            }}
          >
            Tools I Use Daily
          </h2>

          {/* Tool tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "36px",
            }}
          >
            {tools.map((tool, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.05, ease: "easeOut" }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  background: "#ffffff",
                  border: "1px solid #e0d8cc",
                  borderRadius: "2px",
                  fontSize: "14px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  color: "#4a3f33",
                  letterSpacing: "0.3px",
                }}
              >
                {/* Dot indicator */}
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: ACCENT,
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                />
                {tool}
              </motion.span>
            ))}
          </div>

          {/* Work style callout */}
          <div
            style={{
              padding: "28px",
              background: "#ffffff",
              borderLeft: `3px solid ${ACCENT}`,
              borderRadius: "0 2px 2px 0",
              border: "1px solid #e0d8cc",
              borderLeftWidth: "3px",
              borderLeftColor: ACCENT,
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "16px",
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontWeight: 600,
                color: "#2e2820",
              }}
            >
              My Work Style
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#7a6e60",
                lineHeight: 1.8,
              }}
            >
              I believe in iterative development — delivering value early and often.
              You'll receive regular updates, and your feedback is always incorporated
              throughout the process. No surprises, just results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}