import { Box, Typography, Grid, Chip } from '@mui/material';

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

function TechIndustries() {
  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#f5f0e8'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Grid container spacing={6}>
          {/* Tech Stack */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                color: '#8a9a5b',
                letterSpacing: '3px',
                mb: 2,
                textTransform: 'uppercase'
              }}
            >
              My Toolkit
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontSize: { xs: '32px', md: '42px' },
                color: '#3d3529',
                fontWeight: 500,
                mb: 4
              }}
            >
              Tech Stack & Tools
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {techStack.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  sx={{
                    bgcolor: '#ffffff',
                    color: '#3d3529',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    py: 2.5,
                    px: 1,
                    border: '1px solid #e8e0d5',
                    '&:hover': {
                      bgcolor: '#8a9a5b',
                      color: '#ffffff',
                      borderColor: '#8a9a5b'
                    }
                  }}
                />
              ))}
            </Box>
          </Grid>

          {/* Industries */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                color: '#8a9a5b',
                letterSpacing: '3px',
                mb: 2,
                textTransform: 'uppercase'
              }}
            >
              Who I Work With
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontSize: { xs: '32px', md: '42px' },
                color: '#3d3529',
                fontWeight: 500,
                mb: 4
              }}
            >
              Industries & Clients
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {industries.map((industry, index) => (
                <Chip
                  key={index}
                  label={industry}
                  variant="outlined"
                  sx={{
                    borderColor: '#8a9a5b',
                    color: '#8a9a5b',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    py: 2.5,
                    px: 1,
                    bgcolor: 'transparent',
                    '&:hover': {
                      bgcolor: '#8a9a5b',
                      color: '#ffffff',
                      borderColor: '#8a9a5b'
                    }
                  }}
                />
              ))}
            </Box>

            {/* Note about custom solutions */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                bgcolor: '#ffffff',
                borderRadius: 2,
                borderLeft: '4px solid #8a9a5b'
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                  fontSize: '18px',
                  color: '#3d3529',
                  fontWeight: 600,
                  mb: 1
                }}
              >
                Not seeing your industry?
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  color: '#6b5e4a',
                  lineHeight: 1.6
                }}
              >
                I work with businesses of all sizes and industries. Every project is unique, 
                and I customize my approach to fit your specific needs. Let's talk about your project.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default TechIndustries;