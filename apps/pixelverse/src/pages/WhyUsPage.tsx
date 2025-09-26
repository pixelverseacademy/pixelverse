import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Group as GroupIcon,
  EmojiEvents as AwardIcon,
  CheckCircle as CheckIcon,
  People as PeopleIcon,
  Star as StarIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';

const WhyUsPage: React.FC = () => {
  const theme = getThemeColors('why-us');
  
  // Define purple theme colors for Why Us page
  const primaryColor = '#9C27B0';
  const secondaryColor = '#BA68C8';
  
  const highlights = [
    {
      icon: <PeopleIcon sx={{ fontSize: 20 }} />,
      text: '500+ Students Taught',
      color: '#9C27B0',
    },
    {
      icon: <StarIcon sx={{ fontSize: 20 }} />,
      text: '5/5 Rating',
      color: '#E91E63',
    },
    {
      icon: <AwardIcon sx={{ fontSize: 20 }} />,
      text: '5+ Years Experience',
      color: '#FF9800',
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 20 }} />,
      text: '95% Success Rate',
      color: '#4CAF50',
    },
  ];

  const features = [
    {
      title: 'Hands-On Learning',
      description: 'Real projects, real skills',
      icon: <BuildIcon sx={{ fontSize: 24 }} />,
      color: '#9C27B0',
    },
    {
      title: 'Expert Instructors',
      description: 'Industry professionals',
      icon: <CodeIcon sx={{ fontSize: 24 }} />,
      color: '#E91E63',
    },
    {
      title: 'Small Classes',
      description: 'Personal attention',
      icon: <GroupIcon sx={{ fontSize: 24 }} />,
      color: '#FF9800',
    },
    {
      title: 'Proven Results',
      description: 'Track record of success',
      icon: <CheckIcon sx={{ fontSize: 24 }} />,
      color: '#4CAF50',
    },
  ];

  const benefits = [
    {
      title: 'Future-Ready Skills',
      description: 'Learn technologies that matter in tomorrow\'s job market',
      icon: <SchoolIcon sx={{ fontSize: 24 }} />,
      color: '#2196F3',
    },
    {
      title: 'Portfolio Building',
      description: 'Create impressive projects for college and career applications',
      icon: <AwardIcon sx={{ fontSize: 24 }} />,
      color: '#FF5722',
    },
    {
      title: 'Community Network',
      description: 'Connect with like-minded peers and mentors',
      icon: <GroupIcon sx={{ fontSize: 24 }} />,
      color: '#795548',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <PathForgeBackground page="why-us" />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
        {/* Hero Section */}
        <Box sx={{
          textAlign: 'center',
          py: 6,
          mb: 4,
        }}>
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
            Why Choose PathForge?
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: theme.text,
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            The Triangle's most trusted learning partner for building tomorrow's innovators
          </Typography>

          {/* Quick Highlights */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 6,
          }}>
            {highlights.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  px: 3,
                  py: 1.5,
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Avatar sx={{ 
                  backgroundColor: item.color, 
                  width: 36, 
                  height: 36 
                }}>
                  {item.icon}
                </Avatar>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Why Choose Us Features */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 700,
              color: primaryColor,
            }}
          >
            What Makes Us Different
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 6,
          }}>
            {features.map((feature, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: '200px',
                  flex: '1 1 auto',
                  maxWidth: '250px',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: feature.color,
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundColor: 'white',
                      color: feature.color,
                    },
                  },
                }}
              >
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 3,
                  '&:last-child': { pb: 3 },
                }}>
                  <Avatar sx={{
                    backgroundColor: feature.color,
                    width: 56,
                    height: 56,
                    transition: 'all 0.3s ease',
                  }}>
                    {feature.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 0.5,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: 'center',
                      opacity: 0.8,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 700,
              color: primaryColor,
            }}
          >
            Student Benefits
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
            maxWidth: '1000px',
            mx: 'auto',
          }}>
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: '280px',
                  flex: '1 1 auto',
                  maxWidth: '320px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    backgroundColor: benefit.color,
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundColor: 'white',
                      color: benefit.color,
                    },
                  },
                }}
              >
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  p: 4,
                  '&:last-child': { pb: 4 },
                }}>
                  <Avatar sx={{
                    backgroundColor: benefit.color,
                    width: 64,
                    height: 64,
                    transition: 'all 0.3s ease',
                  }}>
                    {benefit.icon}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      opacity: 0.9,
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit.description}
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

export default WhyUsPage;
