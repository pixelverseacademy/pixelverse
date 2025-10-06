import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  Button,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Check as CheckIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  School as SchoolIcon,
  Psychology as PsychologyIcon,
  SmartToy as SmartToyIcon,
  Palette as PaletteIcon,
  Flight as FlightIcon,
  PhoneAndroid as PhoneIcon,
  SportsEsports as EsportsIcon,
  Extension as ExtensionIcon,
  Visibility as VisibilityIcon,
  Sports as SportsIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const StemTechnologyPage: React.FC = () => {
  const theme = getThemeColors('curriculum');

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
  const stats = [
    { number: '12+', label: 'STEM Programs' },
    { number: '500+', label: 'Students Coded' },
    { number: '50+', label: 'Projects Built' },
    { number: '5', label: 'Years Innovating' },
  ];
  const programs = [
    {
      title: 'Engineering & Robotics',
      description: 'Build and program robots using LEGO Mindstorms, Arduino, and advanced robotics kits. Learn mechanical engineering principles, sensors, and automation.',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      color: '#8F5BD9',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/robotics 2.jpeg'),
      programs: ['LEGO Mindstorms EV3 Programming', 'Arduino Microcontroller Projects', 'Sensor Integration & Data Collection', 'Mechanical Design & 3D Printing']
    },
    {
      title: 'Python Programming',
      description: 'Master Python programming from basics to advanced concepts. Build games, web applications, and data analysis projects.',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      color: '#26A69A',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/Python programming.jpg'),
      programs: ['Python Fundamentals & Syntax', 'Object-Oriented Programming', 'Game Development with Pygame', 'Data Science & Visualization']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Explore AI concepts through hands-on projects. Build chatbots, image recognition systems, and predictive models.',
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      color: '#3F5FBF',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/Ai and machine learning.png'),
      programs: ['Machine Learning Fundamentals', 'Neural Networks & Deep Learning', 'Computer Vision Projects', 'AI Ethics & Future Applications']
    },
    {
      title: 'Web Development',
      description: 'Build interactive websites and web applications using HTML, CSS, and JavaScript.',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      color: '#8F5BD9',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/web development.png'),
      programs: ['HTML, CSS & JavaScript Fundamentals', 'Responsive Web Design', 'Frontend Frameworks', 'Full-Stack Applications']
    },
    {
      title: 'Mobile App Development',
      description: 'Create mobile applications for iOS and Android. Learn app design, development, and publishing processes.',
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      color: '#26A69A',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/mobile app development.png'),
      programs: ['React Native Development', 'iOS & Android App Creation', 'UI/UX Design', 'App Store Publishing']
    },
    {
      title: '3D Modeling & Printing',
      description: 'Master 3D design software and bring your creations to life with 3D printing. Learn CAD, modeling, and prototyping.',
      icon: <PaletteIcon sx={{ fontSize: 40 }} />,
      color: '#3F5FBF',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/3d modeling and printing.png'),
      programs: ['Tinkercad & Fusion 360', '3D Modeling Techniques', '3D Printing & Prototyping', 'Product Design Thinking']
    },
    {
      title: 'Scratch Programming',
      description: 'Perfect introduction to programming for young learners. Create interactive stories, games, and animations using visual programming.',
      icon: <ExtensionIcon sx={{ fontSize: 40 }} />,
      color: '#8F5BD9',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/Scratch programming.png'),
      programs: ['Visual Programming Concepts', 'Interactive Story Creation', 'Game Development Basics', 'Computational Thinking']
    },
    {
      title: 'AR & VR Coding',
      description: 'Create immersive augmented and virtual reality experiences. Learn Unity, Unreal Engine, and AR development platforms.',
      icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
      color: '#26A69A',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/Ar and VR coding.jpg'),
      programs: ['Unity 3D Development', 'ARCore & ARKit Integration', 'VR Headset Programming', '3D Modeling & Animation']
    },
    {
      title: 'Roblox Game Development',
      description: 'Design, build, and publish your own Roblox games. Learn Lua scripting, game mechanics, and monetization strategies.',
      icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
      color: '#3F5FBF',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/Roblox game development.png'),
      programs: ['Roblox Studio Development', 'Lua Programming Language', 'Game Design & Mechanics', 'Publishing & Monetization']
    },
    {
      title: 'Minecraft Coding',
      description: 'Learn programming concepts through Minecraft modding, custom world creation, and game design. Perfect introduction to coding for young learners.',
      icon: <SportsIcon sx={{ fontSize: 40 }} />,
      color: '#8F5BD9',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/minecraft.png'),
      programs: ['Minecraft Education Edition', 'JavaScript & Python Scripting', 'Custom Mod Development', 'Redstone Engineering']
    },
    {
      title: 'Drone Programming',
      description: 'Master aerial content creation using drones. Learn professional photography, videography techniques, and post-production editing.',
      icon: <FlightIcon sx={{ fontSize: 40 }} />,
      color: '#26A69A',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/drone programming.png'),
      programs: ['Professional Aerial Photography', 'Cinematic Videography Techniques', 'Drone Camera Operation', 'Video Editing & Post-Production']
    },
    {
      title: 'E-sports',
      description: 'Develop gaming skills, strategy, and teamwork through competitive gaming. Learn about the esports industry and career opportunities.',
      icon: <EsportsIcon sx={{ fontSize: 40 }} />,
      color: '#3F5FBF',
      path: '/programs/stem-technology',
      backgroundImage: getAssetUrl('programCardImages', 'stemAndTechnology/esports.png'),
      programs: ['Competitive Gaming Strategies', 'Team Communication & Leadership', 'Game Analysis & Improvement', 'Esports Industry Overview']
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
            src={getAssetUrl('instagramUpload', '7313934c-05ed-40fe-b6c2-14126fc67fbc.png')}
            alt="STEM Technology Hero"
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
            STEM & Technology Programs
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Empowering the Next Generation of Innovators
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, color: 'white', fontFamily: 'Nunito, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Hands-on technology education from coding to robotics, AI to web development. Build the future with expert guidance.
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


      {/* Programs */}
      <Box sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{
            fontWeight: 'bold',
            mb: 6,
            color: '#3498db',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Our STEM & Technology Programs
          </Typography>

          {programs.map((program, index) => {
            // Unique background colors for each program
            const backgroundColors = [
              '#f8f9ff', // Light blue-white
              '#f0f8f0', // Light green-white
              '#fff8f8', // Light red-white
              '#f8f0ff', // Light purple-white
              '#fff8f0', // Light orange-white
              '#f0fff8', // Light teal-white
              '#f8fff0', // Light yellow-white
              '#fff0f8', // Light pink-white
              '#f0f8ff', // Light blue-white (repeat)
              '#f8f0f8', // Light magenta-white
              '#f0ffff', // Light cyan-white
              '#ffffe0'  // Light cream
            ];

            return (
              <Box
                key={index}
                sx={{
                  mb: index < programs.length - 1 ? 4 : 0,
                  py: 4,
                  px: 3,
                  backgroundColor: backgroundColors[index % backgroundColors.length],
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'flex-start' },
                  gap: 4,
                  maxWidth: '1200px',
                  mx: 'auto'
                }}>
                  {/* Image */}
                  <Box
                    component="img"
                    src={program.backgroundImage}
                    alt={`${program.title} program`}
                    sx={{
                      width: { xs: '100%', md: '350px' },
                      height: { xs: '220px', md: '250px' },
                      objectFit: 'cover',
                      borderRadius: '15px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      flexShrink: 0,
                    }}
                  />

                  {/* Content */}
                  <Box sx={{
                    flex: 1,
                    textAlign: { xs: 'center', md: 'left' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Box sx={{ mb: 3, color: program.color, textAlign: 'center' }}>
                      {program.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{
                      fontWeight: 'bold',
                      color: program.color,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                      mb: 2,
                      textAlign: 'center'
                    }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body1" sx={{
                      color: '#2E3740',
                      lineHeight: 1.6,
                      mb: 4,
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: '500',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      textAlign: 'center'
                    }}>
                      {program.description}
                    </Typography>
                    <Typography variant="subtitle2" sx={{
                      color: program.color,
                      fontWeight: 'bold',
                      mb: 2,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      textAlign: 'center'
                    }}>
                      Programs Include:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                      {program.programs.map((item, itemIndex) => {
                        const chipColors = ['#8F5BD9', '#26A69A', '#3F5FBF'];
                        const chipColor = chipColors[itemIndex % chipColors.length];
                        return (
                          <Chip
                            key={itemIndex}
                            label={item}
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
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Container>
      </Box>

      {/* Learning Paths */}
      <Box sx={{ backgroundColor: '#f0f8ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Learning Paths
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: '#f8f9ff',
                  border: '1px solid #e0e6ed',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>
                  Beginner Path
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d', textAlign: 'center', mb: 3 }}>
                  Ages 6-12
                </Typography>
                <List dense>
                  {[
                    'Scratch Programming',
                    'LEGO Robotics Basics',
                    '3D Modeling Introduction',
                    'Minecraft Coding',
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: '#3498db' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} sx={{ color: '#7f8c8d' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: '#f8f9ff',
                  border: '1px solid #e0e6ed',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>
                  Intermediate Path
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d', textAlign: 'center', mb: 3 }}>
                  Ages 12-15
                </Typography>
                <List dense>
                  {[
                    'Python Programming',
                    'Advanced Robotics',
                    'Web Development',
                    'Game Development',
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: '#3498db' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} sx={{ color: '#7f8c8d' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: '#f8f9ff',
                  border: '1px solid #e0e6ed',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>
                  Advanced Path
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d', textAlign: 'center', mb: 3 }}>
                  Ages 14-17
                </Typography>
                <List dense>
                  {[
                    'AI & Machine Learning',
                    'AR/VR Development',
                    'Mobile App Development',
                    'Cybersecurity',
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: '#3498db' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} sx={{ color: '#7f8c8d' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default StemTechnologyPage;