import React from 'react';
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

const CurriculumPage: React.FC = () => {
  const programs = [
    {
      title: 'Engineering & Robotics',
      icon: <BuildIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Build and program robots using LEGO Mindstorms, Arduino, and advanced robotics kits. Learn mechanical engineering principles, sensors, and automation.',
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
      icon: <CodeIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Learn programming concepts through Minecraft modding, custom world creation, and game design. Perfect introduction to coding for young learners.',
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
      icon: <CodeIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Master Python programming from basics to advanced concepts. Build games, web applications, and data analysis projects.',
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
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Create immersive augmented and virtual reality experiences. Learn Unity, Unreal Engine, and AR development platforms.',
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
      icon: <SmartToyIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Design, build, and publish your own Roblox games. Learn Lua scripting, game mechanics, and monetization strategies.',
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
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Explore AI concepts through hands-on projects. Build chatbots, image recognition systems, and predictive models.',
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
      icon: <PaletteIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Master 3D design software and bring your creations to life with 3D printing. Learn CAD, modeling, and prototyping.',
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
      icon: <CodeIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Perfect introduction to programming for young learners. Create interactive stories, games, and animations using visual programming.',
      highlights: [
        'Visual Programming Concepts',
        'Interactive Story Creation',
        'Game Development Basics',
        'Animation & Graphics',
        'Computational Thinking',
      ],
    },
    {
      title: 'Code, Control & Fly Drones',
      icon: <FlightIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Learn to program and control drones for various applications. Explore aerial photography, autonomous flight, and drone racing.',
      highlights: [
        'Drone Programming & Control',
        'Aerial Photography & Videography',
        'Autonomous Flight Programming',
        'Drone Racing & Competitions',
        'Safety & Regulations',
      ],
    },
    {
      title: 'Mobile App Development',
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Create mobile applications for iOS and Android. Learn app design, development, and publishing processes.',
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
      icon: <EsportsIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Develop gaming skills, strategy, and teamwork through competitive gaming. Learn about the esports industry and career opportunities.',
      highlights: [
        'Competitive Gaming Strategies',
        'Team Communication & Leadership',
        'Game Analysis & Improvement',
        'Esports Industry Overview',
        'Career Opportunities in Gaming',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #ff6b35 0%, #ffa726 100%)',
        py: 12,
        textAlign: 'center',
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            Comprehensive STEM Curriculum
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            Empowering young minds with cutting-edge technology education
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Ages 6-17"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
            <Chip
              label="11+ Programs"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Explore Our Programs */}
      <Box sx={{ py: 8, backgroundColor: '#121212' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
            Explore Our Programs
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card 
                  sx={{ 
                    maxWidth: '500px',
                    mx: 'auto',
                    height: '100%',
                    backgroundColor: '#1e1e1e',
                    border: '1px solid #333333',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                      border: '1px solid #ff6b35',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {program.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#b0b0b0', textAlign: 'center', mb: 3 }}>
                      {program.description}
                    </Typography>
                    <Accordion sx={{ backgroundColor: '#2e2e2e', border: '1px solid #333333' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#ff6b35' }} />}
                        sx={{ '& .MuiAccordionSummary-content': { margin: '12px 0' } }}
                      >
                        <Typography sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                          Program Highlights
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {program.highlights.map((highlight, highlightIndex) => (
                            <ListItem key={highlightIndex} sx={{ px: 0 }}>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: '#ff6b35' }} />
                              </ListItemIcon>
                              <ListItemText primary={highlight} sx={{ color: '#b0b0b0' }} />
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
      <Box sx={{ backgroundColor: '#1e1e1e', py: 8, borderTop: '1px solid #333333' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
            Learning Paths
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>
                  Beginner Path
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0', textAlign: 'center', mb: 3 }}>
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
                        <CheckIcon sx={{ color: '#ff6b35' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} sx={{ color: '#b0b0b0' }} />
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
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>
                  Intermediate Path
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0', textAlign: 'center', mb: 3 }}>
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
                        <CheckIcon sx={{ color: '#ff6b35' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} sx={{ color: '#b0b0b0' }} />
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
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>
                  Advanced Path
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0', textAlign: 'center', mb: 3 }}>
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
                        <CheckIcon sx={{ color: '#ff6b35' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} sx={{ color: '#b0b0b0' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#121212' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Ready to Start Learning?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#b0b0b0' }}>
            Choose the perfect program for your child and begin their technology education journey today.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Free Trial Session"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff6b35', color: 'white' }}
            />
            <Chip
              label="Small Class Sizes"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ffa726', color: 'white' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff6b35', color: 'white' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CurriculumPage;
