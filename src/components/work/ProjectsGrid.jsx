import { useState } from 'react';
import { Box, Typography, Grid, Chip, Button, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    category: 'WordPress + WooCommerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
    problem: 'Client needed a fully functional online store with custom product filters, payment integration, and inventory management.',
    solution: 'Built a custom WooCommerce site with Bricks Builder, integrated Stripe payments, and created advanced product filtering system.',
    results: '40% increase in sales, 30% faster checkout process, 99% uptime',
    tools: ['WordPress', 'Bricks Builder', 'WooCommerce', 'Stripe', 'PHP'],
    clientFeedback: 'The new store exceeded our expectations. Sales have never been better!',
    clientName: 'Sarah Johnson',
    clientRole: 'Founder, Modern Retail',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'React + TypeScript',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    problem: 'Startup needed a real-time analytics dashboard for their SaaS product with complex data visualization.',
    solution: 'Developed a React dashboard with charts, real-time data updates, and responsive design for all devices.',
    results: '10,000+ active users, 60% reduction in load time, 95% user satisfaction',
    tools: ['React', 'TypeScript', 'Chart.js', 'MUI', 'REST APIs'],
    clientFeedback: 'The dashboard is beautiful and fast. Our users love it!',
    clientName: 'Michael Chen',
    clientRole: 'CTO, SaaS Startup',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Creative Agency Website',
    category: 'WordPress + Bricks',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    problem: 'Agency needed a portfolio website that showcases their work and attracts high-end clients.',
    solution: 'Created a custom WordPress theme with Bricks, featuring dynamic portfolio filtering and smooth animations.',
    results: '200% increase in inquiries, 45% lower bounce rate, featured on design blogs',
    tools: ['WordPress', 'Bricks Builder', 'CSS Grid', 'Framer Motion', 'PHP'],
    clientFeedback: 'Our new website has completely transformed our business. Highly recommend!',
    clientName: 'Emily Rodriguez',
    clientRole: 'Creative Director',
    liveUrl: '#',
    githubUrl: '#'
  }
];

function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#ffffff'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        {/* Project Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Box
                onClick={() => setSelectedProject(project)}
                sx={{
                  cursor: 'pointer',
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: selectedProject.id === project.id ? '2px solid #8a9a5b' : '1px solid #e8e0d5',
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
                <Box sx={{ p: 3, bgcolor: '#faf7f2' }}>
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
                      fontSize: '22px',
                      color: '#3d3529',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Featured Case Study - Problem/Solution/Results */}
        {selectedProject && (
          <Box>
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
              Case Study
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                fontSize: { xs: '32px', md: '42px' },
                color: '#3d3529',
                fontWeight: 500,
                mb: 4,
                textAlign: 'center'
              }}
            >
              {selectedProject.title}
            </Typography>

            <Grid container spacing={4}>
              {/* Problem */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: '#faf7f2',
                    borderRadius: 2,
                    border: '1px solid #e8e0d5',
                    height: '100%'
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontSize: '20px',
                      color: '#3d3529',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    The Problem
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#6b5e4a',
                      lineHeight: 1.7
                    }}
                  >
                    {selectedProject.problem}
                  </Typography>
                </Box>
              </Grid>

              {/* Solution */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: '#faf7f2',
                    borderRadius: 2,
                    border: '1px solid #e8e0d5',
                    height: '100%'
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontSize: '20px',
                      color: '#3d3529',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    The Solution
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#6b5e4a',
                      lineHeight: 1.7
                    }}
                  >
                    {selectedProject.solution}
                  </Typography>
                </Box>
              </Grid>

              {/* Results */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: '#faf7f2',
                    borderRadius: 2,
                    border: '1px solid #e8e0d5',
                    height: '100%'
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                      fontSize: '20px',
                      color: '#3d3529',
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    The Results
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      color: '#6b5e4a',
                      lineHeight: 1.7
                    }}
                  >
                    {selectedProject.results}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Tools Used */}
            <Box sx={{ mt: 4, mb: 4 }}>
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
                Tools Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedProject.tools.map((tool, index) => (
                  <Chip
                    key={index}
                    label={tool}
                    sx={{
                      bgcolor: '#f5f0e8',
                      color: '#3d3529',
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Client Feedback */}
            <Box
              sx={{
                p: 4,
                bgcolor: '#f5f0e8',
                borderRadius: 2,
                mb: 4,
                textAlign: 'center'
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '18px',
                  color: '#3d3529',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  mb: 3
                }}
              >
                "{selectedProject.clientFeedback}"
              </Typography>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  mx: 'auto',
                  mb: 1,
                  bgcolor: '#8a9a5b'
                }}
              >
                {selectedProject.clientName[0]}
              </Avatar>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  color: '#3d3529',
                  fontWeight: 600
                }}
              >
                {selectedProject.clientName}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  color: '#6b5e4a'
                }}
              >
                {selectedProject.clientRole}
              </Typography>
            </Box>

            {/* Links */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="outlined"
                startIcon={<LaunchIcon />}
                href={selectedProject.liveUrl}
                target="_blank"
                sx={{
                  borderColor: '#8a9a5b',
                  color: '#8a9a5b',
                  '&:hover': {
                    borderColor: '#7a8a4b',
                    bgcolor: 'rgba(138, 154, 91, 0.1)'
                  }
                }}
              >
                Live Demo
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={selectedProject.githubUrl}
                target="_blank"
                sx={{
                  borderColor: '#8a9a5b',
                  color: '#8a9a5b',
                  '&:hover': {
                    borderColor: '#7a8a4b',
                    bgcolor: 'rgba(138, 154, 91, 0.1)'
                  }
                }}
              >
                View Code
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ProjectsGrid;