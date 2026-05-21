import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';

function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        bgcolor: '#faf7f2',
        borderBottom: '1px solid #e8e0d5',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 2, md: 4 } }}>
          <Box 
            component={Link} 
            to="/" 
            sx={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#8a9a5b',
              fontFamily: "'Finlandica Headline', system-ui, sans-serif",
              textDecoration: 'none'
            }}
          >
            FreelanceDev
          </Box>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button 
              component={Link} 
              to="/" 
              sx={{ 
                color: '#3d3529',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', color: '#8a9a5b' }
              }}
            >
              Home
            </Button>
            <Button 
              component={Link} 
              to="/about" 
              sx={{ 
                color: '#3d3529',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', color: '#8a9a5b' }
              }}
            >
              About
            </Button>
            <Button 
              component={Link} 
              to="/service"
              sx={{ 
                color: '#3d3529',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', color: '#8a9a5b' }
              }}
            >
              Services
            </Button>
            <Button 
              component={Link} 
              to="/work" 
              sx={{ 
                color: '#3d3529',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', color: '#8a9a5b' }
              }}
            >
              Work
            </Button>
            <Button 
              component={Link} 
              to="/process" 
              sx={{ 
                color: '#3d3529',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', color: '#8a9a5b' }
              }}
            >
              Process
            </Button>
            <Button 
              component={Link} 
              to="/faq" 
              sx={{ 
                color: '#3d3529',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', color: '#8a9a5b' }
              }}
            >
              FAQ
            </Button>
            <Button 
              component={Link} 
              to="/contact" 
              sx={{ 
                color: '#3d3529',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { bgcolor: 'transparent', color: '#8a9a5b' }
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;