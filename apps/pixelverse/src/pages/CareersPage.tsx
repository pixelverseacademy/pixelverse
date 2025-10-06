import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  Chip,
} from '@mui/material';
import {
  Work as WorkIcon,
  AccessTime as AccessTimeIcon,
  AttachMoney as AttachMoneyIcon,
  LocationOn as LocationOnIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const CareersPage: React.FC = () => {
  const theme = getThemeColors('careers');

  const jobPositions = [
    {
      title: 'Robotics Coach',
      icon: <BuildIcon sx={{ fontSize: 40, color: '#8F5BD9' }} />,
      description: 'Lead robotics workshops and mentor students in building and programming robots using LEGO, VEX, and micro:bit systems. Join our team to inspire the next generation of engineers and innovators.',
      location: 'Multiple Locations',
      type: 'Part-time/Full-time',
      salary: 'Competitive'
    },
    {
      title: 'Programming Coach',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#26A69A' }} />,
      description: 'Teach programming fundamentals and guide students through coding projects using Python, Scratch, and game development tools. Help students build their first apps and games.',
      location: 'Remote/On-site',
      type: 'Part-time',
      salary: '$25-35/hour'
    },
    {
      title: 'Creative Arts Instructor',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#3F5FBF' }} />,
      description: 'Guide students through digital art, 3D printing, music production, and creative writing projects. Foster creativity and artistic expression in young minds.',
      location: 'Multiple Locations',
      type: 'Part-time',
      salary: '$20-30/hour'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#F4F4F4', fontFamily: 'Poppins, sans-serif', position: 'relative', minHeight: '100vh' }}>
      {/* Three.js Background - Applied to entire page */}
      {/* <PathForgeBackground page="careers" /> */}

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
            alt="Careers Hero"
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
            Join Our Team
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Shape the Future of Enrichment Education
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, color: 'white', fontFamily: 'Nunito, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            We're looking for energetic, creative individuals who love working with children and have a passion for learning across multiple disciplines.
          </Typography>

          {/* Stats Chips */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mt: 2,
          }}>
            {[
              { number: '50+', label: 'Students Coached' },
              { number: '95%', label: 'Satisfaction Rate' },
              { number: '10+', label: 'Expert Coaches' },
              { number: '5', label: 'Years of Impact' },
            ].map((stat, index) => (
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

      {/* What Makes Working Here Special Section */}
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
            What Makes Working Here Special
          </Typography>
          <Typography variant="h6" sx={{
            color: '#2E3740',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: '500',
            fontSize: { xs: '1rem', md: '1.2rem' }
          }}>
            Discover what sets PathForge Learning apart as an employer and why our team loves working here
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, px: 2 }}>
          {[
            {
              title: 'Flexible Scheduling & Work-Life Balance',
              description: 'Enjoy part-time positions with 8-35 hours/week and choose shifts that work for your schedule. We understand the importance of work-life balance.',
              image: '/public/marketingImages/6d44d417-cc7a-4fb2-ba56-eb604e178e25.png',
              benefits: [
                'Part-time flexibility',
                'Choose your schedule',
                'Work-life balance',
                'No weekend commitment required',
              ],
            },
            {
              title: 'Competitive Pay & Growth Opportunities',
              description: 'Earn competitive wages starting at $20-$35/hour with clear paths for advancement and performance bonuses as you develop your skills.',
              image: '/public/marketingImages/86b9f21e-3dea-466f-b7c8-5eb6884faca3.png',
              benefits: [
                'Competitive hourly rates',
                'Performance bonuses',
                'Career advancement',
                'Professional development',
              ],
            },
            {
              title: 'Meaningful Impact on Young Minds',
              description: 'Work directly with students in our Triangle area locations, building meaningful connections and witnessing the joy of learning firsthand.',
              image: '/public/marketingImages/183af8c2-76f9-4885-aea0-04b44183954f.png',
              benefits: [
                'Direct student impact',
                'Meaningful connections',
                'Witness learning joy',
                'Community contribution',
              ],
            },
          ].map((benefit, index) => {
            // Unique background colors for each benefit
            const backgroundColors = [
              'linear-gradient(135deg, rgba(143, 91, 217, 0.08) 0%, rgba(143, 91, 217, 0.04) 100%)', // Flexible Scheduling
              'linear-gradient(135deg, rgba(38, 166, 154, 0.08) 0%, rgba(38, 166, 154, 0.04) 100%)',  // Competitive Pay
              'linear-gradient(135deg, rgba(63, 95, 191, 0.08) 0%, rgba(63, 95, 191, 0.04) 100%)',   // Meaningful Impact
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
                {/* Benefit Image */}
                <Box
                  component="img"
                  src={benefit.image}
                  alt={benefit.title}
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
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" sx={{
                    color: '#2E3740',
                    lineHeight: 1.6,
                    mb: 3,
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: '500',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}>
                    {benefit.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, maxWidth: '100%', mb: 3 }}>
                    {benefit.benefits.map((item, benefitIndex) => {
                      const benefitColors = ['#8F5BD9', '#26A69A', '#3F5FBF'];
                      const benefitColor = benefitColors[benefitIndex % benefitColors.length];
                      return (
                        <Chip
                          key={benefitIndex}
                          label={item}
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

      {/* Open Positions */}
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
          alt="Open Positions Background"
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
            Open Positions
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
            Join our team of passionate educators and make a difference in students' lives
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {jobPositions.map((position, index) => (
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
                  <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {position.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{
                      fontWeight: 'bold',
                      color: '#8F5BD9',
                      fontFamily: 'Poppins, sans-serif',
                      textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'
                    }}>
                      {position.title}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <LocationOnIcon sx={{ color: '#3498db', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                          {position.location}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <AccessTimeIcon sx={{ color: '#3498db', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                          {position.type}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <AttachMoneyIcon sx={{ color: '#3498db', mr: 1, fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                          {position.salary}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1" sx={{
                      color: '#2E3740',
                      fontFamily: 'Nunito, sans-serif',
                      textShadow: '0px 1px 2px rgba(255, 255, 255, 0.7)',
                      mb: 3,
                      flexGrow: 1
                    }}>
                      {position.description}
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        variant="contained"
                        size="large"
                        startIcon={<SendIcon />}
                        href="https://docs.google.com/forms/d/e/1FAIpQLSesruEj54YRUllPxQ7fN8PqtVIKN_T3XcjqRE90RZ3hLLb-RA/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          px: 4,
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
                        Apply Now
                      </Button>
                    </Box>
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

export default CareersPage;