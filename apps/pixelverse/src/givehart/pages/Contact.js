import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Paper,
  Stack,
  Divider,
  IconButton,
  Fade,
  Zoom,
  Avatar
} from '@mui/material';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  Message as MessageIcon,
  ContactMail as ContactMailIcon
} from '@mui/icons-material';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
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
              Contact Us
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
              We'd love to hear from you! Get in touch with us for any questions, partnerships, or support.
            </Typography>
          </Box>
        </Fade>

        {/* Contact Content - ALL in Single Row using Flexbox */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 3,
            maxWidth: '1200px',
            mx: 'auto',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            
            {/* Contact Form */}
            <Box sx={{ flex: 1, display: 'flex' }}>
              <Zoom in={true} timeout={600} style={{ width: '100%' }}>
                <Card sx={{
                  width: '100%',
                  minHeight: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                  border: '2px solid #3498db20',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 25px rgba(52, 152, 219, 0.2)',
                  }
                }}>
                  {/* Header */}
                  <Box sx={{
                    background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                    p: 2.5,
                    textAlign: 'center',
                    color: 'white'
                  }}>
                    <Avatar sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      width: 45, 
                      height: 45,
                      mx: 'auto',
                      mb: 1.5,
                      backdropFilter: 'blur(10px)'
                    }}>
                      <MessageIcon sx={{ fontSize: 24 }} />
                    </Avatar>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        fontWeight: 700,
                        textShadow: '1px 2px 4px rgba(0,0,0,0.3)',
                        fontSize: '1.3rem'
                      }}
                    >
                      Send Message
                    </Typography>
                  </Box>

                  <CardContent sx={{ 
                    p: 3, 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 3,
                        color: '#7f8c8d',
                        textAlign: 'center',
                        lineHeight: 1.5,
                        fontSize: '0.9rem'
                      }}
                    >
                      Fill out our contact form to reach the PathForge Learning team.
                    </Typography>

                    <Button
                      variant="contained"
                      size="medium"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<MessageIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '0.95rem',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: '0 6px 20px rgba(52, 152, 219, 0.3)'
                        }
                      }}
                    >
                      Open Contact Form
                    </Button>
                  </CardContent>
                </Card>
              </Zoom>
            </Box>

            {/* Email Contact */}
            <Box sx={{ flex: 1, display: 'flex' }}>
              <Zoom in={true} timeout={800} style={{ width: '100%' }}>
                <Card sx={{
                  width: '100%',
                  minHeight: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                  border: '2px solid #e74c3c20',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 25px rgba(231, 76, 60, 0.2)',
                  }
                }}>
                  {/* Header */}
                  <Box sx={{
                    background: 'linear-gradient(135deg, #e74c3c, #f39c12)',
                    p: 2.5,
                    textAlign: 'center',
                    color: 'white'
                  }}>
                    <Avatar sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      width: 45, 
                      height: 45,
                      mx: 'auto',
                      mb: 1.5,
                      backdropFilter: 'blur(10px)'
                    }}>
                      <EmailIcon sx={{ fontSize: 24 }} />
                    </Avatar>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        fontWeight: 700,
                        textShadow: '1px 2px 4px rgba(0,0,0,0.3)',
                        fontSize: '1.3rem'
                      }}
                    >
                      Email Us
                    </Typography>
                  </Box>

                  <CardContent sx={{ 
                    p: 3, 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: '#7f8c8d',
                        fontSize: '0.9rem'
                      }}
                    >
                      Send us an email directly
                    </Typography>
                    <Button
                      component="a"
                      href="mailto:info@pathforgelearning.com"
                      variant="text"
                      sx={{
                        fontWeight: 600,
                        color: '#e74c3c',
                        fontSize: '1rem',
                        textTransform: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                          backgroundColor: 'transparent',
                          transform: 'scale(1.05)'
                        }
                      }}
                    >
                      info@pathforgelearning.com
                    </Button>
                  </CardContent>
                </Card>
              </Zoom>
            </Box>

            {/* Phone Contact */}
            <Box sx={{ flex: 1, display: 'flex' }}>
              <Zoom in={true} timeout={1000} style={{ width: '100%' }}>
                <Card sx={{
                  width: '100%',
                  minHeight: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                  border: '2px solid #2ecc7120',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 25px rgba(46, 204, 113, 0.2)',
                  }
                }}>
                  {/* Header */}
                  <Box sx={{
                    background: 'linear-gradient(135deg, #2ecc71, #27ae60)',
                    p: 2.5,
                    textAlign: 'center',
                    color: 'white'
                  }}>
                    <Avatar sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      width: 45, 
                      height: 45,
                      mx: 'auto',
                      mb: 1.5,
                      backdropFilter: 'blur(10px)'
                    }}>
                      <PhoneIcon sx={{ fontSize: 24 }} />
                    </Avatar>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        fontWeight: 700,
                        textShadow: '1px 2px 4px rgba(0,0,0,0.3)',
                        fontSize: '1.3rem'
                      }}
                    >
                      Call Us
                    </Typography>
                  </Box>

                  <CardContent sx={{ 
                    p: 3, 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: '#7f8c8d',
                        fontSize: '0.9rem'
                      }}
                    >
                      Give us a call directly
                    </Typography>
                    <Button
                      component="a"
                      href="tel:919-446-4981"
                      variant="text"
                      sx={{
                        fontWeight: 600,
                        color: '#2ecc71',
                        fontSize: '1rem',
                        textTransform: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                          backgroundColor: 'transparent',
                          transform: 'scale(1.05)'
                        }
                      }}
                    >
                      (919) 446-4981
                    </Button>
                  </CardContent>
                </Card>
              </Zoom>
            </Box>

          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
