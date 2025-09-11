import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import WhyUsPage from '../pages/WhyUsPage';
import CurriculumPage from '../pages/CurriculumPage';
import LocationsPage from '../pages/LocationsPage';
import PartnershipsPage from '../pages/PartnershipsPage';
import ContactPage from '../pages/ContactPage';
import CoachesPage from '../pages/CoachesPage';

// Create a cosmic orange and dark theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3498db', // Cosmic orange
      light: '#ff8a65',
      dark: '#e64a19',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2ecc71', // Amber orange
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#000000',
    },
    background: {
      default: '#f8f9ff', // Dark grey
      paper: '#ffffff', // Slightly lighter grey
    },
    text: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#2c3e50',
    },
    h2: {
      fontWeight: 700,
      color: '#2c3e50',
    },
    h3: {
      fontWeight: 600,
      color: '#2c3e50',
    },
    h4: {
      fontWeight: 600,
      color: '#2c3e50',
    },
    h5: {
      fontWeight: 600,
      color: '#2c3e50',
    },
    h6: {
      fontWeight: 600,
      color: '#2c3e50',
    },
    body1: {
      color: '#2c3e50',
    },
    body2: {
      color: '#b0b0b0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#1e1e1e',
          border: '1px solid #333333',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          borderBottom: '1px solid #333333',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          border: '1px solid #333333',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#3498db',
          color: '#2c3e50',
          '&.MuiChip-outlined': {
            backgroundColor: 'transparent',
            borderColor: '#3498db',
            color: '#3498db',
          },
        },
      },
    },
  },
});

// SEO Component for meta tags
const SEOHead: React.FC<{ title: string; description: string; keywords?: string }> = ({ 
  title, 
  description, 
  keywords = 'coding, robotics, programming, STEM education, kids coding, Durham, Holly Springs, North Carolina' 
}) => {
  React.useEffect(() => {
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
    
    // Add Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.property = 'og:title';
      meta.content = title;
      document.head.appendChild(meta);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.property = 'og:description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Add Twitter Card meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:title';
      meta.content = title;
      document.head.appendChild(meta);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);
  
  return null;
};

// Page components with SEO
const HomePageWithSEO = () => (
  <>
    <SEOHead 
      title="PixelVerse Learning Academy - Kids Coding & Robotics Classes in Durham & Holly Springs, NC"
      description="Leading technology education academy in Durham and Holly Springs, NC. Expert coding, robotics, AI, and STEM classes for kids ages 6-17. Free trial sessions available!"
      keywords="kids coding Durham, robotics classes Holly Springs, STEM education North Carolina, programming for kids, AI classes children, Minecraft coding, Python programming kids"
    />
    <HomePage />
  </>
);

const WhyUsPageWithSEO = () => (
  <>
    <SEOHead 
      title="Why Choose PixelVerse Learning Academy - Expert STEM Education in Durham, NC"
      description="Discover why PixelVerse Learning Academy is the top choice for technology education in Durham and Holly Springs. Expert instructors, project-based learning, and proven results."
      keywords="best coding school Durham, STEM education benefits, expert instructors, project-based learning, technology education advantages"
    />
    <WhyUsPage />
  </>
);

const CurriculumPageWithSEO = () => (
  <>
    <SEOHead 
      title="Comprehensive STEM Curriculum - Coding, Robotics & AI Classes for Kids"
      description="Explore our complete curriculum including Python programming, robotics, AI, Minecraft coding, 3D printing, and more. Ages 6-17. Durham & Holly Springs locations."
      keywords="coding curriculum kids, robotics classes curriculum, Python programming kids, AI classes children, Minecraft coding classes, 3D printing education"
    />
    <CurriculumPage />
  </>
);

const LocationsPageWithSEO = () => (
  <>
    <SEOHead 
      title="PixelVerse Learning Academy Locations - Durham & Holly Springs, NC"
      description="Visit our state-of-the-art facilities in Durham and Holly Springs, NC. Modern computer labs, robotics workshops, and 3D printing facilities. Free parking available."
      keywords="coding classes Durham NC, robotics classes Holly Springs, STEM education locations, computer lab Durham, technology education facilities"
    />
    <LocationsPage />
  </>
);


const PartnershipsPageWithSEO = () => (
  <>
    <SEOHead 
      title="School Partnerships - Bring Technology Education to Your School"
      description="Partner with PixelVerse Learning Academy to enhance your school's STEM offerings. After-school programs, summer camps, teacher training, and competition teams available."
      keywords="school partnerships STEM, after-school coding programs, teacher training technology, robotics competition teams, school technology education"
    />
    <PartnershipsPage />
  </>
);

const ContactPageWithSEO = () => (
  <>
    <SEOHead
      title="Contact PixelVerse Learning Academy - Durham & Holly Springs Technology Education"
      description="Get in touch with PixelVerse Learning Academy. Call (919) 446-4981 or email vinodht@pixelverseacademy.com. Free trial sessions available. Serving Durham and Holly Springs, NC."
      keywords="contact coding school Durham, technology education contact, free trial coding classes, Durham STEM education, Holly Springs robotics classes"
    />
    <ContactPage />
  </>
);

const CoachesPageWithSEO = () => (
  <>
    <SEOHead
      title="Meet Our Expert Instructors - PixelVerse Learning Academy"
      description="Learn from industry professionals and experienced educators at PixelVerse Learning Academy. Meet our expert coding, robotics, and STEM instructors in Durham and Holly Springs."
      keywords="coding instructors Durham, robotics teachers Holly Springs, STEM educators, expert technology teachers, coding coaches"
    />
    <CoachesPage />
  </>
);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePageWithSEO />} />
            <Route path="/why-us" element={<WhyUsPageWithSEO />} />
            <Route path="/curriculum" element={<CurriculumPageWithSEO />} />
            <Route path="/locations" element={<LocationsPageWithSEO />} />
            <Route path="/partnerships" element={<PartnershipsPageWithSEO />} />
            <Route path="/contact" element={<ContactPageWithSEO />} />
            <Route path="/coaches" element={<CoachesPageWithSEO />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
