import React from 'react';
import PathForgeBackground, { getThemeColors } from '../components/PathForgeBackground';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  FitnessCenter as FitnessIcon,
  SelfImprovement as YogaIcon,
  Restaurant as NutritionIcon,
} from '@mui/icons-material';

const HealthSportsWellnessPage: React.FC = () => {
  const theme = getThemeColors('curriculum');
  const programs = [
    {
      title: 'Physical Fitness & Sports Camps',
      description: 'Develop physical fitness, sports skills, and teamwork through engaging camps and activities. Build strength, coordination, and healthy habits.',
      icon: <FitnessIcon sx={{ fontSize: 40, color: '#FF5722' }} />,
      highlights: [
        'Physical Fitness Training',
        'Sports Skills Development',
        'Team Sports Activities',
        'Health & Wellness Education',
        'Outdoor Activities',
      ],
    },
    {
      title: 'Yoga & Mindfulness',
      description: 'Learn yoga poses, breathing techniques, and mindfulness practices. Develop mental clarity, stress management, and physical flexibility.',
      icon: <YogaIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      highlights: [
        'Yoga Poses & Sequences',
        'Breathing Techniques',
        'Mindfulness Meditation',
        'Stress Management',
        'Mental Health Awareness',
      ],
    },
    {
      title: 'Nutrition & Wellness Programs',
      description: 'Understand healthy eating, nutrition science, and wellness principles. Learn to make informed choices for lifelong health.',
      icon: <NutritionIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      highlights: [
        'Nutrition Education',
        'Healthy Eating Habits',
        'Meal Planning',
        'Wellness Principles',
        'Body Image & Self-Care',
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
        py: 12,
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <PathForgeBackground page="curriculum" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.text, mb: 4, position: 'relative', zIndex: 3 }}>
            Health, Sports & Wellness Programs
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, color: theme.secondaryText, position: 'relative', zIndex: 3 }}>
            Nurturing body and mind through physical activity, wellness, and healthy living
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 3 }}>
            <Chip
              label="Ages 6-17"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="3 Programs"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#2196f3', color: 'white', fontWeight: 'bold' }}
            />
            <Chip
              label="Holistic Wellness"
              sx={{ px: 3, py: 1, fontSize: '1rem', backgroundColor: '#ff9800', color: 'white', fontWeight: 'bold' }}
            />
          </Box>
        </Container>
      </Box>

      {/* Programs */}
      <Box sx={{ py: 8, backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: '#FF5722' }}>
            Our Health, Sports & Wellness Programs
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    maxWidth: '500px',
                    mx: 'auto',
                    height: '100%',
                    backgroundColor: '#f8f9ff',
                    border: '1px solid #e0e6ed',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(255, 87, 34, 0.3)',
                      border: '1px solid #FF5722',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {program.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#7f8c8d', textAlign: 'center', mb: 3 }}>
                      {program.description}
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="subtitle2" sx={{ color: '#FF5722', fontWeight: 'bold', mb: 2 }}>
                        Program Highlights:
                      </Typography>
                      {program.highlights.map((highlight, highlightIndex) => (
                        <Typography key={highlightIndex} variant="body2" sx={{ color: '#7f8c8d', mb: 1 }}>
                          • {highlight}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f0f8ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Ready for Wellness?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: '#7f8c8d' }}>
            Join us in building healthy habits for life.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HealthSportsWellnessPage;