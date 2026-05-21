import { useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const slides = [
  {
    title: "React Development",
    subtitle: "Modern Web Applications",
    description: "Building high-performance, scalable React applications with modern best practices. Expert in hooks, context API, state management, and component-based architecture. Delivering fast, SEO-friendly, and dynamic user experiences.",
    buttonText: "",
    bgImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600",
    bgColor: "rgba(0, 0, 0, 0.6)"
  },
  {
    title: "WordPress + Bricks",
    subtitle: "E-Commerce & CMS Solutions",
    description: "Custom WordPress development with Bricks Builder expertise. I've built fully functional e-commerce stores with WooCommerce, payment gateways, product catalogs, and inventory management. Also specializing in custom post types, advanced custom fields, and responsive designs.",
    buttonText: "",
    bgImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600",
    bgColor: "rgba(0, 0, 0, 0.6)"
  },
  {
    title: "Complete Frontend Solutions",
    subtitle: "From Concept to Deployment",
    description: "End-to-end frontend development services. From responsive designs to performance optimization, I deliver pixel-perfect, cross-browser compatible websites. Whether it's a landing page, web app, or complex dashboard - I bring your vision to life with clean code and attention to detail.",
    buttonText: "View Portfolio",
    bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600",
    bgColor: "rgba(0, 0, 0, 0.6)"
  }
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePortfolioClick = () => {
    window.open('https://gopikap05.github.io/', '_blank');
  };

  return (
    <Box
      sx={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: `linear-gradient(${slides[currentSlide].bgColor}, ${slides[currentSlide].bgColor}), url(${slides[currentSlide].bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease'
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              color: '#c4a47a',
              letterSpacing: '3px',
              mb: 2,
              textTransform: 'uppercase'
            }}
          >
            {slides[currentSlide].subtitle}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              fontSize: { xs: '40px', md: '64px' },
              color: '#ffffff',
              mb: 2,
              fontWeight: 600
            }}
          >
            {slides[currentSlide].title}
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: { xs: '16px', md: '18px' },
              color: '#e8e0d5',
              mb: 4,
              lineHeight: 1.7,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            {slides[currentSlide].description}
          </Typography>

          {slides[currentSlide].buttonText && (
            <Button
              variant="contained"
              onClick={handlePortfolioClick}
              sx={{
                bgcolor: '#8a9a5b',
                fontFamily: "'Montserrat', sans-serif",
                textTransform: 'none',
                fontSize: '16px',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: '#7a8a4b'
                }
              }}
            >
              {slides[currentSlide].buttonText}
            </Button>
          )}
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.5
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: currentSlide === index ? 24 : 8,
              height: 8,
              borderRadius: '4px',
              bgcolor: currentSlide === index ? '#c4a47a' : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default HeroSection;