import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  Chip,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Send as SendIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const ContactPage: React.FC = () => {
  const theme = getThemeColors('contact');
  const location = useLocation();

  // Determine asset sources based on environment
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  const getAssetUrl = (folder: string, filename: string) => {
    // Special case for root-level files
    if (folder === 'marketing') {
      return `https://cdn.pathforgelearning.com/${filename}`;
    }

    const cdnMap: { [key: string]: string } = {
      'ourProgramsVideos': 'ourProgramsVideos/',
      'instagramUpload': 'instagramUpload/',
      'marketingImages': 'marketingImages/',
      'programCardImages': 'programCardImages/'
    };

    const cdnFolder = cdnMap[folder] || `${folder}/`;
    return `https://cdn.pathforgelearning.com/${cdnFolder}${filename}`;
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const stats = [
    { number: '24hr', label: 'Response Time' },
    { number: '100%', label: 'Personal Service' },
    { number: '5', label: 'Contact Methods' },
    { number: 'Always', label: 'Here to Help' },
  ];
  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Send us an email anytime and receive a personalized response within 24 hours. We love hearing from parents and students!',
      image: getAssetUrl('instagramUpload', '4a5fe117-ec9d-43ee-b032-5f5c33484851.png'),
      contact: 'info@pathforgelearning.com',
      benefits: [
        '24/7 email support',
        'Personalized responses',
        'Detailed program information',
        'Flexible communication',
      ],
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our team during business hours. Get immediate answers to your questions about programs, scheduling, and enrollment.',
      image: getAssetUrl('instagramUpload', '5aa5d9b0-9aac-458c-b870-6f3262186d01.png'),
      contact: '(919) 446-4981',
      benefits: [
        'Direct phone support',
        'Immediate answers',
        'Schedule consultations',
        'Enrollment assistance',
      ],
    },
    {
      title: 'School-Based Programs',
      description: 'We bring our expert instructors directly to your school, making it convenient for your family while maintaining the familiar school environment.',
      image: getAssetUrl('instagramUpload', '29ef747a-5d0e-4769-9b78-bf13237540dd.png'),
      contact: 'Contact Your School',
      benefits: [
        'Convenient location',
        'Familiar environment',
        'Expert instructors',
        'Integrated scheduling',
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#F4F4F4', fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '50vh', md: '60vh' },
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background Image */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}>
          <Box
            component="img"
            src={getAssetUrl('instagramUpload', '29ef747a-5d0e-4769-9b78-bf13237540dd.png')}
            alt="Contact Hero"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.7)',
            }}
          />
          {/* Gradient Overlay */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.8) 0%, rgba(38, 166, 154, 0.8) 100%)',
          }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'white', fontFamily: 'Poppins, sans-serif', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Get in Touch with Our Team
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, color: 'white', fontFamily: 'Nunito, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Ready to start your child's enrichment journey? We're here to answer your questions and help you choose the perfect program for your student.
          </Typography>

          {/* Stats Chips */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mt: 2,
          }}>
            {stats.map((stat, index) => (
              <Chip
                key={index}
                label={`${stat.number} ${stat.label}`}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#8F5BD9',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  px: 2,
                  py: 1,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>


      {/* Contact Details Section */}
      <Box sx={{
        py: 8,
        my: 4,
        backgroundColor: '#F4F4F4',
        borderTop: '1px solid #e0e6ed'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{
            fontWeight: 'bold',
            color: '#8F5BD9',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '2rem', md: '2.8rem' },
            mb: 2
          }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{
            color: '#2E3740',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: '500',
            fontSize: { xs: '1rem', md: '1.2rem' },
            textAlign: 'center',
            mb: 6
          }}>
            Contact us today to learn more about our enrichment programs and see why students love learning with PathForge Learning.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:info@pathforgelearning.com"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1rem',
                backgroundColor: '#8F5BD9',
                borderRadius: '50px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#26A69A',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(38, 166, 154, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Email Us
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<PhoneIcon />}
              href="tel:+19194464981"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1rem',
                backgroundColor: 'white',
                color: '#26A69A',
                borderRadius: '50px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Call Us
            </Button>
          </Box>

          {/* Open Inquiry Form */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
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
                backgroundColor: '#26A69A',
                borderRadius: '50px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#3F5FBF',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(63, 95, 191, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Open Inquiry Form
            </Button>
          </Box>

          {/* Social Media Links */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{
              mb: 3,
              color: '#8F5BD9',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 'bold'
            }}>
              Follow Us on Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                startIcon={<FacebookIcon sx={{ color: '#1877f2' }} />}
                href="https://www.facebook.com/profile.php?id=61580934554373"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: '#1877f2',
                  color: '#1877f2',
                  borderRadius: '50px',
                  fontFamily: 'Poppins, sans-serif',
                  '&:hover': {
                    borderColor: '#1877f2',
                    backgroundColor: 'rgba(24, 119, 242, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Facebook
              </Button>
              <Button
                variant="outlined"
                startIcon={<InstagramIcon sx={{ color: '#e4405f' }} />}
                href="https://www.instagram.com/pathforgelearning/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: '#e4405f',
                  color: '#e4405f',
                  borderRadius: '50px',
                  fontFamily: 'Poppins, sans-serif',
                  '&:hover': {
                    borderColor: '#e4405f',
                    backgroundColor: 'rgba(228, 64, 95, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Instagram
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon sx={{ color: '#0077b5' }} />}
                href="https://www.linkedin.com/company/pathforge-learning"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: '#0077b5',
                  color: '#0077b5',
                  borderRadius: '50px',
                  fontFamily: 'Poppins, sans-serif',
                  '&:hover': {
                    borderColor: '#0077b5',
                    backgroundColor: 'rgba(0, 119, 181, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
};

export default ContactPage;
