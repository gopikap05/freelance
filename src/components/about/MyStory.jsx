import { motion } from "framer-motion";

const ACCENT = "#8a9a5b";

const values = [
  {
    title: "Quality First",
    description:
      "I never compromise on code quality. Clean, maintainable code means your website will be reliable and easy to update.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "User Focused",
    description:
      "Every decision considers the end user. A website should be intuitive, accessible, and a joy to use.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, honest timelines, clear explanations. You'll never wonder about your project's status.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function MyStory() {
  return (
    <section
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "#ffffff",
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

        {/* Left — Story */}
        <motion.div {...fadeUp(0)} style={{ display: "flex", flexDirection: "column" }}>
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
            My Journey
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
            From passionate coder to trusted developer
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {[
              "My journey into web development started 2 years ago when I built my first website. What began as curiosity quickly turned into passion — I realized coding lets me solve real problems and help businesses establish their online presence.",
              "Since then, I've worked with 50+ clients across various industries, from startups to established businesses. Each project taught me something new about technology, design, and what truly makes a website successful.",
              "Today I focus on high-quality React and WordPress solutions that look great and perform exceptionally well. My goal is simple: help you succeed online.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#6b5e4a",
                  lineHeight: 1.85,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Inline stats */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "36px",
              paddingTop: "28px",
              borderTop: "1px solid #ece5d8",
            }}
          >
            {[
              { value: "2+", label: "Years" },
              { value: "40+", label: "Clients" },
              { value: "50+", label: "Projects" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span
                  style={{
                    fontSize: "24px",
                    fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                    fontWeight: 600,
                    color: ACCENT,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#a89880",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Values */}
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
            My Values
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
            What guides my work
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  padding: "24px 0",
                  borderBottom: i < values.length - 1 ? "1px solid #ece5d8" : "none",
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: `${ACCENT}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ACCENT,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {v.icon}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "17px",
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontWeight: 600,
                      color: "#2e2820",
                      lineHeight: 1.3,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "#7a6e60",
                      lineHeight: 1.75,
                    }}
                  >
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}