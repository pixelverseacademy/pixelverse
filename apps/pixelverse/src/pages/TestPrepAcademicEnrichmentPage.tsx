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
  Science as ScienceIcon,
  MenuBook as BookIcon,
  Assignment as AssignmentIcon,
  Schedule as ScheduleIcon,
  ExpandMore as ExpandMoreIcon,
  Check as CheckIcon,
} from '@mui/icons-material';

const TestPrepAcademicEnrichmentPage: React.FC = () => {
  const theme = getThemeColors('curriculum');
  const programs = [
    {
      title: 'Math & Science Tutoring',
      description: 'Personalized tutoring in mathematics and science subjects. Strengthen foundational skills and advance understanding through targeted instruction.',
      icon: <ScienceIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      backgroundImage: '/public/programCardImages/testPrep&AcademicEnrich/math and science.png',
      highlights: [
        'Mathematics Tutoring',
        'Science Subject Support',
        'Problem-Solving Strategies',
        'Concept Reinforcement',
        'Test Preparation',
      ],
    },
    {
      title: 'Reading & Writing Support',
      description: 'Improve reading comprehension, writing skills, and language arts proficiency. Develop strong communication and analytical abilities.',
      icon: <BookIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      backgroundImage: '/public/programCardImages/testPrep&AcademicEnrich/reading and writing.png',
      highlights: [
        'Reading Comprehension',
        'Writing Skills Development',
        'Grammar & Vocabulary',
        'Literary Analysis',
        'Essay Writing',
      ],
    },
    {
      title: 'Standardized Test Prep (SAT, ACT, etc.)',
      description: 'Comprehensive preparation for standardized tests including SAT, ACT, and other academic assessments. Master test-taking strategies and content.',
      icon: <AssignmentIcon sx={{ fontSize: 40, color: '#9C27B0' }} />,
      backgroundImage: '/public/programCardImages/testPrep&AcademicEnrich/sat and act.png',
      highlights: [
        'SAT/ACT Preparation',
        'Test-Taking Strategies',
        'Practice Exams',
        'Score Improvement',
        'College Readiness',
      ],
    },
    {
      title: 'Study Skills & Time Management',
      description: 'Learn effective study techniques, time management strategies, and organizational skills to maximize academic performance.',
      icon: <ScheduleIcon sx={{ fontSize: 40, color: '#FF5722' }} />,
      backgroundImage: '/public/programCardImages/testPrep&AcademicEnrich/studySkills.png',
      highlights: [
        'Study Techniques',
        'Time Management',
        'Organization Skills',
        'Note-Taking Methods',
        'Test Preparation Strategies',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
        py: 12,
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <PathForgeBackground page="curriculum" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.text, mb: 4, position: 'relative', zIndex: 3 }}>
            Test Prep & Academic Enrichment Programs
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, color: theme.secondaryText, position: 'relative', zIndex: 3 }}>
            Excel academically with personalized support and comprehensive test preparation
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
              label="Academic Excellence"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff9800', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Programs */}
      <Box sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#4CAF50' }}>
            Our Test Prep & Academic Enrichment Programs
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
                      boxShadow: '0 12px 40px rgba(76, 175, 80, 0.3)',
                      border: '1px solid #4CAF50',
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
                        expandIcon={<ExpandMoreIcon sx={{ color: '#4CAF50' }} />}
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
                                <CheckIcon sx={{ color: '#4CAF50' }} />
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
            Ready to Excel?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Get the academic support you need to reach your full potential.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default TestPrepAcademicEnrichmentPage;