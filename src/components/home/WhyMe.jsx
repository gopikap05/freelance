import { Box, Typography, Grid } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import ChatIcon from '@mui/icons-material/Chat';
import UpdateIcon from '@mui/icons-material/Update';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function WhyMe() {
  const reasons = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#8a9a5b' }} />,
      title: 'Fast Turnaround',
      description: 'I respect your time and deliver projects on schedule without compromising quality.'
    },
    {
      icon: <ChatIcon sx={{ fontSize: 40, color: '#8a9a5b' }} />,
      title: 'Clear Communication',
      description: 'Regular updates, transparent process, and always available to answer your questions.'
    },
    {
      icon: <UpdateIcon sx={{ fontSize: 40, color: '#8a9a5b' }} />,
      title: 'Ongoing Support',
      description: 'I don\'t just build and leave. I provide maintenance and support after launch.'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#8a9a5b' }} />,
      title: 'Client Focused',
      description: 'Your success is my success. I work closely with you to achieve your goals.'
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
          Why Choose Me
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
          What makes working with me different
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
          I bring more than just technical skills to every project
        </Typography>

        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
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
                <Box sx={{ mb: 2 }}>{reason.icon}</Box>
                <Typography
                  sx={{
                    fontFamily: "'Finlandica Headline', system-ui, sans-serif",
                    fontSize: '22px',
                    color: '#3d3529',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {reason.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    color: '#6b5e4a',
                    lineHeight: 1.6
                  }}
                >
                  {reason.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default WhyMe;