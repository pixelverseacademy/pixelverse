import React from 'react';
import ThreeBackground from '../components/InteractiveBackground';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f8ff' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2196F3 0%, #42A5F5 50%, #64B5F6 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <ThreeBackground page="contact" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Get in Touch with Our Team
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Ready to start your child's technology education journey? We're here to answer 
            your questions and help you choose the perfect program for your student.
          </Typography>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white', mb: 6 }}>
          Get in Touch
        </Typography>
        
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 4, 
                textAlign: 'center', 
                height: '100%',
                maxWidth: '350px',
                mx: 'auto',
                backgroundColor: '#f8f9ff', 
                border: '1px solid #e0e6ed',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <EmailIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Email Us
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 2 }}>
                Send us an email anytime
              </Typography>
              <Typography variant="body1" sx={{ color: '#3498db', fontWeight: 'bold' }}>
                info@pathforgelearning.com
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 4, 
                textAlign: 'center', 
                height: '100%',
                maxWidth: '350px',
                mx: 'auto',
                backgroundColor: '#f8f9ff', 
                border: '1px solid #e0e6ed',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <PhoneIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Call Us
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 2 }}>
                Speak with our team directly
              </Typography>
              <Typography variant="body1" sx={{ color: '#3498db', fontWeight: 'bold' }}>
                (919) 446-4981
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 4, 
                textAlign: 'center', 
                height: '100%',
                maxWidth: '350px',
                mx: 'auto',
                backgroundColor: '#f8f9ff', 
                border: '1px solid #e0e6ed',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <LocationIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Visit Us
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 2 }}>
                Come see our facilities
              </Typography>
              <Typography variant="body1" sx={{ color: '#3498db', fontWeight: 'bold' }}>
                Durham & Holly Springs, NC
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Inquiry Form */}
      <Box sx={{ backgroundColor: '#f8f9ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Send Us a Message
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8} lg={6}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  backgroundColor: '#f0f8f0', 
                  border: '1px solid #e0e6ed',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3, color: '#2c3e50', textAlign: 'center' }}>
                  Program Information Request
                </Typography>
                <Typography variant="body1" sx={{ color: '#7f8c8d', mb: 4, textAlign: 'center' }}>
                  Fill out the form below to learn more about our programs, pricing, and availability. 
                  We'll get back to you within 24 hours!
                </Typography>
                
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<SendIcon />}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSesruEj54YRUllPxQ7fN8PqtVIKN_T3XcjqRE90RZ3hLLb-RA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      px: 6, 
                      py: 2, 
                      fontSize: '1.1rem',
                      backgroundColor: '#3498db',
                      '&:hover': {
                        backgroundColor: '#fff0e6',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Open Inquiry Form
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Program Information */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          Program Information
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%', 
                maxWidth: '400px',
                mx: 'auto',
                backgroundColor: '#f8f9ff', 
                border: '1px solid #e0e6ed',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Free Trial Session
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                  Experience our teaching methods and meet our instructors with a complimentary trial session.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%', 
                maxWidth: '400px',
                mx: 'auto',
                backgroundColor: '#f8f9ff', 
                border: '1px solid #e0e6ed',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Flexible Scheduling
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                  We offer classes on weekends and after school to fit your family's schedule.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%', 
                maxWidth: '400px',
                mx: 'auto',
                backgroundColor: '#f8f9ff', 
                border: '1px solid #e0e6ed',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Small Class Sizes
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                  Maximum 8 students per class ensures personalized attention and optimal learning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f8f9ff', borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Contact us today to schedule your free trial session and see why students 
            love learning with PathForge Learning.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:info@pathforgelearning.com"
              sx={{ 
                px: 4, 
                py: 2, 
                fontSize: '1rem',
                backgroundColor: '#3498db',
                '&:hover': {
                  backgroundColor: '#fff0e6',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Email Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              href="tel:+19194464981"
              sx={{ 
                px: 4, 
                py: 2, 
                fontSize: '1rem',
                borderColor: '#3498db',
                color: '#3498db',
                '&:hover': {
                  borderColor: '#ff8a65',
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Call Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
