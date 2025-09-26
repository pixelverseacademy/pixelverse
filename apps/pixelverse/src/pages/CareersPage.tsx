import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  Work as WorkIcon,
  LocationOn as LocationOnIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Send as SendIcon,
  Groups as GroupsIcon,
  Schedule as ScheduleIcon,
  AttachMoney as AttachMoneyIcon,
  EmojiEvents as BenefitsIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const theme = getThemeColors('careers');
  
  // Define amber/gold theme colors for Careers page
  const primaryColor = '#FF8F00';
  const secondaryColor = '#FFB300';
  
  const highlights = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 20 }} />,
      text: 'In-Person Work',
      color: '#FF8F00',
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 20 }} />,
      text: 'Flexible Hours',
      color: '#F57C00',
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 20 }} />,
      text: 'Competitive Pay',
      color: '#E65100',
    },
    {
      icon: <BenefitsIcon sx={{ fontSize: 20 }} />,
      text: 'Great Benefits',
      color: '#FF5722',
    },
  ];

  const positions = [
    {
      title: 'STEM Coach',
      description: 'Teach coding, robotics & engineering',
      icon: <CodeIcon sx={{ fontSize: 24 }} />,
      color: '#2196F3',
      requirements: ['Tech background', 'Love teaching kids', 'Weekend availability'],
    },
    {
      title: 'Creative Arts Coach',
      description: 'Lead digital art & design programs',
      icon: <SchoolIcon sx={{ fontSize: 24 }} />,
      color: '#E91E63',
      requirements: ['Art/design experience', 'Creative mindset', 'Portfolio required'],
    },
    {
      title: 'Robotics Instructor',
      description: 'Guide students in building robots',
      icon: <BuildIcon sx={{ fontSize: 24 }} />,
      color: '#FF9800',
      requirements: ['Engineering background', 'Robotics experience', 'Team player'],
    },
  ];

  const benefits = [
    {
      title: 'Impact Lives',
      description: 'Shape the next generation of innovators',
      icon: <GroupsIcon sx={{ fontSize: 24 }} />,
      color: '#4CAF50',
    },
    {
      title: 'Grow Skills',
      description: 'Develop teaching and leadership abilities',
      icon: <WorkIcon sx={{ fontSize: 24 }} />,
      color: '#9C27B0',
    },
    {
      title: 'Join Community',
      description: 'Be part of Triangle\'s education network',
      icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
      color: '#FF5722',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <PathForgeBackground page="careers" />
      
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
            Join Our Team
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
            Help us inspire the next generation of creators and innovators
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

        {/* Open Positions */}
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
            Open Positions
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
            maxWidth: '1000px',
            mx: 'auto',
            mb: 6,
          }}>
            {positions.map((position, index) => (
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
                    backgroundColor: position.color,
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundColor: 'white',
                      color: position.color,
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
                    backgroundColor: position.color,
                    width: 64,
                    height: 64,
                    transition: 'all 0.3s ease',
                  }}>
                    {position.icon}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {position.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      opacity: 0.9,
                      mb: 2,
                    }}
                  >
                    {position.description}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    {position.requirements.map((req, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          textAlign: 'center',
                          opacity: 0.8,
                          fontSize: '0.85rem',
                          mb: 0.5,
                        }}
                      >
                        • {req}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Why Work With Us */}
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
            Why Work With Us
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
          }}>
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: '220px',
                  flex: '1 1 auto',
                  maxWidth: '260px',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
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
                  gap: 1.5,
                  p: 3,
                  '&:last-child': { pb: 3 },
                }}>
                  <Avatar sx={{
                    backgroundColor: benefit.color,
                    width: 56,
                    height: 56,
                    transition: 'all 0.3s ease',
                  }}>
                    {benefit.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 0.5,
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: 'center',
                      opacity: 0.8,
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{
          textAlign: 'center',
          py: 4,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: primaryColor,
            }}
          >
            Ready to Make a Difference?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: theme.text,
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Send us your resume and let's discuss how you can help shape young minds
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            startIcon={<SendIcon />}
            sx={{
              backgroundColor: primaryColor,
              px: 4,
              py: 1.5,
              borderRadius: '25px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: secondaryColor,
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CareersPage;