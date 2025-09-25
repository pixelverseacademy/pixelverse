import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider,
  Paper
} from '@mui/material';
import { 
  Groups as GroupsIcon,
  Lightbulb as InnovationIcon,
  Favorite as ImpactIcon
} from '@mui/icons-material';

export default function About() {
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
            About 
            <Box component="span" sx={{ 
              background: 'linear-gradient(45deg, #FFE082, #FFF176)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline'
            }}>
              Us
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
            Learn about our mission to empower youth through comprehensive educational programs and community engagement.
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'center'
          }}>
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
                Our Mission
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
                We utilize comprehensive educational programs to create spaces that empower youth to affirm their unique identity, grow in social-emotional learning, and explore entrepreneurship and career pathways.
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#6c757d',
                  lineHeight: 1.7,
                  fontSize: '1.1rem'
                }}
              >
                Our vision is rooted in ensuring that every child, regardless of their background, has access to quality education and opportunities for success and upward mobility in their communities.
              </Typography>
            </Box>

            {/* Image Placeholder */}
            <Box sx={{ 
              flex: 1,
              height: 350,
              backgroundColor: '#e9ecef',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Typography variant="h6" color="text.secondary">
                [Mission Image Placeholder]
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Us Story */}
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
              About Us
            </Typography>
          </Box>

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
                [Team Image Placeholder]
              </Typography>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#6c757d',
                  mb: 4,
                  lineHeight: 1.7,
                  fontSize: '1.1rem'
                }}
              >
                PathForge Learning was founded with a vision to bridge the educational opportunity gap in underserved communities. Our team of dedicated educators and community leaders recognized the need for comprehensive programs that go beyond traditional learning.
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
                We believe that every child has unique strengths and potential waiting to be unlocked. Through our innovative approach to education, we create environments where students can explore, learn, and grow while building the skills they need for future success.
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#6c757d',
                  lineHeight: 1.7,
                  fontSize: '1.1rem'
                }}
              >
                Our collective goal is to expand access to opportunity, amplify voices that deserve to be heard, and ignite the spark of inner genius in every student we serve.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Core Values */}
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
              Core Values
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#6c757d',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              The fundamental principles that drive our mission and shape our approach to education.
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
                title: "Inclusivity",
                description: "We believe every child deserves access to quality education, regardless of their background, circumstances, or starting point.",
                icon: <GroupsIcon sx={{ fontSize: 40 }} />
              },
              {
                title: "Innovation",
                description: "We use cutting-edge teaching methods and emerging technologies to make learning engaging, effective, and future-focused.",
                icon: <InnovationIcon sx={{ fontSize: 40 }} />
              },
              {
                title: "Community",
                description: "We build strong relationships with families, schools, and local organizations to create lasting, meaningful impact together.",
                icon: <ImpactIcon sx={{ fontSize: 40 }} />
              }
            ].map((value, index) => (
              <Box key={index} sx={{ flex: 1 }}>
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
                      {value.icon}
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                        color: '#2c3e50'
                      }}
                    >
                      {value.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#6c757d',
                        lineHeight: 1.6
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Impact Section */}
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
            Our Impact
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 6,
              opacity: 0.9,
              lineHeight: 1.6
            }}
          >
            We are committed to creating lasting change in our communities through education, mentorship, and opportunity.
          </Typography>

          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 4,
            justifyContent: 'center'
          }}>
            {[
              { number: "500+", label: "Students Served" },
              { number: "50+", label: "Programs Delivered" },
              { number: "10+", label: "Community Partners" }
            ].map((stat, index) => (
              <Box key={index} sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1,
                    color: 'white'
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    opacity: 0.9
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
