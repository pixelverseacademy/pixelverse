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
  People as PeopleIcon,
  RecordVoiceOver as VoiceIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
  ExpandMore as ExpandMoreIcon,
  Check as CheckIcon,
} from '@mui/icons-material';

const LifeSkillsCareerPrepPage: React.FC = () => {
  const theme = getThemeColors('curriculum');
  const stats = [
    { number: '4', label: 'Life Skills Programs' },
    { number: '300+', label: 'Students Empowered' },
    { number: '15+', label: 'Career Workshops' },
    { number: '4', label: 'Years Preparing Leaders' },
  ];
  const programs = [
    {
      title: 'Leadership & Teamwork',
      description: 'Develop essential leadership skills, team collaboration, and project management abilities through interactive workshops and real-world scenarios.',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: '#8F5BD9',
      path: '/programs/life-skills-career-prep',
      backgroundImage: '/public/programCardImages/lifeSkills&CareerPrep/Leadership and teamwork.png',
      programs: ['Leadership Development', 'Team Building Activities', 'Project Management Skills', 'Communication Strategies']
    },
    {
      title: 'Public Speaking & Debate',
      description: 'Build confidence in public speaking, debate skills, and effective communication. Learn to articulate ideas clearly and persuasively.',
      icon: <VoiceIcon sx={{ fontSize: 40 }} />,
      color: '#26A69A',
      path: '/programs/life-skills-career-prep',
      backgroundImage: '/public/programCardImages/lifeSkills&CareerPrep/public speaking.png',
      programs: ['Public Speaking Techniques', 'Debate & Argumentation', 'Presentation Skills', 'Active Listening']
    },
    {
      title: 'Entrepreneurship & Financial Literacy',
      description: 'Learn business fundamentals, financial planning, and entrepreneurial thinking. Understand money management and business creation.',
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      color: '#3F5FBF',
      path: '/programs/life-skills-career-prep',
      backgroundImage: '/public/programCardImages/lifeSkills&CareerPrep/entrepreneurship.png',
      programs: ['Business Planning', 'Financial Literacy', 'Budgeting & Saving', 'Investment Basics']
    },
    {
      title: 'Career Exploration Workshops',
      description: 'Explore different career paths, develop professional skills, and prepare for future employment through workshops and mentorship.',
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      color: '#8F5BD9',
      path: '/programs/life-skills-career-prep',
      backgroundImage: '/public/programCardImages/lifeSkills&CareerPrep/career exploration.png',
      programs: ['Career Assessment', 'Resume Building', 'Interview Skills', 'Professional Networking']
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
            src="/public/Instagram upload/7313934c-05ed-40fe-b6c2-14126fc67fbc.png"
            alt="Life Skills Hero"
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
            Life Skills & Career Prep Programs
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Building Essential Life Skills and Career Readiness
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, color: 'white', fontFamily: 'Nunito, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Develop leadership, communication, and professional skills through interactive workshops and real-world experiences.
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
            Our Life Skills & Career Prep Programs
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
                    'Basic Communication Skills',
                    'Teamwork Fundamentals',
                    'Goal Setting',
                    'Self-Confidence Building',
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
                    'Leadership Development',
                    'Public Speaking',
                    'Financial Literacy',
                    'Career Exploration',
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
                    'Entrepreneurship',
                    'Advanced Communication',
                    'Professional Development',
                    'Life Planning',
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

export default LifeSkillsCareerPrepPage;