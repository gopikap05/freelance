import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer"
      sx={{ 
        bgcolor: '#f5f0e8',
        borderTop: '1px solid #e8e0d5',
        py: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="xl">
        <Typography 
          sx={{ 
            textAlign: 'center', 
            color: '#6b5e4a',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '14px'
          }}
        >
          © 2026 FreelanceDev. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;