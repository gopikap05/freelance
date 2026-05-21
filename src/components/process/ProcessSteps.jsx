import { Box, Typography, Grid } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const steps = [
  {
    number: '01',
    icon: <EmojiObjectsIcon sx={{ fontSize: 50, color: '#8a9a5b' }} />,
    title: 'Discovery',
    description: 'We discuss your goals, target audience, and project requirements. I learn about your brand and vision.',
    duration: '1-2 days'
  },
  {
    number: '02',
    icon: <DesignServicesIcon sx={{ fontSize: 50, color: '#8a9a5b' }} />,
    title: 'Planning & Design',
    description: 'I create wireframes, mockups, and plan the architecture. You review and provide feedback.',
    duration: '3-5 days'
  },
  {
    number: '03',
    icon: <CodeIcon sx={{ fontSize: 50, color: '#8a9a5b' }} />,
    title: 'Development',
    description: 'I build your website with clean code, responsive design, and regular progress updates.',
    duration: '2-4 weeks'
  },
  {
    number: '04',
    icon: <RocketLaunchIcon sx={{ fontSize: 50, color: '#8a9a5b' }} />,
    title: 'Launch & Support',
    description: 'Final testing, deployment, and ongoing maintenance to ensure everything runs smoothly.',
    duration: '2-3 days'
  }
];

function ProcessSteps() {
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
          Step by Step Approach
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
          Every project follows this proven framework
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Box sx={{ textAlign: 'center', position: 'relative' }}>
                <Typography
                  sx={{
                    fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                    fontSize: '50px',
                    color: 'rgba(138, 154, 91, 0.15)',
                    position: 'absolute',
                    top: -20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontWeight: 700
                  }}
                >
                  {step.number}
                </Typography>
                <Box sx={{ mb: 2, pt: 2, position: 'relative', zIndex: 1 }}>
                  {step.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                    fontSize: '22px',
                    color: '#3d3529',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    color: '#6b5e4a',
                    lineHeight: 1.6,
                    mb: 1
                  }}
                >
                  {step.description}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '12px',
                    color: '#8a9a5b',
                    fontWeight: 600
                  }}
                >
                  ⏱ {step.duration}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ProcessSteps;