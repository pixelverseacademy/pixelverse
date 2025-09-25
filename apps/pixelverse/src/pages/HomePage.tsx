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
    color: '#2196F3',
    path: '/programs/stem-technology',
    backgroundImage: '/public/mainPageProgramImages/Stem.png',
    programs: ['Coding (Python, Scratch, Web Dev)', 'Robotics (LEGO, VEX, etc.)', 'Game Design & Animation', 'Generative AI & Machine Learning', 'Electronics & Engineering']
  },
  {
    title: 'Creative Arts & Design',
    description: 'Unleash creativity through digital art, graphic design, 3D printing, music technology, and storytelling. Express yourself artistically.',
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    color: '#E91E63',
    path: '/programs/creative-arts-design',
    backgroundImage: '/public/mainPageProgramImages/creative arts.png',
    programs: ['Digital Art & Graphic Design', '3D Printing & CAD', 'Music Technology & Production', 'Creative Writing & Storytelling']
  },
  {
    title: 'Life Skills & Career Prep',
    description: 'Build essential life skills and career readiness. Develop leadership, communication, entrepreneurship, and professional skills.',
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    color: '#4CAF50',
    path: '/programs/life-skills-career-prep',
    backgroundImage: '/public/mainPageProgramImages/likfeSkillsAndCareerPrep.png',
    programs: ['Leadership & Teamwork', 'Public Speaking & Debate', 'Entrepreneurship & Financial Literacy', 'Career Exploration Workshops']
  },
  {
    title: 'Test Prep & Academic Enrichment',
    description: 'Excel academically with personalized tutoring, test preparation, and study skills development. Achieve your academic goals.',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    color: '#FF9800',
    path: '/programs/test-prep-academic-enrichment',
    backgroundImage: '/public/mainPageProgramImages/testPrepandAcademic.png',
    programs: ['Math & Science Tutoring', 'Reading & Writing Support', 'Standardized Test Prep (SAT, ACT, etc.)', 'Study Skills & Time Management']
  },
  {
    title: 'Health, Sports & Wellness',
    description: 'Nurture body and mind through physical fitness, yoga, mindfulness, and nutrition education. Build healthy lifelong habits.',
    icon: <FitnessIcon sx={{ fontSize: 40 }} />,
    color: '#FF5722',
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
    <Box sx={{ backgroundColor: '#f0f8ff' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '80vh', md: '100vh' },
          background: 'linear-gradient(135deg, #2196F3 0%, #42A5F5 50%, #64B5F6 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <PathForgeBackground page="home" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 'bold',
                color: theme.text,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
              }}
            >
              PathForge Learning
            </Typography>
          </Box>
          </Box>
          <Typography variant="h4" sx={{ mb: 4, opacity: 0.9, color: theme.secondaryText, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Empowering Minds, Forging Future
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 6, color: theme.secondaryText, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            PathForge Learning offers hands-on STEM enrichment, coding, robotics, and creative programs for kids, teens, and adults. Our after-school classes, camps, and in-school partnerships help learners develop critical thinking, problem-solving, and career-ready skills. We partner with local businesses to provide a wide range of future-ready programs, igniting curiosity and fostering creativity. Join PathForge to explore, create, and grow!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Chip
              label="Hands-On Learning"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#9c27b0', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Small Class Sizes"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2196f3', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              backgroundColor: '#ff6b35',
              color: 'white',
              border: '2px solid #ff6b35',
              '&:hover': {
                backgroundColor: '#ffa726',
                color: 'white',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Start Your Journey Today
          </Button>
        </Container>
      </Box>

      {/* Image Carousel */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          Our Enrichment Programs in Action
        </Typography>

        <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>
          <Box
            component="img"
            src={carouselImages[currentImageIndex]}
            alt={`Enrichment program image ${currentImageIndex + 1}`}
            sx={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '4px solid #3498db',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          />

          {/* Navigation Buttons */}
          <IconButton
            onClick={prevImage}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.9)',
              color: '#3498db',
              '&:hover': {
                backgroundColor: '#3498db',
                color: 'white',
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={nextImage}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.9)',
              color: '#3498db',
              '&:hover': {
                backgroundColor: '#3498db',
                color: 'white',
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>

          {/* Dots Indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
            {carouselImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: index === currentImageIndex ? '#3498db' : '#e0e6ed',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#3498db',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>

      {/* Quick Links */}
      <Container maxWidth="lg" sx={{ py: 6, backgroundColor: '#f0f8ff' }}>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: 'Our Programs', link: '/curriculum', icon: <SchoolIcon /> },
            { title: 'Why Choose Us', link: '/why-us', icon: <CodeIcon /> },
            { title: 'Locations', link: '/locations', icon: <BuildIcon /> },
            { title: 'Contact Us', link: '/contact', icon: <ScienceIcon /> },
          ].map((link, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Button
                component={RouterLink}
                to={link.link}
                variant="outlined"
                fullWidth
                startIcon={link.icon}
                sx={{
                  py: 2,
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
                {link.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission Statement */}
      <Box sx={{ backgroundColor: '#f8f9ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: '#3498db' }}>
            Our Mission
          </Typography>
          <Typography variant="h5" textAlign="center" sx={{ maxWidth: '900px', mx: 'auto', color: '#7f8c8d', lineHeight: 1.6 }}>
            PathForge Learning is transforming the way learners prepare for the future. Through innovative enrichment programs in STEM & Technology, Creative Arts & Design, Life Skills & Career Prep, Test Prep & Academic Enrichment, and Health, Sports & Wellness, we equip students with the skills to create, innovate, and lead. Our programs ensure that all learners gain access to hands-on experiences, empowering every student to unlock their full potential and thrive in a rapidly changing world.
          </Typography>
        </Container>
      </Box>

      {/* Course Highlights */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          Our Programs
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, gap: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          {enrichmentBuckets.map((bucket, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%', md: '1 1 20%' }, minWidth: { md: '220px' }, maxWidth: { xs: '100%', sm: '48%', md: '20%' } }}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  minHeight: '400px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#f8f9ff',
                  border: `2px solid ${bucket.color}`,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${bucket.color}40`,
                    border: `2px solid ${bucket.color}`,
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
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                    {bucket.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#7f8c8d', lineHeight: 1.5, mb: 3 }}>
                    {bucket.description}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: bucket.color, fontWeight: 'bold', mb: 2 }}>
                    Programs Include:
                  </Typography>
                  {bucket.programs.map((program, programIndex) => (
                    <Typography key={programIndex} variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                      • {program}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ backgroundColor: '#f8f9ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}
          >
            Why Choose PathForge Learning?
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {[
              {
                title: 'Project-Based Learning',
                description: 'Students learn through hands-on projects that solve real-world problems.',
                icon: <SchoolIcon sx={{ fontSize: 50, color: '#3498db' }} />,
              },
              {
                title: 'Expert Instructors',
                description: 'Learn from experienced professionals passionate about enriching education.',
                icon: <CodeIcon sx={{ fontSize: 50, color: '#3498db' }} />,
              },
              {
                title: 'Small Class Sizes',
                description: 'Personalized attention with small class sizes for optimal learning.',
                icon: <ScienceIcon sx={{ fontSize: 50, color: '#3498db' }} />,
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 4, 
                    textAlign: 'center', 
                    height: '100%',
                    maxWidth: '350px',
                    mx: 'auto',
                    backgroundColor: '#f0f8ff', 
                    border: '1px solid #e0e6ed',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                      border: '1px solid #3498db',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
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
              backgroundColor: '#3498db',
              '&:hover': {
                backgroundColor: '#fff0e6',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
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
