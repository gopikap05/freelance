import { Box, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SpeedIcon from '@mui/icons-material/Speed';

function Services() {
  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 45, color: '#8a9a5b' }} />,
      title: 'React Development',
      description: 'Modern, scalable web applications built with React, hooks, context API, and best practices.'
    },
    {
      icon: <WebIcon sx={{ fontSize: 45, color: '#8a9a5b' }} />,
      title: 'WordPress + Bricks',
      description: 'Custom WordPress websites with Bricks Builder. Flexible, powerful, and easy to manage.'
    },
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 45, color: '#8a9a5b' }} />,
      title: 'E-Commerce Solutions',
      description: 'Fully functional online stores with WooCommerce, payment gateways, and inventory management.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 45, color: '#8a9a5b' }} />,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites with optimized code, images, and Core Web Vitals.'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#ffffff'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '14px',
            color: '#8a9a5b',
            letterSpacing: '3px',
            mb: 2,
            textTransform: 'uppercase',
            textAlign: 'center'
          }}
        >
          What I Offer
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Finlandica Headline', system-ui, sans-serif",
            fontSize: { xs: '32px', md: '42px' },
            color: '#3d3529',
            fontWeight: 500,
            mb: 2,
            textAlign: 'center'
          }}
        >
          Services to help you succeed online
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '16px',
            color: '#6b5e4a',
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
            mb: 6
          }}
        >
          Comprehensive solutions tailored to your business needs
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  bgcolor: '#faf7f2',
                  borderRadius: 2,
                  border: '1px solid #e8e0d5',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography
                  sx={{
                    fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                    fontSize: '22px',
                    color: '#3d3529',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    color: '#6b5e4a',
                    lineHeight: 1.6
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Services;