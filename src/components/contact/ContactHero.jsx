import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ACCENT = "#8a9a5b";

export default function ContactHero() {
  return (
    <Box
      component="section"
      sx={{
        py: 'clamp(80px, 12vw, 140px)',
        pb: 'clamp(60px, 8vw, 100px)',
        px: '5%',
        bgcolor: '#faf7f2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute', bottom: '-10px', right: '3%',
          fontFamily: 'var(--heading)', fontWeight: 700,
          fontSize: 'clamp(100px, 16vw, 200px)',
          color: 'rgba(138,154,91,0.06)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-4px',
        }}
      >
        Contact
      </Box>

      <Box
        sx={{
          position: 'relative', maxWidth: '1200px', mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr auto' },
          alignItems: 'center', gap: '40px',
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Typography sx={{
            fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '3.5px', textTransform: 'uppercase',
            color: ACCENT, mb: '18px',
          }}>
            Get In Touch
          </Typography>

          <Typography variant="h1" sx={{
            fontFamily: 'var(--heading)',
            fontSize: { xs: '40px', md: '72px' },
            fontWeight: 500, color: '#2e2820',
            lineHeight: 1.05, letterSpacing: '-1px', mb: '24px',
          }}>
            Let's Work Together
          </Typography>

          <Box sx={{ width: '48px', height: '2px', bgcolor: ACCENT, opacity: 0.7, mb: '28px' }} />

          <Typography sx={{
            fontFamily: 'var(--sans)',
            fontSize: { xs: '14px', md: '17px' },
            fontWeight: 400, color: '#6b5e4a',
            lineHeight: 1.85, maxWidth: '520px',
          }}>
            Have a project in mind? I'd love to hear about it. Fill out the form
            below and I'll get back to you within 24 hours.
          </Typography>
        </motion.div>

        {/* Right — stats */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'column' },
              borderLeft: { xs: 'none', sm: '1px solid #e0d8cc' },
              borderTop: { xs: '1px solid #e0d8cc', sm: 'none' },
              pl: { xs: 0, sm: '32px' },
              pt: { xs: '28px', sm: 0 },
            }}
          >
            {[
              { value: '24h',  label: 'Response Time'    },
              { value: '100%', label: 'Free Consultation' },
              { value: '3+',   label: 'Years Experience'  },
            ].map((stat, i) => (
              <Box
                key={i}
                sx={{
                  py: { xs: 0, sm: '18px' },
                  px: { xs: '12px', sm: 0 },
                  flex: { xs: 1, sm: 'unset' },
                  textAlign: { xs: 'center', sm: 'left' },
                  minWidth: { sm: '130px' },
                  borderBottom: { sm: i < 2 ? '1px solid #e8e0d5' : 'none' },
                  borderRight: { xs: i < 2 ? '1px solid #e8e0d5' : 'none', sm: 'none' },
                }}
              >
                <Typography sx={{
                  fontFamily: 'var(--heading)', fontSize: '28px',
                  fontWeight: 600, color: ACCENT, lineHeight: 1, mb: '5px',
                }}>
                  {stat.value}
                </Typography>
                <Typography sx={{
                  fontFamily: 'var(--sans)', fontSize: '10px',
                  fontWeight: 600, letterSpacing: '1.5px',
                  textTransform: 'uppercase', color: '#a89880',
                }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}