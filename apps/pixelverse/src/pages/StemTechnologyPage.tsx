import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from '@mui/material';
import {
  Code as CodeIcon,
  Build as BuildIcon,
  Psychology as AIIcon,
  SmartToy as RobotIcon,
  SportsEsports as GameIcon,
  Flight as DroneIcon,
  PhoneAndroid as MobileIcon,
  Print as PrintIcon,
  Extension as ScratchIcon,
  Sports as MinecraftIcon,
  Visibility as ARIcon,
} from '@mui/icons-material';

const StemTechnologyPage: React.FC = () => {
  const theme = getThemeColors('curriculum');
  
  // Define blue theme colors for STEM page
  const primaryColor = '#2196F3';
  const secondaryColor = '#42A5F5';
  
  const programs = [
    {
      title: 'Python Programming',
      description: 'Master real-world coding with Python',
      icon: <CodeIcon sx={{ fontSize: 24 }} />,
      color: '#2196F3',
      image: '/public/programCardImages/stemAndTechnology/Python programming.jpg',
      skills: ['Variables & Functions', 'Object-Oriented Programming', 'Game Development', 'Web Applications'],
    },
    {
      title: 'Engineering & Robotics',
      description: 'Build and program advanced robots',
      icon: <RobotIcon sx={{ fontSize: 24 }} />,
      color: '#FF9800',
      image: '/public/programCardImages/stemAndTechnology/robotics 2.jpeg',
      skills: ['LEGO Mindstorms', 'Arduino Projects', 'Sensor Integration', 'Competition Prep'],
    },
    {
      title: 'Game Development',
      description: 'Create interactive games and experiences',
      icon: <GameIcon sx={{ fontSize: 24 }} />,
      color: '#E91E63',
      image: '/public/programCardImages/stemAndTechnology/Roblox game development.png',
      skills: ['Unity 3D', 'Game Design', 'Roblox Studio', 'Lua Scripting'],
    },
    {
      title: 'AI & Machine Learning',
      description: 'Explore artificial intelligence concepts',
      icon: <AIIcon sx={{ fontSize: 24 }} />,
      color: '#9C27B0',
      image: '/public/programCardImages/stemAndTechnology/Ai and machine learning.png',
      skills: ['Neural Networks', 'Computer Vision', 'Data Analysis', 'AI Ethics'],
    },
    {
      title: 'Drone Programming',
      description: 'Code flying robots and aerial content',
      icon: <DroneIcon sx={{ fontSize: 24 }} />,
      color: '#00BCD4',
      image: '/public/programCardImages/stemAndTechnology/drone programming.png',
      skills: ['Flight Control', 'Autonomous Navigation', 'Aerial Photography', 'Video Editing'],
    },
    {
      title: 'Mobile App Development',
      description: 'Build apps for iOS and Android',
      icon: <MobileIcon sx={{ fontSize: 24 }} />,
      color: '#4CAF50',
      image: '/public/programCardImages/stemAndTechnology/mobile app development.png',
      skills: ['React Native', 'App Design', 'User Interface', 'App Store Publishing'],
    },
    {
      title: '3D Printing & CAD',
      description: 'Design and print your creations',
      icon: <PrintIcon sx={{ fontSize: 24 }} />,
      color: '#FF5722',
      image: '/public/programCardImages/stemAndTechnology/3d modeling and printing.png',
      skills: ['Fusion 360', '3D Modeling', 'Prototyping', 'Product Design'],
    },
    {
      title: 'Web Development',
      description: 'Create modern websites and web apps',
      icon: <BuildIcon sx={{ fontSize: 24 }} />,
      color: '#795548',
      image: '/public/programCardImages/stemAndTechnology/web development.png',
      skills: ['HTML & CSS', 'JavaScript', 'React Framework', 'Responsive Design'],
    },
    {
      title: 'Scratch Programming',
      description: 'Visual programming for beginners',
      icon: <ScratchIcon sx={{ fontSize: 24 }} />,
      color: '#FF6B35',
      image: '/public/programCardImages/stemAndTechnology/Scratch programming.png',
      skills: ['Visual Programming', 'Game Creation', 'Animation', 'Computational Thinking'],
    },
    {
      title: 'Minecraft Coding',
      description: 'Learn programming through Minecraft',
      icon: <MinecraftIcon sx={{ fontSize: 24 }} />,
      color: '#4CAF50',
      image: '/public/programCardImages/stemAndTechnology/minecraft.png',
      skills: ['JavaScript Scripting', 'World Building', 'Redstone Engineering', 'Mod Development'],
    },
    {
      title: 'AR & VR Development',
      description: 'Create immersive virtual experiences',
      icon: <ARIcon sx={{ fontSize: 24 }} />,
      color: '#E91E63',
      image: '/public/programCardImages/stemAndTechnology/Ar and VR coding.jpg',
      skills: ['Unity 3D', 'ARCore & ARKit', 'VR Headsets', '3D Modeling'],
    },
    {
      title: 'E-Sports',
      description: 'Competitive gaming and strategy',
      icon: <GameIcon sx={{ fontSize: 24 }} />,
      color: '#2196F3',
      image: '/public/programCardImages/stemAndTechnology/esports.png',
      skills: ['Gaming Strategy', 'Team Communication', 'Game Analysis', 'Esports Industry'],
    },
  ];

  const highlights = [
    {
      title: 'Hands-On Projects',
      description: 'Build real working prototypes',
      color: '#2196F3',
    },
    {
      title: 'Industry Tools',
      description: 'Learn professional software',
      color: '#FF9800',
    },
    {
      title: 'Portfolio Ready',
      description: 'Create impressive showcases',
      color: '#4CAF50',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <PathForgeBackground page="curriculum" />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
        {/* Hero Section */}
        <Box sx={{
          textAlign: 'center',
          py: 6,
          mb: 4,
        }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: primaryColor,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.1,
            }}
          >
            STEM & Technology
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: theme.text,
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Code, build, and innovate with cutting-edge technology programs
          </Typography>

          {/* Quick Highlights */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 6,
          }}>
            {highlights.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  px: 3,
                  py: 2,
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: item.color,
                    color: 'white',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Programs Grid */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 700,
              color: primaryColor,
            }}
          >
            Our Programs
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            maxWidth: '1400px',
            mx: 'auto',
          }}>
            {programs.map((program, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: '280px',
                  flex: '1 1 auto',
                  maxWidth: '320px',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: program.color,
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundColor: 'white',
                      color: program.color,
                    },
                    '& .program-skills': {
                      color: 'rgba(255,255,255,0.9)',
                    },
                    '& .program-description': {
                      color: 'rgba(255,255,255,0.95)',
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  image={program.image}
                  alt={program.title}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 3,
                  '&:last-child': { pb: 3 },
                }}>
                  <Avatar sx={{
                    backgroundColor: program.color,
                    width: 48,
                    height: 48,
                    transition: 'all 0.3s ease',
                  }}>
                    {program.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: '1rem',
                    }}
                  >
                    {program.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="program-description"
                    sx={{
                      textAlign: 'center',
                      opacity: 0.8,
                      mb: 1,
                      fontSize: '0.85rem',
                    }}
                  >
                    {program.description}
                  </Typography>
                  <Box sx={{ width: '100%' }}>
                    {program.skills.map((skill, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        className="program-skills"
                        sx={{
                          textAlign: 'center',
                          opacity: 0.7,
                          fontSize: '0.75rem',
                          mb: 0.2,
                        }}
                      >
                        • {skill}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{
          textAlign: 'center',
          py: 4,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: primaryColor,
            }}
          >
            Ready to Start Building?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: theme.text,
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Join thousands of students who've launched their tech careers with us
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default StemTechnologyPage;