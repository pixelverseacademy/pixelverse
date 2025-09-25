import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  IconButton,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom
} from '@mui/material';
import { 
  ArrowBackIos, 
  ArrowForwardIos, 
  PlayArrow,
  Pause,
  School,
  Code,
  People,
  TrendingUp,
  ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Import images from the images folder
import img1 from "../images/degorddg33dc0iqx1utg.png";
import img2 from "../images/dycbqxgwtt7bewwncgnj.png";
import img7 from "../images/lylfl41k6b06xaapnffa.png";
import img8 from "../images/sgpvppzrrh984epq4zrb.png";

const images = [img1, img2, img7, img8];

// Enhanced Carousel Component with modern styling
function ImageCarousel({ images, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearTimeout(timer);
  }, [current, isPlaying, interval, images.length]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', borderRadius: 4, overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 400, sm: 500, md: 600 },
          overflow: 'hidden',
          borderRadius: 4,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          border: '6px solid',
          borderImageSource: 'linear-gradient(45deg, #3498db, #2ecc71, #e74c3c)',
          borderImageSlice: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 30%, rgba(52, 152, 219, 0.1) 70%)',
            zIndex: 1,
            pointerEvents: 'none'
          }
        }}
      >
        <Fade in={true} timeout={800}>
          <img
            src={images[current]}
            alt={`GiveHart Activity ${current + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.8s ease-in-out',
            }}
          />
        </Fade>
        
        {/* Enhanced Navigation Arrows */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: '#3498db',
            width: 56,
            height: 56,
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            border: '2px solid #3498db',
            zIndex: 2,
            '&:hover': {
              backgroundColor: '#3498db',
              color: 'white',
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: '0 12px 24px rgba(52, 152, 219, 0.4)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          <ArrowBackIos sx={{ fontSize: 24 }} />
        </IconButton>
        
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: '#3498db',
            width: 56,
            height: 56,
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            border: '2px solid #3498db',
            zIndex: 2,
            '&:hover': {
              backgroundColor: '#3498db',
              color: 'white',
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: '0 12px 24px rgba(52, 152, 219, 0.4)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          <ArrowForwardIos sx={{ fontSize: 24 }} />
        </IconButton>

        {/* Enhanced Play/Pause Button */}
        <IconButton
          onClick={handlePlayPause}
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            width: 48,
            height: 48,
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          {isPlaying ? <Pause sx={{ fontSize: 24 }} /> : <PlayArrow sx={{ fontSize: 24 }} />}
        </IconButton>
      </Box>
      
      {/* Enhanced Dots Indicator */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrent(index)}
            sx={{
              width: index === current ? 40 : 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: index === current ? '#3498db' : 'rgba(52, 152, 219, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              border: '2px solid',
              borderColor: index === current ? '#3498db' : 'transparent',
              '&:hover': {
                backgroundColor: '#3498db',
                transform: 'scale(1.2)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      {/* Hero Section with Enhanced Carousel */}
      <Box sx={{ 
        pt: { xs: 4, md: 8 }, 
        pb: { xs: 6, md: 10 },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 1
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Fade in={true} timeout={1200}>
                <Box>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                      fontWeight: 800,
                      color: 'white',
                      mb: 3,
                      textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
                      lineHeight: 1.1
                    }}
                  >
                    Empowering Young
                    <Box component="span" sx={{ 
                      background: 'linear-gradient(45deg, #FFE082, #FFF176)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      display: 'block'
                    }}>
                      Innovators
                    </Box>
                  </Typography>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.9)',
                      mb: 4,
                      lineHeight: 1.6,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      fontWeight: 300
                    }}
                  >
                    Through hands-on STEM education, creative arts, and comprehensive life skills training, 
                    we're building the leaders of tomorrow in underrepresented communities.
                  </Typography>
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                    <Button
                      component={Link}
                      to="/givehart/programs"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                        boxShadow: '0 8px 20px rgba(255, 107, 53, 0.4)',
                        border: 'none',
                        textTransform: 'none',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #E55A2B, #D4821A)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 28px rgba(255, 107, 53, 0.5)',
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Explore Programs
                    </Button>
                    
                    <Button
                      component={Link}
                      to="/givehart/get-involved"
                      variant="outlined"
                      size="large"
                      sx={{
                        px: 4,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        borderColor: 'white',
                        color: 'white',
                        borderWidth: 2,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: 'white',
                          color: '#667eea',
                          borderColor: 'white',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(255,255,255,0.3)',
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Get Involved
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} lg={6}>
              <Zoom in={true} timeout={1000}>
                <Box>
                  <ImageCarousel images={images} />
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>



      {/* Enhanced Programs Overview */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                color: '#2c3e50',
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Programs That Transform Lives
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#7f8c8d',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Comprehensive learning experiences designed to unlock potential and build futures
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            maxWidth: '1000px',
            mx: 'auto',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            {[
              { 
                title: "STEM & Technology", 
                desc: "Robotics, coding, AI, and cutting-edge technology education for the digital future.",
                icon: <Code sx={{ fontSize: 35 }} />,
                color: "primary",
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              },
              { 
                title: "Creative Arts & Design", 
                desc: "Digital arts, music production, and creative expression that nurtures artistic talents.",
                icon: <People sx={{ fontSize: 35 }} />,
                color: "secondary",
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              },
              { 
                title: "Life Skills & Leadership", 
                desc: "Essential skills, leadership development, and career preparation for success.",
                icon: <TrendingUp sx={{ fontSize: 35 }} />,
                color: "success",
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              }
            ].map(({ title, desc, icon, color, gradient }, index) => (
              <Box key={title} sx={{ flex: 1, display: 'flex' }}>
                <Zoom in={true} timeout={1000 + index * 200} style={{ width: '100%', height: '100%' }}>
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: '280px',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      background: gradient,
                      color: 'white',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      p: 3, 
                      flex: 1,
                      display: 'flex', 
                      flexDirection: 'column', 
                      textAlign: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <Box>
                        <Box sx={{ mb: 2 }}>
                          {icon}
                        </Box>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            fontWeight: 700,
                            mb: 2,
                            textShadow: '1px 2px 4px rgba(0,0,0,0.3)',
                            fontSize: '1.3rem'
                          }}
                        >
                          {title}
                        </Typography>
                        
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            mb: 3,
                            lineHeight: 1.6,
                            opacity: 0.95,
                            fontSize: '0.9rem'
                          }}
                        >
                          {desc}
                        </Typography>
                      </Box>
                      
                      <Button
                        component={Link}
                        to="/givehart/programs"
                        variant="outlined"
                        endIcon={<ArrowForward />}
                        size="small"
                        sx={{
                          borderColor: 'white',
                          color: 'white',
                          borderWidth: 2,
                          borderRadius: 2,
                          py: 1,
                          px: 3,
                          fontWeight: 600,
                          textTransform: 'none',
                          alignSelf: 'center',
                          fontSize: '0.875rem',
                          '&:hover': {
                            backgroundColor: 'white',
                            color: '#2c3e50',
                            borderColor: 'white',
                            transform: 'scale(1.05)',
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Zoom>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Enhanced Get Involved Callout */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" fill="%23ffffff" fill-opacity="0.05"/%3E%3C/svg%3E")',
          zIndex: 1
        }
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Fade in={true} timeout={1200}>
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700,
                  color: 'white',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' },
                  textShadow: '2px 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                Join Our Mission
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  mb: 6,
                  lineHeight: 1.6,
                  fontWeight: 300
                }}
              >
                Whether you're a mentor, volunteer, or supporter, there's a meaningful way 
                for you to help shape the future of young innovators.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Button
                  component={Link}
                  to="/givehart/get-involved"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 5,
                    py: 2.5,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                    boxShadow: '0 8px 20px rgba(255, 107, 53, 0.4)',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #E55A2B, #D4821A)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 30px rgba(255, 107, 53, 0.6)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Volunteer Today
                </Button>
                
                <Button
                  component={Link}
                  to="/givehart/donate"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 5,
                    py: 2.5,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    borderColor: 'white',
                    color: 'white',
                    borderWidth: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#2c3e50',
                      borderColor: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 30px rgba(255,255,255,0.3)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Support Us
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}
