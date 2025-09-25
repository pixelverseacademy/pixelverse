import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Card,
  CardContent,
  Avatar,
  Chip,
  Grid,
  Fade,
  Zoom,
  useTheme
} from '@mui/material';
import { 
  School as SchoolIcon,
  Groups as GroupsIcon,
  EmojiEvents as ImpactIcon,
  Psychology as PsychologyIcon,
  Lightbulb as InnovationIcon,
  Favorite as HeartIcon,
  Timeline as TimelineIcon,
  Star as StarIcon
} from '@mui/icons-material';

export default function About() {
  const theme = useTheme();

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
                About 
                <Box component="span" sx={{ 
                  background: 'linear-gradient(45deg, #FFE082, #FFF176)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline'
                }}>
                  GiveHart
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
                  fontWeight: 300
                }}
              >
                Transforming communities through innovative education, one young mind at a time.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Zoom in={true} timeout={800}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 4, md: 6 }, 
                borderRadius: 6,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '40%',
                  height: '100%',
                  background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" fill="%23ffffff" fill-opacity="0.1"/%3E%3C/svg%3E")',
                  zIndex: 1
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4 }}>
                  <Avatar sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    width: 64, 
                    height: 64,
                    backdropFilter: 'blur(10px)'
                  }}>
                    <SchoolIcon sx={{ fontSize: 32, color: 'white' }} />
                  </Avatar>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 700,
                      textShadow: '1px 2px 4px rgba(0,0,0,0.3)',
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
                    Our Mission & Vision
                  </Typography>
                </Stack>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4, 
                    lineHeight: 1.8,
                    opacity: 0.95,
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                  }}
                >
                  GiveHart exists to ignite curiosity and build confidence in youth from underrepresented 
                  communities by providing accessible, hands-on technology education. We envision a world 
                  where every child—regardless of background—has the opportunity to discover their potential 
                  through technology and innovation.
                </Typography>
                
                <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                  {[
                    "Accessible Education",
                    "Hands-on Learning", 
                    "Community Focus",
                    "Future Ready"
                  ].map((label, index) => (
                    <Chip 
                      key={label}
                      label={label} 
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.3)',
                          transform: 'scale(1.05)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Paper>
          </Zoom>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1000}>
                <Box>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 700,
                      color: '#2c3e50',
                      mb: 4,
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
                    Our Story
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#7f8c8d',
                      lineHeight: 1.8,
                      mb: 4,
                      fontSize: '1.1rem'
                    }}
                  >
                    Founded with a passion for bridging the digital divide, GiveHart Inc. began as a 
                    grassroots initiative to bring quality STEM education to underserved communities. 
                    What started as small coding workshops has evolved into a comprehensive educational 
                    platform that empowers young minds across multiple disciplines.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#7f8c8d',
                      lineHeight: 1.8,
                      fontSize: '1.1rem'
                    }}
                  >
                    Today, we continue to innovate and expand our reach, always staying true to our 
                    core belief that every child deserves access to the tools and knowledge that will 
                    prepare them for tomorrow's opportunities.
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Zoom in={true} timeout={1200}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {[
                    { icon: <TimelineIcon />, title: "2020", desc: "Founded with first coding workshop", color: "#3498db" },
                    { icon: <InnovationIcon />, title: "2021", desc: "Expanded to robotics and AI programs", color: "#2ecc71" },
                    { icon: <GroupsIcon />, title: "2022", desc: "Reached 500+ students across 5 communities", color: "#e74c3c" },
                    { icon: <StarIcon />, title: "2024", desc: "Comprehensive learning platform launched", color: "#f39c12" }
                  ].map((milestone, index) => (
                    <Card 
                      key={milestone.title}
                      sx={{ 
                        background: 'white',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        border: `2px solid ${milestone.color}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(10px)',
                          boxShadow: `0 15px 40px ${milestone.color}20`
                        }
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Stack direction="row" spacing={3} alignItems="center">
                          <Avatar sx={{ 
                            backgroundColor: milestone.color,
                            width: 50,
                            height: 50
                          }}>
                            {milestone.icon}
                          </Avatar>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50' }}>
                              {milestone.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                              {milestone.desc}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Enhanced Values Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
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
              Our Core Values
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#7f8c8d',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              The fundamental principles that drive our mission and shape our approach
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            maxWidth: '1000px',
            mx: 'auto',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            {[
              {
                title: "Inclusivity",
                description: "We believe every child deserves access to quality STEM education, regardless of their background, circumstances, or starting point.",
                icon: <GroupsIcon sx={{ fontSize: 40 }} />,
                color: "#3498db",
                gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)"
              },
              {
                title: "Innovation",
                description: "We use cutting-edge teaching methods and emerging technologies to make learning engaging, effective, and future-focused.",
                icon: <InnovationIcon sx={{ fontSize: 40 }} />,
                color: "#2ecc71",
                gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)"
              },
              {
                title: "Community",
                description: "We build strong relationships with families, schools, and local organizations to create lasting, meaningful impact together.",
                icon: <ImpactIcon sx={{ fontSize: 40 }} />,
                color: "#e74c3c",
                gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)"
              }
            ].map((value, index) => (
              <Box key={index} sx={{ flex: 1, display: 'flex' }}>
                <Zoom in={true} timeout={800 + index * 200} style={{ width: '100%', height: '100%' }}>
                  <Card 
                    sx={{ 
                      width: '100%',
                      height: '100%',
                      minHeight: '380px',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 6,
                      overflow: 'hidden',
                      background: 'white',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                      border: `3px solid ${value.color}`,
                      position: 'relative',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: `0 25px 50px ${value.color}30`,
                        '& .value-icon': {
                          background: value.gradient,
                          transform: 'scale(1.2) rotate(10deg)',
                        },
                        '& .value-overlay': {
                          opacity: 1
                        }
                      }
                    }}
                  >
                    <Box 
                      className="value-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '6px',
                        background: value.gradient,
                        opacity: 0.7,
                        transition: 'opacity 0.4s ease'
                      }}
                    />
                    
                    <CardContent sx={{ 
                      p: 5, 
                      textAlign: 'center',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <Box>
                        <Box 
                          className="value-icon"
                          sx={{ 
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            background: `${value.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 4,
                            color: value.color,
                            transition: 'all 0.4s ease',
                            border: `3px solid ${value.color}30`
                          }}
                        >
                          {value.icon}
                        </Box>
                        
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            fontWeight: 700,
                            color: '#2c3e50',
                            mb: 3
                          }}
                        >
                          {value.title}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#7f8c8d',
                          lineHeight: 1.7,
                          fontSize: '1.1rem',
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Impact & Future Section */}
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Fade in={true} timeout={1200}>
            <Box textAlign="center">
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700,
                  color: 'white',
                  mb: 4,
                  fontSize: { xs: '2rem', md: '3rem' },
                  textShadow: '2px 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                Building Tomorrow's Leaders
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  mb: 6,
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  mx: 'auto',
                  fontWeight: 300
                }}
              >
                Every student we reach becomes a catalyst for change in their community. 
                Through education, innovation, and unwavering support, we're not just teaching 
                skills—we're nurturing the next generation of leaders, creators, and changemakers.
              </Typography>
              
              <Grid container spacing={4} sx={{ mt: 4 }}>
                {[
                  { number: "1000+", label: "Students Impacted", icon: <GroupsIcon /> },
                  { number: "50+", label: "Programs Delivered", icon: <SchoolIcon /> },
                  { number: "15", label: "Communities Served", icon: <HeartIcon /> },
                  { number: "100%", label: "Future Focused", icon: <StarIcon /> }
                ].map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Zoom in={true} timeout={1000 + index * 200}>
                      <Box textAlign="center">
                        <Avatar sx={{ 
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          width: 70,
                          height: 70,
                          mx: 'auto',
                          mb: 2,
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255,255,255,0.3)'
                        }}>
                          {React.cloneElement(stat.icon, { sx: { fontSize: 30, color: 'white' } })}
                        </Avatar>
                        <Typography 
                          variant="h3" 
                          sx={{ 
                            fontWeight: 800,
                            color: '#FFE082',
                            mb: 1,
                            textShadow: '1px 2px 4px rgba(0,0,0,0.3)'
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.8)',
                            fontWeight: 500
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}
