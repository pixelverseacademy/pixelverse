import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Box, 
  Button, 
  Typography, 
  Grid, 
  Paper,
  TextField,
  Stack
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Info as InfoIcon, 
  Code as CodeIcon, 
  VolunteerActivism as VolunteerIcon, 
  Event as EventIcon, 
  Email as EmailIcon, 
  Favorite as DonateIcon 
} from '@mui/icons-material';
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import theme from "./theme";
import "./App.css";

// NavLinkItem with icon support
function NavLinkItem({ to, label, icon, donate }) {
  return (
    <Button
      component={Link}
      to={to}
      variant={donate ? "contained" : "outlined"}
      color={donate ? "secondary" : "primary"}
      sx={{
        minWidth: donate ? '100%' : 'auto',
        py: 1,
        px: donate ? 2 : 1,
        fontWeight: donate ? 700 : 600,
        fontSize: donate ? 18 : 14,
        letterSpacing: 1,
        textTransform: 'none',
        ...(donate && {
          mt: 1,
          boxShadow: 2,
          '&:hover': {
            boxShadow: 4,
          }
        })
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
        {icon}
        <Typography variant="caption" sx={{ fontSize: '0.75rem', lineHeight: 1 }}>
          {label}
        </Typography>
      </Box>
    </Button>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #eff6ff 100%)',
          overflowX: 'hidden'
        }}>
          {/* Navbar - Full Width */}
          <AppBar 
            position="sticky" 
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)', 
              backdropFilter: 'blur(10px)',
              borderBottom: 1,
              borderColor: 'divider',
              zIndex: 50,
              width: '100%'
            }}
          >
            <Toolbar sx={{ 
              flexDirection: 'column', 
              py: 2, 
              width: '100%',
              maxWidth: 'none',
              px: { xs: 2, sm: 3, md: 4 }
            }}>
              <Box sx={{ mb: 2 }}>
                <Link
                  href="https://givehart.org"
                  style={{ display: 'flex', alignItems: 'center' }}
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://placehold.co/180x40/fff/1e3a8a?text=GiveHart+Inc."
                    alt="GiveHart Inc. Logo"
                    style={{ height: 32, width: 'auto' }}
                  />
                </Link>
              </Box>
              
              {/* Navigation Grid - Full Width */}
              <Box sx={{ width: '100%' }}>
                <Grid container spacing={1} sx={{ width: '100%' }} justifyContent="center">
                  <Grid item xs={6} sm={4} md={3}>
                    <NavLinkItem to="" label="Home" icon={<HomeIcon />} />
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <NavLinkItem to="about" label="About" icon={<InfoIcon />} />
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <NavLinkItem to="programs" label="Programs" icon={<CodeIcon />} />
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <NavLinkItem to="get-involved" label="Get Involved" icon={<VolunteerIcon />} />
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <NavLinkItem to="events" label="Events" icon={<EventIcon />} />
                  </Grid>
                  <Grid item xs={6} sm={4} md={3}>
                    <NavLinkItem to="contact" label="Contact" icon={<EmailIcon />} />
                  </Grid>
                </Grid>

                {/* Donate button full width */}
                <Box sx={{ width: '100%', mt: 1 }}>
                  <NavLinkItem to="donate" label="Donate" icon={<DonateIcon />} donate />
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Main Content */}
          <Box component="main" sx={{ flex: 1, backgroundColor: 'white', py: 4 }}>
            <Container maxWidth="xl">
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="programs" element={<Programs />} />
                <Route path="get-involved" element={<GetInvolved />} />
                <Route path="events" element={<Events />} />
                <Route path="contact" element={<Contact />} />
                <Route path="donate" element={<Donate />} />
              </Routes>
            </Container>
          </Box>

          {/* Footer */}
          <Paper 
            component="footer" 
            sx={{ 
              backgroundColor: 'grey.900', 
              color: 'white', 
              py: 4, 
              mt: 4,
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <Container maxWidth="md">
              <Stack spacing={3} alignItems="center">
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={{ xs: 2, sm: 4 }} 
                  alignItems="center"
                >
                  <Typography variant="h6" component="a" href="mailto:vinodht@pixelverseacademy.com" 
                    sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    vinodht@pixelverseacademy.com
                  </Typography>
                  <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>|</Typography>
                  <Typography variant="h6" component="a" href="tel:1234567890" 
                    sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    919-390-0941
                  </Typography>
                </Stack>
                
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2} 
                  alignItems="center" 
                  sx={{ width: '100%', maxWidth: 400 }}
                >
                  <TextField
                    type="email"
                    placeholder="Sign up for our newsletter"
                    variant="outlined"
                    size="small"
                    required
                    sx={{ 
                      flex: 1,
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'white',
                        '& fieldset': {
                          borderColor: 'secondary.main',
                        },
                        '&:hover fieldset': {
                          borderColor: 'secondary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'secondary.main',
                        },
                      }
                    }}
                  />
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    type="submit"
                    sx={{ 
                      px: 3, 
                      py: 1,
                      fontWeight: 700,
                      textTransform: 'none'
                    }}
                  >
                    Subscribe
                  </Button>
                </Stack>
                
                <Typography variant="body2" sx={{ color: 'secondary.light' }}>
                  &copy; 2025 GiveHart Inc. All rights reserved.
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  Powered by pixelverse LLC
                </Typography>
              </Stack>
            </Container>
          </Paper>
        </Box>
    </ThemeProvider>
  );
}
