import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  TextField,
  Paper,
  Stack,
  Chip,
  Divider,
  IconButton,
  Fade,
  Zoom,
  Avatar
} from '@mui/material';
import { 
  Event as EventIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Email as EmailIcon,
  Send as SendIcon,
  History as HistoryIcon
} from '@mui/icons-material';

const past = [
  {
    name: "Robotics Expo 2024",
    desc: "Students showcased their robots and won awards.",
    img: "https://placehold.co/400x200?text=Robotics+Expo"
  }
];

export default function Events() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Hero Section */}
        <Fade in={true} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                mb: 3, 
                fontWeight: 800,
                background: 'linear-gradient(45deg, #3498db, #2ecc71)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Events & Activities
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#7f8c8d',
                fontWeight: 400,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Discover our past achievements and stay connected with our community
            </Typography>
          </Box>
        </Fade>

        {/* Past Events Section */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ mb: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
                <Avatar sx={{ 
                  backgroundColor: '#e74c3c',
                  width: 50, 
                  height: 50,
                  boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)'
                }}>
                  <HistoryIcon sx={{ fontSize: 28 }} />
                </Avatar>
                <Typography 
                  variant="h3" 
                  component="h2" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#2c3e50',
                    textShadow: '1px 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  Past Events Highlights
                </Typography>
              </Stack>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#7f8c8d',
                  fontWeight: 400,
                  maxWidth: '500px',
                  mx: 'auto'
                }}
              >
                Celebrating our community's achievements and memorable moments
              </Typography>
            </Box>
            
            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
              {past.map((event, index) => (
                <Grid item xs={12} sm={6} key={event.name} sx={{ display: 'flex' }}>
                  <Zoom in={true} timeout={600 + index * 200} style={{ width: '100%', height: '100%' }}>
                    <Card sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      background: 'white',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      border: '2px solid #e74c3c20',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 15px 35px rgba(231, 76, 60, 0.3)',
                      }
                    }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={event.img}
                        alt={event.name}
                        sx={{ 
                          objectFit: 'cover',
                          borderBottom: '3px solid #e74c3c'
                        }}
                      />
                      <CardContent sx={{ 
                        p: 3, 
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}>
                        <Box>
                          <Typography 
                            variant="h6" 
                            component="h3" 
                            sx={{ 
                              fontWeight: 700, 
                              mb: 2,
                              color: '#2c3e50',
                              fontSize: '1.1rem'
                            }}
                          >
                            {event.name}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: '#7f8c8d',
                              lineHeight: 1.6,
                              fontSize: '0.9rem'
                            }}
                          >
                            {event.desc}
                          </Typography>
                        </Box>
                        
                        <Chip 
                          label="Completed"
                          size="small"
                          sx={{ 
                            backgroundColor: '#e74c3c15',
                            color: '#e74c3c',
                            fontWeight: 600,
                            borderRadius: 2,
                            fontSize: '0.75rem',
                            alignSelf: 'flex-start',
                            mt: 2
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Newsletter Signup Section */}
        <Fade in={true} timeout={1200}>
          <Box sx={{ 
            background: 'linear-gradient(135deg, #3498db, #2ecc71)',
            borderRadius: 6,
            p: 6,
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 15px 35px rgba(52, 152, 219, 0.3)'
          }}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 4 }}>
              <Avatar sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)',
                width: 60, 
                height: 60,
                backdropFilter: 'blur(10px)'
              }}>
                <EmailIcon sx={{ fontSize: 32 }} />
              </Avatar>
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  fontWeight: 700,
                  textShadow: '1px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Stay Connected
              </Typography>
            </Stack>
            
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4, 
                opacity: 0.95,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Subscribe to our newsletter to get the latest updates on events, programs, and opportunities in our community.
            </Typography>
            
            <Box component="form" onSubmit={handleNewsletterSubmit}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                alignItems="center"
                justifyContent="center"
                sx={{ maxWidth: 500, mx: 'auto' }}
              >
                <TextField
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  variant="outlined"
                  size="medium"
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: 3,
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="large"
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    minWidth: { xs: '100%', sm: 'auto' },
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
