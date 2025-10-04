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
  Menu,
  MenuItem,
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
  Work as WorkIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Palette as PaletteIcon,
  FitnessCenter as FitnessIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsAnchorEl, setProgramsAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProgramsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProgramsAnchorEl(event.currentTarget);
  };

  const handleProgramsMenuClose = () => {
    setProgramsAnchorEl(null);
  };

  const navigationItems = [
    { label: 'Home', path: '/', icon: <SchoolIcon /> },
    { label: 'Why Us', path: '/why-us', icon: <CodeIcon /> },
    { label: 'Programs', path: '/programs', icon: <BuildIcon /> },
    { label: 'Locations', path: '/locations', icon: <LocationIcon /> },
    { label: 'Careers', path: '/careers', icon: <WorkIcon /> },
    { label: 'Partnerships', path: '/partnerships', icon: <PartnershipIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ];

  const programBuckets = [
    { label: 'STEM & Technology', path: '/programs/stem-technology', icon: <CodeIcon sx={{ fontSize: 20 }} /> },
    { label: 'Creative Arts & Design', path: '/programs/creative-arts-design', icon: <PaletteIcon sx={{ fontSize: 20 }} /> },
    { label: 'Life Skills & Career Prep', path: '/programs/life-skills-career-prep', icon: <PeopleIcon sx={{ fontSize: 20 }} /> },
    { label: 'Test Prep & Academic Enrichment', path: '/programs/test-prep-academic-enrichment', icon: <SchoolIcon sx={{ fontSize: 20 }} /> },
    { label: 'Health, Sports & Wellness', path: '/programs/health-sports-wellness', icon: <FitnessIcon sx={{ fontSize: 20 }} /> },
  ];

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: '#0a1929', height: '100%' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #e0e6ed' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <img src="/public/logo.png" alt="PathForge Learning Logo" style={{ height: '32px', width: '32px', marginRight: '8px', objectFit: 'cover', borderRadius: '50%' }} />
          <Typography variant="h6" sx={{ color: '#3498db', fontWeight: 'bold' }}>
            PathForge Learning
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'white' }}>
          (919) 446-4981
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          info@pathforgelearning.com
        </Typography>
      </Box>
      <List>
        {navigationItems.map((item, index) => (
          <React.Fragment key={item.path}>
            {item.label === 'Programs' ? (
              <>
                <ListItem sx={{ px: 2 }}>
                  <ListItemIcon sx={{ color: location.pathname.startsWith('/programs') ? '#3498db' : '#7f8c8d' }}>
                    <BuildIcon />
                  </ListItemIcon>
                  <Button
                    endIcon={mobileProgramsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                    sx={{
                      color: location.pathname.startsWith('/programs') ? '#3498db' : '#ffffff',
                      fontWeight: location.pathname.startsWith('/programs') ? 'bold' : 'normal',
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      px: 0,
                      '&:hover': {
                        color: '#3498db',
                      },
                    }}
                  >
                    Programs
                  </Button>
                </ListItem>
                {mobileProgramsOpen && programBuckets.map((bucket) => (
                  <ListItem key={bucket.path} sx={{ px: 4 }}>
                    <Button
                      component={RouterLink}
                      to={bucket.path}
                      onClick={handleDrawerToggle}
                      sx={{
                        color: location.pathname === bucket.path ? '#3498db' : '#ffffff',
                        fontWeight: location.pathname === bucket.path ? 'bold' : 'normal',
                        textTransform: 'none',
                        justifyContent: 'flex-start',
                        px: 0,
                        '&:hover': {
                          color: '#3498db',
                        },
                      }}
                    >
                      {bucket.icon}
                      <Box sx={{ ml: 1 }}>{bucket.label}</Box>
                    </Button>
                  </ListItem>
                ))}
              </>
            ) : (
              <ListItem sx={{ px: 2 }}>
                <ListItemIcon sx={{ color: location.pathname === item.path ? '#3498db' : '#7f8c8d' }}>
                  {item.icon}
                </ListItemIcon>
                <Button
                  startIcon={item.icon} component={RouterLink}
                  to={item.path}
                  onClick={handleDrawerToggle}
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
            )}

          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(135deg, #2E3740 0%, #1a1f26 100%)',
          backdropFilter: 'blur(15px)',
          borderBottom: '3px solid #8F5BD9',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
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
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              <img src="/public/logo.png" alt="PathForge Learning Logo" style={{ height: '60px', width: '60px', marginRight: '16px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 12px rgba(143, 91, 217, 0.3)' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography variant="h6" component="div" sx={{ 
                  fontWeight: '800', 
                  color: '#8F5BD9', 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.5rem',
                  letterSpacing: '0.5px',
                  background: 'linear-gradient(45deg, #8F5BD9 30%, #26A69A 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 4px rgba(143, 91, 217, 0.3))',
                  lineHeight: 1.2,
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                  transition: 'transform 0.3s ease',
                }}>
                  PathForge Learning
                </Typography>
                <Typography variant="caption" sx={{ 
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '0.75rem',
                  color: '#26A69A',
                  fontWeight: '600',
                  letterSpacing: '0.3px',
                  fontStyle: 'italic',
                  lineHeight: 1,
                }}>
                  Empowering Minds, Forging Future
                </Typography>
              </Box>
            </Box>
        </Box>
          
          {/* Desktop Navigation */}
           <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
             {navigationItems.map((item) => (
               <Box key={item.path} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                 {item.label === 'Programs' ? (
                   <>
                     <Button
                       startIcon={item.icon}
                       endIcon={<KeyboardArrowDownIcon />}
                       onClick={handleProgramsMenuOpen}
                       sx={{
                         color: 'white',
                         fontWeight: location.pathname.startsWith(item.path) ? 'bold' : 'normal',
                         textTransform: 'none',
                         fontFamily: 'Poppins, sans-serif',
                         '&:hover': {
                           backgroundColor: 'rgba(143, 91, 217, 0.2)',
                           color: '#8F5BD9',
                           transform: 'translateY(-2px)',
                         },
                         transition: 'all 0.3s ease',
                       }}
                       aria-controls={programsAnchorEl ? 'programs-menu' : undefined}
                       aria-haspopup="true"
                       aria-expanded={programsAnchorEl ? 'true' : undefined}
                     >
                       {item.label}
                     </Button>
                     <Menu
                       id="programs-menu"
                       anchorEl={programsAnchorEl}
                       open={Boolean(programsAnchorEl)}
                       onClose={handleProgramsMenuClose}
                       MenuListProps={{
                         'aria-labelledby': 'programs-button',
                       }}
                       sx={{
                         '& .MuiPaper-root': {
                           backgroundColor: '#0a1929',
                           color: 'white',
                           border: '1px solid #333333',
                         },
                       }}
                     >
                       {programBuckets.map((bucket) => (
                         <MenuItem
                           key={bucket.path}
                           component={RouterLink}
                           to={bucket.path}
                           onClick={handleProgramsMenuClose}
                           sx={{
                             color: location.pathname === bucket.path ? '#3498db' : 'white',
                             fontWeight: location.pathname === bucket.path ? 'bold' : 'normal',
                             '&:hover': {
                               backgroundColor: 'rgba(255, 107, 53, 0.1)',
                             },
                           }}
                         >
                           {bucket.icon}
                           <Box sx={{ ml: 1 }}>{bucket.label}</Box>
                         </MenuItem>
                       ))}
                     </Menu>
                   </>
                 ) : (
                   <Button
                     startIcon={item.icon} component={RouterLink}
                     to={item.path}
                     sx={{
                       color: 'white',
                       fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                       textTransform: 'none',
                       fontFamily: 'Poppins, sans-serif',
                       '&:hover': {
                         backgroundColor: 'rgba(143, 91, 217, 0.2)',
                         color: '#8F5BD9',
                         transform: 'translateY(-2px)',
                       },
                       transition: 'all 0.3s ease',
                     }}
                   >
                     {item.label}
                   </Button>
                 )}
                {item.label === 'Contact' && (
                  <Box sx={{ display: 'flex', gap: 0.5, ml: 1 }}>
                    <IconButton
                      href="https://www.instagram.com/pathforgelearning/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#e4405f',
                        p: 0.5,
                        '&:hover': {
                          color: '#e4405f',
                          backgroundColor: 'rgba(228, 64, 95, 0.1)',
                        },
                      }}
                      size="small"
                    >
                      <InstagramIcon sx={{ fontSize: '1rem' }} />
                    </IconButton>
                    <IconButton
                      href="https://www.facebook.com/profile.php?id=61580934554373"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#1877f2',
                        p: 0.5,
                        '&:hover': {
                          color: '#1877f2',
                          backgroundColor: 'rgba(24, 119, 242, 0.1)',
                        },
                      }}
                      size="small"
                    >
                      <FacebookIcon sx={{ fontSize: '1rem' }} />
                    </IconButton>
                    <IconButton
                      href="https://www.linkedin.com/company/pathforge-learning"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#0077b5',
                        p: 0.5,
                        '&:hover': {
                          color: '#0077b5',
                          backgroundColor: 'rgba(0, 119, 181, 0.1)',
                        },
                      }}
                      size="small"
                    >
                      <LinkedInIcon sx={{ fontSize: '1rem' }} />
                    </IconButton>
                  </Box>
                )}
              </Box>
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
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem', lineHeight: 1.2, fontFamily: 'Nunito, sans-serif', fontWeight: '600' }}>
              (919) 446-4981
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem', lineHeight: 1.2, fontFamily: 'Nunito, sans-serif', fontWeight: '600' }}>
            info@pathforgelearning.com
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

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
              <Typography variant="h6" sx={{ color: '#3498db', fontWeight: 'bold' }}>
                PathForge Learning
              </Typography>
            </Box>
              <Typography
                variant="body1"
                sx={{
                  color: '#ffffff',
                  fontWeight: '500',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                  lineHeight: 1.6,
                  mb: 2
                }}
              >
                Empowering the next generation through comprehensive enrichment programs in STEM & Technology, Creative Arts & Design, Life Skills & Career Prep, Test Prep & Academic Enrichment, and Health, Sports & Wellness across the Raleigh-Durham area including Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, Chapel Hill, and Hillsborough, NC.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                Phone: (919) 446-4981
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                Email: info@pathforgelearning.com
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                Locations: Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, Chapel Hill & Hillsborough, NC
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
                    startIcon={item.icon} component={RouterLink}
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

              {/* Social Media Links */}
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    href="https://www.facebook.com/profile.php?id=61580934554373"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#1877f2',
                      p: 1,
                      '&:hover': {
                        color: '#1877f2',
                        backgroundColor: 'rgba(24, 119, 242, 0.1)',
                      },
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.instagram.com/pathforgelearning/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#e4405f',
                      p: 1,
                      '&:hover': {
                        color: '#e4405f',
                        backgroundColor: 'rgba(228, 64, 95, 0.1)',
                      },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/company/pathforge-learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#0077b5',
                      p: 1,
                      '&:hover': {
                        color: '#0077b5',
                        backgroundColor: 'rgba(0, 119, 181, 0.1)',
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ borderTop: '1px solid #0a1929', mt: 4, pt: 2, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'white' }}>
              © 2024 PathForge Learning. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
