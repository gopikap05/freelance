import { Box, Typography, Grid } from '@mui/material';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'JavaScript',
  'WordPress', 'Bricks Builder', 'WooCommerce', 'PHP',
  'MUI', 'Tailwind CSS', 'Framer Motion', 'Git',
  'Figma', 'REST APIs', 'GraphQL', 'Vite'
];

const industries = [
  'E-commerce & Retail', 'Creative Agencies', 'Startups & SaaS',
  'Small Businesses', 'Portfolios & Freelancers', 'Real Estate'
];

const chipBase = {
  fontFamily: 'var(--sans)',
  fontSize: '14px', fontWeight: 500,
  borderRadius: '2px',
  px: '14px', py: '8px',
  display: 'inline-block',
  cursor: 'default',
  transition: 'all 0.2s',
  lineHeight: 1,
};

function TechIndustries() {
  return (
    <Box sx={{ py: { xs: '60px', md: '100px' }, px: '5%', bgcolor: '#f5f0e8' }}>
      <Box sx={{
        maxWidth: '1350px', mx: 'auto',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: { xs: '48px', md: '64px' },
        alignItems: 'start',
      }}>

        {/* Tech Stack */}
        <Box>
          <Typography sx={{
            fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 600,
            letterSpacing: '3.5px', textTransform: 'uppercase',
            color: '#8a9a5b', mb: '16px',
          }}>
            My Toolkit
          </Typography>
          <Typography variant="h2" sx={{
            fontFamily: 'var(--heading)',
            fontSize: { xs: '26px', md: '38px' },
            fontWeight: 500, color: '#2e2820', lineHeight: 1.1, mb: '28px',
          }}>
            Tech Stack & Tools
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {techStack.map((tech, i) => (
              <Box key={i} component="span" sx={{
                ...chipBase,
                bgcolor: '#fff', color: '#3d3529',
                border: '1px solid #e8e0d5',
                '&:hover': { bgcolor: '#8a9a5b', color: '#fff', borderColor: '#8a9a5b' },
              }}>
                {tech}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Industries */}
        <Box>
          <Typography sx={{
            fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 600,
            letterSpacing: '3.5px', textTransform: 'uppercase',
            color: '#8a9a5b', mb: '16px',
          }}>
            Who I Work With
          </Typography>
          <Typography variant="h2" sx={{
            fontFamily: 'var(--heading)',
            fontSize: { xs: '26px', md: '38px' },
            fontWeight: 500, color: '#2e2820', lineHeight: 1.1, mb: '28px',
          }}>
            Industries & Clients
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {industries.map((industry, i) => (
              <Box key={i} component="span" sx={{
                ...chipBase,
                bgcolor: 'transparent', color: '#8a9a5b',
                border: '1px solid #8a9a5b',
                '&:hover': { bgcolor: '#8a9a5b', color: '#fff' },
              }}>
                {industry}
              </Box>
            ))}
          </Box>

          {/* Note */}
          <Box sx={{
            mt: '32px', p: '24px',
            bgcolor: '#fff', borderLeft: '3px solid #8a9a5b',
          }}>
            <Typography sx={{
              fontFamily: 'var(--heading)', fontSize: '16px',
              fontWeight: 600, color: '#2e2820', mb: '8px',
            }}>
              Not seeing your industry?
            </Typography>
            <Typography sx={{
              fontFamily: 'var(--sans)', fontSize: '14px',
              color: '#6b5e4a', lineHeight: 1.75,
            }}>
              I work with businesses of all sizes and industries. Every project is unique,
              and I customize my approach to fit your specific needs. Let's talk about your project.
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default TechIndustries;