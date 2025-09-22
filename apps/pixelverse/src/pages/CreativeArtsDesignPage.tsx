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
  const programs = [
    {
      title: 'Digital Art & Graphic Design',
      description: 'Learn digital illustration, graphic design principles, and professional tools like Adobe Creative Suite. Create stunning visuals and develop your artistic skills.',
      icon: <PaletteIcon sx={{ fontSize: 40, color: '#E91E63' }} />,
      backgroundImage: '/public/programCardImages/creativeArts&Design/digital arts.png',
      highlights: [
        'Adobe Photoshop & Illustrator',
        'Digital Illustration Techniques',
        'Graphic Design Principles',
        'Logo & Branding Design',
        'Portfolio Development',
      ],
    },
    {
      title: '3D Printing & CAD',
      description: 'Master computer-aided design and bring your ideas to life with 3D printing technology. Learn modeling software and prototyping.',
      icon: <PrintIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      backgroundImage: '/public/programCardImages/creativeArts&Design/3d printing and CAD.png',
      highlights: [
        'Fusion 360 & Tinkercad',
        '3D Modeling & Prototyping',
        '3D Printing Operations',
        'Product Design Thinking',
        'Material Science Basics',
      ],
    },
    {
      title: 'Music Technology & Production',
      description: 'Explore music production using digital audio workstations, synthesizers, and recording equipment. Create and produce your own music.',
      icon: <MusicIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
      backgroundImage: '/public/programCardImages/creativeArts&Design/music prod.png',
      highlights: [
        'Digital Audio Workstations (DAWs)',
        'Music Theory & Composition',
        'Recording & Mixing Techniques',
        'Electronic Music Production',
        'Live Performance Skills',
      ],
    },
    {
      title: 'Creative Writing & Storytelling',
      description: 'Develop your writing skills through creative storytelling, scriptwriting, and narrative development. Express your imagination through words.',
      icon: <BookIcon sx={{ fontSize: 40, color: '#FF5722' }} />,
      backgroundImage: '/public/programCardImages/creativeArts&Design/creative writing.png',
      highlights: [
        'Creative Writing Techniques',
        'Story Structure & Plot Development',
        'Character Development',
        'Scriptwriting for Media',
        'Publishing & Self-Expression',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #E91E63 0%, #F48FB1 100%)',
        py: 12,
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <PathForgeBackground page="curriculum" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.text, mb: 4, position: 'relative', zIndex: 3 }}>
            Creative Arts & Design Programs
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, color: theme.secondaryText, position: 'relative', zIndex: 3 }}>
            Unleash your creativity and artistic potential through innovative design and artistic expression
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 3 }}>
            <Chip
              label="All Ages"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="4 Programs"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2196f3', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Creative Expression"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff9800', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Programs */}
      <Box sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#E91E63' }}>
            Our Creative Arts & Design Programs
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
                      boxShadow: '0 12px 40px rgba(233, 30, 99, 0.3)',
                      border: '1px solid #E91E63',
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
                        expandIcon={<ExpandMoreIcon sx={{ color: '#E91E63' }} />}
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
                                <CheckIcon sx={{ color: '#E91E63' }} />
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

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Create?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Join our creative community and discover your artistic talents.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default CreativeArtsDesignPage;