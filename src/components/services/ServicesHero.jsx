import { Box, Typography } from '@mui/material';

function ServicesHero() {
  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#faf7f2',
        textAlign: 'center'
      }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
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
          What I Offer
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Finlandica Headline', system-ui, sans-serif",
            fontSize: { xs: '42px', md: '64px' },
            color: '#3d3529',
            fontWeight: 500,
            mb: 3
          }}
        >
          My Services
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: { xs: '16px', md: '18px' },
            color: '#6b5e4a',
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.7
          }}
        >
          Comprehensive web development solutions tailored to your business needs.
          From startups to established brands, I've got you covered.
        </Typography>
      </Box>
    </Box>
  );
}

export default ServicesHero;