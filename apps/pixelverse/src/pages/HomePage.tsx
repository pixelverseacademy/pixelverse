import React, { useState, useEffect } from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Avatar,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  FitnessCenter as FitnessIcon,
  LocationOn as LocationIcon,
  Groups as GroupsIcon,
  EmojiEvents as AchievementIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const carouselImages = [
  '/public/carousel/degorddg33dc0iqx1utg.png',
  '/public/carousel/dycbqxgwtt7bewwncgnj.png',
  '/public/carousel/lylfl41k6b06xaapnffa.png',
  '/public/carousel/sgpvppzrrh984epq4zrb.png',
];

const programs = [
  {
    title: 'STEM & Technology',
    icon: <CodeIcon sx={{ fontSize: 24 }} />,
    color: '#2196F3',
    path: '/programs/stem-technology',
    image: '/public/mainPageProgramImages/Stem.png',
  },
  {
    title: 'Creative Arts & Design',
    icon: <PaletteIcon sx={{ fontSize: 24 }} />,
    color: '#E91E63',
    path: '/programs/creative-arts-design',
    image: '/public/mainPageProgramImages/creative arts.png',
  },
  {
    title: 'Life Skills & Career Prep',
    icon: <PeopleIcon sx={{ fontSize: 24 }} />,
    color: '#FF9800',
    path: '/programs/life-skills-career-prep',
    image: '/public/mainPageProgramImages/likfeSkillsAndCareerPrep.png',
  },
  {
    title: 'Test Prep & Academic',
    icon: <SchoolIcon sx={{ fontSize: 24 }} />,
    color: '#4CAF50',
    path: '/programs/test-prep-academic-enrichment',
    image: '/public/mainPageProgramImages/testPrepandAcademic.png',
  },
  {
    title: 'Health, Sports & Wellness',
    icon: <FitnessIcon sx={{ fontSize: 24 }} />,
    color: '#FF5722',
    path: '/programs/health-sports-wellness',
    image: '/public/mainPageProgramImages/healthSportsandWelness.png',
  },
];

const highlights = [
  {
    icon: <GroupsIcon sx={{ fontSize: 20 }} />,
    text: '500+ Students',
    color: '#2196F3',
  },
  {
    icon: <LocationIcon sx={{ fontSize: 20 }} />,
    text: '9 Locations',
    color: '#4CAF50',
  },
  {
    icon: <AchievementIcon sx={{ fontSize: 20 }} />,
    text: '5 Programs',
    color: '#FF9800',
  },
];

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = getThemeColors('home');
  
  // Define primary colors for the home page
  const primaryColor = '#2196F3';
  const secondaryColor = '#42A5F5';

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <PathForgeBackground />
      
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pt: 4 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          gap: 4,
          minHeight: '80vh',
          py: 4,
        }}>
          {/* Left Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: primaryColor,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.1,
              }}
            >
              Your One-Stop Learning Hub
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: theme.text,
                fontWeight: 400,
                maxWidth: '500px',
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              Empowering kids & adults across 9 Triangle locations with hands-on programs that build real skills for real futures.
            </Typography>

            {/* Quick Highlights */}
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mb: 4,
              justifyContent: { xs: 'center', lg: 'flex-start' },
            }}>
              {highlights.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    px: 2,
                    py: 1,
                    borderRadius: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <Avatar sx={{ 
                    backgroundColor: item.color, 
                    width: 32, 
                    height: 32 
                  }}>
                    {item.icon}
                  </Avatar>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: { xs: 'center', lg: 'flex-start' },
            }}>
              <Button
                component={RouterLink}
                to="/programs/stem-technology"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: primaryColor,
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: secondaryColor,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Programs
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: primaryColor,
                  color: primaryColor,
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: primaryColor,
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>

          {/* Right Content - Carousel */}
          <Box sx={{ flex: 1, maxWidth: '500px', width: '100%' }}>
            <Box sx={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            }}>
              <Box
                component="img"
                src={carouselImages[currentImageIndex]}
                alt="PathForge Learning"
                sx={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                }}
              />
              
              <IconButton
                onClick={prevImage}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  '&:hover': { backgroundColor: 'white' },
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              
              <IconButton
                onClick={nextImage}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  '&:hover': { backgroundColor: 'white' },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>

              {/* Carousel Dots */}
              <Box sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1,
              }}>
                {carouselImages.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Programs Section */}
        <Box sx={{ py: 6 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 700,
              color: primaryColor,
            }}
          >
            Our Programs
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            maxWidth: '800px',
            mx: 'auto',
          }}>
            {programs.map((program, index) => (
              <Card
                key={index}
                component={RouterLink}
                to={program.path}
                sx={{
                  minWidth: '150px',
                  flex: '1 1 auto',
                  maxWidth: '200px',
                  textDecoration: 'none',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: program.color,
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundColor: 'white',
                      color: program.color,
                    },
                    '& .program-title': {
                      color: 'white',
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="80"
                  image={program.image}
                  alt={program.title}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  p: 2,
                  '&:last-child': { pb: 2 },
                }}>
                  <Avatar sx={{
                    backgroundColor: program.color,
                    width: 40,
                    height: 40,
                    transition: 'all 0.3s ease',
                  }}>
                    {program.icon}
                  </Avatar>
                  <Typography
                    variant="body2"
                    className="program-title"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {program.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
