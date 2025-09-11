import React from 'react';
import ThreeBackground from '../components/InteractiveBackground';
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
  const features = [
    {
      title: 'Project-Based Learning Approach',
      description: 'Students learn through hands-on projects that solve real-world problems, making learning engaging and practical.',
      icon: <BuildIcon sx={{ fontSize: 50, color: '#3498db' }} />,
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
      icon: <CodeIcon sx={{ fontSize: 50, color: '#3498db' }} />,
      benefits: [
        'Industry experience and expertise',
        'Personalized teaching approach',
        'Mentorship and career guidance',
        'Continuous professional development',
      ],
    },
    {
      title: 'Comprehensive Curriculum',
      description: 'From coding fundamentals to advanced AI and robotics, our curriculum covers all aspects of modern technology.',
      icon: <SchoolIcon sx={{ fontSize: 50, color: '#3498db' }} />,
      benefits: [
        'K-12 Computer Science Standards aligned',
        'Progressive skill building',
        'Multiple learning pathways',
        'Regular curriculum updates',
      ],
    },
    {
      title: 'Small Class Sizes',
      description: 'Personalized attention with small class sizes ensures every student gets the support they need to succeed.',
      icon: <GroupIcon sx={{ fontSize: 50, color: '#3498db' }} />,
      benefits: [
        'Individual attention and support',
        'Collaborative learning environment',
        'Peer-to-peer learning opportunities',
        'Flexible pacing based on student needs',
      ],
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Access to the latest tools and technologies including robotics kits, VR headsets, and professional software.',
      icon: <AIIcon sx={{ fontSize: 50, color: '#3498db' }} />,
      benefits: [
        'Latest hardware and software',
        'Industry-standard tools',
        'Hands-on experience with real equipment',
        'Preparation for future careers',
      ],
    },
    {
      title: 'Competition Preparation',
      description: 'Prepare students for prestigious competitions like First LEGO League, VEX Robotics, and coding competitions.',
      icon: <AwardIcon sx={{ fontSize: 50, color: '#3498db' }} />,
      benefits: [
        'Competition strategy and skills',
        'Team building and leadership',
        'Recognition and awards',
        'College and career opportunities',
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
    <Box sx={{ backgroundColor: '#f0f8f0' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 50%, #E91E63 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <ThreeBackground page="why-us" />
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
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Why Choose PixelVerse Learning Academy?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Empowering the Next Generation of Innovators
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            We're not just another coding school. We're a comprehensive technology education 
            program that prepares students for the future through innovative teaching methods, 
            expert instruction, and hands-on learning experiences.
          </Typography>
        </Container>
      </Box>

      {/* Statistics - Centered Layout */}
      <Container maxWidth="lg" sx={{ py: 6, backgroundColor: '#f0f8f0' }}>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  backgroundColor: '#1e1e1e', 
                  border: '1px solid #333333',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: '#3498db' }}>
                  {stat.number}
                </Typography>
                <Typography variant="h6" sx={{ color: '#b0b0b0' }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features - Two Rows, Three Columns */}
      <Box sx={{ backgroundColor: '#1e1e1e', py: 8, borderTop: '1px solid #333333' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            What Makes Us Different
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  elevation={2} 
                  sx={{ 
                    height: '100%', 
                    width: '100%',
                    maxWidth: '400px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#2e2e2e', 
                    border: '1px solid #333333',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                      border: '1px solid #3498db',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#ffffff' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: '#b0b0b0' }}>
                      {feature.description}
                    </Typography>
                    <List dense>
                      {feature.benefits.map((benefit, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: '#3498db' }} />
                          </ListItemIcon>
                          <ListItemText primary={benefit} sx={{ color: '#b0b0b0' }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us - One Row, Three Cards */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8f0' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          Why Choose PixelVerse Learning Academy?
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
                backgroundColor: '#1e1e1e', 
                border: '1px solid #333333',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <SchoolIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Project-Based Learning
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
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
                backgroundColor: '#1e1e1e', 
                border: '1px solid #333333',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <CodeIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Expert Instructors
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
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
                backgroundColor: '#1e1e1e', 
                border: '1px solid #333333',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                  border: '1px solid #3498db',
                },
              }}
            >
              <GroupIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Small Class Sizes
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                Personalized attention with small class sizes for optimal learning.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Why Our Instructors Make the Difference - One Row, Three Cards */}
      <Box sx={{ backgroundColor: '#1e1e1e', py: 8, borderTop: '1px solid #333333' }}>
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
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  Industry Experience
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
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
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  Educational Expertise
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
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
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  Proven Results
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  Our instructors have helped hundreds of students achieve their goals, from learning their first programming language to winning competitions.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What We Believe - Full Width */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8f0' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          What We Believe
        </Typography>
        
        <Paper 
          elevation={2} 
          sx={{ 
            p: 6, 
            backgroundColor: '#1e1e1e', 
            border: '1px solid #333333',
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
          <Typography variant="body1" paragraph sx={{ color: '#b0b0b0', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.8 }}>
            We believe that every child has the potential to become a creator, innovator, and problem-solver. 
            Technology education should be accessible, engaging, and empowering for all students.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#b0b0b0', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Our mission is to prepare students for the future by teaching them not just how to use technology, 
            but how to think critically, solve problems creatively, and build solutions that make a difference.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#b0b0b0', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.8 }}>
            We believe in the power of hands-on learning, where students don't just consume information 
            but actively create, experiment, and discover through meaningful projects.
          </Typography>
        </Paper>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#1e1e1e', borderTop: '1px solid #333333' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Ready to Join Our Community?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#b0b0b0' }}>
            Experience the difference that expert instruction, hands-on learning, 
            and personalized attention can make in your child's education.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Free Trial Session"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#3498db', color: 'white' }}
            />
            <Chip
              label="Small Class Sizes"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2ecc71', color: 'white' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#3498db', color: 'white' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WhyUsPage;
