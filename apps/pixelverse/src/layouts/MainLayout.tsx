import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Container,
  Grid,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  LocationOn as LocationIcon,
  People as PeopleIcon,
  Handshake as PartnershipIcon,
  ContactMail as ContactIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { label: 'Home', path: '/', icon: <SchoolIcon /> },
    { label: 'Why Us', path: '/why-us', icon: <CodeIcon /> },
    { label: 'Curriculum', path: '/curriculum', icon: <BuildIcon /> },
    { label: 'Locations', path: '/locations', icon: <LocationIcon /> },
    { label: 'Partnerships', path: '/partnerships', icon: <PartnershipIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ];

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: '#0a1929', height: '100%' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #e0e6ed' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <img src="/logo.png" alt="PixelVerse Learning Academy Logo" style={{ height: '32px', width: '32px', marginRight: '8px', objectFit: 'cover', borderRadius: '50%' }} />
          <Typography variant="h6" sx={{ color: '#3498db', fontWeight: 'bold' }}>
            PixelVerse Learning Academy
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'white' }}>
          (919) 446-4981
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          vinodht@pixelverseacademy.com
        </Typography>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} sx={{ px: 2 }}>
            <ListItemIcon sx={{ color: location.pathname === item.path ? '#3498db' : '#7f8c8d' }}>
              {item.icon}
            </ListItemIcon>
            <Button
              component={RouterLink}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#3498db' : '#ffffff',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                textTransform: 'none',
                justifyContent: 'flex-start',
                px: 0,
                '&:hover': {
                  color: '#3498db',
                },
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="sticky"
        sx={{
          background: 'rgba(10, 25, 41, 0.95)',
          backdropFilter: 'blur(15px)',
          borderBottom: 'none',
          boxShadow: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar sx={{ minHeight: '64px', px: 0, py: 0 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src="/logo.png" alt="PixelVerse Learning Academy Logo" style={{ height: '40px', width: '40px', marginRight: '12px', marginTop: '-2px', objectFit: 'cover', borderRadius: '50%' }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
                PixelVerse Learning Academy
            </Typography>
        </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navigationItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: 'white',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          
          {/* Contact Info - Desktop Only - Right Aligned */}
          <Box sx={{ 
            display: { xs: 'none', lg: 'flex' }, 
            flexDirection: 'column', 
            alignItems: 'flex-end',
            ml: 4,
            textAlign: 'right'
          }}>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem', lineHeight: 1.2 }}>
              (919) 446-4981
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem', lineHeight: 1.2 }}>
              vinodht@pixelverseacademy.com
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            backgroundColor: '#0a1929',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          background: 'linear-gradient(135deg, #0a1929 0%, #0f1419 100%)',
          borderTop: '1px solid #0a1929',
          py: 4,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                  PixelVerse Learning Academy
                </Typography>
              </Box>
                Empowering the next generation of innovators through comprehensive 
                technology education in Durham and Holly Springs, NC.
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                Phone: (919) 446-4981
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                Email: vinodht@pixelverseacademy.com
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                Locations: Durham & Holly Springs, NC
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    size="small"
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '0.875rem',
                      minWidth: 'auto',
                      px: 1,
                      py: 0.5,
                      '&:hover': {
                        color: '#3498db',
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ borderTop: '1px solid #0a1929', mt: 4, pt: 2, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'white' }}>
              © 2024 PixelVerse Learning Academy. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
