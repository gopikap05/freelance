import { Box, Typography } from '@mui/material';

const ACCENT = "#8a9a5b";

const cardStyle = {
  p: '28px 32px',
  bgcolor: '#faf7f2',
  border: '1px solid #e8e0d5',
  borderTop: `3px solid ${ACCENT}`,
  height: '100%',
};

export default function CaseStudy({ project }) {
  return (
    <Box sx={{ pt: '80px', borderTop: '1px solid #e8e0d5' }}>

      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: '48px' }}>
        <Typography sx={{
          fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 600,
          letterSpacing: '3.5px', textTransform: 'uppercase',
          color: ACCENT, mb: '16px',
        }}>
          Case Study
        </Typography>
        <Typography variant="h2" sx={{
          fontFamily: 'var(--heading)',
          fontSize: { xs: '28px', md: '40px' },
          fontWeight: 500, color: '#2e2820', lineHeight: 1.1,
        }}>
          {project.title}
        </Typography>
      </Box>

      {/* Problem / Solution / Results */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gap: '24px',
        mb: '40px',
      }}>
        {[
          { label: 'The Problem', body: project.problem },
          { label: 'The Solution', body: project.solution },
          { label: 'The Results',  body: project.results  },
        ].map(({ label, body }) => (
          <Box key={label} sx={cardStyle}>
            <Typography sx={{
              fontFamily: 'var(--heading)', fontSize: '18px',
              fontWeight: 600, color: '#2e2820', mb: '14px',
            }}>
              {label}
            </Typography>
            <Typography sx={{
              fontFamily: 'var(--sans)', fontSize: '13px',
              color: '#6b5e4a', lineHeight: 1.8,
            }}>
              {body}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}