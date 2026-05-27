import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ACCENT = "#8a9a5b";
const ACCENT_DARK = "#6b7a48";

const cards = [
  {
    id: 1,
    title: '01. What I Need',
    subtitle: 'From Your End',
    items: [
      { label: 'Clear Project Brief', desc: 'Share your vision, goals, and any references' },
      { label: 'Timely Feedback', desc: 'Review within 48 hours to keep momentum' },
      { label: 'Content & Assets', desc: 'Text, images, logos, and brand guidelines' },
      { label: 'Access & Credentials', desc: 'Hosting, domain, and platform access' },
    ],
    gradient: 'linear-gradient(135deg, #f5f0e8, #fff)',
  },
  {
    id: 2,
    title: '02. Revisions',
    subtitle: '& Feedback Loop',
    items: [
      { label: '2 Rounds of Revisions', desc: 'Included for design and development' },
      { label: 'Regular Updates', desc: 'Weekly progress reports and demos' },
      { label: 'Feedback Tools', desc: 'Comments, Loom videos, or live calls' },
      { label: 'Flexible Process', desc: 'Adapts to your communication style' },
    ],
    gradient: 'linear-gradient(135deg, #fff, #f5f0e8)',
  },
  {
    id: 3,
    title: '03. Timeline',
    subtitle: 'Estimated Delivery',
    items: [
      { label: 'Small Website', value: '1-2 weeks', desc: 'Up to 5 pages' },
      { label: 'Medium Website', value: '3-4 weeks', desc: '6-15 pages' },
      { label: 'E-Commerce Store', value: '4-6 weeks', desc: 'Full online store' },
      { label: 'Custom Application', value: '6-8+ weeks', desc: 'Complex features' },
    ],
    gradient: 'linear-gradient(135deg, #f5f0e8, #fff)',
  },
  {
    id: 4,
    title: '04. Delivery',
    subtitle: '& Launch Support',
    items: [
      { label: 'Quality Assurance', desc: 'Multi-device & browser testing' },
      { label: 'Launch Assistance', desc: 'Deployment to your hosting' },
      { label: '30 Days Support', desc: 'Free bug fixes & adjustments' },
      { label: 'Training Included', desc: 'Video walkthrough for CMS' },
    ],
    gradient: 'linear-gradient(135deg, #fff, #f5f0e8)',
  },
];

function ProcessCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          background: card.gradient,
          borderRadius: '2px',
          padding: '28px',
          height: '100%',
          position: 'relative',
          border: '1px solid #e8e0d5',
          transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
          cursor: 'default',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 35px -12px rgba(138,154,91,0.25)',
          },
        }}
      >
        {/* Decorative circle */}
        <Box
          sx={{
            position: 'absolute',
            top: -15,
            right: -15,
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${ACCENT}15, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        {/* Header */}
        <Box sx={{ mb: '24px', pb: '16px', borderBottom: `2px solid ${ACCENT}20` }}>
          <Typography
            sx={{
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontSize: '28px',
              fontWeight: 600,
              background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.5px',
            }}
          >
            {card.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#a89880',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              mt: '4px',
            }}
          >
            {card.subtitle}
          </Typography>
        </Box>

        {/* Items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {card.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.07 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  p: '10px 0',
                }}
              >
                {/* Checkmark or Timeline dot */}
                {card.id === 3 ? (
                  <Box
                    sx={{
                      minWidth: '48px',
                      background: `${ACCENT}12`,
                      borderRadius: '2px',
                      padding: '4px 10px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '14px',
                        fontWeight: 700,
                        color: ACCENT,
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      minWidth: '20px',
                      height: '20px',
                      borderRadius: '2px',
                      background: ACCENT,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: '2px',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </Box>
                )}

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#2e2820',
                      mb: '4px',
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#7a6e60',
                      lineHeight: 1.5,
                    }}
                  >
                    {card.id === 3 ? item.desc : item.desc}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Decorative line at bottom */}
        <Box
          sx={{
            mt: '20px',
            pt: '12px',
            borderTop: `1px solid ${ACCENT}15`,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '2px',
              background: ACCENT,
              borderRadius: '1px',
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
}

export default function ProcessDetails() {
  return (
    <Box
      sx={{
        py: { xs: '80px', md: '120px' },
        px: '5%',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(${ACCENT} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ maxWidth: '1350px', mx: 'auto', position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: '64px' }}>
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '3.5px',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: '16px',
              }}
            >
              How It Works
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontSize: { xs: '36px', md: '52px' },
                fontWeight: 500,
                color: '#2e2820',
                lineHeight: 1.2,
                mb: '20px',
                letterSpacing: '-1px',
              }}
            >
              A seamless journey from
              <br />
              <span style={{ color: ACCENT }}>idea to launch</span>
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '16px',
                color: '#7a6e60',
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Every project follows this proven framework — transparent, collaborative, and results-driven.
            </Typography>
          </Box>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: '20px', md: '48px' },
              mb: '60px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <Box key={i} sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                    fontSize: '36px',
                    fontWeight: 600,
                    color: ACCENT,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#a89880',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Cards grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: '32px',
          }}
        >
          {cards.map((card, i) => (
            <ProcessCard key={card.id} card={card} index={i} />
          ))}
        </Box>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mt: '64px',
              pt: '40px',
              borderTop: `1px solid ${ACCENT}15`,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                color: '#7a6e60',
                mb: '16px',
              }}
            >
              Ready to start your project?
            </Typography>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: ACCENT,
                border: 'none',
                padding: '14px 40px',
                borderRadius: '2px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = ACCENT_DARK}
              onMouseLeave={(e) => e.currentTarget.style.background = ACCENT}
            >
              Let's Talk →
            </motion.button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}