import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  Psychology as AIIcon,
  Group as GroupIcon,
  EmojiEvents as AwardIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

const WhyUsPage: React.FC = () => {
  const theme = getThemeColors('why-us');
  const features = [
    {
      title: 'Project-Based Learning Approach',
      description: 'Students learn through hands-on projects that solve real-world problems, making learning engaging and practical.',
      image: '/public/Instagram upload/4a5fe117-ec9d-43ee-b032-5f5c33484851.png',
      benefits: [
        'Real-world problem solving',
        'Enhanced creativity and innovation',
        'Better retention of concepts',
        'Portfolio building for future opportunities',
      ],
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from experienced professionals who are passionate about technology education and student success.',
      image: '/public/Instagram upload/5aa5d9b0-9aac-458c-b870-6f3262186d01.png',
      benefits: [
        'Industry experience and expertise',
        'Personalized teaching approach',
        'Mentorship and career guidance',
        'Continuous professional development',
      ],
    },
    {
      title: 'Comprehensive Enrichment Curriculum',
      description: 'From STEM fundamentals to creative arts, life skills, academics, and wellness, our curriculum covers all aspects of holistic development.',
      image: '/public/Instagram upload/29ef747a-5d0e-4769-9b78-bf13237540dd.png',
      benefits: [
        'Multi-disciplinary learning approach',
        'Progressive skill building across domains',
        'Multiple learning pathways',
        'Regular curriculum updates',
      ],
    },
    {
      title: 'Small Class Sizes',
      description: 'Personalized attention with small class sizes ensures every student gets the support they need to succeed.',
      image: '/public/Instagram upload/77ea1212-e3ed-48a4-8468-ed61d2d699ce.png',
      benefits: [
        'Individual attention and support',
        'Collaborative learning environment',
        'Peer-to-peer learning opportunities',
        'Flexible pacing based on student needs',
      ],
    },
    {
      title: 'Diverse Learning Environments',
      description: 'Access to creative studios, performance spaces, fitness facilities, and collaborative workspaces designed for holistic development.',
      image: '/public/Instagram upload/350ae5f9-cc38-4139-84e0-7d3a2408c8c1.png',
      benefits: [
        'Creative and performance spaces',
        'Collaborative learning environments',
        'Hands-on experience across disciplines',
        'Preparation for diverse future opportunities',
      ],
    },
    {
      title: 'Personalized Growth Opportunities',
      description: 'Individualized development plans, mentorship programs, and performance showcases that celebrate each student\'s unique talents.',
      image: '/public/Instagram upload/946640e2-6454-46ae-a866-3ac9cbab5217.png',
      benefits: [
        'Personalized development plans',
        'Mentorship and guidance',
        'Performance showcases and exhibitions',
        'Recognition of individual achievements',
      ],
    },
  ];

  const stats = [
    { number: '500+', label: 'Students Taught' },
    { number: '95%', label: 'Student Satisfaction' },
    { number: '50+', label: 'Competition Awards' },
    { number: '5', label: 'Years of Experience' },
  ];

  return (
    <Box sx={{ backgroundColor: '#F4F4F4', fontFamily: 'Poppins, sans-serif', position: 'relative', minHeight: '100vh' }}>
      {/* Three.js Background - Applied to entire page */}
      {/* <PathForgeBackground page="why-us" /> */}
      
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
            src="/public/Instagram upload/29ef747a-5d0e-4769-9b78-bf13237540dd.png"
            alt="PathForge Learning Hero"
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
            Why Choose PathForge Learning?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Empowering the Next Generation of Innovators
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, color: 'white', fontFamily: 'Nunito, sans-serif', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            We're not just another enrichment program. We're a comprehensive educational experience
            that prepares students for the future through innovative teaching methods,
            expert instruction, and hands-on learning across multiple disciplines.
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


      {/* What Makes Us Different Section */}
      <Box sx={{
        py: 8,
        my: 4,
        width: '100%',
      }}>
        <Box textAlign="center" sx={{ mb: 6, px: 2 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{
            fontWeight: 'bold',
            color: '#8F5BD9',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '2rem', md: '2.8rem' },
            mb: 2
          }}>
            What Makes Us Different
          </Typography>
          <Typography variant="h6" sx={{
            color: '#2E3740',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: '500',
            fontSize: { xs: '1rem', md: '1.2rem' }
          }}>
            Discover what sets PathForge Learning apart in comprehensive enrichment education
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, px: 2 }}>
          {features.map((feature, index) => {
            // Unique background colors for each feature
            const backgroundColors = [
              'linear-gradient(135deg, rgba(143, 91, 217, 0.08) 0%, rgba(143, 91, 217, 0.04) 100%)', // Project-Based Learning
              'linear-gradient(135deg, rgba(38, 166, 154, 0.08) 0%, rgba(38, 166, 154, 0.04) 100%)',  // Expert Instructors
              'linear-gradient(135deg, rgba(63, 95, 191, 0.08) 0%, rgba(63, 95, 191, 0.04) 100%)',   // Comprehensive Curriculum
              'linear-gradient(135deg, rgba(255, 152, 0, 0.08) 0%, rgba(255, 152, 0, 0.04) 100%)',  // Small Class Sizes
              'linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(76, 175, 80, 0.04) 100%)',   // Diverse Environments
              'linear-gradient(135deg, rgba(156, 39, 176, 0.08) 0%, rgba(156, 39, 176, 0.04) 100%)'  // Personalized Growth
            ];

            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                  flexWrap: 'wrap',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  py: 3,
                  px: 3,
                  background: backgroundColors[index],
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: backgroundColors[index].replace('0.04', '0.06').replace('0.08', '0.12'),
                  },
                }}
              >
                {/* Feature Image */}
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{
                    width: { xs: '100%', md: '460px' },
                    height: { xs: '287px', md: '345px' },
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />

                {/* Content */}
                <Box sx={{
                  flex: 1,
                  minWidth: { xs: '300px', md: '400px' },
                  maxWidth: { xs: '100%', md: '500px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{
                    fontWeight: 'bold',
                    color: '#8F5BD9',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    mb: 2
                  }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{
                    color: '#2E3740',
                    lineHeight: 1.6,
                    mb: 3,
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: '500',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}>
                    {feature.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, maxWidth: '100%', mb: 3 }}>
                    {feature.benefits.map((benefit, benefitIndex) => {
                      const benefitColors = ['#8F5BD9', '#26A69A', '#3F5FBF'];
                      const benefitColor = benefitColors[benefitIndex % benefitColors.length];
                      return (
                        <Chip
                          key={benefitIndex}
                          label={benefit}
                          size="small"
                          sx={{
                            color: 'white',
                            backgroundColor: benefitColor,
                            fontFamily: 'Nunito, sans-serif',
                            fontWeight: '500',
                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                            boxShadow: `0 2px 8px ${benefitColor}40`,
                            '&:hover': {
                              backgroundColor: benefitColor + 'CC',
                              transform: 'translateY(-1px)',
                              boxShadow: `0 4px 12px ${benefitColor}60`,
                            },
                            transition: 'all 0.2s ease',
                          }}
                        />
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>


      {/* Why Our Instructors Make the Difference */}
      <Box sx={{
        py: 8,
        my: 4,
        position: 'relative',
        overflow: 'hidden',
        '& > *': {
          position: 'relative',
          zIndex: 2,
        }
      }}>
        {/* Background Image */}
        <Box
          component="img"
          src="/public/Instagram upload/5aa5d9b0-9aac-458c-b870-6f3262186d01.png"
          alt="Instructors Background"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        />
        {/* Gradient Overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.9) 0%, rgba(38, 166, 154, 0.9) 100%)',
          zIndex: 1,
        }} />
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '2rem', md: '2.8rem' },
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
            mb: 2
          }}>
            Why Our Instructors Make the Difference
          </Typography>
          <Typography variant="h6" sx={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontFamily: 'Nunito, sans-serif',
            maxWidth: '800px',
            mx: 'auto',
            fontWeight: '500',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
            fontSize: { xs: '1rem', md: '1.2rem' },
            textAlign: 'center',
            mb: 6
          }}>
            Meet the passionate educators who bring learning to life through expertise and dedication
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {[
              {
                title: 'Industry Experience',
                description: 'Our instructors bring real-world experience from top tech companies, ensuring students learn current, relevant skills.',
                icon: <CodeIcon sx={{ fontSize: 50, color: '#26A69A' }} />,
              },
              {
                title: 'Educational Expertise',
                description: 'With advanced degrees in education and years of teaching experience, our instructors know how to make complex concepts accessible.',
                icon: <SchoolIcon sx={{ fontSize: 50, color: '#8F5BD9' }} />,
              },
              {
                title: 'Proven Results',
                description: 'Our instructors have helped hundreds of students achieve their goals, from learning their first programming language to winning competitions.',
                icon: <AwardIcon sx={{ fontSize: 50, color: '#3F5FBF' }} />,
              },
            ].map((instructor, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, minWidth: '320px', maxWidth: '400px' }}>
                <Paper
                  elevation={2}
                  sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '25px',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 50px rgba(143, 91, 217, 0.3)',
                      border: '2px solid rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                    },
                  }}
                >
                  <Box sx={{ p: 4, flexGrow: 1, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {instructor.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{
                      fontWeight: 'bold',
                      color: '#8F5BD9',
                      fontFamily: 'Poppins, sans-serif',
                      textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'
                    }}>
                      {instructor.title}
                    </Typography>
                    <Typography variant="body1" sx={{
                      color: '#2E3740',
                      fontFamily: 'Nunito, sans-serif',
                      textShadow: '0px 1px 2px rgba(255, 255, 255, 0.7)'
                    }}>
                      {instructor.description}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>


    </Box>
  );
};

export default WhyUsPage;
