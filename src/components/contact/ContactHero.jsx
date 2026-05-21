import { Box, Typography } from '@mui/material';

function ContactHero() {
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
          Get In Touch
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
          Let's Work Together
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
          Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you within 24 hours.
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactHero;