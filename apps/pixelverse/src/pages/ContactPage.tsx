import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  Schedule as ScheduleIcon,
  Support as SupportIcon,
} from '@mui/icons-material';

const ContactPage: React.FC = () => {
  const theme = getThemeColors('contact');
  
  // Define teal theme colors for Contact page
  const primaryColor = '#00BCD4';
  const secondaryColor = '#26C6DA';
  
  const contactMethods = [
    {
      title: 'Call Us',
      description: 'Speak directly with our team',
      icon: <PhoneIcon sx={{ fontSize: 24 }} />,
      color: '#00BCD4',
      info: '(919) 446-4981',
      action: 'tel:+19194464981',
    },
    {
      title: 'Email Us',
      description: 'Send us your questions',
      icon: <EmailIcon sx={{ fontSize: 24 }} />,
      color: '#FF9800',
      info: 'info@pathforgelearning.com',
      action: 'mailto:info@pathforgelearning.com',
    },
    {
      title: 'Visit Us',
      description: 'Find our locations',
      icon: <LocationIcon sx={{ fontSize: 24 }} />,
      color: '#4CAF50',
      info: '9 Triangle Locations',
      action: '/locations',
    },
  ];

  const quickInfo = [
    {
      title: 'Office Hours',
      description: 'Mon-Fri: 9AM-6PM',
      icon: <ScheduleIcon sx={{ fontSize: 24 }} />,
      color: '#9C27B0',
    },
    {
      title: 'Quick Response',
      description: 'We reply within 24 hours',
      icon: <SupportIcon sx={{ fontSize: 24 }} />,
      color: '#E91E63',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <PathForgeBackground page="contact" />
      
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
            Get In Touch
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
            Ready to start your learning journey? We're here to help!
          </Typography>

          {/* Quick Info */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 6,
          }}>
            {quickInfo.map((item, index) => (
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
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Contact Methods */}
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
            Contact Methods
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
            {contactMethods.map((method, index) => (
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
                    backgroundColor: method.color,
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundColor: 'white',
                      color: method.color,
                    },
                    '& .MuiButton-root': {
                      backgroundColor: 'white',
                      color: method.color,
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
                    backgroundColor: method.color,
                    width: 64,
                    height: 64,
                    transition: 'all 0.3s ease',
                  }}>
                    {method.icon}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {method.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      opacity: 0.9,
                      mb: 2,
                    }}
                  >
                    {method.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {method.info}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    href={method.action}
                    sx={{
                      backgroundColor: method.color,
                      borderRadius: '20px',
                      textTransform: 'none',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Contact
                  </Button>
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
            Questions About Programs?
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
            Our team is ready to help you find the perfect program for your child
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<SendIcon />}
            href="mailto:info@pathforgelearning.com"
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
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
