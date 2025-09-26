import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Schedule as TimeIcon,
  School as SchoolIcon,
  Groups as GroupsIcon,
  LocalLibrary as LibraryIcon,
} from '@mui/icons-material';

const LocationsPage: React.FC = () => {
  const theme = getThemeColors('locations');
  
  // Define orange theme colors for Locations page
  const primaryColor = '#FF9800';
  const secondaryColor = '#FFB74D';
  
  const highlights = [
    {
      icon: <SchoolIcon sx={{ fontSize: 20 }} />,
      text: 'In-School Programs',
      color: '#FF9800',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 20 }} />,
      text: 'Expert Instructors',
      color: '#F57C00',
    },
    {
      icon: <LibraryIcon sx={{ fontSize: 20 }} />,
      text: 'All Equipment Provided',
      color: '#E65100',
    },
  ];

  const locations = [
    {
      name: 'Durham',
      zipcode: 'NC 27701',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'Flagship location serving Durham schools',
      color: '#FF9800',
    },
    {
      name: 'Holly Springs',
      zipcode: 'NC 27540',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'Newest location with full programs',
      color: '#F57C00',
    },
    {
      name: 'Raleigh',
      zipcode: 'NC 27601',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'Downtown capital city location',
      color: '#E65100',
    },
    {
      name: 'Cary',
      zipcode: 'NC 27511',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'Serving vibrant Cary community',
      color: '#FF5722',
    },
    {
      name: 'Apex',
      zipcode: 'NC 27502',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'Growing Apex area programs',
      color: '#4CAF50',
    },
    {
      name: 'Morrisville',
      zipcode: 'NC 27560',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'Tech corridor location',
      color: '#2196F3',
    },
    {
      name: 'Wake Forest',
      zipcode: 'NC 27587',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'Northern Wake County hub',
      color: '#9C27B0',
    },
    {
      name: 'Chapel Hill',
      zipcode: 'NC 27514',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'University town programs',
      color: '#00BCD4',
    },
    {
      name: 'Hillsborough',
      zipcode: 'NC 27278',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3-8 PM, Weekends: 9-5 PM',
      description: 'Historic Orange County location',
      color: '#795548',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <PathForgeBackground page="locations" />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
        {/* Hero Section */}
        <Box sx={{
          textAlign: 'center',
          py: 6,
          mb: 4,
        }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: primaryColor,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.1,
            }}
          >
            Our Locations
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: theme.text,
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Serving 9 Triangle communities with in-school enrichment programs
          </Typography>

          {/* Quick Highlights */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            mb: 6,
          }}>
            {highlights.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  px: 3,
                  py: 1.5,
                  borderRadius: '25px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Avatar sx={{ 
                  backgroundColor: item.color, 
                  width: 36, 
                  height: 36 
                }}>
                  {item.icon}
                </Avatar>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Locations Grid */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 700,
              color: primaryColor,
            }}
          >
            Triangle Area Locations
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            maxWidth: '1200px',
            mx: 'auto',
          }}>
            {locations.map((location, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: '250px',
                  flex: '1 1 auto',
                  maxWidth: '280px',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: location.color,
                    color: 'white',
                    '& .MuiAvatar-root': {
                      backgroundColor: 'white',
                      color: location.color,
                    },
                    '& .location-info': {
                      color: 'rgba(255,255,255,0.9)',
                    },
                    '& .location-description': {
                      color: 'rgba(255,255,255,0.95)',
                    },
                  },
                }}
              >
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 3,
                  '&:last-child': { pb: 3 },
                }}>
                  <Avatar sx={{
                    backgroundColor: location.color,
                    width: 48,
                    height: 48,
                    transition: 'all 0.3s ease',
                  }}>
                    <LocationIcon sx={{ fontSize: 24 }} />
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 0.5,
                    }}
                  >
                    {location.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="location-description"
                    sx={{
                      textAlign: 'center',
                      opacity: 0.8,
                      mb: 1,
                      fontSize: '0.85rem',
                    }}
                  >
                    {location.description}
                  </Typography>
                  <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography
                      variant="body2"
                      className="location-info"
                      sx={{
                        opacity: 0.7,
                        fontSize: '0.75rem',
                        mb: 0.3,
                      }}
                    >
                      📍 {location.zipcode}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="location-info"
                      sx={{
                        opacity: 0.7,
                        fontSize: '0.75rem',
                        mb: 0.3,
                      }}
                    >
                      📞 {location.phone}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="location-info"
                      sx={{
                        opacity: 0.7,
                        fontSize: '0.75rem',
                      }}
                    >
                      🕒 {location.hours}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{
          textAlign: 'center',
          py: 4,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: primaryColor,
            }}
          >
            Find Your Local Program
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: theme.text,
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Contact us to bring PathForge Learning programs to your school
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LocationsPage;
