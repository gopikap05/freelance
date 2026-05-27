import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const ACCENT = "#8a9a5b";

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your goals, target audience, and project requirements. I learn about your brand and vision.',
    duration: 'max 2 days',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
        <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'I create wireframes, mockups, and plan the architecture. You review and provide feedback.',
    duration: 'max 5 days',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Development',
    description: 'I build your website with clean code, responsive design, and regular progress updates.',
    duration: 'max 2 weeks',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Final testing, deployment, and ongoing maintenance to ensure everything runs smoothly.',
    duration: 'max 3 days',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

function StepCard({ step, index, isActive }) {
  return (
    <motion.div
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          p: '36px 28px',
          borderRight: { md: index < 3 ? '1px solid #e8e0d5' : 'none' },
          borderBottom: {
            xs: index < 3 ? '1px solid #e8e0d5' : 'none',
            sm: index < 2 ? '1px solid #e8e0d5' : index === 2 ? '1px solid #e8e0d5' : 'none',
            md: 'none',
          },
          borderRight: {
            xs: 'none',
            sm: index % 2 === 0 ? '1px solid #e8e0d5' : 'none',
            md: index < 3 ? '1px solid #e8e0d5' : 'none',
          },
          position: 'relative',
          borderTop: `3px solid ${isActive ? ACCENT : 'transparent'}`,
          transition: 'border-top-color 0.3s ease',
          background: isActive ? `linear-gradient(180deg, ${ACCENT}08, transparent)` : 'transparent',
          height: '100%',
        }}
      >
        {/* Animated pulse ring for active step */}
        {isActive && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeOut",
            }}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: `2px solid ${ACCENT}`,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Ghost number with animation */}
        <motion.div
          animate={{
            scale: isActive ? 1.05 : 1,
            color: isActive ? ACCENT : 'rgba(138,154,91,0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          <Typography sx={{
            fontFamily: 'var(--heading)', fontSize: '56px',
            fontWeight: 700, color: 'rgba(138,154,91,0.1)',
            lineHeight: 1, mb: '-12px', letterSpacing: '-2px',
          }}>
            {step.number}
          </Typography>
        </motion.div>

        {/* Icon with bounce animation when active */}
        <motion.div
          animate={{
            scale: isActive ? [1, 1.1, 1] : 1,
            backgroundColor: isActive ? `${ACCENT}28` : `${ACCENT}18`,
          }}
          transition={{
            scale: { duration: 0.5, ease: "easeOut" },
            backgroundColor: { duration: 0.3 },
          }}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: ACCENT,
            marginBottom: '18px',
          }}
        >
          {step.icon}
        </motion.div>

        {/* Title */}
        <Typography sx={{
          fontFamily: 'var(--heading)', fontSize: '18px',
          fontWeight: 600, color: '#2e2820', mb: '12px',
        }}>
          {step.title}
        </Typography>

        {/* Description with fade animation */}
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Typography sx={{
            fontFamily: 'var(--sans)', fontSize: '14px',
            color: '#6b5e4a', lineHeight: 1.8, mb: '16px',
          }}>
            {step.description}
          </Typography>
        </motion.div>

        {/* Duration */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={ACCENT}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              rotate: isActive ? [0, 360] : 0,
            }}
            transition={{
              rotate: { duration: 2, ease: "linear", repeat: isActive ? Infinity : 0 },
            }}
          >
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </motion.svg>
          <Typography sx={{
            fontFamily: 'var(--sans)', fontSize: '14px',
            fontWeight: 600, color: ACCENT, letterSpacing: '0.5px',
          }}>
            {step.duration}
          </Typography>
        </Box>

        {/* Progress connector line */}
        {isActive && index < 3 && (
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              height: '2px',
              background: ACCENT,
            }}
          />
        )}
      </Box>
    </motion.div>
  );
}

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Change active step every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ py: { xs: '60px', md: '100px' }, px: '5%', bgcolor: '#ffffff' }}>
      <Box sx={{ maxWidth: '1350px', mx: 'auto' }}>

        {/* Header with animated indicator */}
        <Box sx={{ textAlign: 'center', mb: '64px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" sx={{
              fontFamily: 'var(--heading)',
              fontSize: { xs: '28px', md: '40px' },
              fontWeight: 500, color: '#2e2820', lineHeight: 1.1, mb: '16px',
            }}>
              Step by Step Approach
            </Typography>
            <Typography sx={{
              fontFamily: 'var(--sans)', fontSize: '16px',
              color: '#6b5e4a', lineHeight: 1.7,
            }}>
              Every project follows this proven framework
            </Typography>
          </motion.div>

          {/* Step indicator dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: '32px' }}>
            {steps.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveStep(i)}
                style={{
                  width: i === activeStep ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: i === activeStep ? ACCENT : '#e8e0d5',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ scale: 1.2 }}
                animate={{
                  width: i === activeStep ? '32px' : '8px',
                  background: i === activeStep ? ACCENT : '#e8e0d5',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Steps */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: '0',
          border: '1px solid #e8e0d5',
        }}>
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} isActive={i === activeStep} />
          ))}
        </Box>

        {/* Current step label */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ textAlign: 'center', marginTop: '32px' }}
        >
          <Typography sx={{
            fontFamily: 'var(--sans)', fontSize: '14px',
            color: ACCENT, fontWeight: 600, letterSpacing: '2px',
          }}>
            CURRENTLY: STEP {steps[activeStep].number} — {steps[activeStep].title}
          </Typography>
        </motion.div>

      </Box>
    </Box>
  );
}