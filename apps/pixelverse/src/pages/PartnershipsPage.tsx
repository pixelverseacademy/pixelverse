import React from 'react';
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
  const partnershipOpportunities = [
    {
      title: 'After-School Programs',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      description: 'Bring technology education directly to your school with our comprehensive after-school programs.',
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
      icon: <GroupIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
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
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
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
      icon: <SupportIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
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
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Enhanced STEM Education',
      description: 'Provide your students with cutting-edge technology education that prepares them for the future.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Increased Student Engagement',
      description: 'Interactive, hands-on learning experiences that keep students motivated and excited about learning.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Competitive Advantage',
      description: 'Stand out from other schools by offering comprehensive technology education programs.',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Professional Development',
      description: 'Support your teachers with training and resources to integrate technology into their teaching.',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Community Partnerships',
      description: 'Build stronger relationships with parents and the community through innovative programs.',
    },
    {
      icon: <CheckIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Proven Results',
      description: 'Join schools that have seen significant improvements in student performance and engagement.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #ff6b35 0%, #ffa726 100%)',
        py: 12,
        textAlign: 'center',
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            School Partnerships
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            Bring cutting-edge technology education to your school
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Custom Programs"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
            <Chip
              label="Flexible Scheduling"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Partnership Opportunities */}
      <Box sx={{ py: 8, backgroundColor: '#121212' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
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
                    backgroundColor: '#1e1e1e',
                    border: '1px solid #333333',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                      border: '1px solid #ff6b35',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {opportunity.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>
                      {opportunity.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#b0b0b0', textAlign: 'center', mb: 3 }}>
                      {opportunity.description}
                    </Typography>
                    <List dense>
                      {opportunity.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: '#ff6b35' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} sx={{ color: '#b0b0b0' }} />
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
      <Box sx={{ backgroundColor: '#1e1e1e', py: 8, borderTop: '1px solid #333333' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
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
                    backgroundColor: '#2e2e2e', 
                    border: '1px solid #333333',
                    maxWidth: '500px',
                    mx: 'auto',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                      border: '1px solid #ff6b35',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: '#ff6b35',
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
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                      {step.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Schools Choose to Partner with Us */}
      <Box sx={{ py: 8, backgroundColor: '#121212' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
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
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Success Stories */}
      <Box sx={{ backgroundColor: '#1e1e1e', py: 8, borderTop: '1px solid #333333' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
            Success Stories
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  Durham Elementary School
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 2 }}>
                  "Our partnership with PixelVerse Learning Academy has transformed our STEM program. 
                  Students are more engaged and excited about learning technology."
                </Typography>
                <Typography variant="body2" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                  - Principal Sarah Johnson
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  Holly Springs Middle School
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 2 }}>
                  "The after-school robotics program has been a huge success. Our students 
                  won the regional competition and are now more confident in STEM subjects."
                </Typography>
                <Typography variant="body2" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                  - STEM Coordinator Mike Chen
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  maxWidth: '400px',
                  mx: 'auto',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  Wake County High School
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 2 }}>
                  "The teacher training program has been invaluable. Our staff now feels 
                  confident teaching coding and robotics to our students."
                </Typography>
                <Typography variant="body2" sx={{ color: '#ff6b35', fontWeight: 'bold' }}>
                  - Technology Director Lisa Park
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#121212' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Ready to Partner with Us?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#b0b0b0' }}>
            Contact us today to discuss how we can bring technology education to your school.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Free Consultation"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff6b35', color: 'white' }}
            />
            <Chip
              label="Custom Programs"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ffa726', color: 'white' }}
            />
            <Chip
              label="Expert Support"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff6b35', color: 'white' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PartnershipsPage;
