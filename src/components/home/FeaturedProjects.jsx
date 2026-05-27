import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { freelanceProjects } from "../data/projects";

const ACCENT = "#8a9a5b";
const ACCENT_HOVER = "#7a8a4b";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  const handleViewProject = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "2px",
          overflow: "hidden",
          border: `1px solid ${hovered ? "#d4c4a8" : "#e8e0d5"}`,
          transition: "border-color 0.3s ease",
          background: "#ffffff",
          height: "100%",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "220px",
            flexShrink: 0,
            background: `linear-gradient(135deg, ${ACCENT}11, ${ACCENT}22)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
            />
          ) : (
            <div
              style={{
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `${ACCENT}18`,
                borderRadius: "16px",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke={ACCENT}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
          )}
          {/* Number overlay */}
          <span
            style={{
              position: "absolute",
              top: "14px",
              left: "16px",
              fontSize: "14px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: "2px",
              color: "#ffffff",
              background: "rgba(0,0,0,0.35)",
              padding: "4px 10px",
              borderRadius: "2px",
            }}
          >
            {project.number}
          </span>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "24px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flex: 1,
          }}
        >
          {/* Category */}
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: ACCENT,
            }}
          >
            {project.category}
          </p>

          {/* Title */}
          <h3
            style={{
              margin: 0,
              fontSize: "20px",
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontWeight: 600,
              color: "#2e2820",
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontFamily: "'Montserrat', sans-serif",
              color: "#7a6e60",
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* View link */}
          <div
            onClick={handleViewProject}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "8px",
              fontSize: "14px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: hovered ? ACCENT : "#c8bfb0",
              transition: "color 0.3s ease",
              cursor: "pointer",
            }}
          >
            View Project
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: hovered ? "translateX(3px)" : "translateX(0)",
                transition: "transform 0.25s ease",
              }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const navigate = useNavigate();
  const [btnHovered, setBtnHovered] = useState(false);

  // Map freelanceProjects to the format needed for ProjectCard
  const projectsData = freelanceProjects.map((project, index) => ({
    title: project.title,
    category: project.tech?.[0] || "Freelance",
    description: project.shortDescription,
    image: null, // No image, will show icon fallback
    number: `0${index + 1}`,
    liveUrl: project.liveUrl,
  }));

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
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            Featured Work
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
            Freelance Projects
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
            Real-world solutions delivered for clients — from concept to deployment.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
            marginBottom: "52px",
          }}
        >
          {projectsData.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
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
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}