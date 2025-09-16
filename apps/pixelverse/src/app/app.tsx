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
      color: '#7f8c8d',
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
          backgroundColor: '#f8f9ff',
          border: '1px solid #e0e6ed',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f9ff',
          borderBottom: '1px solid #333333',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f9ff',
          border: '1px solid #e0e6ed',
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
      title="PathForge Learning - Kids Coding PathForge Learning - Kids Coding & Robotics Classes in Durham & Holly Springs, NC Robotics Classes in NC Triangle Area"
      description="Leading technology education academy serving the Triangle area including Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, and Chapel Hill, NC. Expert coding, robotics, AI, and STEM classes for kids ages 6-17. Free trial sessions available!"
      keywords="kids coding Triangle NC, robotics classes North Carolina, STEM education Raleigh Durham Cary, programming for kids, AI classes children, Minecraft coding, Python programming kids"
    />
    <HomePage />
  </>
);

const WhyUsPageWithSEO = () => (
  <>
    <SEOHead
      title="Why Choose PathForge Learning - Expert STEM Education in NC Triangle Area"
      description="Discover why PathForge Learning is the top choice for technology education throughout the Triangle area including Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, and Chapel Hill. Expert instructors, project-based learning, and proven results."
      keywords="best coding school Durham, STEM education benefits, expert instructors, project-based learning, technology education advantages"
    />
    <WhyUsPage />
  </>
);

const CurriculumPageWithSEO = () => (
  <>
    <SEOHead 
      title="Comprehensive STEM Curriculum - Coding, Robotics & AI Classes for Kids"
      description="Explore our complete curriculum including Python programming, robotics, AI, Minecraft coding, 3D printing, and more. Ages 6-17. Serving schools throughout the Triangle area including Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, and Chapel Hill."
      keywords="coding curriculum kids, robotics classes curriculum, Python programming kids, AI classes children, Minecraft coding classes, 3D printing education"
    />
    <CurriculumPage />
  </>
);

const LocationsPageWithSEO = () => (
  <>
    <SEOHead
      title="PathForge Learning Locations - NC Triangle Area"
      description="Expert technology education instructors serving schools throughout the Triangle area including Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, and Chapel Hill, NC. We bring cutting-edge coding, robotics, and STEM education directly to your school."
      keywords="coding classes Durham NC, robotics classes Holly Springs, STEM education locations, computer lab Durham, technology education facilities"
    />
    <LocationsPage />
  </>
);


const PartnershipsPageWithSEO = () => (
  <>
    <SEOHead
      title="School Partnerships - Bring Technology Education to Your School"
      description="Partner with PathForge Learning to enhance your school's STEM offerings. After-school programs, summer camps, teacher training, and competition teams available."
      keywords="school partnerships STEM, after-school coding programs, teacher training technology, robotics competition teams, school technology education"
    />
    <PartnershipsPage />
  </>
);

const ContactPageWithSEO = () => (
  <>
    <SEOHead
      title="Contact PathForge Learning - Triangle Area Technology Education"
      description="Get in touch with PathForge Learning. Call (919) 446-4981 or email info@pathforgelearning.com. Free trial sessions available. Serving schools throughout the Triangle area including Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, and Chapel Hill, NC."
      keywords="contact coding school Triangle NC, technology education contact, free trial coding classes, Triangle STEM education, North Carolina robotics classes"
    />
    <ContactPage />
  </>
);

const CoachesPageWithSEO = () => (
  <>
    <SEOHead
      title="Meet Our Expert Instructors - PathForge Learning"
      description="Learn from industry professionals and experienced educators at PathForge Learning. Meet our expert coding, robotics, and STEM instructors serving schools throughout the Triangle area including Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, and Chapel Hill."
      keywords="coding instructors Triangle NC, robotics teachers North Carolina, STEM educators, expert technology teachers, coding coaches"
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

