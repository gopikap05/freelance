import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#faf7f2', height: '100%' }}>
      <Box 
        component={Link} 
        to="/" 
        sx={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#8a9a5b',
          fontFamily: "'Finlandica Headline', system-ui, sans-serif",
          textDecoration: 'none',
          display: 'block',
          py: 3,
          borderBottom: '1px solid #e8e0d5',
        }}
      >
        Freelance
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path}
              sx={{
                textAlign: 'center',
                color: isActive(item.path) ? '#8a9a5b' : '#3d3529',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                '&:hover': {
                  color: '#8a9a5b',
                  bgcolor: 'transparent',
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': { opacity: 0.8 }
            }}
          >
            Freelance
          </Box>
          
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navItems.map((item) => (
              <Button 
                key={item.name}
                component={Link} 
                to={item.path} 
                sx={{ 
                  color: isActive(item.path) ? '#8a9a5b' : '#3d3529',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '14px',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: isActive(item.path) ? '100%' : '0%',
                    height: '2px',
                    bgcolor: '#8a9a5b',
                    transform: 'translateX(-50%)',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': { 
                    bgcolor: 'transparent', 
                    color: '#8a9a5b',
                    '&::after': {
                      width: '100%',
                    }
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#3d3529' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: '280px', boxSizing: 'border-box' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;