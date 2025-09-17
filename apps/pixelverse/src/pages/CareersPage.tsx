import React, { useState } from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Work as WorkIcon,
  AccessTime as AccessTimeIcon,
  AttachMoney as AttachMoneyIcon,
  LocationOn as LocationOnIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const CareersPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const theme = getThemeColors('careers');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const jobPositions = [
    {
      title: 'Robotics Coach',
      icon: <BuildIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Lead robotics workshops and mentor students in building and programming robots using LEGO, VEX, and micro:bit systems.',
      requirements: [
        'Experience with robotics platforms (FTC, FRC, FLL)',
        'Strong interest in engineering and mechanics',
        'Ability to teach complex concepts in simple terms',
        'Patience and enthusiasm for working with children'
      ]
    },
    {
      title: 'Programming Coach',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#2ecc71' }} />,
      description: 'Teach programming fundamentals and guide students through coding projects using Python, Scratch, and game development tools.',
      requirements: [
        'Minimum 1 year programming experience',
        'Familiarity with educational coding platforms',
        'Experience with Python, JavaScript, or similar languages',
        'Passion for teaching coding concepts to beginners'
      ]
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f0f8ff' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 50%, #ffa726 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <PathForgeBackground page="careers" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: theme.text,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              mb: 3
            }}
          >
            Join Our Team
          </Typography>
          <Typography variant="h4" sx={{ mb: 4, opacity: 0.9, color: theme.secondaryText, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Shape the Future of Technology Education
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 6, color: theme.secondaryText, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            We're looking for energetic, tech-savvy individuals who love working with children and have a passion for learning.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Chip
              label="Flexible Hours"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Great Pay"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2196f3', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Make a Difference"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#9c27b0', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Job Overview */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
          Why Work With Us?
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
          {[
            {
              title: 'Flexible Scheduling',
              description: 'Part-time positions with 8-35 hours/week. Choose shifts that work for your schedule.',
              icon: <AccessTimeIcon sx={{ fontSize: 50, color: '#ff6b35' }} />,
            },
            {
              title: 'Competitive Pay',
              description: 'Earn $14-$18/hour with opportunities for growth and performance bonuses.',
              icon: <AttachMoneyIcon sx={{ fontSize: 50, color: '#2ecc71' }} />,
            },
            {
              title: 'In-Person Work',
              description: 'Work directly with students in our Triangle area locations. No remote work required.',
              icon: <LocationOnIcon sx={{ fontSize: 50, color: '#3498db' }} />,
            },
          ].map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  maxWidth: '350px',
                  mx: 'auto',
                  backgroundColor: '#f8f9ff',
                  border: '1px solid #e0e6ed',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Job Positions */}
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
          Open Positions
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {jobPositions.map((position, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  backgroundColor: '#f8f9ff',
                  border: '2px solid #ff6b35',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>
                    {position.icon}
                  </Box>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 3 }}>
                    {position.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#7f8c8d', mb: 4, lineHeight: 1.6 }}>
                    {position.description}
                  </Typography>

                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      backgroundColor: '#f0f8ff',
                      border: '1px solid #e0e6ed',
                      '&:before': { display: 'none' },
                      mb: 3
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index}bh-content`}
                      id={`panel${index}bh-header`}
                    >
                      <Typography sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                        Requirements & Qualifications
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ textAlign: 'left' }}>
                        {position.requirements.map((req, reqIndex) => (
                          <Typography key={reqIndex} variant="body2" sx={{ color: '#7f8c8d', mb: 1, lineHeight: 1.5 }}>
                            • {req}
                          </Typography>
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<SendIcon />}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSesruEj54YRUllPxQ7fN8PqtVIKN_T3XcjqRE90RZ3hLLb-RA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      backgroundColor: '#ff6b35',
                      '&:hover': {
                        backgroundColor: '#e55a2b',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Job Details Accordion */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f8f9ff' }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
          Position Details
        </Typography>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Accordion
            expanded={expanded === 'panel-details'}
            onChange={handleChange('panel-details')}
            sx={{
              backgroundColor: '#f0f8ff',
              border: '1px solid #e0e6ed',
              '&:before': { display: 'none' },
              mb: 2
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-details-content"
              id="panel-details-header"
            >
              <Typography sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Job Description & Requirements
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ textAlign: 'left', lineHeight: 1.6 }}>
                <Typography variant="h6" sx={{ color: '#ff6b35', mb: 2, fontWeight: 'bold' }}>
                  About PathForge Learning
                </Typography>
                <Typography variant="body1" sx={{ color: '#7f8c8d', mb: 3 }}>
                  We're looking for energetic, tech-savvy individuals who love working with children and have a passion for learning. Our ideal candidates bring a positive attitude, confidence, enthusiasm for new challenges, and a strong desire to make a meaningful impact on kids' lives in a fun and engaging way.
                </Typography>

                <Typography variant="h6" sx={{ color: '#ff6b35', mb: 2, fontWeight: 'bold' }}>
                  Our Coaches' Role
                </Typography>
                <Typography variant="body1" sx={{ color: '#7f8c8d', mb: 3 }}>
                  At PathForge Learning, our coaches play a vital role in inspiring and guiding students as they develop their coding and STEM skills. If you're excited to join a creative, collaborative, and dedicated team, we encourage you to apply! No matter your experience level, all necessary training will be provided. High school and college students with a passion for coding are welcome to apply.
                </Typography>

                <Typography variant="h6" sx={{ color: '#ff6b35', mb: 2, fontWeight: 'bold' }}>
                  Position Details
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                    <strong>Part-time:</strong> 8–35 hours/week (initially)
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                    <strong>Pay:</strong> $14–18/hr
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                    <strong>Schedule Options:</strong> 4–6 hour shifts, Monday–Friday, Weekends and day camps as needed
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                    <strong>Morning–afternoon shifts</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 3 }}>
                    <strong>Work Location:</strong> In person
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ color: '#ff6b35', mb: 2, fontWeight: 'bold' }}>
                  Skills & Qualifications
                </Typography>
                <Typography variant="body1" sx={{ color: '#7f8c8d', mb: 3 }}>
                  Experience working with children in camps, tutoring, child care, or after-school programs. Background or strong interest in one or more of the following: Robotics (FTC, FRC, FLL), 3D modeling, CAD, Computer programming experience (minimum 1 year).
                </Typography>

                <Typography variant="h6" sx={{ color: '#ff6b35', mb: 2, fontWeight: 'bold' }}>
                  Key Responsibilities
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {[
                    'Develop and tailor curriculum to meet students\' individual needs',
                    'Teach and lead lessons and projects using the curriculum',
                    'Encourage creativity by helping students brainstorm project ideas',
                    'Communicate with parents regarding student progress',
                    'Support team performance and maintain high-quality standards',
                    'Assist in training new coaches',
                    'Demonstrate charisma and the ability to work independently'
                  ].map((responsibility, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                      • {responsibility}
                    </Typography>
                  ))}
                </Box>

                <Typography variant="h6" sx={{ color: '#ff6b35', mb: 2, fontWeight: 'bold' }}>
                  Traits & Values We Look For
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {[
                    'Attention to Detail: Take pride in your work and deliver outstanding service',
                    'Growth Mindset: Be curious and open to learning, always pushing boundaries',
                    'Empathy: Listen, understand, and appreciate the perspectives of others',
                    'Accountability: Own your work and actions, and take responsibility for outcomes',
                    'Positivity & Resilience: Bring energy, encouragement, and perseverance',
                    'Fun & Enthusiasm: Enjoy your work, engage with joy, and foster a positive environment'
                  ].map((trait, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                      • {trait}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Join Our Team?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Help shape the future of technology education and make a difference in students' lives.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WorkIcon />}
            href="https://docs.google.com/forms/d/e/1FAIpQLSesruEj54YRUllPxQ7fN8PqtVIKN_T3XcjqRE90RZ3hLLb-RA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              backgroundColor: '#ff6b35',
              '&:hover': {
                backgroundColor: '#e55a2b',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Apply Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default CareersPage;