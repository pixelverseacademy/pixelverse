import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Stack,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Fade,
  Zoom,
  useTheme,
  Tab,
  Tabs,
  IconButton
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  Build as BuildIcon,
  School as SchoolIcon,
  Palette as PaletteIcon,
  Psychology as PsychologyIcon,
  FitnessCenter as FitnessIcon,
  ArrowForward as ArrowForwardIcon,
  AccessTime as TimeIcon,
  Group as GroupIcon,
  EmojiEvents as AwardIcon,
  Star as StarIcon
} from '@mui/icons-material';

const programCategories = [
  {
    id: 'stem',
    title: 'STEM & Technology',
    description: 'Cutting-edge technology education for the digital future',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    color: '#3498db',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    programs: [
      {
        name: "Python Programming Bootcamp",
        age: "Ages 12-18",
        duration: "8 weeks, 3 hours/session",
        skills: ["Python Fundamentals", "Data Structures", "Web Development", "API Integration"],
        benefits: "Critical thinking, problem-solving, career readiness",
        level: "Beginner to Intermediate",
        maxStudents: 15,
        description: "Master Python programming through hands-on projects, from building your first calculator to creating web applications.",
        highlights: ["Build 5+ real projects", "Industry mentorship", "Certificate of completion"]
      },
      {
        name: "AI & Machine Learning Lab",
        age: "Ages 14-18",
        duration: "12 weeks, 2.5 hours/session",
        skills: ["Machine Learning Basics", "Neural Networks", "Computer Vision", "Natural Language Processing"],
        benefits: "Future-focused skills, analytical thinking, innovation",
        level: "Intermediate to Advanced",
        maxStudents: 12,
        description: "Explore the fascinating world of AI and machine learning through practical experiments and real-world applications.",
        highlights: ["Train your own AI models", "Work with real datasets", "Showcase final projects"]
      },
      {
        name: "Robotics Engineering",
        age: "Ages 10-16",
        duration: "10 weeks, 2 hours/session",
        skills: ["Robotics Assembly", "Programming Sensors", "Arduino/Raspberry Pi", "Problem Solving"],
        benefits: "Hands-on STEM, teamwork, engineering mindset",
        level: "Beginner to Intermediate",
        maxStudents: 16,
        description: "Build, program, and control robots while learning fundamental engineering and programming concepts.",
        highlights: ["Build competition-ready robots", "Team challenges", "Engineering design process"]
      }
    ]
  },
  {
    id: 'creative',
    title: 'Creative Arts & Design',
    description: 'Digital creativity and artistic expression',
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    color: '#e74c3c',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    programs: [
      {
        name: "Digital Art & Design Studio",
        age: "Ages 8-16",
        duration: "6 weeks, 2 hours/session",
        skills: ["Digital Illustration", "Graphic Design", "Photo Editing", "Design Principles"],
        benefits: "Creative expression, visual communication, artistic confidence",
        level: "All Levels",
        maxStudents: 20,
        description: "Unleash your creativity through digital art tools and learn professional design techniques.",
        highlights: ["Professional software training", "Portfolio development", "Art showcase event"]
      },
      {
        name: "Music Production Workshop",
        age: "Ages 12-18",
        duration: "8 weeks, 2.5 hours/session",
        skills: ["Digital Audio Workstations", "Beat Making", "Sound Design", "Music Theory"],
        benefits: "Musical creativity, technical skills, artistic collaboration",
        level: "Beginner to Intermediate",
        maxStudents: 12,
        description: "Create your own music using industry-standard software and learn the art of music production.",
        highlights: ["Record original songs", "Collaborative projects", "Live performance opportunity"]
      },
      {
        name: "3D Modeling & Animation",
        age: "Ages 14-18",
        duration: "10 weeks, 3 hours/session",
        skills: ["3D Modeling", "Animation Principles", "Rendering", "Storytelling"],
        benefits: "Spatial thinking, storytelling, technical artistry",
        level: "Intermediate",
        maxStudents: 14,
        description: "Bring your ideas to life through 3D modeling and animation using industry-standard tools.",
        highlights: ["Create animated shorts", "3D printing projects", "Portfolio development"]
      }
    ]
  },
  {
    id: 'life-skills',
    title: 'Life Skills & Leadership',
    description: 'Essential skills for personal and professional success',
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    color: '#2ecc71',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    programs: [
      {
        name: "Young Entrepreneurs Academy",
        age: "Ages 14-18",
        duration: "12 weeks, 2 hours/session",
        skills: ["Business Planning", "Financial Literacy", "Marketing", "Leadership"],
        benefits: "Entrepreneurial mindset, leadership skills, financial awareness",
        level: "All Levels",
        maxStudents: 18,
        description: "Learn to think like an entrepreneur and develop essential business skills for the modern economy.",
        highlights: ["Develop business plans", "Pitch to real investors", "Start mini businesses"]
      },
      {
        name: "Public Speaking & Communication",
        age: "Ages 10-16",
        duration: "6 weeks, 1.5 hours/session",
        skills: ["Public Speaking", "Presentation Skills", "Confidence Building", "Communication"],
        benefits: "Confidence, communication skills, leadership presence",
        level: "All Levels",
        maxStudents: 15,
        description: "Build confidence and master the art of effective communication and public speaking.",
        highlights: ["TED-style presentations", "Peer coaching", "Confidence workshops"]
      },
      {
        name: "Career Exploration & Prep",
        age: "Ages 16-18",
        duration: "8 weeks, 2 hours/session",
        skills: ["Career Research", "Resume Building", "Interview Skills", "Professional Networking"],
        benefits: "Career clarity, professional skills, future readiness",
        level: "All Levels",
        maxStudents: 20,
        description: "Explore career paths and develop professional skills needed for college and career success.",
        highlights: ["Industry mentorship", "Mock interviews", "Professional portfolio"]
      }
    ]
  }
];

const faqs = [
  {
    question: "What age groups do your programs serve?",
    answer: "Our programs are designed for ages 8-18, with specific age ranges for each program to ensure age-appropriate learning and engagement."
  },
  {
    question: "Do students need prior experience?",
    answer: "No prior experience is required for most of our beginner programs. We meet students where they are and help them grow from there."
  },
  {
    question: "What equipment or materials do students need?",
    answer: "We provide all necessary equipment, software, and materials. Students just need to bring enthusiasm and willingness to learn!"
  },
  {
    question: "How do you measure student progress?",
    answer: "We use project-based assessments, peer reviews, and portfolio development to track progress and celebrate achievements."
  },
  {
    question: "Are scholarships or financial aid available?",
    answer: "Yes! We believe cost should never be a barrier to education. Contact us to learn about our scholarship and financial assistance programs."
  }
];

export default function Programs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box sx={{ 
        pt: { xs: 6, md: 10 }, 
        pb: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Fade in={true} timeout={1200}>
            <Box textAlign="center">
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                  fontWeight: 800,
                  color: 'white',
                  mb: 4,
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
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                  fontWeight: 300,
                  mb: 6
                }}
              >
                Comprehensive learning experiences designed to unlock potential, build confidence, 
                and prepare young minds for tomorrow's opportunities.
              </Typography>

              {/* Program Category Overview */}
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                maxWidth: '1000px',
                mx: 'auto',
                alignItems: 'stretch',
                justifyContent: 'center'
              }}>
                {programCategories.map((category, index) => (
                  <Box key={category.id} sx={{ flex: 1, display: 'flex' }}>
                    <Zoom in={true} timeout={800 + index * 200}>
                      <Card sx={{
                        background: category.gradient,
                        color: 'white',
                        borderRadius: 4,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }
                      }}>
                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                          <Avatar sx={{
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            width: 70,
                            height: 70,
                            mx: 'auto',
                            mb: 3,
                            backdropFilter: 'blur(10px)'
                          }}>
                            {category.icon}
                          </Avatar>
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                            {category.title}
                          </Typography>
                          <Typography variant="body1" sx={{ opacity: 0.9 }}>
                            {category.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </Box>
                ))}
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Program Details Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          {/* Program Category Tabs */}
          <Box sx={{ mb: 6 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              centered
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  minWidth: 200,
                  py: 2,
                  '&.Mui-selected': {
                    color: programCategories[selectedTab]?.color || '#3498db'
                  }
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: programCategories[selectedTab]?.color || '#3498db',
                  height: 3,
                  borderRadius: 2
                }
              }}
            >
              {programCategories.map((category, index) => (
                <Tab
                  key={category.id}
                  label={category.title}
                  icon={category.icon}
                  iconPosition="start"
                />
              ))}
            </Tabs>
          </Box>

          {/* Selected Category Programs */}
          <Fade in={true} key={selectedTab} timeout={600}>
            <Box>
              <Typography 
                variant="h3" 
                textAlign="center"
                sx={{ 
                  fontWeight: 700,
                  color: '#2c3e50',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                {programCategories[selectedTab]?.title}
              </Typography>
              
              <Typography 
                variant="h6" 
                textAlign="center"
                sx={{ 
                  color: '#7f8c8d',
                  mb: 6,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                {programCategories[selectedTab]?.description}
              </Typography>

              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                maxWidth: '1200px',
                mx: 'auto',
                alignItems: 'stretch',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {programCategories[selectedTab]?.programs.map((program, index) => (
                  <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' }, display: 'flex' }}>
                    <Zoom in={true} timeout={400 + index * 200} style={{ width: '100%', height: '100%' }}>
                      <Card sx={{
                        width: '100%',
                        height: '100%',
                        minHeight: '420px',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 4,
                        overflow: 'hidden',
                        background: 'white',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        border: `2px solid ${programCategories[selectedTab]?.color}30`,
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 15px 30px ${programCategories[selectedTab]?.color}40`,
                          '& .program-header': {
                            background: programCategories[selectedTab]?.gradient
                          }
                        }
                      }}>
                        {/* Program Header */}
                        <Box 
                          className="program-header"
                          sx={{
                            background: `${programCategories[selectedTab]?.color}15`,
                            p: 2.5,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                            <Avatar sx={{ 
                              backgroundColor: programCategories[selectedTab]?.color,
                              width: 40,
                              height: 40
                            }}>
                              {programCategories[selectedTab]?.icon}
                            </Avatar>
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50', fontSize: '1.1rem' }}>
                                {program.name}
                              </Typography>
                              <Chip 
                                label={program.level}
                                size="small"
                                sx={{ 
                                  backgroundColor: programCategories[selectedTab]?.color,
                                  color: 'white',
                                  fontWeight: 600,
                                  fontSize: '0.75rem'
                                }}
                              />
                            </Box>
                          </Stack>
                        </Box>

                        <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#7f8c8d',
                              lineHeight: 1.6,
                              mb: 3,
                              flex: 1
                            }}
                          >
                            {program.description}
                          </Typography>

                          {/* Program Details */}
                          <Stack spacing={2} mb={3}>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <GroupIcon sx={{ color: programCategories[selectedTab]?.color, fontSize: 20 }} />
                              <Typography variant="body2" color="text.secondary">
                                {program.age} • Max {program.maxStudents} students
                              </Typography>
                            </Stack>
                            
                            <Stack direction="row" spacing={1} alignItems="center">
                              <TimeIcon sx={{ color: programCategories[selectedTab]?.color, fontSize: 20 }} />
                              <Typography variant="body2" color="text.secondary">
                                {program.duration}
                              </Typography>
                            </Stack>
                          </Stack>

                          {/* Skills Tags */}
                          <Box mb={3}>
                            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                              What You'll Learn:
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                              {program.skills.slice(0, 3).map((skill, idx) => (
                                <Chip
                                  key={idx}
                                  label={skill}
                                  size="small"
                                  variant="outlined"
                                  sx={{ 
                                    borderColor: programCategories[selectedTab]?.color,
                                    color: programCategories[selectedTab]?.color
                                  }}
                                />
                              ))}
                              {program.skills.length > 3 && (
                                <Chip
                                  label={`+${program.skills.length - 3} more`}
                                  size="small"
                                  sx={{ 
                                    backgroundColor: `${programCategories[selectedTab]?.color}20`,
                                    color: programCategories[selectedTab]?.color
                                  }}
                                />
                              )}
                            </Stack>
                          </Box>

                          {/* Highlights */}
                          <Box mb={3}>
                            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                              Program Highlights:
                            </Typography>
                            {program.highlights.map((highlight, idx) => (
                              <Stack key={idx} direction="row" spacing={1} alignItems="center" mb={0.5}>
                                <StarIcon sx={{ color: programCategories[selectedTab]?.color, fontSize: 16 }} />
                                <Typography variant="body2" color="text.secondary">
                                  {highlight}
                                </Typography>
                              </Stack>
                            ))}
                          </Box>

                          {/* Action Button */}
                          <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              background: programCategories[selectedTab]?.gradient,
                              color: 'white',
                              fontWeight: 600,
                              borderRadius: 3,
                              py: 1.5,
                              mt: 'auto',
                              '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: `0 8px 20px ${programCategories[selectedTab]?.color}40`
                              },
                              transition: 'all 0.3s ease'
                            }}
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </Zoom>
                  </Box>
                ))}
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={8}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                color: '#2c3e50',
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#7f8c8d',
                lineHeight: 1.6
              }}
            >
              Everything you need to know about our programs
            </Typography>
          </Box>

          <Stack spacing={2}>
            {faqs.map((faq, index) => (
              <Zoom in={true} timeout={600 + index * 100} key={index}>
                <Accordion
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    border: 'none',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#3498db' }} />}
                    sx={{
                      backgroundColor: 'white',
                      '& .MuiAccordionSummary-content': {
                        py: 1
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#f8f9fa', pt: 0 }}>
                    <Typography variant="body1" sx={{ color: '#7f8c8d', lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Zoom>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" fill="%23ffffff" fill-opacity="0.05"/%3E%3C/svg%3E")',
          zIndex: 1
        }
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Fade in={true} timeout={1200}>
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700,
                  color: 'white',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' },
                  textShadow: '2px 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                Ready to Get Started?
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  mb: 6,
                  lineHeight: 1.6,
                  fontWeight: 300
                }}
              >
                Join thousands of students who are already building their future through our programs.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 2.5,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                    boxShadow: '0 8px 20px rgba(255, 107, 53, 0.4)',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #E55A2B, #D4821A)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 30px rgba(255, 107, 53, 0.6)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Enroll Now
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 5,
                    py: 2.5,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    borderColor: 'white',
                    color: 'white',
                    borderWidth: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#2c3e50',
                      borderColor: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 30px rgba(255,255,255,0.3)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}
