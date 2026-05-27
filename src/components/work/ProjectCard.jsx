import { Box, Typography } from '@mui/material';

const ACCENT = "#8a9a5b";

export const projects = [
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
    githubUrl: '#',
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
    githubUrl: '#',
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
    githubUrl: '#',
  },
];

export function ProjectCard({ project, isSelected, onClick }) {
  return (
    <Box
      onClick={() => onClick(project)}
      sx={{
        cursor: 'pointer',
        overflow: 'hidden',
        borderTop: `3px solid ${isSelected ? ACCENT : 'transparent'}`,
        border: isSelected ? `1px solid ${ACCENT}` : '1px solid #e8e0d5',
        borderTop: `3px solid ${isSelected ? ACCENT : 'transparent'}`,
        transition: 'border-color 0.2s, border-top-color 0.2s',
        '&:hover': {
          borderTopColor: ACCENT,
          borderColor: '#d4c4a8',
        },
      }}
    >
      {/* Image */}
      <Box sx={{ overflow: 'hidden', height: '220px' }}>
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            '&:hover': { transform: 'scale(1.04)' },
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: '20px 24px', bgcolor: '#faf7f2' }}>
        <Typography sx={{
          fontFamily: 'var(--sans)', fontSize: '14px', fontWeight: 600,
          letterSpacing: '2px', textTransform: 'uppercase',
          color: ACCENT, mb: '8px',
        }}>
          {project.category}
        </Typography>
        <Typography sx={{
          fontFamily: 'var(--heading)', fontSize: '20px',
          fontWeight: 500, color: '#2e2820', lineHeight: 1.2,
        }}>
          {project.title}
        </Typography>
      </Box>
    </Box>
  );
}