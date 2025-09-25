import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Divider,
  Paper
} from '@mui/material';
import { 
  ArrowForward,
  School as EducationIcon,
  Computer as TechIcon,
  Palette as ArtsIcon,
  TrendingUp as SkillsIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Home() {
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
            Empowering Youth Through 
            <Box component="span" sx={{ 
              background: 'linear-gradient(45deg, #FFE082, #FFF176)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline'
            }}>
              Education
            </Box>
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            We provide comprehensive enrichment programs in STEM, Creative Arts, Life Skills, and Academic Excellence to unlock every child's potential.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              component={Link}
              to="/givehart/programs"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: '#2c3e50',
                '&:hover': {
                  backgroundColor: '#34495e'
                }
              }}
            >
              Explore Programs
            </Button>
            <Button
              component={Link}
              to="/givehart/get-involved"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: '#2c3e50',
                color: '#2c3e50',
                '&:hover': {
                  borderColor: '#34495e',
                  backgroundColor: 'rgba(44, 62, 80, 0.04)'
                }
              }}
            >
              Get Involved
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                fontWeight: 600,
                mb: 3,
                color: '#2c3e50'
              }}
            >
              Our Mission
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#6c757d',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.7
              }}
            >
              We utilize comprehensive educational programs to create spaces that empower youth to discover their unique talents, develop essential life skills, and explore pathways to future success.
            </Typography>
          </Box>

          {/* Image Placeholder */}
          <Box sx={{ 
            height: 400,
            backgroundColor: '#e9ecef',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 6
          }}>
            <Typography variant="h6" color="text.secondary">
              [Mission Image Placeholder]
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Programs Overview */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                fontWeight: 600,
                mb: 3,
                color: '#2c3e50'
              }}
            >
              Our Programs
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#6c757d',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Comprehensive learning experiences designed to unlock potential and build futures.
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            maxWidth: '1000px',
            mx: 'auto'
          }}>
            {[
              { 
                title: "STEM & Technology", 
                desc: "Robotics, coding, AI, and cutting-edge technology education for the digital future.",
                icon: <TechIcon sx={{ fontSize: 40 }} />
              },
              { 
                title: "Creative Arts & Design", 
                desc: "Digital arts, music production, and creative expression that nurtures artistic talents.",
                icon: <ArtsIcon sx={{ fontSize: 40 }} />
              },
              { 
                title: "Life Skills & Leadership", 
                desc: "Essential skills, leadership development, and career preparation for success.",
                icon: <SkillsIcon sx={{ fontSize: 40 }} />
              }
            ].map(({ title, desc, icon }, index) => (
              <Box key={title} sx={{ flex: 1 }}>
                <Card sx={{
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid #dee2e6',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ 
                      color: '#2c3e50',
                      mb: 3
                    }}>
                      {icon}
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                        color: '#2c3e50'
                      }}
                    >
                      {title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#6c757d',
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {desc}
                    </Typography>

                    <Button
                      component={Link}
                      to="/givehart/programs"
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: '#2c3e50',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'rgba(44, 62, 80, 0.04)'
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

      {/* Impact Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'center'
          }}>
            {/* Image Placeholder */}
            <Box sx={{ 
              flex: 1,
              height: 300,
              backgroundColor: '#e9ecef',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Typography variant="h6" color="text.secondary">
                [Impact Image Placeholder]
              </Typography>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h3" 
                component="h2"
                sx={{ 
                  fontWeight: 600,
                  mb: 3,
                  color: '#2c3e50'
                }}
              >
                Making a Difference
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#6c757d',
                  mb: 4,
                  lineHeight: 1.7,
                  fontSize: '1.1rem'
                }}
              >
                Our programs have reached hundreds of students across the Raleigh-Durham area, 
                providing them with the skills, confidence, and opportunities they need to succeed 
                in an ever-changing world.
              </Typography>

              <Stack spacing={2} sx={{ mb: 4 }}>
                {[
                  "Hands-on learning experiences",
                  "Expert instruction and mentorship", 
                  "Small class sizes for personalized attention",
                  "Pathways to future opportunities"
                ].map((item, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      backgroundColor: '#2c3e50',
                      borderRadius: '50%'
                    }} />
                    <Typography variant="body1" color="text.secondary">
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                component={Link}
                to="/givehart/about"
                variant="outlined"
                sx={{
                  borderColor: '#2c3e50',
                  color: '#2c3e50',
                  '&:hover': {
                    borderColor: '#34495e',
                    backgroundColor: 'rgba(44, 62, 80, 0.04)'
                  }
                }}
              >
                Learn About Us
              </Button>
            </Box>
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
            Ready to Get Started?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              opacity: 0.9
            }}
          >
            Join us in empowering the next generation through education and opportunity.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
          >
            <Button
              component={Link}
              to="/givehart/contact"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: 'white',
                color: '#2c3e50',
                '&:hover': {
                  backgroundColor: '#f8f9fa'
                }
              }}
            >
              Contact Us
            </Button>
            <Button
              component={Link}
              to="/givehart/donate"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Support Our Mission
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
