import { Box, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 45, color: '#8a9a5b' }} />,
    title: 'React Development',
    description: 'Modern, scalable web applications built with React, hooks, context API, and best practices.',
    features: ['Custom Components', 'State Management', 'API Integration', 'Responsive Design'],
    price: 'Starting at $1500'
  },
  {
    icon: <WebIcon sx={{ fontSize: 45, color: '#8a9a5b' }} />,
    title: 'WordPress + Bricks',
    description: 'Custom WordPress websites with Bricks Builder. Flexible, powerful, and easy to manage.',
    features: ['Bricks Builder Expert', 'Custom Post Types', 'ACF Integration', 'SEO Optimized'],
    price: 'Starting at $1200'
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 45, color: '#8a9a5b' }} />,
    title: 'E-Commerce Solutions',
    description: 'Fully functional online stores with WooCommerce, payment gateways, and inventory management.',
    features: ['Product Catalogs', 'Payment Integration', 'Inventory Management', 'Cart & Checkout'],
    price: 'Starting at $2000'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 45, color: '#8a9a5b' }} />,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites with optimized code, images, and Core Web Vitals.',
    features: ['Speed Optimization', 'Core Web Vitals', 'Image Optimization', 'Code Splitting'],
    price: 'Starting at $800'
  }
];

function ServiceCards() {
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
          What I Offer
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
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  p: 4,
                  bgcolor: '#faf7f2',
                  borderRadius: 2,
                  border: '1px solid #e8e0d5',
                  height: '100%',
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
                    fontSize: '26px',
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
                    fontSize: '15px',
                    color: '#6b5e4a',
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  {service.description}
                </Typography>

                {/* What's Included */}
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    color: '#8a9a5b',
                    fontWeight: 600,
                    mb: 2,
                    textTransform: 'uppercase'
                  }}
                >
                  What's Included:
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  {service.features.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: '#8a9a5b' }} />
                      <Typography
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '14px',
                          color: '#3d3529'
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Pricing */}
                <Box
                  sx={{
                    pt: 2,
                    borderTop: '1px solid #e8e0d5',
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontSize: '22px',
                      color: '#8a9a5b',
                      fontWeight: 600
                    }}
                  >
                    {service.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '12px',
                      color: '#9b8e7a'
                    }}
                  >
                    Based on project requirements
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ServiceCards;