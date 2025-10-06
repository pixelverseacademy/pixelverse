import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Schedule as TimeIcon,
  School as SchoolIcon,
  Group as GroupIcon,
  EmojiEvents as AwardIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';
const LocationsPage: React.FC = () => {
  const theme = getThemeColors('locations');
  const stats = [
    { number: '8', label: 'Locations Served' },
    { number: '50+', label: 'Schools Partnered' },
    { number: '1000+', label: 'Students Reached' },
    { number: '5', label: 'Years of Service' },
  ];
  const locationFeatures = [
    {
      title: 'Convenient School-Based Programs',
      description: 'We bring expert instructors directly to your school, eliminating transportation hassles and fitting seamlessly into your existing schedule.',
      image: '/public/Instagram upload/da865aa3-b937-4fe9-b0e8-a02e9ecaf5d8.png',
      benefits: [
        'No transportation needed',
        'Familiar school environment',
        'Flexible scheduling options',
        'Integrated with school day',
      ],
    },
    {
      title: 'Expert Instructors in Your Area',
      description: 'Our certified instructors are located throughout the Triangle area, bringing specialized knowledge and passion for teaching to your community.',
      image: '/public/Instagram upload/d2186c4a-81b2-4678-a6f0-3cc110817208.png',
      benefits: [
        'Local area expertise',
        'Certified educators',
        'Community connections',
        'Regional specialization',
      ],
    },
    {
      title: 'Comprehensive Coverage',
      description: 'From Durham to Chapel Hill, we serve the entire Research Triangle area with consistent quality and comprehensive program offerings.',
      image: '/public/Instagram upload/fd9a8cc0-ee1d-48e1-8cbd-6806fd209e06.png',
      benefits: [
        'Wide geographic coverage',
        'Consistent program quality',
        'Regional accessibility',
        'Community-focused approach',
      ],
    },
  ];
  const locations = [
    {
      name: 'Durham Location',
      city: 'Durham',
      zipcode: 'NC 27701',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our flagship location in the heart of Durham brings comprehensive enrichment programs directly to your school with expert instructors and hands-on learning.',
    },
    {
      name: 'Holly Springs Location',
      city: 'Holly Springs',
      zipcode: 'NC 27540',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our newest location offers the same high-quality enrichment programs with expert instructors bringing comprehensive education directly to your school.',
    },
    {
      name: 'Raleigh Location',
      city: 'Raleigh',
      zipcode: 'NC 27601',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Located in downtown Raleigh, we provide easy access for families in the capital city with expert instructors bringing comprehensive enrichment programs to your school.',
    },
    {
      name: 'Cary Location',
      city: 'Cary',
      zipcode: 'NC 27511',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our Cary location serves the vibrant Cary community with expert instructors bringing comprehensive enrichment programs directly to your school.',
    },
    {
      name: 'Apex Location',
      city: 'Apex',
      zipcode: 'NC 27502',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Conveniently located in Apex, we offer a welcoming environment for young learners with expert instructors bringing comprehensive enrichment programs to your school.',
    },
    {
      name: 'Morrisville Location',
      city: 'Morrisville',
      zipcode: 'NC 27560',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Serving the Morrisville area with expert instructors, perfect for families seeking quality enrichment education close to home.',
    },
    {
      name: 'Wake Forest Location',
      city: 'Wake Forest',
      zipcode: 'NC 27587',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our Wake Forest location provides comprehensive enrichment programs in a community-focused setting with expert instructors.',
    },
    {
      name: 'Chapel Hill Location',
      city: 'Chapel Hill',
      zipcode: 'NC 27514',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Located in the heart of Chapel Hill, we combine academic excellence with innovative enrichment programs for young minds through expert instruction.',
    },
  ];
  return (
    <Box sx={{ backgroundColor: '#F4F4F4', fontFamily: 'Poppins, sans-serif', position: 'relative', minHeight: '100vh' }}>
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
            src="/public/Instagram upload/29ef747a-5d0e-4769-9b78-bf13237540dd.png"
            alt="Locations Hero"
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
            Our Locations
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Expert Instructors in Your Area
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, color: 'white', fontFamily: 'Nunito, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            We bring comprehensive enrichment programs directly to schools throughout the Raleigh-Durham area.
            Our expert instructors work within your school environment to inspire creativity and learning across multiple disciplines.
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
      {/* What Makes Our Locations Special Section */}
      <Box sx={{
        py: 8,
        my: 4,
        width: '100%',
      }}>
        <Box textAlign="center" sx={{ mb: 6, px: 2 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{
            fontWeight: 'bold',
            color: '#8F5BD9',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '2rem', md: '2.8rem' },
            mb: 2
          }}>
            What Makes Our Locations Special
          </Typography>
          <Typography variant="h6" sx={{
            color: '#2E3740',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: '500',
            fontSize: { xs: '1rem', md: '1.2rem' }
          }}>
            Discover what sets our location-based approach apart in comprehensive enrichment education
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, px: 2 }}>
          {locationFeatures.map((feature, index) => {
            // Unique background colors for each feature
            const backgroundColors = [
              'linear-gradient(135deg, rgba(143, 91, 217, 0.08) 0%, rgba(143, 91, 217, 0.04) 100%)', // School-Based Programs
              'linear-gradient(135deg, rgba(38, 166, 154, 0.08) 0%, rgba(38, 166, 154, 0.04) 100%)',  // Expert Instructors
              'linear-gradient(135deg, rgba(63, 95, 191, 0.08) 0%, rgba(63, 95, 191, 0.04) 100%)',   // Comprehensive Coverage
            ];

            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                  flexWrap: 'wrap',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  py: 3,
                  px: 3,
                  background: backgroundColors[index],
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: backgroundColors[index].replace('0.04', '0.06').replace('0.08', '0.12'),
                  },
                }}
              >
                {/* Feature Image */}
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{
                    width: { xs: '100%', md: '460px' },
                    height: { xs: '287px', md: '345px' },
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />

                {/* Content */}
                <Box sx={{
                  flex: 1,
                  minWidth: { xs: '300px', md: '400px' },
                  maxWidth: { xs: '100%', md: '500px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{
                    fontWeight: 'bold',
                    color: '#8F5BD9',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    mb: 2
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{
                    color: '#2E3740',
                    lineHeight: 1.6,
                    mb: 3,
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: '500',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}>
                    {feature.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, maxWidth: '100%', mb: 3 }}>
                    {feature.benefits.map((benefit, benefitIndex) => {
                      const benefitColors = ['#8F5BD9', '#26A69A', '#3F5FBF'];
                      const benefitColor = benefitColors[benefitIndex % benefitColors.length];
                      return (
                        <Chip
                          key={benefitIndex}
                          label={benefit}
                          size="small"
                          sx={{
                            color: 'white',
                            backgroundColor: benefitColor,
                            fontFamily: 'Nunito, sans-serif',
                            fontWeight: '500',
                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                            boxShadow: `0 2px 8px ${benefitColor}40`,
                            '&:hover': {
                              backgroundColor: benefitColor + 'CC',
                              transform: 'translateY(-1px)',
                              boxShadow: `0 4px 12px ${benefitColor}60`,
                            },
                            transition: 'all 0.2s ease',
                          }}
                        />
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Our Service Areas */}
      <Box sx={{
        py: 8,
        my: 4,
        position: 'relative',
        overflow: 'hidden',
        '& > *': {
          position: 'relative',
          zIndex: 2,
        }
      }}>
        {/* Background Image */}
        <Box
          component="img"
          src="/public/Instagram upload/5aa5d9b0-9aac-458c-b870-6f3262186d01.png"
          alt="Service Areas Background"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        />
        {/* Gradient Overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.9) 0%, rgba(38, 166, 154, 0.9) 100%)',
          zIndex: 1,
        }} />
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '2rem', md: '2.8rem' },
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
            mb: 2
          }}>
            Our Service Areas
          </Typography>
          <Typography variant="h6" sx={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: '500',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
            fontSize: { xs: '1rem', md: '1.2rem' },
            textAlign: 'center',
            mb: 6
          }}>
            Serving communities throughout the Research Triangle with expert instructors and comprehensive programs
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {locations.map((location, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, minWidth: '320px', maxWidth: '400px' }}>
                <Paper
                  elevation={2}
                  sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '25px',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 50px rgba(143, 91, 217, 0.3)',
                      border: '2px solid rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                    },
                  }}
                >
                  <Box sx={{ p: 4, flexGrow: 1, textAlign: 'center' }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{
                      fontWeight: 'bold',
                      color: '#8F5BD9',
                      fontFamily: 'Poppins, sans-serif',
                      textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'
                    }}>
                      {location.name}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <LocationIcon sx={{ color: '#3498db', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                          {location.city}, {location.zipcode}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <PhoneIcon sx={{ color: '#3498db', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                          {location.phone}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', mb: 2 }}>
                        <TimeIcon sx={{ color: '#3498db', mr: 1, fontSize: 20, mt: 0.5 }} />
                        <Typography variant="body2" sx={{ color: '#7f8c8d', whiteSpace: 'pre-line', textAlign: 'left' }}>
                          {location.hours}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1" sx={{
                      color: '#2E3740',
                      fontFamily: 'Nunito, sans-serif',
                      textShadow: '0px 1px 2px rgba(255, 255, 255, 0.7)'
                    }}>
                      {location.description}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
export default LocationsPage;
