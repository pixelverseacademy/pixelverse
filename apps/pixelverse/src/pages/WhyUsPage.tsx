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
        icon: <BuildIcon sx={{ fontSize: 50, color: '#8F5BD9' }} />,
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
        icon: <CodeIcon sx={{ fontSize: 50, color: '#26A69A' }} />,
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
        icon: <SchoolIcon sx={{ fontSize: 50, color: '#3F5FBF' }} />,
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
        icon: <GroupIcon sx={{ fontSize: 50, color: '#8F5BD9' }} />,
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
        icon: <AIIcon sx={{ fontSize: 50, color: '#26A69A' }} />,
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
        icon: <AwardIcon sx={{ fontSize: 50, color: '#3F5FBF' }} />,
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
      <PathForgeBackground page="why-us" />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(143, 91, 217, 0.1) 0%, rgba(38, 166, 154, 0.1) 100%)',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: { xs: 0, md: '0 0 50px 50px' },
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%238F5BD9\\" fill-opacity=\\"0.05\\"%3E%3Ccircle cx=\\"30\\" cy=\\"30\\" r=\\"4\\"//%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
        {/* Cosmic background effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 50%, rgba(52, 152, 219, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(46, 204, 113, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(243, 156, 18, 0.3) 0%, transparent 50%)
            `,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#8F5BD9', fontFamily: 'Poppins, sans-serif' }}>
            Why Choose PathForge Learning?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: '#2E3740', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
            Empowering the Next Generation of Innovators
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', color: '#2E3740', fontFamily: 'Nunito, sans-serif' }}>
            We're not just another enrichment program. We're a comprehensive educational experience
            that prepares students for the future through innovative teaching methods,
            expert instruction, and hands-on learning across multiple disciplines.
          </Typography>
        </Container>
      </Box>

      {/* Statistics - Centered Layout */}
      <Container maxWidth="lg" sx={{ 
        py: 6, 
        backgroundColor: 'rgba(244, 244, 244, 0.8)', 
        backdropFilter: 'blur(2px)', 
        borderRadius: '25px', 
        my: 4,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%233F5FBF\\" fill-opacity=\\"0.04\\"%3E%3Crect width=\\"4\\" height=\\"4\\"//%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {stats.map((stat, index) => (
            <Box key={index} sx={{ flex: { xs: '1 1 45%', sm: '1 1 22%' }, minWidth: '200px', maxWidth: '250px' }}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
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
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: '#8F5BD9', fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </Typography>
                <Typography variant="h6" sx={{ color: '#2E3740', fontFamily: 'Nunito, sans-serif' }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Features - Two Rows, Three Columns */}
      <Box sx={{ 
        backgroundColor: 'rgba(244, 244, 244, 0.9)', 
        py: 8, 
        borderRadius: '25px', 
        mx: 2, 
        my: 4, 
        backdropFilter: 'blur(3px)',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%2326A69A\\" fill-opacity=\\"0.03\\"%3E%3Cpath d=\\"M20 20l20-20H20v20z\\"//%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#8F5BD9', fontFamily: 'Poppins, sans-serif' }}>
            What Makes Us Different
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {features.map((feature, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, minWidth: '320px', maxWidth: '400px' }}>
                <Card 
                  elevation={2} 
                  sx={{ 
                    height: '100%', 
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#8F5BD9', fontFamily: 'Poppins, sans-serif' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: '#2E3740', fontFamily: 'Nunito, sans-serif' }}>
                      {feature.description}
                    </Typography>
                    <List dense>
                      {feature.benefits.map((benefit, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: '#26A69A' }} />
                          </ListItemIcon>
                          <ListItemText primary={benefit} sx={{ color: '#2E3740', fontFamily: 'Nunito, sans-serif' }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us - One Row, Three Cards */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          Why Choose PathForge Learning?
        </Typography>
        
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={4}>
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
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <SchoolIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Project-Based Learning
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                Students learn through hands-on projects that solve real-world problems.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
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
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <CodeIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Expert Instructors
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                Learn from experienced professionals passionate about technology education.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
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
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <GroupIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Small Class Sizes
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                Personalized attention with small class sizes for optimal learning.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Why Our Instructors Make the Difference - One Row, Three Cards */}
      <Box sx={{ backgroundColor: '#f8f9ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Why Our Instructors Make the Difference
          </Typography>
          
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  height: '100%',
                  maxWidth: '350px',
                  mx: 'auto',
                  backgroundColor: '#f0f8ff', 
                  border: '1px solid #e0e6ed',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Industry Experience
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                  Our instructors bring real-world experience from top tech companies, ensuring students learn current, relevant skills.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  height: '100%',
                  maxWidth: '350px',
                  mx: 'auto',
                  backgroundColor: '#f0f8ff', 
                  border: '1px solid #e0e6ed',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Educational Expertise
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                  With advanced degrees in education and years of teaching experience, our instructors know how to make complex concepts accessible.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  height: '100%',
                  maxWidth: '350px',
                  mx: 'auto',
                  backgroundColor: '#f0f8ff', 
                  border: '1px solid #e0e6ed',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Proven Results
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                  Our instructors have helped hundreds of students achieve their goals, from learning their first programming language to winning competitions.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What We Believe - Full Width */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          What We Believe
        </Typography>
        
        <Paper 
          elevation={2} 
          sx={{ 
            p: 6, 
            backgroundColor: '#f8f9ff', 
            border: '1px solid #e0e6ed',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
              border: '1px solid #3498db',
            },
          }}
        >
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#3498db', textAlign: 'center', mb: 4 }}>
            Our Mission and Values
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.8 }}>
            We believe that every child has the potential to become a creator, innovator, and leader.
            Enrichment education should be accessible, engaging, and empowering for all students across multiple disciplines.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Our mission is to prepare students for the future by teaching them not just technical skills,
            but how to think critically, solve problems creatively, and build solutions that make a difference in STEM, arts, life skills, academics, and wellness.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.8 }}>
            We believe in the power of hands-on learning, where students don't just consume information
            but actively create, experiment, and discover through meaningful projects across all our enrichment programs.
          </Typography>
        </Paper>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f8f9ff', borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Join Our Community?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Experience the difference that expert instruction, hands-on learning, 
            and personalized attention can make in your child's education.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Small Class Sizes"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2ecc71', color: 'white' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#3498db', color: 'white' }}
            />
            <Chip
              label="Hands-On Learning"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff9800', color: 'white' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WhyUsPage;
