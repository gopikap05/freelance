import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'WordPress + WooCommerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600'
  },
  {
    title: 'SaaS Dashboard',
    category: 'React + TypeScript',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600'
  },
  {
    title: 'Creative Agency',
    category: 'WordPress + Bricks',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600'
  }
];

function FeaturedProjects() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#f5f0e8'
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
          Featured Work
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
          Recent Projects
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
          Here are some of my latest work. Each project is crafted with care and attention to detail.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid #e8e0d5',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <Box sx={{ p: 3, bgcolor: '#ffffff' }}>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '12px',
                      color: '#8a9a5b',
                      mb: 1
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontSize: '20px',
                      color: '#3d3529',
                      fontWeight: 600
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/work')}
            sx={{
              borderColor: '#8a9a5b',
              color: '#8a9a5b',
              fontFamily: "'Montserrat', sans-serif",
              textTransform: 'none',
              px: 4,
              '&:hover': {
                borderColor: '#7a8a4b',
                bgcolor: 'rgba(138, 154, 91, 0.1)'
              }
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FeaturedProjects;