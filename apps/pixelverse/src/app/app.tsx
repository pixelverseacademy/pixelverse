import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import WhyUsPage from '../pages/WhyUsPage';
import CurriculumPage from '../pages/CurriculumPage';
import LocationsPage from '../pages/LocationsPage';
import CareersPage from '../pages/CareersPage';
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
          // border: '1px solid #e0e6ed',
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

// SEO Component for meta tags and structured data
const SEOHead: React.FC<{
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: any;
}> = ({
  title,
  description,
  keywords = 'coding, robotics, programming, STEM education, kids coding, Durham, Holly Springs, North Carolina',
  canonicalUrl,
  structuredData
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

    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonicalUrl;
        document.head.appendChild(link);
      }
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl || window.location.href },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://pathforgelearning.com/public/logo.png' },
      { property: 'og:site_name', content: 'PathForge Learning' }
    ];

    ogTags.forEach(({ property, content }) => {
      const meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('property', property);
        newMeta.setAttribute('content', content);
        document.head.appendChild(newMeta);
      }
    });

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://pathforgelearning.com/public/logo.png' }
    ];

    twitterTags.forEach(({ name, content }) => {
      const meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = name;
        newMeta.content = content;
        document.head.appendChild(newMeta);
      }
    });

    // Add structured data
    if (structuredData) {
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        const newScript = document.createElement('script');
        newScript.type = 'application/ld+json';
        newScript.textContent = JSON.stringify(structuredData);
        document.head.appendChild(newScript);
      }
    }

  }, [title, description, keywords, canonicalUrl, structuredData]);

  return null;
};

// Structured data for the organization
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "PathForge Learning",
  "url": "https://pathforgelearning.com",
  "logo": "https://pathforgelearning.com/public/logo.png",
  "description": "Leading technology education academy serving the Triangle area including Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, and Chapel Hill, NC. Expert coding, robotics, AI, and STEM classes for kids ages 6-17.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NC",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-919-446-4981",
    "email": "info@pathforgelearning.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/people/PathForge-Learning/61581136042625/",
    "https://www.instagram.com/pathforgelearning/"
  ],
  "areaServed": [
    "Durham, NC",
    "Holly Springs, NC",
    "Raleigh, NC",
    "Cary, NC",
    "Apex, NC",
    "Morrisville, NC",
    "Wake Forest, NC",
    "Chapel Hill, NC"
  ]
};

// Website structured data
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PathForge Learning",
  "url": "https://pathforgelearning.com",
  "description": "Technology education academy for kids ages 6-17. Coding, robotics, AI, and STEM classes in the Triangle area.",
  "publisher": {
    "@type": "EducationalOrganization",
    "name": "PathForge Learning"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pathforgelearning.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Page components with SEO
const HomePageWithSEO = () => (
  <>
    <SEOHead
      title="PathForge Learning | Kids Coding & Robotics Classes | NC Triangle Area"
      description="Top-rated technology education academy in NC Triangle. Expert coding, robotics, AI & STEM classes for kids ages 6-17. Free trial sessions! Durham, Raleigh, Cary, Apex, Holly Springs."
      keywords="kids coding classes Triangle NC, robotics classes North Carolina, STEM education Raleigh Durham Cary, programming for kids, AI classes children, Minecraft coding, Python programming kids, technology education academy"
      canonicalUrl="https://pathforgelearning.com"
      structuredData={[organizationStructuredData, websiteStructuredData]}
    />
    <HomePage />
  </>
);

const WhyUsPageWithSEO = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pathforgelearning.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Why Choose Us",
        "item": "https://pathforgelearning.com/why-us"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Why Choose PathForge Learning | Best Kids Coding School NC Triangle"
        description="Discover why families choose PathForge Learning for technology education. Expert instructors, project-based learning, small class sizes, and proven results. Serving Durham, Raleigh, Cary & more."
        keywords="best coding school Durham NC, STEM education benefits, expert instructors, project-based learning, technology education advantages, kids coding academy"
        canonicalUrl="https://pathforgelearning.com/why-us"
        structuredData={breadcrumbStructuredData}
      />
      <WhyUsPage />
    </>
  );
};

const CurriculumPageWithSEO = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pathforgelearning.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Curriculum",
        "item": "https://pathforgelearning.com/curriculum"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="STEM Curriculum | Coding, Robotics & AI Classes for Kids | PathForge Learning"
        description="Complete STEM curriculum for kids ages 6-17. Python programming, robotics, AI, Minecraft coding, 3D printing, Scratch programming. Hands-on technology education in NC Triangle area."
        keywords="STEM curriculum kids, coding classes children, robotics education, Python programming kids, AI classes children, Minecraft coding classes, 3D printing education, technology curriculum"
        canonicalUrl="https://pathforgelearning.com/curriculum"
        structuredData={breadcrumbStructuredData}
      />
      <CurriculumPage />
    </>
  );
};

const LocationsPageWithSEO = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pathforgelearning.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://pathforgelearning.com/locations"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Locations | Kids Coding Classes NC Triangle Area | PathForge Learning"
        description="Find PathForge Learning locations in NC Triangle. Coding & robotics classes in Durham, Holly Springs, Raleigh, Cary, Apex, Morrisville, Wake Forest, Chapel Hill. Technology education at your school."
        keywords="coding classes Durham NC, robotics classes Holly Springs, STEM education locations, computer lab Durham, technology education facilities, kids coding Raleigh"
        canonicalUrl="https://pathforgelearning.com/locations"
        structuredData={breadcrumbStructuredData}
      />
      <LocationsPage />
    </>
  );
};

const PartnershipsPageWithSEO = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pathforgelearning.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Partnerships",
        "item": "https://pathforgelearning.com/partnerships"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="School Partnerships | Bring Coding Classes to Your School | PathForge Learning"
        description="Partner with PathForge Learning for school technology education. After-school coding programs, summer camps, teacher training, robotics competitions. STEM education for schools in NC Triangle."
        keywords="school partnerships STEM, after-school coding programs, teacher training technology, robotics competition teams, school technology education, coding classes schools"
        canonicalUrl="https://pathforgelearning.com/partnerships"
        structuredData={breadcrumbStructuredData}
      />
      <PartnershipsPage />
    </>
  );
};

const ContactPageWithSEO = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pathforgelearning.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://pathforgelearning.com/contact"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Kids Coding Classes NC Triangle | PathForge Learning"
        description="Contact PathForge Learning for kids coding & robotics classes. Call (919) 446-4981 or email info@pathforgelearning.com. Free trial sessions! Serving Durham, Raleigh, Cary & surrounding areas."
        keywords="contact coding school Triangle NC, technology education contact, free trial coding classes, Triangle STEM education, North Carolina robotics classes, kids coding contact"
        canonicalUrl="https://pathforgelearning.com/contact"
        structuredData={breadcrumbStructuredData}
      />
      <ContactPage />
    </>
  );
};

const CareersPageWithSEO = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pathforgelearning.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://pathforgelearning.com/careers"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Careers | Join Our Team | PathForge Learning"
        description="Join PathForge Learning as a Robotics or Programming Coach. Teach kids coding, robotics & STEM. $14-18/hr, flexible hours, great benefits. Apply now!"
        keywords="coding coach jobs, robotics coach jobs, STEM teacher jobs, kids coding instructor, technology education jobs, PathForge Learning careers"
        canonicalUrl="https://pathforgelearning.com/careers"
        structuredData={breadcrumbStructuredData}
      />
      <CareersPage />
    </>
  );
};

const CoachesPageWithSEO = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pathforgelearning.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Coaches",
        "item": "https://pathforgelearning.com/coaches"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Meet Our Coding Instructors | Expert STEM Teachers | PathForge Learning"
        description="Meet our expert coding instructors & STEM educators at PathForge Learning. Industry professionals teaching kids ages 6-17. Coding, robotics, AI classes in NC Triangle area."
        keywords="coding instructors Triangle NC, robotics teachers North Carolina, STEM educators, expert technology teachers, coding coaches, kids coding teachers"
        canonicalUrl="https://pathforgelearning.com/coaches"
        structuredData={breadcrumbStructuredData}
      />
      <CoachesPage />
    </>
  );
};

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
            <Route path="/careers" element={<CareersPageWithSEO />} />
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

