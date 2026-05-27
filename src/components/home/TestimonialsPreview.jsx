import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { freelanceProjects } from "../data/projects";

const ACCENT = "#8a9a5b";
const ACCENT_HOVER = "#7a8a4b";

function TestimonialCard({ testimonial, projectTitle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      <div
        style={{
          position: "relative",
          padding: "40px 36px 36px",
          background: "#faf7f2",
          border: "1px solid #e8e0d5",
          borderTop: `3px solid ${ACCENT}`,
          borderRadius: "2px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Large quote mark */}
        <span
          style={{
            position: "absolute",
            top: "18px",
            right: "28px",
            fontSize: "72px",
            lineHeight: 1,
            fontFamily: "Georgia, serif",
            color: `${ACCENT}22`,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          "
        </span>

        {/* Project name badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: ACCENT,
              background: `${ACCENT}12`,
              padding: "6px 12px",
              borderRadius: "2px",
            }}
          >
            {projectTitle}
          </span>
        </div>

        {/* Quote */}
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            fontFamily: "'Montserrat', sans-serif",
            fontStyle: "italic",
            color: "#4a3f33",
            lineHeight: 1.8,
            flex: 1,
          }}
        >
          "{testimonial.content}"
        </p>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#e8e0d5",
          }}
        />

        {/* Author */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: `${ACCENT}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                color: ACCENT,
              }}
            >
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <span
              style={{
                fontSize: "15px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                color: "#2e2820",
              }}
            >
              {testimonial.name}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontFamily: "'Montserrat', sans-serif",
                color: ACCENT,
                letterSpacing: "0.5px",
              }}
            >
              {testimonial.role}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPreview() {
  // Extract testimonials from freelance projects
  const testimonialsData = freelanceProjects
    .filter(project => project.testimonials && project.testimonials.length > 0)
    .flatMap(project => 
      project.testimonials.map(testimonial => ({
        ...testimonial,
        projectTitle: project.title
      }))
    );

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
            Testimonials
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
            What Clients Say
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
            Real results from real clients — here's what they experienced working with me.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {testimonialsData.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} projectTitle={t.projectTitle} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}