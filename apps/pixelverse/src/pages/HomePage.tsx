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
import { Link as RouterLink } from 'react-router-dom';

const enrichmentBuckets = [
  {
    title: 'STEM & Technology',
    description: 'Hands-on technology education including coding, robotics, AI, 3D printing, and more. Perfect for future innovators and problem-solvers.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    color: '#8F5BD9',
    path: '/programs/stem-technology',
    backgroundImage: '/public/mainPageProgramImages/Stem.png',
    programs: ['Coding (Python, Scratch, Web Dev)', 'Robotics (LEGO, VEX, etc.)', 'Game Design & Animation', 'Generative AI & Machine Learning', 'Electronics & Engineering']
  },
  {
    title: 'Creative Arts & Design',
    description: 'Unleash creativity through digital art, graphic design, 3D printing, music technology, and storytelling. Express yourself artistically.',
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    color: '#26A69A',
    path: '/programs/creative-arts-design',
    backgroundImage: '/public/mainPageProgramImages/creative arts.png',
    programs: ['Digital Art & Graphic Design', '3D Printing & CAD', 'Music Technology & Production', 'Creative Writing & Storytelling']
  },
  {
    title: 'Life Skills & Career Prep',
    description: 'Build essential life skills and career readiness. Develop leadership, communication, entrepreneurship, and professional skills.',
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    color: '#3F5FBF',
    path: '/programs/life-skills-career-prep',
    backgroundImage: '/public/mainPageProgramImages/likfeSkillsAndCareerPrep.png',
    programs: ['Leadership & Teamwork', 'Public Speaking & Debate', 'Entrepreneurship & Financial Literacy', 'Career Exploration Workshops']
  },
  {
    title: 'Test Prep & Academic Enrichment',
    description: 'Excel academically with personalized tutoring, test preparation, and study skills development. Achieve your academic goals.',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    color: '#8F5BD9',
    path: '/programs/test-prep-academic-enrichment',
    backgroundImage: '/public/mainPageProgramImages/testPrepandAcademic.png',
    programs: ['Math & Science Tutoring', 'Reading & Writing Support', 'Standardized Test Prep (SAT, ACT, etc.)', 'Study Skills & Time Management']
  },
  {
    title: 'Health, Sports & Wellness',
    description: 'Nurture body and mind through physical fitness, yoga, mindfulness, and nutrition education. Build healthy lifelong habits.',
    icon: <FitnessIcon sx={{ fontSize: 40 }} />,
    color: '#26A69A',
    path: '/programs/health-sports-wellness',
    backgroundImage: '/public/mainPageProgramImages/healthSportsandWelness.png',
    programs: ['Physical Fitness & Sports Camps', 'Yoga & Mindfulness', 'Nutrition & Wellness Programs']
  },
];

const carouselImages = [
  '/public/carousel/degorddg33dc0iqx1utg.png',
  '/public/carousel/dycbqxgwtt7bewwncgnj.png',
  '/public/carousel/lylfl41k6b06xaapnffa.png',
  '/public/carousel/sgpvppzrrh984epq4zrb.png',
  '/public/carousel/IMG_9314.png',
  '/public/carousel/IMG_9316.png',
];

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = getThemeColors('home');

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      {/* Three.js Background - Applied to entire page */}
      <PathForgeBackground page="home" />
      
      {/* Hero Section with Background Slideshow */}
      <Box
        sx={{
          minHeight: { xs: '70vh', md: '80vh' },
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background Slideshow */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}>
          {carouselImages.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Background ${index + 1}`}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                filter: 'brightness(0.7)',
              }}
            />
          ))}
          {/* Gradient Overlay */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.75) 0%, rgba(38, 166, 154, 0.75) 100%)',
          }} />
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
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#8F5BD9', 
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            />
            <Chip
              label="Small Class Sizes"
              sx={{ 
                px: 3, py: 1, fontSize: '1rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#26A69A', 
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ 
                px: 3, py: 1, fontSize: '1rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#3F5FBF', 
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                borderRadius: '25px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
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
              backgroundColor: 'white',
              color: '#8F5BD9',
              borderRadius: '50px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
              '&:hover': {
                backgroundColor: '#26A69A',
                color: 'white',
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 40px rgba(38, 166, 154, 0.5)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Start Your Journey Today
          </Button>

          {/* Dots Indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, gap: 2 }}>
            {carouselImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                sx={{
                  width: index === currentImageIndex ? 32 : 12,
                  height: 12,
                  borderRadius: '6px',
                  backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: index === currentImageIndex ? '0 4px 15px rgba(255, 255, 255, 0.5)' : 'none',
                  '&:hover': {
                    backgroundColor: 'white',
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>



      {/* Mission Statement */}
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Card sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '25px',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(143, 91, 217, 0.3)',
          border: '2px solid #8F5BD9',
        }}>
          {/* Image on top */}
          <Box
            component="img"
            src="/public/marketingImages/IMG_9331.png"
            alt="PathForge Learning Mission"
            sx={{
              width: '100%',
              height: { xs: '250px', md: '350px' },
              objectFit: 'cover',
            }}
          />
          
          {/* Text content below */}
          <Box sx={{ p: { xs: 4, md: 6 } }}>
            <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ 
              fontWeight: 'bold', 
              mb: 3, 
              color: '#8F5BD9', 
              fontFamily: 'Poppins, sans-serif',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}>
              Our Mission
            </Typography>
            <Typography variant="h5" textAlign="center" sx={{ 
              color: '#1a1f26', 
              lineHeight: 1.8, 
              fontFamily: 'Nunito, sans-serif', 
              fontWeight: '600', 
              mb: 2,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}>
              PathForge Learning is transforming the way learners prepare for the future.
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ 
              color: '#2E3740', 
              lineHeight: 1.8, 
              fontFamily: 'Nunito, sans-serif', 
              fontWeight: '500',
              maxWidth: '900px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}>
              Through innovative enrichment programs in STEM & Technology, Creative Arts & Design, Life Skills & Career Prep, Test Prep & Academic Enrichment, and Health, Sports & Wellness, we equip students with the skills to create, innovate, and lead. Our programs ensure that all learners gain access to hands-on experiences, empowering every student to unlock their full potential and thrive in a rapidly changing world.
            </Typography>
          </Box>
        </Card>
      </Container>

      {/* Our Programs Section */}
      <Box sx={{ 
        py: 8, 
        my: 4,
        backgroundImage: 'url("/public/marketingImages/IMG_9344.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.85) 0%, rgba(38, 166, 154, 0.85) 100%)',
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        }
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ 
              fontWeight: 'bold', 
              color: 'white', 
              fontFamily: 'Poppins, sans-serif',
              fontSize: { xs: '2rem', md: '2.8rem' },
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
              mb: 2
            }}>
              Explore Our Programs
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
              Discover comprehensive enrichment programs designed to inspire creativity, build essential skills, and prepare students for future success
            </Typography>
          </Box>
        <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, gap: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          {enrichmentBuckets.map((bucket, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%', md: '1 1 20%' }, minWidth: { md: '220px' }, maxWidth: { xs: '100%', sm: '48%', md: '20%' } }}>
              <Card
                elevation={8}
                sx={{
                  height: '100%',
                  minHeight: '400px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(10px)',
                  border: `3px solid ${bucket.color}`,
                  borderRadius: '20px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: `0 20px 60px ${bucket.color}60`,
                    border: `3px solid ${bucket.color}`,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  },
                  cursor: 'pointer',
                }}
                component={RouterLink}
                to={bucket.path}
              >
                {bucket.backgroundImage && (
                  <Box
                    component="img"
                    src={bucket.backgroundImage}
                    alt={`${bucket.title} program`}
                    sx={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '4px 4px 0 0',
                    }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: bucket.color }}>
                    {bucket.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: bucket.color, fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem' }}>
                    {bucket.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#2E3740', lineHeight: 1.6, mb: 3, fontFamily: 'Nunito, sans-serif', fontWeight: '500', fontSize: '0.95rem' }}>
                    {bucket.description}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: bucket.color, fontWeight: 'bold', mb: 2, fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem' }}>
                    Programs Include:
                  </Typography>
                  {bucket.programs.map((program, programIndex) => (
                    <Typography key={programIndex} variant="body2" sx={{ color: '#1a1f26', mb: 1, fontFamily: 'Nunito, sans-serif', fontWeight: '500', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      • {program}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ 
        py: 8, 
        my: 4,
        backgroundImage: 'url("/public/marketingImages/IMG_9344.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.85) 0%, rgba(38, 166, 154, 0.85) 100%)',
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        }
      }}>
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
                title: 'Project-Based Learning',
                description: 'Students learn through hands-on projects that solve real-world problems.',
                icon: <SchoolIcon sx={{ fontSize: 50, color: '#8F5BD9' }} />,
              },
              {
                title: 'Expert Instructors',
                description: 'Learn from experienced professionals passionate about enriching education.',
                icon: <CodeIcon sx={{ fontSize: 50, color: '#26A69A' }} />,
              },
              {
                title: 'Small Class Sizes',
                description: 'Personalized attention with small class sizes for optimal learning.',
                icon: <ScienceIcon sx={{ fontSize: 50, color: '#3F5FBF' }} />,
              },
            ].map((feature, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, minWidth: '300px', maxWidth: '350px' }}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 4, 
                    textAlign: 'center', 
                    height: '100%',
                    maxWidth: '350px',
                    mx: 'auto',
                    backgroundColor: 'white', 
                    border: '2px solid #E0E0E0',
                    borderRadius: '25px',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 50px rgba(143, 91, 217, 0.3)',
                      border: '2px solid #8F5BD9',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#8F5BD9', fontFamily: 'Poppins, sans-serif', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#1a1f26', fontFamily: 'Nunito, sans-serif', fontWeight: '600', textShadow: '0px 1px 2px rgba(255, 255, 255, 0.7)' }}>
                    {feature.description}
                  </Typography>
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
        backgroundColor: 'rgba(244, 244, 244, 0.9)', 
        backdropFilter: 'blur(3px)', 
        borderRadius: '25px', 
        mx: 2, 
        my: 4,
        backgroundImage: 'url("/public/marketingImages/IMG_9317.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '25px',
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        }
      }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#8F5BD9', fontFamily: 'Poppins, sans-serif' }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#2E3740', fontFamily: 'Nunito, sans-serif' }}>
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
              backgroundColor: '#26A69A',
              borderRadius: '50px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: '#3F5FBF',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 35px rgba(63, 95, 191, 0.4)',
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
