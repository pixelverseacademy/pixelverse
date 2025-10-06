import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  Button,
} from '@mui/material';
import {
  Check as CheckIcon,
  School as SchoolIcon,
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  Support as SupportIcon,
  Handshake as HandshakeIcon,
} from '@mui/icons-material';

const PartnershipsPage: React.FC = () => {
  const theme = getThemeColors('partnerships');
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
    { number: '50+', label: 'Partner Schools' },
    { number: '10K+', label: 'Students Served' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' },
  ];
  const partnershipOpportunities = [
    {
      title: 'After-School Programs',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#26A69A' }} />,
      description: 'Bring comprehensive enrichment programs directly to your school with our after-school offerings.',
      backgroundImage: getAssetUrl('instagramUpload', '77ea1212-e3ed-48a4-8468-ed61d2d699ce.png'),
      features: [
        'Customized curriculum for your school',
        'Experienced instructors on-site',
        'All necessary equipment provided',
        'Flexible scheduling options',
        'Progress tracking and reporting',
      ],
    },
    {
      title: 'Summer Camps',
      icon: <GroupIcon sx={{ fontSize: 40, color: '#26A69A' }} />,
      description: 'Intensive technology camps during summer break to keep students engaged and learning.',
      backgroundImage: getAssetUrl('instagramUpload', '350ae5f9-cc38-4139-84e0-7d3a2408c8c1.png'),
      features: [
        'Week-long intensive programs',
        'Multiple age group options',
        'Project-based learning approach',
        'Take-home projects and materials',
        'Certificates of completion',
      ],
    },
    {
      title: 'Teacher Training',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#26A69A' }} />,
      description: 'Professional development workshops to help your teachers integrate technology into their classrooms.',
      backgroundImage: getAssetUrl('instagramUpload', '946640e2-6454-46ae-a866-3ac9cbab5217.png'),
      features: [
        'Hands-on training sessions',
        'Curriculum integration strategies',
        'Ongoing support and resources',
        'Certification programs available',
        'Custom training modules',
      ],
    },
    {
      title: 'Competition Teams',
      icon: <SupportIcon sx={{ fontSize: 40, color: '#26A69A' }} />,
      description: 'Form and train robotics and coding competition teams to represent your school.',
      backgroundImage: getAssetUrl('instagramUpload', '7313934c-05ed-40fe-b6c2-14126fc67fbc.png'),
      features: [
        'Team formation and management',
        'Competition preparation',
        'Equipment and software access',
        'Travel and logistics support',
        'Mentorship and coaching',
      ],
    },
  ];

  const partnershipProcess = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We meet with your school administration to understand your needs and goals.',
    },
    {
      step: '2',
      title: 'Program Design',
      description: 'We create a customized program that fits your school\'s schedule and requirements.',
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Our expert instructors begin delivering the program at your school.',
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'We provide continuous support, monitoring, and program adjustments as needed.',
    },
  ];

  const benefits = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Enhanced STEM Education',
      description: 'Provide your students with cutting-edge technology education that prepares them for the future.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Increased Student Engagement',
      description: 'Interactive, hands-on learning experiences that keep students motivated and excited about learning.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Competitive Advantage',
      description: 'Stand out from other schools by offering comprehensive technology education programs.',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Professional Development',
      description: 'Support your teachers with training and resources to integrate technology into their teaching.',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Community Partnerships',
      description: 'Build stronger relationships with parents and the community through innovative programs.',
    },
    {
      icon: <CheckIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Proven Results',
      description: 'Join schools that have seen significant improvements in student performance and engagement.',
    },
  ];

  return (
    <Box>
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
        <Box
          component="img"
          src={getAssetUrl('instagramUpload', '4a5fe117-ec9d-43ee-b032-5f5c33484851.png')}
          alt="Partnerships Hero"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.7)',
            zIndex: 0,
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
          zIndex: 1,
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'white', fontFamily: 'Poppins, sans-serif', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
            School Partnerships
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Bring comprehensive enrichment programs to your school
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, color: 'white', fontFamily: 'Nunito, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Partner with us to provide your students with cutting-edge technology education and hands-on learning experiences that prepare them for the future.
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

      {/* Partnership Opportunities */}
      <Box sx={{
        py: 8,
        backgroundColor: '#F4F4F4',
        borderTop: '1px solid #e0e6ed'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{
            fontWeight: 'bold',
            mb: 6,
            color: '#8F5BD9',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Partnership Opportunities
          </Typography>

          <Box sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
            {partnershipOpportunities.map((opportunity, index) => {
              // Different background colors for each card using the established color palette
              const cardColors = [
                'rgba(143, 91, 217, 0.1)', // Purple tint for first card
                'rgba(38, 166, 154, 0.1)',  // Teal tint for second card
                'rgba(63, 95, 191, 0.1)',   // Blue tint for third card
                'rgba(143, 91, 217, 0.08)', // Lighter purple tint for fourth card
              ];

              const borderColors = [
                '#8F5BD9', // Purple border
                '#26A69A', // Teal border
                '#3F5FBF', // Blue border
                '#8F5BD9', // Purple border for fourth card
              ];

              return (
                <Box key={index} sx={{ flex: '0 0 280px', maxWidth: '320px', minWidth: '280px' }}>
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: cardColors[index],
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${borderColors[index]}`,
                      borderRadius: '15px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: `0 15px 45px ${borderColors[index]}60`,
                        border: `2px solid #8F5BD9`,
                      },
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                  >
                  {/* Background Image for Card */}
                  {opportunity.backgroundImage && (
                    <Box
                      component="img"
                      src={opportunity.backgroundImage}
                      alt={`${opportunity.title} background`}
                      sx={{
                        width: '100%',
                        height: '140px',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      {opportunity.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom sx={{
                      fontWeight: 'bold',
                      color: '#8F5BD9',
                      textAlign: 'center',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.1rem'
                    }}>
                      {opportunity.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: '#2E3740',
                      textAlign: 'center',
                      mb: 2,
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '0.9rem'
                    }}>
                      {opportunity.description}
                    </Typography>
                    <List dense sx={{ py: 0 }}>
                      {opportunity.features.slice(0, 3).map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: '24px' }}>
                            <CheckIcon sx={{ color: '#26A69A', fontSize: '1rem' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            sx={{
                              color: '#2E3740',
                              fontFamily: 'Nunito, sans-serif',
                              fontSize: '0.8rem',
                              '& .MuiListItemText-primary': {
                                fontSize: '0.8rem',
                                lineHeight: 1.3
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            );
            })}
          </Box>
        </Container>
      </Box>

      {/* Partnership Process */}
      <Box sx={{
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(143, 91, 217, 0.05)',
        borderRadius: '30px',
        mx: 2,
        mb: 4,
        border: '2px solid rgba(143, 91, 217, 0.1)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{
            fontWeight: 'bold',
            mb: 6,
            color: '#8F5BD9',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Partnership Process
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, md: 1 },
            position: 'relative'
          }}>
            {partnershipProcess.map((step, index) => (
              <Box key={index} sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                width: { xs: '100%', md: 'auto' }
              }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid #26A69A`,
                    borderRadius: '20px',
                    width: { xs: '100%', md: '280px' },
                    height: { xs: 'auto', md: '280px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: `0 15px 45px #26A69A60`,
                      border: `2px solid #8F5BD9`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #8F5BD9 0%, #26A69A 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(143, 91, 217, 0.3)',
                      }}
                    >
                      <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                        {step.step}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{
                    fontWeight: 'bold',
                    color: '#8F5BD9',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2
                  }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: '#2E3740',
                    fontFamily: 'Nunito, sans-serif',
                    lineHeight: 1.5,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {step.description}
                  </Typography>
                </Paper>

                {/* Arrow between steps (except for the last step) */}
                {index < partnershipProcess.length - 1 && (
                  <Box sx={{
                    mx: { xs: 0, md: 2 },
                    my: { xs: 2, md: 0 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3
                  }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #8F5BD9 0%, #26A69A 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(143, 91, 217, 0.4)',
                        transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        →
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Schools Choose to Partner with Us */}
      <Box sx={{
        py: 8,
        backgroundColor: 'rgba(143, 91, 217, 0.05)',
        borderRadius: '30px',
        mx: 2,
        mb: 4,
        border: '2px solid rgba(143, 91, 217, 0.1)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{
            fontWeight: 'bold',
            mb: 6,
            color: '#8F5BD9',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Why Schools Choose to Partner with Us
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {benefits.map((benefit, index) => {
              // Update icon colors to match the new color schema
              const updatedBenefit = {
                ...benefit,
                icon: React.cloneElement(benefit.icon, {
                  sx: { fontSize: 50, color: index === 0 ? '#8F5BD9' : index === 1 ? '#26A69A' : index === 2 ? '#3F5FBF' : index === 3 ? '#8F5BD9' : index === 4 ? '#26A69A' : '#3F5FBF' }
                })
              };

              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      maxWidth: '350px',
                      mx: 'auto',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: '20px',
                      border: `1px solid rgba(38, 166, 154, 0.2)`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 25px rgba(143, 91, 217, 0.15)',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      {updatedBenefit.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{
                      fontWeight: 'bold',
                      color: '#8F5BD9',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2
                    }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: '#2E3740',
                      fontFamily: 'Nunito, sans-serif',
                      lineHeight: 1.6
                    }}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Success Stories */}
      <Box sx={{
        py: 8,
        backgroundColor: 'rgba(38, 166, 154, 0.05)',
        borderRadius: '30px',
        mx: 2,
        mb: 4,
        border: '2px solid rgba(38, 166, 154, 0.1)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{
            fontWeight: 'bold',
            mb: 6,
            color: '#8F5BD9',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Success Stories
          </Typography>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            justifyContent: 'center',
            alignItems: 'stretch'
          }}>
            {[
              {
                school: 'Durham Elementary School',
                quote: "Our partnership with PathForge Learning has transformed our STEM program. Students are more engaged and excited about learning technology.",
                author: 'Principal',
                icon: '🏫'
              },
              {
                school: 'Holly Springs Middle School',
                quote: "The after-school robotics program has been a huge success. Our students won the regional competition and are now more confident in STEM subjects.",
                author: 'STEM Coordinator',
                icon: '🤖'
              },
              {
                school: 'Wake County High School',
                quote: "The teacher training program has been invaluable. Our staff now feels confident teaching coding and robotics to our students.",
                author: 'Technology Director',
                icon: '👨‍🏫'
              }
            ].map((story, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  width: { xs: '100%', md: '350px' },
                  p: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${index === 0 ? '#8F5BD9' : index === 1 ? '#26A69A' : '#3F5FBF'}`,
                  borderRadius: '20px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: `0 15px 45px ${index === 0 ? '#8F5BD9' : index === 1 ? '#26A69A' : '#3F5FBF'}40`,
                    border: `2px solid #8F5BD9`,
                  },
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${index === 0 ? '#8F5BD9' : index === 1 ? '#26A69A' : '#3F5FBF'}, ${index === 0 ? '#26A69A' : index === 1 ? '#3F5FBF' : '#8F5BD9'})`,
                  }
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Typography variant="h2" sx={{ fontSize: '3rem', mb: 2 }}>
                    {story.icon}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{
                    fontWeight: 'bold',
                    color: '#8F5BD9',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 3
                  }}>
                    {story.school}
                  </Typography>
                </Box>

                <Box sx={{
                  backgroundColor: 'rgba(143, 91, 217, 0.05)',
                  borderRadius: '15px',
                  p: 3,
                  mb: 3,
                  border: `1px solid rgba(143, 91, 217, 0.1)`,
                  position: 'relative'
                }}>
                  <Typography variant="body1" sx={{
                    color: '#2E3740',
                    fontFamily: 'Nunito, sans-serif',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    fontSize: '1rem',
                    position: 'relative',
                    '&::before': {
                      content: '"\\201C"',
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      fontSize: '2rem',
                      color: 'rgba(143, 91, 217, 0.3)',
                      fontFamily: 'serif'
                    },
                    '&::after': {
                      content: '"\\201D"',
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-10px',
                      fontSize: '2rem',
                      color: 'rgba(143, 91, 217, 0.3)',
                      fontFamily: 'serif'
                    }
                  }}>
                    {story.quote}
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{
                  color: index === 0 ? '#8F5BD9' : index === 1 ? '#26A69A' : '#3F5FBF',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins, sans-serif',
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}>
                  — {story.author}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Partner with Us?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Contact us today to discuss how we can bring comprehensive enrichment programs to your school.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              backgroundColor: '#8F5BD9',
              borderRadius: '50px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: '#26A69A',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 35px rgba(38, 166, 154, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Contact Us Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default PartnershipsPage;
