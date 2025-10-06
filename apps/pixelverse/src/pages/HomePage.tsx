import React, { useState, useEffect } from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  IconButton,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  RocketLaunch as RocketIcon,
  PlayArrow as PlayIcon,
} from '@mui/icons-material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Science as ScienceIcon,
  SportsEsports as EsportsIcon,
  Flight as DroneIcon,
  PhoneAndroid as MobileIcon,
  Visibility as ARIcon,
  Psychology as AIIcon,
  Print as PrintIcon,
  Extension as ScratchIcon,
  Sports as MinecraftIcon,
  Palette as PaletteIcon,
  People as PeopleIcon,
  FitnessCenter as FitnessIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const enrichmentBuckets = [
  {
    title: 'STEM & Technology',
    description: 'Hands-on technology education including coding, robotics, AI, 3D printing, and more. Perfect for future innovators and problem-solvers.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    color: '#8F5BD9',
    path: '/programs/stem-technology',
    backgroundVideo: '/public/ourProgramsVideos/stem.mp4',
    programs: ['Coding (Python, Scratch, Web Dev)', 'Robotics (LEGO, VEX, etc.)', 'Game Design & Animation', 'Generative AI & Machine Learning', 'Electronics & Engineering']
  },
  {
    title: 'Creative Arts & Design',
    description: 'Unleash creativity through digital art, graphic design, 3D printing, music technology, and storytelling. Express yourself artistically.',
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    color: '#26A69A',
    path: '/programs/creative-arts-design',
    backgroundVideo: '/public/ourProgramsVideos/arts.mp4',
    programs: ['Digital Art & Graphic Design', '3D Printing & CAD', 'Music Technology & Production', 'Creative Writing & Storytelling']
  },
  {
    title: 'Life Skills & Career Prep',
    description: 'Build essential life skills and career readiness. Develop leadership, communication, entrepreneurship, and professional skills.',
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    color: '#3F5FBF',
    path: '/programs/life-skills-career-prep',
    backgroundVideo: '/public/ourProgramsVideos/life skills.mp4',
    programs: ['Leadership & Teamwork', 'Public Speaking & Debate', 'Entrepreneurship & Financial Literacy', 'Career Exploration Workshops']
  },
  {
    title: 'Test Prep & Academic Enrichment',
    description: 'Excel academically with personalized tutoring, test preparation, and study skills development. Achieve your academic goals.',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    color: '#8F5BD9',
    path: '/programs/test-prep-academic-enrichment',
    backgroundVideo: '/public/ourProgramsVideos/test prep.mp4',
    programs: ['Math & Science Tutoring', 'Reading & Writing Support', 'Standardized Test Prep (SAT, ACT, etc.)', 'Study Skills & Time Management']
  },
  {
    title: 'Health, Sports & Wellness',
    description: 'Nurture body and mind through physical fitness, yoga, mindfulness, and nutrition education. Build healthy lifelong habits.',
    icon: <FitnessIcon sx={{ fontSize: 40 }} />,
    color: '#26A69A',
    path: '/programs/health-sports-wellness',
    backgroundVideo: '/public/ourProgramsVideos/health.mp4',
    programs: ['Physical Fitness & Sports Camps', 'Yoga & Mindfulness', 'Nutrition & Wellness Programs']
  },
];


const HomePage: React.FC = () => {
  const theme = getThemeColors('home');
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      {/* Three.js Background - Applied to entire page */}
      {/* <PathForgeBackground page="home" /> */}
      
      {/* Hero Section with Background Slideshow */}
      <Box
        sx={{
          minHeight: { xs: '70vh', md: '100vh' },
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background Video */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}>
          <Box
            component="video"
            autoPlay
            loop
            muted
            playsInline
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.7)',
            }}
          >
            <source src="/public/marketing.m4v" type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
          {/* Gradient Overlay */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.1) 0%, rgba(38, 166, 154, 0.1) 100%)',
          }} />

          {/* Play Button Overlay */}
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}>
            <PlayIcon sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              color: 'white',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                '50%': { transform: 'scale(1.1)', opacity: 0.8 }
              }
            }} />
          </Box>
        </Box>

        {/* Content */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ 
            mb: 3, 
            color: 'white', 
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '800',
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
            textShadow: '3px 3px 8px rgba(0, 0, 0, 0.4)',
            lineHeight: 1.2,
          }}>
            Empowering Minds, Forging Future
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Chip
              label="Hands-On Learning"
              sx={{
                px: 3, py: 1, fontSize: '1rem',
                backgroundColor: '#8F5BD9',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(143, 91, 217, 0.3)',
                '&:hover': {
                  backgroundColor: '#26A69A',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(38, 166, 154, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            />
            <Chip
              label="Small Class Sizes"
              sx={{
                px: 3, py: 1, fontSize: '1rem',
                backgroundColor: '#26A69A',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(38, 166, 154, 0.3)',
                '&:hover': {
                  backgroundColor: '#3F5FBF',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(63, 95, 191, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            />
            <Chip
              label="Expert Instructors"
              sx={{
                px: 3, py: 1, fontSize: '1rem',
                backgroundColor: '#3F5FBF',
                color: 'white',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(63, 95, 191, 0.3)',
                '&:hover': {
                  backgroundColor: '#8F5BD9',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(143, 91, 217, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            />
          </Box>

          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{
              px: 8,
              py: 2.5,
              fontSize: '1.3rem',
              backgroundColor: '#3F5FBF',
              color: 'white',
              borderRadius: '50px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              boxShadow: '0 8px 30px rgba(63, 95, 191, 0.3)',
              '&:hover': {
                backgroundColor: '#8F5BD9',
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 40px rgba(143, 91, 217, 0.5)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Start Your Journey Today
          </Button>

        </Container>
      </Box>



      {/* Mission Statement */}
      <Box sx={{ my: 4, mx: 4 }}>
        <Card sx={{
          background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.1) 0%, rgba(38, 166, 154, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          borderRadius: '25px',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(143, 91, 217, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          width: '100%',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-5px) scale(1.01)',
            boxShadow: '0 20px 60px rgba(143, 91, 217, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          },
        }}>
          {/* Text content */}
          <Box sx={{ p: { xs: 4, md: 6 } }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
              gap: 2
            }}>
              <RocketIcon sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                color: '#8F5BD9',
                filter: 'drop-shadow(0 2px 4px rgba(143, 91, 217, 0.3))',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-5px)' }
                }
              }} />
              <Typography variant="h3" component="h2" textAlign="center" sx={{
                fontWeight: 'bold',
                color: '#8F5BD9',
                fontFamily: 'Poppins, sans-serif',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                background: 'linear-gradient(45deg, #8F5BD9 30%, #26A69A 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(143, 91, 217, 0.2))'
              }}>
                Our Mission
              </Typography>
            </Box>
            <Typography variant="h5" textAlign="center" sx={{
              color: '#1a1f26',
              lineHeight: 1.6,
              fontFamily: 'Nunito, sans-serif',
              fontWeight: '600',
              mb: 1.5,
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}>
              PathForge Learning is transforming the way learners prepare for the future.
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{
              color: '#2E3740',
              lineHeight: 1.6,
              fontFamily: 'Nunito, sans-serif',
              fontWeight: '500',
              maxWidth: '1000px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1rem' }
            }}>
              Through innovative enrichment programs in STEM & Technology, Creative Arts & Design, Life Skills & Career Prep, Test Prep & Academic Enrichment, and Health, Sports & Wellness, we equip students with the skills to create, innovate, and lead. Our programs ensure that all learners gain access to hands-on experiences, empowering every student to unlock their full potential and thrive in a rapidly changing world.
            </Typography>
          </Box>
        </Card>
      </Box>

      {/* Our Programs Section */}
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
            Explore Our Programs
          </Typography>
          <Typography variant="h6" sx={{
            color: '#2E3740',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: '500',
            fontSize: { xs: '1rem', md: '1.2rem' }
          }}>
            Discover comprehensive enrichment programs designed to inspire creativity, build essential skills, and prepare students for future success
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, px: 2 }}>
          {enrichmentBuckets.map((bucket, index) => {
            // Unique background colors for each program - slightly darker for better distinction
            const backgroundColors = [
              'linear-gradient(135deg, rgba(143, 91, 217, 0.08) 0%, rgba(143, 91, 217, 0.04) 100%)', // STEM
              'linear-gradient(135deg, rgba(38, 166, 154, 0.08) 0%, rgba(38, 166, 154, 0.04) 100%)',  // Creative Arts
              'linear-gradient(135deg, rgba(63, 95, 191, 0.08) 0%, rgba(63, 95, 191, 0.04) 100%)',   // Life Skills
              'linear-gradient(135deg, rgba(255, 152, 0, 0.08) 0%, rgba(255, 152, 0, 0.04) 100%)',  // Test Prep
              'linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(76, 175, 80, 0.04) 100%)'    // Health & Wellness
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
                {/* Video - Slightly enlarged (15% increase) */}
                <Box
                  component="video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  sx={{
                    width: { xs: '100%', md: '460px' }, // 15% increase from 400px
                    height: { xs: '287px', md: '345px' }, // 15% increase from 250px/300px
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <source src={bucket.backgroundVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>

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
                <Box sx={{ mb: 3, color: bucket.color }}>
                  {bucket.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{
                  fontWeight: 'bold',
                  color: bucket.color,
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: { xs: '1.5rem', md: '1.8rem' },
                  mb: 2
                }}>
                  {bucket.title}
                </Typography>
                <Typography variant="body1" sx={{
                  color: '#2E3740',
                  lineHeight: 1.6,
                  mb: 3,
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: '500',
                  fontSize: { xs: '1rem', md: '1.1rem' }
                }}>
                  {bucket.description}
                </Typography>
                <Typography variant="subtitle2" sx={{
                  color: bucket.color,
                  fontWeight: 'bold',
                  mb: 2,
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}>
                  Programs Include:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, maxWidth: '100%', mb: 3 }}>
                  {bucket.programs.map((program, programIndex) => {
                    const chipColors = ['#8F5BD9', '#26A69A', '#3F5FBF'];
                    const chipColor = chipColors[programIndex % chipColors.length];
                    return (
                      <Chip
                        key={programIndex}
                        label={program}
                        size="small"
                        sx={{
                          color: 'white',
                          backgroundColor: chipColor,
                          fontFamily: 'Nunito, sans-serif',
                          fontWeight: '500',
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          boxShadow: `0 2px 8px ${chipColor}40`,
                          '&:hover': {
                            backgroundColor: chipColor + 'CC',
                            transform: 'translateY(-1px)',
                            boxShadow: `0 4px 12px ${chipColor}60`,
                          },
                          transition: 'all 0.2s ease',
                        }}
                      />
                    );
                  })}
                </Box>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to={bucket.path}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    backgroundColor: bucket.color,
                    color: 'white',
                    borderRadius: '25px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    boxShadow: `0 4px 15px ${bucket.color}40`,
                    '&:hover': {
                      backgroundColor: bucket.color + 'CC',
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${bucket.color}60`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          );
        })}
        </Box>
      </Box>

      {/* Why Choose Us */}
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
          src="/public/Instagram upload/4a5fe117-ec9d-43ee-b032-5f5c33484851.png"
          alt="Background"
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
        {/* Translucent Gradient Overlay */}
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
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ 
                fontWeight: 'bold', 
                color: 'white', 
                fontFamily: 'Poppins, sans-serif',
                fontSize: { xs: '2rem', md: '2.8rem' },
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
                mb: 2
              }}
            >
              Why Choose PathForge Learning?
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'rgba(255, 255, 255, 0.95)', 
              fontFamily: 'Nunito, sans-serif',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: '500',
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}>
              Experience excellence in enrichment education with hands-on learning, expert guidance, and personalized attention
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', alignItems: 'stretch' }}>
            {[
              {
                title: 'Expert Instructors',
                description: 'Learn from experienced professionals passionate about enriching education.',
                icon: <CodeIcon sx={{ fontSize: 50, color: '#26A69A' }} />,
              },
              {
                title: 'Project-Based Learning',
                description: 'Students learn through hands-on projects that solve real-world problems.',
                icon: <SchoolIcon sx={{ fontSize: 50, color: '#8F5BD9' }} />,
              },
              {
                title: 'Small Class Sizes',
                description: 'Personalized attention with small class sizes for optimal learning.',
                icon: <ScienceIcon sx={{ fontSize: 50, color: '#3F5FBF' }} />,
              },
            ].map((feature, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, minWidth: '300px', maxWidth: '350px', height: '320px' }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    maxWidth: '350px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    backgroundColor: index === 0 ? 'rgba(143, 91, 217, 0.1)' : index === 1 ? 'rgba(38, 166, 154, 0.1)' : 'rgba(63, 95, 191, 0.1)',
                    border: `2px solid ${index === 0 ? '#8F5BD9' : index === 1 ? '#26A69A' : '#3F5FBF'}`,
                    borderRadius: '25px',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 50px ${index === 0 ? 'rgba(143, 91, 217, 0.3)' : index === 1 ? 'rgba(38, 166, 154, 0.3)' : 'rgba(63, 95, 191, 0.3)'}`,
                      border: `2px solid ${index === 0 ? '#8F5BD9' : index === 1 ? '#26A69A' : '#3F5FBF'}`,
                      backgroundColor: index === 0 ? 'rgba(143, 91, 217, 0.15)' : index === 1 ? 'rgba(38, 166, 154, 0.15)' : 'rgba(63, 95, 191, 0.15)',
                    },
                  }}
                >
                  <Box sx={{
                    backgroundColor: index === 0 ? '#F8F5FF' : index === 1 ? '#F0F9F8' : '#F5F7FF',
                    borderRadius: '15px',
                    p: 2,
                    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)',
                    border: `1px solid ${index === 0 ? '#8F5BD9' : index === 1 ? '#26A69A' : '#3F5FBF'}20`
                  }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#8F5BD9', fontFamily: 'Poppins, sans-serif', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#1a1f26', fontFamily: 'Nunito, sans-serif', fontWeight: '600', textShadow: '0px 1px 2px rgba(255, 255, 255, 0.7)' }}>
                    {feature.description}
                  </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{
        py: 8,
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.1) 0%, rgba(38, 166, 154, 0.1) 100%)',
        borderRadius: '25px',
        mx: 2,
        my: 4,
        boxShadow: '0 12px 40px rgba(143, 91, 217, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-5px) scale(1.01)',
          boxShadow: '0 20px 60px rgba(143, 91, 217, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        },
      }}>
        <Container maxWidth="md">
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
            gap: 2
          }}>
            <PlayIcon sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              color: '#8F5BD9',
              filter: 'drop-shadow(0 2px 4px rgba(143, 91, 217, 0.3))',
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                '50%': { transform: 'scale(1.1)', opacity: 0.8 }
              }
            }} />
            <Typography variant="h4" component="h2" sx={{
              fontWeight: 'bold',
              color: '#8F5BD9',
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(45deg, #8F5BD9 30%, #26A69A 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 4px rgba(143, 91, 217, 0.3))'
            }}>
              Ready to Start Your Journey?
            </Typography>
          </Box>
          <Typography variant="h6" sx={{
            mb: 4,
            color: '#2E3740',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: '500'
          }}>
            Join hundreds of students who are already building the future with technology.
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
            Get Started Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
