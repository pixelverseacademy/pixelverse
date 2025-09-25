import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Tab,
  Tabs,
  Stack,
  Chip
} from '@mui/material';
import { 
  Computer as TechIcon,
  Palette as ArtsIcon,
  TrendingUp as SkillsIcon,
  School as AcademicIcon,
  FitnessCenter as WellnessIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const programCategories = [
  {
    id: 0,
    title: "STEM & Technology",
    description: "Cutting-edge technology education preparing students for the digital future.",
    icon: <TechIcon sx={{ fontSize: 40 }} />,
    programs: [
      {
        name: "Robotics Engineering",
        description: "Build and program robots using industry-standard tools and techniques.",
        age: "Ages 10-16",
        duration: "12 weeks",
        maxStudents: 12,
        skills: ["Programming", "Engineering", "Problem Solving", "Teamwork"],
        highlights: ["Hands-on building", "Competition preparation", "Real-world applications"]
      },
      {
        name: "Python Programming",
        description: "Learn programming fundamentals through Python, one of the most popular languages.",
        age: "Ages 12-18",
        duration: "10 weeks",
        maxStudents: 15,
        skills: ["Python", "Logic", "Data Structures", "Web Development"],
        highlights: ["Project-based learning", "Portfolio development", "Industry mentorship"]
      },
      {
        name: "AI & Machine Learning",
        description: "Explore artificial intelligence and machine learning concepts through practical projects.",
        age: "Ages 14-18",
        duration: "8 weeks",
        maxStudents: 10,
        skills: ["AI Concepts", "Data Analysis", "Machine Learning", "Ethics"],
        highlights: ["Real datasets", "Industry applications", "Future career paths"]
      }
    ]
  },
  {
    id: 1,
    title: "Creative Arts & Design",
    description: "Nurturing artistic expression and creative thinking through digital and traditional media.",
    icon: <ArtsIcon sx={{ fontSize: 40 }} />,
    programs: [
      {
        name: "Digital Art & Design",
        description: "Create stunning digital artwork using professional design software and techniques.",
        age: "Ages 10-16",
        duration: "8 weeks",
        maxStudents: 12,
        skills: ["Digital Design", "Color Theory", "Composition", "Software Proficiency"],
        highlights: ["Professional software", "Portfolio creation", "Art showcase"]
      },
      {
        name: "Music Production",
        description: "Learn to create, record, and produce music using digital audio workstations.",
        age: "Ages 12-18",
        duration: "10 weeks",
        maxStudents: 10,
        skills: ["Audio Engineering", "Music Theory", "Digital Production", "Creativity"],
        highlights: ["Studio access", "Original compositions", "Performance opportunities"]
      },
      {
        name: "Creative Writing",
        description: "Develop storytelling skills through various forms of creative writing and expression.",
        age: "Ages 8-16",
        duration: "6 weeks",
        maxStudents: 15,
        skills: ["Storytelling", "Character Development", "Poetry", "Publishing"],
        highlights: ["Published anthology", "Reading events", "Peer collaboration"]
      }
    ]
  },
  {
    id: 2,
    title: "Life Skills & Leadership",
    description: "Essential skills and leadership development for personal and professional success.",
    icon: <SkillsIcon sx={{ fontSize: 40 }} />,
    programs: [
      {
        name: "Young Entrepreneurs",
        description: "Learn business fundamentals and develop entrepreneurial thinking and skills.",
        age: "Ages 14-18",
        duration: "12 weeks",
        maxStudents: 12,
        skills: ["Business Planning", "Financial Literacy", "Marketing", "Leadership"],
        highlights: ["Business plan development", "Pitch competitions", "Mentorship"]
      },
      {
        name: "Public Speaking & Communication",
        description: "Build confidence and develop effective communication and presentation skills.",
        age: "Ages 10-16",
        duration: "6 weeks",
        maxStudents: 15,
        skills: ["Public Speaking", "Presentation", "Confidence", "Communication"],
        highlights: ["Live presentations", "Video projects", "Confidence building"]
      },
      {
        name: "Career Exploration",
        description: "Explore different career paths and develop professional skills for the future.",
        age: "Ages 16-18",
        duration: "8 weeks",
        maxStudents: 10,
        skills: ["Career Research", "Resume Building", "Interview Skills", "Networking"],
        highlights: ["Industry visits", "Professional mentors", "Job shadowing"]
      }
    ]
  }
];

export default function Programs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 1
        }
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontWeight: 700,
              mb: 3,
              color: 'white',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
              lineHeight: 1.1
            }}
          >
            Our 
            <Box component="span" sx={{ 
              background: 'linear-gradient(45deg, #FFE082, #FFF176)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline'
            }}>
              Programs
            </Box>
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Comprehensive learning experiences designed to unlock potential, build confidence, and prepare young minds for tomorrow's opportunities.
          </Typography>
        </Container>
      </Box>

      {/* Program Categories Overview */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            maxWidth: '1000px',
            mx: 'auto'
          }}>
            {programCategories.map((category, index) => (
              <Box key={category.id} sx={{ flex: 1 }}>
                <Card sx={{
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid #dee2e6',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setSelectedTab(category.id)}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ 
                      color: '#2c3e50',
                      mb: 3
                    }}>
                      {category.icon}
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                        color: '#2c3e50'
                      }}
                    >
                      {category.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#6c757d',
                        lineHeight: 1.6
                      }}
                    >
                      {category.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Program Details Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          {/* Program Category Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
            <Tabs 
              value={selectedTab} 
              onChange={handleTabChange}
              centered
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem'
                }
              }}
            >
              {programCategories.map((category) => (
                <Tab 
                  key={category.id}
                  label={category.title}
                  icon={category.icon}
                  iconPosition="start"
                />
              ))}
            </Tabs>
          </Box>

          {/* Selected Category Description */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                fontWeight: 600,
                mb: 3,
                color: '#2c3e50'
              }}
            >
              {programCategories[selectedTab]?.title}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#6c757d',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              {programCategories[selectedTab]?.description}
            </Typography>
          </Box>

          {/* Program Cards */}
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            maxWidth: '1200px',
            mx: 'auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {programCategories[selectedTab]?.programs.map((program, index) => (
              <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, display: 'flex' }}>
                <Card sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #dee2e6',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    transform: 'translateY(-4px)'
                  },
                  transition: 'all 0.3s ease'
                }}>
                  {/* Program Header */}
                  <Box sx={{
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    p: 3,
                    textAlign: 'center'
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        mb: 1
                      }}
                    >
                      {program.name}
                    </Typography>
                    <Chip 
                      label={program.age}
                      size="small"
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#6c757d',
                        lineHeight: 1.6,
                        mb: 3,
                        flex: 1
                      }}
                    >
                      {program.description}
                    </Typography>

                    {/* Program Details */}
                    <Stack spacing={2} sx={{ mb: 3 }}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Duration:</strong> {program.duration}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Class Size:</strong> Max {program.maxStudents} students
                      </Typography>
                    </Stack>

                    {/* Skills */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                        What You'll Learn:
                      </Typography>
                      <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
                        {program.skills.slice(0, 3).map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            size="small"
                            sx={{ 
                              backgroundColor: '#f8f9fa',
                              color: '#6c757d',
                              fontSize: '0.75rem'
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    {/* Highlights */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                        Program Highlights:
                      </Typography>
                      {program.highlights.map((highlight, idx) => (
                        <Stack key={idx} direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                          <Box sx={{ 
                            width: 4, 
                            height: 4, 
                            backgroundColor: '#2c3e50',
                            borderRadius: '50%'
                          }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            {highlight}
                          </Typography>
                        </Stack>
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: '#2c3e50',
                        color: 'white',
                        fontWeight: 600,
                        mt: 'auto',
                        '&:hover': {
                          backgroundColor: '#34495e'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ 
        py: { xs: 6, md: 8 },
        backgroundColor: '#2c3e50',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 600,
              mb: 3
            }}
          >
            Ready to Enroll?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              opacity: 0.9
            }}
          >
            Contact us to learn more about our programs and enrollment process.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: 'white',
              color: '#2c3e50',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#f8f9fa'
              }
            }}
          >
            Contact Us Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
