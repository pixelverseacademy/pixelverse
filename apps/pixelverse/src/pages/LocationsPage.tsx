import React from 'react';
import PathForgeBackground from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Schedule as TimeIcon,
} from '@mui/icons-material';
const LocationsPage: React.FC = () => {
  const locations = [
    {
      name: 'Durham Location',
      city: 'Durham',
      zipcode: 'NC 27701',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our flagship location in the heart of Durham features state-of-the-art computer labs, robotics workshops, and 3D printing facilities.',
    },
    {
      name: 'Holly Springs Location',
      city: 'Holly Springs',
      zipcode: 'NC 27540',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our newest location offers the same high-quality education in a modern, spacious facility designed for optimal learning.',
    },
    {
      name: 'Raleigh Location',
      city: 'Raleigh',
      zipcode: 'NC 27601',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Located in downtown Raleigh, our facility provides easy access for families in the capital city with modern classrooms and advanced technology.',
    },
    {
      name: 'Cary Location',
      city: 'Cary',
      zipcode: 'NC 27511',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our Cary location serves the vibrant Cary community with interactive learning spaces and dedicated robotics labs.',
    },
    {
      name: 'Apex Location',
      city: 'Apex',
      zipcode: 'NC 27502',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Conveniently located in Apex, our center offers a welcoming environment for young innovators with cutting-edge educational tools.',
    },
    {
      name: 'Morrisville Location',
      city: 'Morrisville',
      zipcode: 'NC 27560',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Serving the Morrisville area with state-of-the-art facilities, perfect for families seeking quality STEM education close to home.',
    },
    {
      name: 'Wake Forest Location',
      city: 'Wake Forest',
      zipcode: 'NC 27587',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our Wake Forest location provides comprehensive technology education in a community-focused setting with modern amenities.',
    },
    {
      name: 'Chapel Hill Location',
      city: 'Chapel Hill',
      zipcode: 'NC 27514',
      phone: '(919) 446-4981',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Located in the heart of Chapel Hill, our facility combines academic excellence with innovative technology education for young minds.',
    },
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
        <PathForgeBackground page="locations" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Our Locations
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            State-of-the-Art Facilities
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            Visit our modern facilities in Durham and Holly Springs, NC. Each location is 
            equipped with cutting-edge technology and designed to inspire creativity and learning.
          </Typography>
        </Container>
      </Box>
      {/* Locations */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#3498db' }}>
          Our Facilities
        </Typography>
        
        <Grid container spacing={6} justifyContent="center" alignItems="stretch">
          {locations.map((location, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card 
                elevation={2} 
                sx={{ 
                  height: '100%', 
                  maxWidth: '500px',
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
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>
                    {location.name}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationIcon sx={{ color: '#3498db', mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                        {location.city}, {location.zipcode}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <PhoneIcon sx={{ color: '#3498db', mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                        {location.phone}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <TimeIcon sx={{ color: '#3498db', mr: 1, fontSize: 20, mt: 0.5 }} />
                      <Typography variant="body2" sx={{ color: '#7f8c8d', whiteSpace: 'pre-line' }}>
                        {location.hours}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" sx={{ mb: 3, color: '#7f8c8d' }}>
                    {location.description}
                  </Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default LocationsPage;
