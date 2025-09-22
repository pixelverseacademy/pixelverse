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
  People as PeopleIcon,
  RecordVoiceOver as VoiceIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
  ExpandMore as ExpandMoreIcon,
  Check as CheckIcon,
} from '@mui/icons-material';

const LifeSkillsCareerPrepPage: React.FC = () => {
  const theme = getThemeColors('curriculum');
  const programs = [
    {
      title: 'Leadership & Teamwork',
      description: 'Develop essential leadership skills, team collaboration, and project management abilities through interactive workshops and real-world scenarios.',
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      backgroundImage: '/public/programCardImages/lifeSkills&CareerPrep/Leadership and teamwork.png',
      highlights: [
        'Leadership Development',
        'Team Building Activities',
        'Project Management Skills',
        'Communication Strategies',
        'Conflict Resolution',
      ],
    },
    {
      title: 'Public Speaking & Debate',
      description: 'Build confidence in public speaking, debate skills, and effective communication. Learn to articulate ideas clearly and persuasively.',
      icon: <VoiceIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      backgroundImage: '/public/programCardImages/lifeSkills&CareerPrep/public speaking.png',
      highlights: [
        'Public Speaking Techniques',
        'Debate & Argumentation',
        'Presentation Skills',
        'Active Listening',
        'Confidence Building',
      ],
    },
    {
      title: 'Entrepreneurship & Financial Literacy',
      description: 'Learn business fundamentals, financial planning, and entrepreneurial thinking. Understand money management and business creation.',
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
      backgroundImage: '/public/programCardImages/lifeSkills&CareerPrep/entrepreneurship.png',
      highlights: [
        'Business Planning',
        'Financial Literacy',
        'Budgeting & Saving',
        'Investment Basics',
        'Entrepreneurial Mindset',
      ],
    },
    {
      title: 'Career Exploration Workshops',
      description: 'Explore different career paths, develop professional skills, and prepare for future employment through workshops and mentorship.',
      icon: <WorkIcon sx={{ fontSize: 40, color: '#FF5722' }} />,
      backgroundImage: '/public/programCardImages/lifeSkills&CareerPrep/career exploration.png',
      highlights: [
        'Career Assessment',
        'Resume Building',
        'Interview Skills',
        'Professional Networking',
        'Workplace Ethics',
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
            Life Skills & Career Prep Programs
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, color: theme.secondaryText, position: 'relative', zIndex: 3 }}>
            Building essential life skills and career readiness for future success
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
              label="Life Skills Development"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff9800', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Programs */}
      <Box sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#2196F3' }}>
            Our Life Skills & Career Prep Programs
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
                      boxShadow: '0 12px 40px rgba(33, 150, 243, 0.3)',
                      border: '1px solid #2196F3',
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
                        expandIcon={<ExpandMoreIcon sx={{ color: '#2196F3' }} />}
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
                                <CheckIcon sx={{ color: '#2196F3' }} />
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
            Ready to Build Your Future?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Develop the skills you need for success in life and career.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LifeSkillsCareerPrepPage;