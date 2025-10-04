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
      icon: <BuildIcon sx={{ fontSize: 40, color: '#8F5BD9' }} />,
      description: 'Lead robotics workshops and mentor students in building and programming robots using LEGO, VEX, and micro:bit systems. Join our team to inspire the next generation of engineers and innovators.',
      location: 'Multiple Locations',
      type: 'Part-time/Full-time',
      salary: 'Competitive'
    },
    {
      title: 'Programming Coach',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#26A69A' }} />,
      description: 'Teach programming fundamentals and guide students through coding projects using Python, Scratch, and game development tools. Help students build their first apps and games.',
      location: 'Remote/On-site',
      type: 'Part-time',
      salary: '$25-35/hour'
    },
    {
      title: 'Creative Arts Instructor',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#3F5FBF' }} />,
      description: 'Guide students through digital art, 3D printing, music production, and creative writing projects. Foster creativity and artistic expression in young minds.',
      location: 'Multiple Locations',
      type: 'Part-time',
      salary: '$20-30/hour'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#F4F4F4', fontFamily: 'Poppins, sans-serif', position: 'relative', minHeight: '100vh' }}>
      {/* Three.js Background - Applied to entire page */}
      <PathForgeBackground page="careers" />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.1) 0%, rgba(38, 166, 154, 0.1) 100%)',
          backgroundImage: 'url("/public/marketingImages/IMG_9331.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: { xs: 0, md: '0 0 50px 50px' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.7) 0%, rgba(38, 166, 154, 0.7) 100%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              mb: 3,
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Join Our Team
          </Typography>
          <Typography variant="h4" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
            Shape the Future of Enrichment Education
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 6, color: 'white', fontFamily: 'Nunito, sans-serif' }}>
            We're looking for energetic, creative individuals who love working with children and have a passion for learning across multiple disciplines.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Chip
              label="Flexible Hours"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#8F5BD9', color: 'white', fontWeight: 'bold', borderRadius: '25px', fontFamily: 'Poppins, sans-serif' }}
            />
            <Chip
              label="Great Pay"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#26A69A', color: 'white', fontWeight: 'bold', borderRadius: '25px', fontFamily: 'Poppins, sans-serif' }}
            />
            <Chip
              label="Make a Difference"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#3F5FBF', color: 'white', fontWeight: 'bold', borderRadius: '25px', fontFamily: 'Poppins, sans-serif' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Job Overview */}
      <Container maxWidth="lg" sx={{ 
        py: 8, 
        backgroundColor: 'rgba(244, 244, 244, 0.8)', 
        backdropFilter: 'blur(2px)', 
        borderRadius: '25px', 
        my: 4,
        backgroundImage: 'url("/public/marketingImages/IMG_9154.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(244, 244, 244, 0.85)',
          borderRadius: '25px',
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        }
      }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#8F5BD9', fontFamily: 'Poppins, sans-serif' }}>
          Why Work With Us?
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mb: 8 }}>
          {[
            {
              title: 'Flexible Scheduling',
              description: 'Part-time positions with 8-35 hours/week. Choose shifts that work for your schedule.',
              icon: <AccessTimeIcon sx={{ fontSize: 50, color: '#8F5BD9' }} />,
            },
            {
              title: 'Competitive Pay',
              description: 'Earn $20-$35/hour with opportunities for growth and performance bonuses.',
              icon: <AttachMoneyIcon sx={{ fontSize: 50, color: '#26A69A' }} />,
            },
            {
              title: 'In-Person Work',
              description: 'Work directly with students in our Triangle area locations. Build meaningful connections.',
              icon: <LocationOnIcon sx={{ fontSize: 50, color: '#3F5FBF' }} />,
            },
          ].map((benefit, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, minWidth: '300px', maxWidth: '350px' }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  backgroundColor: 'white',
                  border: '2px solid #E0E0E0',
                  borderRadius: '25px',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 50px rgba(143, 91, 217, 0.3)',
                    border: '2px solid #8F5BD9',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#8F5BD9', fontFamily: 'Poppins, sans-serif' }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#2E3740', fontFamily: 'Nunito, sans-serif' }}>
                  {benefit.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Job Positions */}
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#8F5BD9', fontFamily: 'Poppins, sans-serif' }}>
          Open Positions
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {jobPositions.map((position, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 100%', md: '1 1 45%' }, minWidth: '400px', maxWidth: '500px' }}>
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

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                    <Chip
                      icon={<LocationOnIcon />}
                      label={position.location}
                      sx={{ backgroundColor: '#8F5BD9', color: 'white', fontFamily: 'Poppins, sans-serif' }}
                    />
                    <Chip
                      icon={<AccessTimeIcon />}
                      label={position.type}
                      sx={{ backgroundColor: '#26A69A', color: 'white', fontFamily: 'Poppins, sans-serif' }}
                    />
                    <Chip
                      icon={<AttachMoneyIcon />}
                      label={position.salary}
                      sx={{ backgroundColor: '#3F5FBF', color: 'white', fontFamily: 'Poppins, sans-serif' }}
                    />
                  </Box>

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
                      backgroundColor: '#26A69A',
                      borderRadius: '50px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      '&:hover': {
                        backgroundColor: '#3F5FBF',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(63, 95, 191, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
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
            Help shape the future of enrichment education and make a difference in students' lives.
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