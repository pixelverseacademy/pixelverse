import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
  Directions as DirectionsIcon,
  LocalParking as ParkingIcon,
  Wifi as WifiIcon,
  Accessible as AccessibleIcon,
} from '@mui/icons-material';

const LocationsPage: React.FC = () => {
  const locations = [
    {
      name: 'Durham Location',
      address: '123 Main Street, Durham, NC 27701',
      phone: '(919) 446-4981',
      email: 'durham@pixelverseacademy.com',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our flagship location in the heart of Durham features state-of-the-art computer labs, robotics workshops, and 3D printing facilities.',
      amenities: [
        'Modern computer lab with 20 workstations',
        'Robotics workshop with LEGO and VEX kits',
        '3D printing lab with 5 printers',
        'VR/AR development space',
        'Collaborative learning areas',
        'Parent waiting lounge',
      ],
    },
    {
      name: 'Holly Springs Location',
      address: '456 Technology Drive, Holly Springs, NC 27540',
      phone: '(919) 446-4981',
      email: 'hollysprings@pixelverseacademy.com',
      hours: 'Mon-Fri: 3:00 PM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM',
      description: 'Our newest location offers the same high-quality education in a modern, spacious facility designed for optimal learning.',
      amenities: [
        'Spacious computer lab with 25 workstations',
        'Advanced robotics equipment',
        '3D modeling and printing studio',
        'Game development lab',
        'Quiet study areas',
        'Outdoor learning space',
      ],
    },
  ];

  const generalAmenities = [
    'Free parking available',
    'Wheelchair accessible facilities',
    'High-speed internet throughout',
    'Air conditioning and comfortable seating',
    'Security cameras and secure access',
    'Snack and beverage vending machines',
  ];

  return (
    <Box sx={{ backgroundColor: '#121212' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 50%, #ffa726 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cosmic background effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 138, 101, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 167, 38, 0.3) 0%, transparent 50%)
            `,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
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
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#121212' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
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
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>
                    {location.name}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationIcon sx={{ color: '#ff6b35', mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                        {location.address}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <PhoneIcon sx={{ color: '#ff6b35', mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                        {location.phone}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <EmailIcon sx={{ color: '#ff6b35', mr: 1, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                        {location.email}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <TimeIcon sx={{ color: '#ff6b35', mr: 1, fontSize: 20, mt: 0.5 }} />
                      <Typography variant="body2" sx={{ color: '#b0b0b0', whiteSpace: 'pre-line' }}>
                        {location.hours}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" sx={{ mb: 3, color: '#b0b0b0' }}>
                    {location.description}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff', mb: 2 }}>
                    Facility Features:
                  </Typography>
                  <List dense>
                    {location.amenities.map((amenity, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <LocationIcon sx={{ color: '#ff6b35', fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText primary={amenity} sx={{ color: '#b0b0b0' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Getting Here */}
      <Box sx={{ backgroundColor: '#1e1e1e', py: 8, borderTop: '1px solid #333333' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
            Getting Here
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  height: '100%',
                  maxWidth: '350px',
                  mx: 'auto',
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <ParkingIcon sx={{ fontSize: 50, color: '#ff6b35', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  Free Parking
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  Convenient free parking available at both locations for easy drop-off and pick-up.
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
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <AccessibleIcon sx={{ fontSize: 50, color: '#ff6b35', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  Accessible Facilities
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  Both locations are fully wheelchair accessible with ADA-compliant facilities.
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
                  backgroundColor: '#2e2e2e', 
                  border: '1px solid #333333',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <WifiIcon sx={{ fontSize: 50, color: '#ff6b35', mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                  High-Speed Internet
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                  Reliable high-speed internet throughout both facilities for seamless learning.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* General Amenities */}
      <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#121212' }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#ff6b35' }}>
          Additional Amenities
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          {generalAmenities.map((amenity, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={1} 
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  backgroundColor: '#1e1e1e', 
                  border: '1px solid #333333',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.2)',
                    border: '1px solid #ff6b35',
                  },
                }}
              >
                <Typography variant="body1" sx={{ color: '#b0b0b0' }}>
                  {amenity}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#1e1e1e', borderTop: '1px solid #333333' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#ffffff' }}>
            Visit Us Today
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#b0b0b0' }}>
            Schedule a tour of our facilities and see why students love learning at PixelVerse Learning Academy.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                backgroundColor: '#ff6b35',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <DirectionsIcon />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Get Directions
              </Typography>
            </Paper>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                backgroundColor: '#ffa726',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <PhoneIcon />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Call for Tour
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LocationsPage;
