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
  Palette as PaletteIcon,
  Print as PrintIcon,
  MusicNote as MusicIcon,
  Book as BookIcon,
  ExpandMore as ExpandMoreIcon,
  Check as CheckIcon,
} from '@mui/icons-material';

const CreativeArtsDesignPage: React.FC = () => {
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
    { number: '4', label: 'Creative Programs' },
    { number: '200+', label: 'Artworks Created' },
    { number: '25+', label: 'Projects Completed' },
    { number: '3', label: 'Years Creating' },
  ];
  const programs = [
    {
      title: 'Digital Art & Graphic Design',
      description: 'Learn digital illustration, graphic design principles, and professional tools like Adobe Creative Suite. Create stunning visuals and develop your artistic skills.',
      icon: <PaletteIcon sx={{ fontSize: 40 }} />,
      color: '#8F5BD9',
      path: '/programs/creative-arts-design',
      backgroundImage: getAssetUrl('programCardImages', 'creativeArts&Design/digital arts.png'),
      programs: ['Adobe Photoshop & Illustrator', 'Digital Illustration Techniques', 'Graphic Design Principles', 'Logo & Branding Design']
    },
    {
      title: '3D Printing & CAD',
      description: 'Master computer-aided design and bring your ideas to life with 3D printing technology. Learn modeling software and prototyping.',
      icon: <PrintIcon sx={{ fontSize: 40 }} />,
      color: '#26A69A',
      path: '/programs/creative-arts-design',
      backgroundImage: getAssetUrl('programCardImages', 'creativeArts&Design/3d printing and CAD.png'),
      programs: ['Fusion 360 & Tinkercad', '3D Modeling & Prototyping', '3D Printing Operations', 'Product Design Thinking']
    },
    {
      title: 'Music Technology & Production',
      description: 'Explore music production using digital audio workstations, synthesizers, and recording equipment. Create and produce your own music.',
      icon: <MusicIcon sx={{ fontSize: 40 }} />,
      color: '#3F5FBF',
      path: '/programs/creative-arts-design',
      backgroundImage: getAssetUrl('programCardImages', 'creativeArts&Design/music prod.png'),
      programs: ['Digital Audio Workstations (DAWs)', 'Music Theory & Composition', 'Recording & Mixing Techniques', 'Electronic Music Production']
    },
    {
      title: 'Creative Writing & Storytelling',
      description: 'Develop your writing skills through creative storytelling, scriptwriting, and narrative development. Express your imagination through words.',
      icon: <BookIcon sx={{ fontSize: 40 }} />,
      color: '#8F5BD9',
      path: '/programs/creative-arts-design',
      backgroundImage: getAssetUrl('programCardImages', 'creativeArts&Design/creative writing.png'),
      programs: ['Creative Writing Techniques', 'Story Structure & Plot Development', 'Character Development', 'Scriptwriting for Media']
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
            src={getAssetUrl('instagramUpload', '4a5fe117-ec9d-43ee-b032-5f5c33484851.png')}
            alt="Creative Arts Hero"
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
            Creative Arts & Design Programs
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Unleash Your Creativity and Artistic Potential
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, color: 'white', fontFamily: 'Nunito, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Innovative design and artistic expression programs for all ages. Discover your creative talents through hands-on projects and expert guidance.
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
                  color: '#E91E63',
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
            Our Creative Arts & Design Programs
          </Typography>

          {programs.map((program, index) => {
            // Unique background colors for each program
            const backgroundColors = [
              '#f8f9ff', // Light blue-white
              '#f0f8f0', // Light green-white
              '#fff8f8', // Light red-white
              '#f8f0ff', // Light purple-white
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

    </Box>
  );
};

export default CreativeArtsDesignPage;