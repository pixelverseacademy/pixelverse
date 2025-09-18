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
} from '@mui/icons-material';

const StemTechnologyPage: React.FC = () => {
  const theme = getThemeColors('curriculum');
  const programs = [
    {
      title: 'Engineering & Robotics',
      icon: <BuildIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      description: 'Build and program robots using LEGO Mindstorms, Arduino, and advanced robotics kits. Learn mechanical engineering principles, sensors, and automation.',
      backgroundImage: '/public/programCardImages/robotics 2.jpeg',
      highlights: [
        'LEGO Mindstorms EV3 Programming',
        'Arduino Microcontroller Projects',
        'Sensor Integration & Data Collection',
        'Mechanical Design & 3D Printing',
        'Competition Team Preparation',
      ],
    },
    {
      title: 'Coding, Designing & Modding with Minecraft',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      description: 'Learn programming concepts through Minecraft modding, custom world creation, and game design. Perfect introduction to coding for young learners.',
      backgroundImage: '/public/programCardImages/minecraft.png',
      highlights: [
        'Minecraft Education Edition',
        'JavaScript & Python Scripting',
        'Custom Mod Development',
        '3D World Design & Building',
        'Redstone Engineering',
      ],
    },
    {
      title: 'Programming in Python',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
      description: 'Master Python programming from basics to advanced concepts. Build games, web applications, and data analysis projects.',
      backgroundImage: '/public/programCardImages/Python programming.jpg',
      highlights: [
        'Python Fundamentals & Syntax',
        'Object-Oriented Programming',
        'Game Development with Pygame',
        'Web Development with Flask/Django',
        'Data Science & Visualization',
      ],
    },
    {
      title: 'AR and VR Coding',
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#E91E63' }} />,
      description: 'Create immersive augmented and virtual reality experiences. Learn Unity, Unreal Engine, and AR development platforms.',
      backgroundImage: '/public/programCardImages/Ar and VR coding.jpg',
      highlights: [
        'Unity 3D Development',
        'ARCore & ARKit Integration',
        'VR Headset Programming',
        '3D Modeling & Animation',
        'Interactive Experience Design',
      ],
    },
    {
      title: 'Transform Your Imagination into Interactive Roblox Games',
      icon: <SmartToyIcon sx={{ fontSize: 40, color: '#FF5722' }} />,
      description: 'Design, build, and publish your own Roblox games. Learn Lua scripting, game mechanics, and monetization strategies.',
      backgroundImage: '/public/programCardImages/Roblox game development.png',
      highlights: [
        'Roblox Studio Development',
        'Lua Programming Language',
        'Game Design & Mechanics',
        '3D Modeling & Animation',
        'Publishing & Monetization',
      ],
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      description: 'Explore AI concepts through hands-on projects. Build chatbots, image recognition systems, and predictive models.',
      backgroundImage: '/public/programCardImages/Ai and machine learning.png',
      highlights: [
        'Machine Learning Fundamentals',
        'Neural Networks & Deep Learning',
        'Computer Vision Projects',
        'Natural Language Processing',
        'AI Ethics & Future Applications',
      ],
    },
    {
      title: 'Ignite Innovation with 3D Modeling, Design & Printing',
      icon: <PaletteIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      description: 'Master 3D design software and bring your creations to life with 3D printing. Learn CAD, modeling, and prototyping.',
      backgroundImage: '/public/programCardImages/3d modeling and printing.png',
      highlights: [
        'Tinkercad & Fusion 360',
        '3D Modeling Techniques',
        '3D Printing & Prototyping',
        'Product Design Thinking',
        'Rapid Prototyping Methods',
      ],
    },
    {
      title: 'Scratch-based Programming',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
      description: 'Perfect introduction to programming for young learners. Create interactive stories, games, and animations using visual programming.',
      backgroundImage: '/public/programCardImages/Scratch programming.png',
      highlights: [
        'Visual Programming Concepts',
        'Interactive Story Creation',
        'Game Development Basics',
        'Animation & Graphics',
        'Computational Thinking',
      ],
    },
    {
      title: 'Content Creation with Drone',
      icon: <FlightIcon sx={{ fontSize: 40, color: '#E91E63' }} />,
      description: 'Master aerial content creation using drones. Learn professional photography, videography techniques, and post-production editing for stunning visual storytelling.',
      backgroundImage: '/public/programCardImages/drone programming.png',
      highlights: [
        'Professional Aerial Photography',
        'Cinematic Videography Techniques',
        'Drone Camera Operation & Controls',
        'Video Editing & Post-Production',
        'Content Creation for Social Media',
        'Commercial Photography Projects',
      ],
    },
    {
      title: 'Mobile App Development',
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#FF5722' }} />,
      description: 'Create mobile applications for iOS and Android. Learn app design, development, and publishing processes.',
      backgroundImage: '/public/programCardImages/mobile app development.png',
      highlights: [
        'React Native Development',
        'iOS & Android App Creation',
        'User Interface Design',
        'App Store Publishing',
        'Cross-Platform Development',
      ],
    },
    {
      title: 'E-sports',
      icon: <EsportsIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      description: 'Develop gaming skills, strategy, and teamwork through competitive gaming. Learn about the esports industry and career opportunities.',
      backgroundImage: '/public/programCardImages/esports.png',
      highlights: [
        'Competitive Gaming Strategies',
        'Team Communication & Leadership',
        'Game Analysis & Improvement',
        'Esports Industry Overview',
        'Career Opportunities in Gaming',
      ],
    },
    {
      title: 'Web Development',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#2ecc71' }} />,
      description: 'Build interactive websites and web applications using HTML, CSS, and JavaScript.',
      backgroundImage: '/public/programCardImages/web development.png',
      highlights: [
        'HTML, CSS & JavaScript Fundamentals',
        'Responsive Web Design',
        'Frontend Frameworks (React, Vue)',
        'Backend Development',
        'Full-Stack Applications',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #2196F3 0%, #42A5F5 100%)',
        py: 12,
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <PathForgeBackground page="curriculum" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.text, mb: 4, position: 'relative', zIndex: 3 }}>
            STEM & Technology Programs
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, color: theme.secondaryText, position: 'relative', zIndex: 3 }}>
            Hands-on technology education empowering the next generation of innovators
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 3 }}>
            <Chip
              label="Ages 6-17"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="12+ Programs"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2196f3', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff9800', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Programs */}
      <Box sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Our STEM & Technology Programs
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    maxWidth: '500px',
                    mx: 'auto',
                    height: '100%',
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
                  {program.backgroundImage && (
                    <Box
                      component="img"
                      src={program.backgroundImage}
                      alt={`${program.title} program`}
                      sx={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '4px 4px 0 0',
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {program.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#7f8c8d', textAlign: 'center', mb: 3 }}>
                      {program.description}
                    </Typography>
                    <Accordion sx={{ backgroundColor: '#f0f8f0', border: '1px solid #e0e6ed' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#3498db' }} />}
                        sx={{ '& .MuiAccordionSummary-content': { margin: '12px 0' } }}
                      >
                        <Typography sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
                          Program Highlights
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {program.highlights.map((highlight, highlightIndex) => (
                            <ListItem key={highlightIndex} sx={{ px: 0 }}>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: '#3498db' }} />
                              </ListItemIcon>
                              <ListItemText primary={highlight} sx={{ color: '#7f8c8d' }} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Learning Paths */}
      <Box sx={{ backgroundColor: '#f8f9ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
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
                  backgroundColor: '#f0f8f0',
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
                  backgroundColor: '#f0f8f0',
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
                  backgroundColor: '#f0f8f0',
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

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Start Learning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Choose the perfect program for your child and begin their technology education journey today.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Hands-On Learning"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Small Class Sizes"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2196f3', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff9800', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default StemTechnologyPage;