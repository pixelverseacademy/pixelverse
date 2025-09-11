import React from 'react';
import ThreeBackground from '../components/InteractiveBackground';
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
} from '@mui/material';
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
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const courseHighlights = [
  {
    title: 'Engineering & Robotics',
    description: 'Build and program robots using LEGO, VEX, and micro:bit. Learn engineering principles through hands-on projects.',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    color: '#3498db',
  },
  {
    title: 'Minecraft Coding & Modding',
    description: 'Learn programming by creating mods, designing worlds, and automating tasks in Minecraft.',
    icon: <MinecraftIcon sx={{ fontSize: 40 }} />,
    color: '#ff8a65',
  },
  {
    title: 'Python Programming',
    description: 'Master Python from basics to advanced concepts. Create games, apps, and solve real-world problems.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    color: '#2ecc71',
  },
  {
    title: 'AR and VR Coding',
    description: 'Create immersive experiences using augmented and virtual reality technologies.',
    icon: <ARIcon sx={{ fontSize: 40 }} />,
    color: '#3498db',
  },
  {
    title: 'Roblox Game Development',
    description: 'Transform your imagination into interactive Roblox games and share them with the world.',
    icon: <EsportsIcon sx={{ fontSize: 40 }} />,
    color: '#ff8a65',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Explore artificial intelligence and machine learning concepts through hands-on projects.',
    icon: <AIIcon sx={{ fontSize: 40 }} />,
    color: '#2ecc71',
  },
  {
    title: '3D Modeling & Printing',
    description: 'Design and print 3D objects using professional modeling software and 3D printers.',
    icon: <PrintIcon sx={{ fontSize: 40 }} />,
    color: '#3498db',
  },
  {
    title: 'Scratch Programming',
    description: 'Learn programming fundamentals through visual, block-based coding with Scratch.',
    icon: <ScratchIcon sx={{ fontSize: 40 }} />,
    color: '#ff8a65',
  },
  {
    title: 'Drone Programming',
    description: 'Code, control, and fly drones while learning about aerodynamics and flight principles.',
    icon: <DroneIcon sx={{ fontSize: 40 }} />,
    color: '#2ecc71',
  },
  {
    title: 'Mobile App Development',
    description: 'Create mobile applications for iOS and Android using modern development tools.',
    icon: <MobileIcon sx={{ fontSize: 40 }} />,
    color: '#3498db',
  },
  {
    title: 'E-sports & Gaming',
    description: 'Learn game design, competitive gaming strategies, and esports team management.',
    icon: <EsportsIcon sx={{ fontSize: 40 }} />,
    color: '#ff8a65',
  },
  {
    title: 'Web Development',
    description: 'Build interactive websites and web applications using HTML, CSS, and JavaScript.',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    color: '#2ecc71',
  },
];

const HomePage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#2e2e2e' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '80vh', md: '100vh' },
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8A65 50%, #FFA726 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ThreeBackground page="home" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              PixelVerse Learning Academy
            </Typography>
          </Box>
          </Box>
          <Typography variant="h4" sx={{ mb: 4, opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Where Young Minds Build the Future
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 6, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Empowering students ages 6-17 with cutting-edge technology education through
            hands-on coding, robotics, AI, and STEM programs in Durham and Holly Springs, NC.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Chip
              label="Free Trial Session"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255,255,255,0.3)', color: '#2c3e50' }}
            />
            <Chip
              label="Small Class Sizes"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255,255,255,0.3)', color: '#2c3e50' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255,255,255,0.3)', color: '#2c3e50' }}
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

      {/* Quick Links */}
      <Container maxWidth="lg" sx={{ py: 6, backgroundColor: '#2e2e2e' }}>
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
      <Box sx={{ backgroundColor: '#1e1e1e', py: 8, borderTop: '1px solid #333333' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: '#3498db' }}>
            Our Mission
          </Typography>
          <Typography variant="h5" textAlign="center" sx={{ maxWidth: '900px', mx: 'auto', color: '#b0b0b0', lineHeight: 1.6 }}>
            To inspire and empower the next generation of innovators through comprehensive technology education, 
            fostering creativity, critical thinking, and problem-solving skills that prepare students for the future.
          </Typography>
        </Container>
      </Box>

      {/* Course Highlights */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#2e2e2e' }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          Our Programs
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {courseHighlights.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                elevation={2} 
                sx={{ 
                  height: '100%', 
                  minHeight: '200px',
                  maxWidth: '350px',
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#E3F2FD',
                  border: '2px solid #2196F3',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(33, 150, 243, 0.4)',
                    border: '2px solid #E91E63',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: course.color }}>
                    {course.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#1565C0' }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#424242' }}>
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ backgroundColor: '#1e1e1e', py: 8, borderTop: '1px solid #333333' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}
          >
            Why Choose PixelVerse Learning Academy?
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
                description: 'Learn from experienced professionals passionate about technology education.',
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
                    backgroundColor: '#2e2e2e', 
                    border: '1px solid #333333',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                      border: '1px solid #3498db',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b0b0' }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#2e2e2e' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#b0b0b0' }}>
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
