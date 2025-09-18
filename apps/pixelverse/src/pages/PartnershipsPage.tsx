import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
} from '@mui/material';
import {
  Check as CheckIcon,
  School as SchoolIcon,
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  Support as SupportIcon,
  Handshake as HandshakeIcon,
} from '@mui/icons-material';

const PartnershipsPage: React.FC = () => {
  const theme = getThemeColors('partnerships');
  const partnershipOpportunities = [
    {
      title: 'After-School Programs',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      description: 'Bring comprehensive enrichment programs directly to your school with our after-school offerings.',
      features: [
        'Customized curriculum for your school',
        'Experienced instructors on-site',
        'All necessary equipment provided',
        'Flexible scheduling options',
        'Progress tracking and reporting',
      ],
    },
    {
      title: 'Summer Camps',
      icon: <GroupIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      description: 'Intensive technology camps during summer break to keep students engaged and learning.',
      features: [
        'Week-long intensive programs',
        'Multiple age group options',
        'Project-based learning approach',
        'Take-home projects and materials',
        'Certificates of completion',
      ],
    },
    {
      title: 'Teacher Training',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      description: 'Professional development workshops to help your teachers integrate technology into their classrooms.',
      features: [
        'Hands-on training sessions',
        'Curriculum integration strategies',
        'Ongoing support and resources',
        'Certification programs available',
        'Custom training modules',
      ],
    },
    {
      title: 'Competition Teams',
      icon: <SupportIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      description: 'Form and train robotics and coding competition teams to represent your school.',
      features: [
        'Team formation and management',
        'Competition preparation',
        'Equipment and software access',
        'Travel and logistics support',
        'Mentorship and coaching',
      ],
    },
  ];

  const partnershipProcess = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We meet with your school administration to understand your needs and goals.',
    },
    {
      step: '2',
      title: 'Program Design',
      description: 'We create a customized program that fits your school\'s schedule and requirements.',
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Our expert instructors begin delivering the program at your school.',
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'We provide continuous support, monitoring, and program adjustments as needed.',
    },
  ];

  const benefits = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Enhanced STEM Education',
      description: 'Provide your students with cutting-edge technology education that prepares them for the future.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Increased Student Engagement',
      description: 'Interactive, hands-on learning experiences that keep students motivated and excited about learning.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Competitive Advantage',
      description: 'Stand out from other schools by offering comprehensive technology education programs.',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Professional Development',
      description: 'Support your teachers with training and resources to integrate technology into their teaching.',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Community Partnerships',
      description: 'Build stronger relationships with parents and the community through innovative programs.',
    },
    {
      icon: <CheckIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Proven Results',
      description: 'Join schools that have seen significant improvements in student performance and engagement.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #2196F3 0%, #42A5F5 50%, #64B5F6 100%)',
        py: 12,
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <PathForgeBackground page="partnerships" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.text, mb: 4, position: 'relative', zIndex: 3 }}>
            School Partnerships
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, color: theme.secondaryText, position: 'relative', zIndex: 3 }}>
            Bring comprehensive enrichment programs to your school
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 3 }}>
            <Chip
              label="Custom Programs"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2196f3', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Flexible Scheduling"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff9800', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Partnership Opportunities */}
      <Box sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Partnership Opportunities
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {partnershipOpportunities.map((opportunity, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                      boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                      border: '1px solid #3498db',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {opportunity.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>
                      {opportunity.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#7f8c8d', textAlign: 'center', mb: 3 }}>
                      {opportunity.description}
                    </Typography>
                    <List dense>
                      {opportunity.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: '#3498db' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} sx={{ color: '#7f8c8d' }} />
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

      {/* Partnership Process */}
      <Box sx={{ backgroundColor: '#f8f9ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Partnership Process
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {partnershipProcess.map((step, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    backgroundColor: '#f0f8f0', 
                    border: '1px solid #e0e6ed',
                    maxWidth: '500px',
                    mx: 'auto',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                      border: '1px solid #3498db',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#3498db',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                        {step.step}
                      </Typography>
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Schools Choose to Partner with Us */}
      <Box sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Why Schools Choose to Partner with Us
          </Typography>
          
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '350px',
                    mx: 'auto',
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Success Stories */}
      <Box sx={{ backgroundColor: '#f8f9ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Success Stories
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: '#f0f8f0', 
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
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Durham Elementary School
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 2 }}>
                  "Our partnership with PathForge Learning has transformed our STEM program. 
                  Students are more engaged and excited about learning technology."
                </Typography>
                <Typography variant="body2" sx={{ color: '#3498db', fontWeight: 'bold' }}>
                  - Principal
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: '#f0f8f0', 
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
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Holly Springs Middle School
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 2 }}>
                  "The after-school robotics program has been a huge success. Our students 
                  won the regional competition and are now more confident in STEM subjects."
                </Typography>
                <Typography variant="body2" sx={{ color: '#3498db', fontWeight: 'bold' }}>
                  - STEM Coordinator
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: '#f0f8f0', 
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
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  Wake County High School
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 2 }}>
                  "The teacher training program has been invaluable. Our staff now feels 
                  confident teaching coding and robotics to our students."
                </Typography>
                <Typography variant="body2" sx={{ color: '#3498db', fontWeight: 'bold' }}>
                  - Technology Director
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Partner with Us?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Contact us today to discuss how we can bring comprehensive enrichment programs to your school.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Free Consultation"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#3498db', color: 'white' }}
            />
            <Chip
              label="Custom Programs"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2ecc71', color: 'white' }}
            />
            <Chip
              label="Expert Support"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#3498db', color: 'white' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PartnershipsPage;
