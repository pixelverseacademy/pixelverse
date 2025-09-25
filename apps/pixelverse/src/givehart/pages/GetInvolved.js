import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Paper,
  Stack,
  Avatar,
  Fade,
  Zoom,
  Chip
} from '@mui/material';
import { 
  VolunteerActivism as VolunteerIcon,
  Handshake as PartnershipIcon,
  AttachMoney as DonationIcon,
  Business as SponsorIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Favorite as HeartIcon,
  Schedule as ScheduleIcon,
  EmojiEvents as AwardIcon,
  ArrowForward as ArrowForwardIcon,
  Psychology as MentorIcon,
  Event as EventIcon,
  AdminPanelSettings as AdminIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const involvementOptions = [
  {
    title: "Volunteer Opportunities",
    description: "Join our team as mentors, event helpers, and admin support.",
    icon: <VolunteerIcon sx={{ fontSize: 28 }} />,
    color: "#3498db",
    gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    action: "Apply to Volunteer",
    actionLink: "/givehart/contact",
    highlights: ["Flexible scheduling", "Full training provided", "Community impact"]
  },
  {
    title: "Partnerships",
    description: "Collaborate with us to expand our reach and impact.",
    icon: <PartnershipIcon sx={{ fontSize: 28 }} />,
    color: "#e74c3c",
    gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
    action: "Partner with Us",
    actionLink: "/givehart/contact",
    highlights: ["Corporate partnerships", "School collaborations", "Community outreach"]
  },
  {
    title: "Fundraising & Donations",
    description: "Support our mission through donations and fundraising.",
    icon: <DonationIcon sx={{ fontSize: 28 }} />,
    color: "#2ecc71",
    gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
    action: "Donate Now",
    actionLink: "/givehart/donate",
    highlights: ["Tax-deductible", "Monthly giving", "100% transparency"]
  },
  {
    title: "Sponsor Programs",
    description: "Gain recognition while making a lasting impact on young lives.",
    icon: <SponsorIcon sx={{ fontSize: 28 }} />,
    color: "#f39c12",
    gradient: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
    action: "Become a Sponsor",
    actionLink: "/givehart/contact",
    highlights: ["Brand recognition", "Community visibility", "Social impact"]
  }
];

const volunteerRoles = [
  {
    role: "Program Mentor",
    description: "Guide students through coding, robotics, and STEM projects",
    timeCommitment: "2-4 hours/week",
    requirements: "Technical background preferred",
    icon: <MentorIcon sx={{ color: "#3498db", fontSize: 24 }} />,
    color: "#3498db"
  },
  {
    role: "Event Coordinator",
    description: "Help organize workshops, camps, and community events",
    timeCommitment: "Flexible, event-based",
    requirements: "Strong organizational skills",
    icon: <EventIcon sx={{ color: "#e74c3c", fontSize: 24 }} />,
    color: "#e74c3c"
  },
  {
    role: "Administrative Support",
    description: "Assist with communications, data entry, and operations",
    timeCommitment: "1-3 hours/week",
    requirements: "Basic computer skills",
    icon: <AdminIcon sx={{ color: "#2ecc71", fontSize: 24 }} />,
    color: "#2ecc71"
  }
];

export default function GetInvolved() {
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
                Get 
                <Box component="span" sx={{ 
                  background: 'linear-gradient(45deg, #FFE082, #FFF176)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline'
                }}>
                  Involved
                </Box>
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                  fontWeight: 300
                }}
              >
                There are many meaningful ways to support our mission and make a difference 
                in the lives of young learners in our community.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Involvement Options Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                color: '#2c3e50',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Ways to Make an Impact
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 3,
            maxWidth: '1200px',
            mx: 'auto',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            {involvementOptions.map((option, index) => (
              <Box key={index} sx={{ flex: 1, display: 'flex' }}>
                <Zoom in={true} timeout={600 + index * 200} style={{ width: '100%', height: '100%' }}>
                  <Card 
                    sx={{ 
                      width: '100%',
                      height: '100%',
                      minHeight: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      background: 'white',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                      border: `2px solid ${option.color}20`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 12px 25px ${option.color}30`,
                        '& .option-header': {
                          background: option.gradient
                        }
                      }
                    }}
                  >
                    {/* Card Header */}
                    <Box 
                      className="option-header"
                      sx={{
                        background: `${option.color}15`,
                        p: 2.5,
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Avatar sx={{ 
                        backgroundColor: option.color,
                        width: 55, 
                        height: 55, 
                        mx: 'auto', 
                        mb: 1.5,
                        boxShadow: `0 3px 12px ${option.color}40`
                      }}>
                        {option.icon}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50', fontSize: '1.1rem' }}>
                        {option.title}
                      </Typography>
                    </Box>

                    <CardContent sx={{ 
                      p: 2.5, 
                      flex: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#7f8c8d',
                            lineHeight: 1.5,
                            mb: 2,
                            fontSize: '0.9rem'
                          }}
                        >
                          {option.description}
                        </Typography>

                        {/* Highlights */}
                        <Stack spacing={0.5} mb={2}>
                          {option.highlights.map((highlight, idx) => (
                            <Stack key={idx} direction="row" spacing={1} alignItems="center">
                              <Box 
                                sx={{ 
                                  width: 5, 
                                  height: 5, 
                                  borderRadius: '50%', 
                                  backgroundColor: option.color 
                                }} 
                              />
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                                {highlight}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Box>
                      
                      <Button
                        component={Link}
                        to={option.actionLink}
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        fullWidth
                        size="small"
                        sx={{
                          background: option.gradient,
                          fontWeight: 600,
                          borderRadius: 2,
                          py: 1,
                          px: 2,
                          textTransform: 'none',
                          fontSize: '0.875rem',
                          '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: `0 6px 20px ${option.color}40`
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                </Zoom>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Volunteer Roles Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                color: '#2c3e50',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Volunteer Opportunities
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#7f8c8d',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Choose the role that best matches your skills and availability
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            maxWidth: '900px',
            mx: 'auto',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            {volunteerRoles.map((role, index) => (
              <Box key={index} sx={{ flex: 1, display: 'flex' }}>
                <Zoom in={true} timeout={800 + index * 200} style={{ width: '100%', height: '100%' }}>
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: '240px',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      background: 'white',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                      border: `2px solid ${role.color}20`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 25px ${role.color}30`
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <Box>
                        <Box sx={{ mb: 2 }}>
                          {role.icon}
                        </Box>
                        
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50', mb: 1.5, fontSize: '1.1rem' }}>
                          {role.role}
                        </Typography>
                        
                        <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 2, lineHeight: 1.5, fontSize: '0.9rem' }}>
                          {role.description}
                        </Typography>
                      </Box>

                      <Stack spacing={1.5}>
                        <Box>
                          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                            <ScheduleIcon sx={{ color: role.color, fontSize: 18 }} />
                            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                              {role.timeCommitment}
                            </Typography>
                          </Stack>
                        </Box>
                        
                        <Chip 
                          label={role.requirements}
                          size="small"
                          sx={{ 
                            backgroundColor: `${role.color}15`,
                            color: role.color,
                            fontWeight: 600,
                            borderRadius: 2,
                            fontSize: '0.75rem'
                          }}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                </Zoom>
              </Box>
            ))}
          </Box>
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
              <Avatar sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)',
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 4,
                backdropFilter: 'blur(10px)'
              }}>
                <HeartIcon sx={{ fontSize: 40, color: 'white' }} />
              </Avatar>
              
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700,
                  color: 'white',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  textShadow: '2px 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                Ready to Make a Difference?
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  mb: 6,
                  lineHeight: 1.6,
                  fontWeight: 300
                }}
              >
                Join our community of changemakers and help shape the future of young innovators.
              </Typography>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Button
                  component={Link}
                  to="/givehart/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 2.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
                    boxShadow: '0 8px 20px rgba(255, 107, 53, 0.4)',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #E55A2B, #D4821A)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 25px rgba(255, 107, 53, 0.6)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Started Today
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 5,
                    py: 2.5,
                    fontSize: '1.1rem',
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
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 25px rgba(255,255,255,0.3)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}
