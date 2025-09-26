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
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  Support as SupportIcon,
  Handshake as HandshakeIcon,
  Business as BusinessIcon,
  LocalLibrary as LibraryIcon,
  EmojiEvents as EventsIcon,
} from '@mui/icons-material';

const PartnershipsPage: React.FC = () => {
  const theme = getThemeColors('partnerships');
  
  // Define pink theme colors for Partnerships page
  const primaryColor = '#E91E63';
  const secondaryColor = '#F48FB1';
  
  const highlights = [
    {
      icon: <HandshakeIcon sx={{ fontSize: 20 }} />,
      text: 'Trusted Partners',
      color: '#E91E63',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 20 }} />,
      text: 'Full Support',
      color: '#9C27B0',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 20 }} />,
      text: 'Proven Results',
      color: '#FF9800',
    },
  ];

  const partnerships = [
    {
      title: 'After-School Programs',
      description: 'Comprehensive enrichment at your school',
      icon: <SchoolIcon sx={{ fontSize: 24 }} />,
      color: '#E91E63',
      benefits: ['Custom Curriculum', 'Expert Instructors', 'All Equipment', 'Flexible Schedule'],
    },
    {
      title: 'Summer Camps',
      description: 'Intensive technology camps',
      icon: <EventsIcon sx={{ fontSize: 24 }} />,
      color: '#FF9800',
      benefits: ['Week-Long Programs', 'Multiple Ages', 'Project-Based', 'Take-Home Projects'],
    },
    {
      title: 'In-School Programs',
      description: 'Curriculum integration during school',
      icon: <LibraryIcon sx={{ fontSize: 24 }} />,
      color: '#4CAF50',
      benefits: ['Curriculum Aligned', 'Teacher Support', 'Assessment Tools', 'Progress Reports'],
    },
    {
      title: 'Corporate Training',
      description: 'Professional development programs',
      icon: <BusinessIcon sx={{ fontSize: 24 }} />,
      color: '#2196F3',
      benefits: ['Adult Learning', 'Skill Development', 'Team Building', 'Certification'],
    },
    {
      title: 'Community Centers',
      description: 'Public programs for all ages',
      icon: <GroupIcon sx={{ fontSize: 24 }} />,
      color: '#9C27B0',
      benefits: ['Open Access', 'Family Programs', 'Community Events', 'Scholarships'],
    },
    {
      title: 'Educational Consulting',
      description: 'Custom program development',
      icon: <SupportIcon sx={{ fontSize: 24 }} />,
      color: '#FF5722',
      benefits: ['Needs Assessment', 'Program Design', 'Implementation', 'Ongoing Support'],
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <PathForgeBackground page="partnerships" />
      
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
            Partner With Us
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
            Bring world-class enrichment programs to your community
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

        {/* Partnership Options */}
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
            Partnership Options
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            maxWidth: '1200px',
            mx: 'auto',
          }}>
            {partnerships.map((partnership, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: '280px',
                  flex: '1 1 auto',
                  maxWidth: '320px',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: partnership.color,
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundColor: 'white',
                      color: partnership.color,
                    },
                    '& .partnership-benefits': {
                      color: 'rgba(255,255,255,0.9)',
                    },
                    '& .partnership-description': {
                      color: 'rgba(255,255,255,0.95)',
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
                    backgroundColor: partnership.color,
                    width: 48,
                    height: 48,
                    transition: 'all 0.3s ease',
                  }}>
                    {partnership.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: '1rem',
                    }}
                  >
                    {partnership.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="partnership-description"
                    sx={{
                      textAlign: 'center',
                      opacity: 0.8,
                      mb: 1,
                      fontSize: '0.85rem',
                    }}
                  >
                    {partnership.description}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    {partnership.benefits.map((benefit, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        className="partnership-benefits"
                        sx={{
                          textAlign: 'center',
                          opacity: 0.7,
                          fontSize: '0.75rem',
                          mb: 0.2,
                        }}
                      >
                        • {benefit}
                      </Typography>
                    ))}
                  </Box>
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
            Ready to Partner?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: theme.text,
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Let's discuss how we can bring innovative learning to your community
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PartnershipsPage;
