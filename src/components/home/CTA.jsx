import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CTA() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
        px: '5%',
        bgcolor: '#8a9a5b'
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto', textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Finlandica Headline', system-ui, sans-serif",
            fontSize: { xs: '32px', md: '48px' },
            color: '#ffffff',
            fontWeight: 500,
            mb: 2
          }}
        >
          Ready to bring your idea to life?
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: { xs: '16px', md: '18px' },
            color: '#f5f0e8',
            maxWidth: '600px',
            mx: 'auto',
            mb: 4,
            lineHeight: 1.6
          }}
        >
          Let's discuss your project and create something amazing together.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate('/contact')}
          sx={{
            bgcolor: '#ffffff',
            color: '#8a9a5b',
            fontFamily: "'Montserrat', sans-serif",
            textTransform: 'none',
            fontSize: '16px',
            px: 5,
            py: 1.5,
            '&:hover': {
              bgcolor: '#f5f0e8',
              color: '#7a8a4b'
            }
          }}
        >
          Start a Project
        </Button>
      </Box>
    </Box>
  );
}

export default CTA;