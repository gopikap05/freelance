import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const steps = [
  { icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: '#8a9a5b' }} />, title: 'Discovery' },
  { icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#8a9a5b' }} />, title: 'Design' },
  { icon: <CodeIcon sx={{ fontSize: 40, color: '#8a9a5b' }} />, title: 'Develop' },
  { icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#8a9a5b' }} />, title: 'Launch' }
];

function ProcessPreview() {
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
          My Process
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
          How I Bring Ideas to Life
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
          A simple, transparent process from start to finish
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{step.icon}</Box>
                <Typography
                  sx={{
                    fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                    fontSize: '18px',
                    color: '#3d3529',
                    fontWeight: 600
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/process')}
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
            Learn More About My Process
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProcessPreview;