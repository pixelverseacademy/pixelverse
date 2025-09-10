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
    { label: 'Coaches', path: '/coaches', icon: <PeopleIcon /> },
    { label: 'Partnerships', path: '/partnerships', icon: <PartnershipIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ];

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: '#1e1e1e', height: '100%' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #333333' }}>
        <Typography variant="h6" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
          Pixelverse Academy
        </Typography>
        <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
          (919) 555-0123
        </Typography>
        <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
          vinodht@pixelverseacademy.com
        </Typography>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} sx={{ px: 2 }}>
            <ListItemIcon sx={{ color: location.pathname === item.path ? '#ff6b35' : '#b0b0b0' }}>
              {item.icon}
            </ListItemIcon>
            <Button
              component={RouterLink}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#ff6b35' : '#ffffff',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                textTransform: 'none',
                justifyContent: 'flex-start',
                px: 0,
                '&:hover': {
                  color: '#ff6b35',
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
      <AppBar position="sticky" sx={{ backgroundColor: '#1e1e1e' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#ff6b35' }}>
            Pixelverse Academy
          </Typography>
          
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
              (919) 555-0123
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
            backgroundColor: '#1e1e1e',
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
          backgroundColor: '#1e1e1e',
          borderTop: '1px solid #333333',
          py: 4,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                Pixelverse Academy
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 2 }}>
                Empowering the next generation of innovators through comprehensive 
                technology education in Durham and Holly Springs, NC.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                Phone: (919) 555-0123
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                Email: vinodht@pixelverseacademy.com
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                Locations: Durham & Holly Springs, NC
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
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
                      color: '#b0b0b0',
                      textTransform: 'none',
                      fontSize: '0.875rem',
                      minWidth: 'auto',
                      px: 1,
                      py: 0.5,
                      '&:hover': {
                        color: '#ff6b35',
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
          
          <Box sx={{ borderTop: '1px solid #333333', mt: 4, pt: 2, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              © 2024 Pixelverse Academy. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
