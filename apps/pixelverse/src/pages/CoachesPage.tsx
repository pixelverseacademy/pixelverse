import React from 'react';
import PathForgeBackground from '../components/PathForgeBackground';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Code as CodeIcon,
  School as SchoolIcon,
  EmojiEvents as AwardIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

const CoachesPage: React.FC = () => {
  const coaches = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Lead Robotics Instructor',
      image: '/api/placeholder/300/300',
      specialties: ['Robotics', 'Engineering', 'LEGO Mindstorms', 'VEX Robotics'],
      experience: '8 years',
      education: 'Ph.D. in Mechanical Engineering, MIT',
      bio: 'Dr. Chen brings extensive experience in robotics and engineering education. She has led multiple teams to victory in First LEGO League competitions and is passionate about inspiring the next generation of engineers.',
      achievements: [
        'Led 15+ teams to First LEGO League championships',
        'Published 12 papers on robotics education',
        'Former NASA engineer',
        'Certified LEGO Education trainer',
      ],
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      title: 'Senior Coding Instructor',
      image: '/api/placeholder/300/300',
      specialties: ['Python', 'JavaScript', 'Web Development', 'Mobile Apps'],
      experience: '6 years',
      education: 'M.S. in Computer Science, Stanford University',
      bio: 'Michael is a passionate educator with a background in software development. He has taught coding to students of all ages and loves seeing the "aha!" moment when complex concepts click.',
      achievements: [
        'Former Google software engineer',
        'Created 50+ educational coding projects',
        'Mentored 200+ students',
        'Certified in multiple programming languages',
      ],
      rating: 5,
    },
    {
      name: 'Dr. Emily Watson',
      title: 'AI & Machine Learning Specialist',
      image: '/api/placeholder/300/300',
      specialties: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Python'],
      experience: '10 years',
      education: 'Ph.D. in Artificial Intelligence, Carnegie Mellon',
      bio: 'Dr. Watson is a leading expert in AI education for young learners. She has developed innovative methods to teach complex AI concepts in an engaging and accessible way.',
      achievements: [
        'Published 20+ papers on AI education',
        'Former Microsoft AI researcher',
        'Developed AI curriculum for K-12',
        'Speaker at international AI conferences',
      ],
      rating: 5,
    },
    {
      name: 'James Thompson',
      title: 'Game Development Instructor',
      image: '/api/placeholder/300/300',
      specialties: ['Unity', 'C#', 'Game Design', '3D Modeling'],
      experience: '7 years',
      education: 'B.S. in Game Design, Full Sail University',
      bio: 'James is a game development veteran who has worked on multiple AAA titles. He brings real-world industry experience to the classroom and helps students create amazing games.',
      achievements: [
        'Worked on 10+ commercial games',
        'Unity Certified Developer',
        'Taught 300+ students game development',
        'Published indie games on multiple platforms',
      ],
      rating: 5,
    },
    {
      name: 'Lisa Park',
      title: 'Robotics & Engineering Instructor',
      image: '/api/placeholder/300/300',
      specialties: ['Arduino', 'Micro:bit', 'Electronics', '3D Printing'],
      experience: '5 years',
      education: 'M.Eng. in Electrical Engineering, UC Berkeley',
      bio: 'Lisa specializes in hands-on electronics and robotics projects. She loves helping students understand how things work and encouraging them to build their own inventions.',
      achievements: [
        'Former Tesla engineer',
        'Created 100+ robotics projects',
        'Patent holder for educational robotics device',
        'STEM education advocate',
      ],
      rating: 5,
    },
    {
      name: 'David Kim',
      title: 'Cybersecurity & Ethical Hacking Instructor',
      image: '/api/placeholder/300/300',
      specialties: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'Python'],
      experience: '9 years',
      education: 'M.S. in Cybersecurity, Georgia Tech',
      bio: 'David is a cybersecurity expert who teaches students how to protect digital systems and think like ethical hackers. He emphasizes responsible use of technology and digital citizenship.',
      achievements: [
        'Former NSA cybersecurity analyst',
        'Certified Ethical Hacker (CEH)',
        'Led cybersecurity workshops for 500+ students',
        'Cybersecurity competition judge',
      ],
      rating: 5,
    },
  ];

  const teachingPhilosophy = [
    'Every student can learn to code and create with technology',
    'Hands-on projects are the best way to learn programming',
    'Mistakes are opportunities for growth and learning',
    'Collaboration and teamwork enhance the learning experience',
    'Technology should be used to solve real-world problems',
    'Creativity and critical thinking are as important as technical skills',
  ];

  return (
    <Box sx={{ backgroundColor: '#f0f8ff' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2196F3 0%, #42A5F5 50%, #64B5F6 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* <PathForgeBackground page="coaches" /> */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Meet Our Expert Instructors
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Learn from Industry Professionals
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Our instructors are not just teachers – they're industry professionals, 
            researchers, and innovators who bring real-world experience to every class. 
            They're passionate about technology and dedicated to helping students succeed.
          </Typography>
        </Container>
      </Box>

      {/* Instructors Grid */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          Our Expert Team
        </Typography>
        
        <Grid container spacing={4}>
          {coaches.map((coach, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                elevation={2} 
                sx={{ 
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
                <CardMedia
                  component="img"
                  height="250"
                  image={coach.image}
                  alt={coach.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#3498db', mr: 2 }}>
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                        {coach.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#3498db' }}>
                        {coach.title}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" sx={{ mb: 2, color: '#7f8c8d' }}>
                    {coach.bio}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: '#2c3e50', fontWeight: 'bold', mb: 1 }}>
                      Experience: {coach.experience}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 2 }}>
                      {coach.education}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" sx={{ color: '#2c3e50', fontWeight: 'bold', mb: 1 }}>
                      Specialties:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {coach.specialties.map((specialty, idx) => (
                        <Chip
                          key={idx}
                          label={specialty}
                          size="small"
                          sx={{ 
                            backgroundColor: '#3498db', 
                            color: 'white',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                  
                  <Box>
                    <Typography variant="body2" sx={{ color: '#2c3e50', fontWeight: 'bold', mb: 1 }}>
                      Key Achievements:
                    </Typography>
                    <List dense>
                      {coach.achievements.map((achievement, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: '#3498db', fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={achievement} 
                            sx={{ 
                              color: '#7f8c8d',
                              '& .MuiListItemText-primary': {
                                fontSize: '0.875rem'
                              }
                            }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Teaching Philosophy - One Row, Two Cards */}
      <Box sx={{ backgroundColor: '#f8f9ff', py: 8, borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
            Our Teaching Philosophy
          </Typography>
          
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} sm={6} md={6}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  maxWidth: '500px',
                  mx: 'auto',
                  backgroundColor: '#f0f8f0', 
                  border: '1px solid #e0e6ed',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3, color: '#2c3e50' }}>
                  What We Believe
                </Typography>
                <List>
                  {teachingPhilosophy.map((principle, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: '#3498db' }} />
                      </ListItemIcon>
                      <ListItemText primary={principle} sx={{ color: '#7f8c8d' }} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6} md={6}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  maxWidth: '500px',
                  mx: 'auto',
                  backgroundColor: '#f0f8f0', 
                  border: '1px solid #e0e6ed',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(52, 152, 219, 0.3)',
                    border: '1px solid #3498db',
                  },
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3, color: '#2c3e50' }}>
                  Our Approach
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#7f8c8d' }}>
                  We believe that the best learning happens when students are engaged, 
                  challenged, and supported. Our instructors use a variety of teaching 
                  methods to accommodate different learning styles and ensure every 
                  student can succeed.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#7f8c8d' }}>
                  We focus on building not just technical skills, but also critical 
                  thinking, creativity, and collaboration skills that will serve 
                  students throughout their lives.
                </Typography>
                <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
                  Our small class sizes allow for personalized attention and ensure 
                  that no student is left behind while advanced students are 
                  appropriately challenged.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Our Instructors Matter - One Row, Three Cards */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
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
                Industry Experience
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                Our instructors bring real-world experience from top tech companies, 
                ensuring students learn current, relevant skills.
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
              <SchoolIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Educational Expertise
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                With advanced degrees in education and years of teaching experience, 
                our instructors know how to make complex concepts accessible.
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
              <AwardIcon sx={{ fontSize: 50, color: '#3498db', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Proven Results
              </Typography>
              <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                Our instructors have helped hundreds of students achieve their goals, 
                from learning their first programming language to winning competitions.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f8f9ff', borderTop: '1px solid #e0e6ed' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready to Learn from the Best?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Meet our instructors in person and see why students love learning with us. 
            Schedule a free trial session today!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Expert Instructors"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#3498db', color: 'white' }}
            />
            <Chip
              label="Industry Experience"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2ecc71', color: 'white' }}
            />
            <Chip
              label="Proven Results"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#3498db', color: 'white' }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CoachesPage;
