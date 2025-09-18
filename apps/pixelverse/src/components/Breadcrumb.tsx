import React from 'react';
import { Box, Typography, Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  customItems?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, customItems }) => {
  const location = useLocation();

  // Default breadcrumb items based on current path
  const getDefaultItems = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ];

    if (pathSegments.length > 0) {
      const currentPath = pathSegments[0];
      switch (currentPath) {
        case 'why-us':
          breadcrumbs.push({ label: 'Why Choose Us', path: '/why-us' });
          break;
        case 'curriculum':
          breadcrumbs.push({ label: 'Curriculum', path: '/curriculum' });
          break;
        case 'programs':
          if (pathSegments.length > 1) {
            const programPath = pathSegments[1];
            switch (programPath) {
              case 'stem-technology':
                breadcrumbs.push({ label: 'STEM & Technology', path: '/programs/stem-technology' });
                break;
              case 'creative-arts-design':
                breadcrumbs.push({ label: 'Creative Arts & Design', path: '/programs/creative-arts-design' });
                break;
              case 'life-skills-career-prep':
                breadcrumbs.push({ label: 'Life Skills & Career Prep', path: '/programs/life-skills-career-prep' });
                break;
              case 'test-prep-academic-enrichment':
                breadcrumbs.push({ label: 'Test Prep & Academic Enrichment', path: '/programs/test-prep-academic-enrichment' });
                break;
              case 'health-sports-wellness':
                breadcrumbs.push({ label: 'Health, Sports & Wellness', path: '/programs/health-sports-wellness' });
                break;
              default:
                break;
            }
          }
          break;
        case 'locations':
          breadcrumbs.push({ label: 'Locations', path: '/locations' });
          break;
        case 'partnerships':
          breadcrumbs.push({ label: 'Partnerships', path: '/partnerships' });
          break;
        case 'contact':
          breadcrumbs.push({ label: 'Contact', path: '/contact' });
          break;
        case 'coaches':
          breadcrumbs.push({ label: 'Coaches', path: '/coaches' });
          break;
        case 'careers':
          breadcrumbs.push({ label: 'Careers', path: '/careers' });
          break;
        default:
          break;
      }
    }

    return breadcrumbs;
  };

  const breadcrumbItems = customItems || items || getDefaultItems();

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <Box sx={{ py: 2, px: 2, backgroundColor: '#f8f9ff' }}>
      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ '& .MuiBreadcrumbs-ol': { alignItems: 'center' } }}
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return isLast ? (
            <Typography
              key={item.path}
              color="text.primary"
              sx={{
                fontWeight: 'bold',
                color: '#3498db'
              }}
            >
              {item.label}
            </Typography>
          ) : (
            <Link
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={{
                color: '#7f8c8d',
                textDecoration: 'none',
                '&:hover': {
                  color: '#3498db',
                  textDecoration: 'underline'
                }
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumb;