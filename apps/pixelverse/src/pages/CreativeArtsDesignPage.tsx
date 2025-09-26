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
  Palette as PaletteIcon,
  Print as PrintIcon,
  MusicNote as MusicIcon,
  Book as BookIcon,
} from '@mui/icons-material';

const CreativeArtsDesignPage: React.FC = () => {
  const theme = getThemeColors('curriculum');
  
  // Define pink theme colors for Creative Arts page
  const primaryColor = '#E91E63';
  const secondaryColor = '#F06292';
  
  const programs = [
    {
      title: 'Digital Art & Graphic Design',
      description: 'Master digital illustration and design',
      icon: <PaletteIcon sx={{ fontSize: 24 }} />,
      color: '#E91E63',
      image: '/public/programCardImages/creativeArts&Design/digital arts.png',
      skills: ['Adobe Photoshop', 'Illustrator', 'Logo Design', 'Portfolio Development'],
    },
    {
      title: '3D Printing & CAD',
      description: 'Design and create physical objects',
      icon: <PrintIcon sx={{ fontSize: 24 }} />,
      color: '#4CAF50',
      image: '/public/programCardImages/creativeArts&Design/3d printing and CAD.png',
      skills: ['Fusion 360', 'Tinkercad', '3D Modeling', 'Prototyping'],
    },
    {
      title: 'Music Production',
      description: 'Create and produce original music',
      icon: <MusicIcon sx={{ fontSize: 24 }} />,
      color: '#FF9800',
      image: '/public/programCardImages/creativeArts&Design/music prod.png',
      skills: ['Digital Audio Workstations', 'Sound Design', 'Music Theory', 'Recording'],
    },
    {
      title: 'Creative Writing',
      description: 'Develop storytelling and writing skills',
      icon: <BookIcon sx={{ fontSize: 24 }} />,
      color: '#9C27B0',
      image: '/public/programCardImages/creativeArts&Design/creative writing.png',
      skills: ['Storytelling', 'Character Development', 'Poetry', 'Publishing'],
    },
  ];

  const highlights = [
    {
      title: 'Creative Expression',
      description: 'Unleash your artistic potential',
      color: '#E91E63',
    },
    {
      title: 'Professional Tools',
      description: 'Learn industry-standard software',
      color: '#FF9800',
    },
    {
      title: 'Portfolio Building',
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
            Creative Arts & Design
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
            Express yourself through digital art, design, music, and storytelling
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
            gap: 3,
            justifyContent: 'center',
            maxWidth: '1000px',
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
            Ready to Create?
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
            Join our creative community and bring your artistic visions to life
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CreativeArtsDesignPage;