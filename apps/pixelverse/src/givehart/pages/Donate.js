import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Paper,
  Stack,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  Favorite as HeartIcon,
  AttachMoney as MoneyIcon,
  CreditCard as CardIcon,
  AccountBalance as BankIcon,
  Receipt as ReceiptIcon,
  Security as SecurityIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

const donationAmounts = [25, 50, 100, 250, 500, 1000];
const otherWaysToGive = [
  {
    title: "Monthly Giving",
    description: "Set up recurring monthly donations for sustained impact",
    icon: <ReceiptIcon color="primary" />
  },
  {
    title: "Corporate Matching",
    description: "Many employers match charitable donations",
    icon: <BankIcon color="secondary" />
  },
  {
    title: "Planned Giving",
    description: "Include GiveHart in your estate planning",
    icon: <HeartIcon color="success" />
  }
];

const transparencyPoints = [
  "Annual financial reports available",
  "90% of donations go directly to programs",
  "Board of directors oversight",
  "Regular program impact assessments"
];

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setDonationAmount(parseFloat(value) || 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation:', { amount: donationAmount, method: paymentMethod });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
        Support Our Mission
      </Typography>
      
      <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary', textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
        Your donation helps us provide tech education to underserved communities. Every dollar counts and makes a difference!
      </Typography>

      <Box sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        maxWidth: '1000px',
        mx: 'auto',
        alignItems: 'stretch',
        justifyContent: 'center'
      }}>
        {/* Donation Form */}
        <Box sx={{ flex: 2, display: 'flex' }}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
              <HeartIcon color="primary" sx={{ fontSize: 32 }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                Make a Donation
              </Typography>
            </Stack>
            
            <Box component="form" onSubmit={handleSubmit}>
              <FormControl component="fieldset" sx={{ mb: 4 }}>
                <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                  Donation Amount
                </FormLabel>
                
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {donationAmounts.map((amount) => (
                    <Grid item xs={6} sm={4} key={amount}>
                      <Button
                        variant={donationAmount === amount ? "contained" : "outlined"}
                        color="primary"
                        fullWidth
                        onClick={() => handleAmountChange(amount)}
                        sx={{ py: 1.5, fontWeight: 600 }}
                      >
                        ${amount}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                
                <TextField
                  fullWidth
                  label="Custom Amount"
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  InputProps={{
                    startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>
                  }}
                  sx={{ mb: 3 }}
                />
              </FormControl>

              <FormControl component="fieldset" sx={{ mb: 4 }}>
                <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
                  Payment Method
                </FormLabel>
                <RadioGroup
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel 
                    value="card" 
                    control={<Radio />} 
                    label={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CardIcon />
                        <Typography>Credit/Debit Card</Typography>
                      </Stack>
                    } 
                  />
                  <FormControlLabel 
                    value="bank" 
                    control={<Radio />} 
                    label={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <BankIcon />
                        <Typography>Bank Transfer</Typography>
                      </Stack>
                    } 
                  />
                </RadioGroup>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                endIcon={<SecurityIcon />}
                sx={{ 
                  fontWeight: 600,
                  py: 2,
                  fontSize: '1.1rem'
                }}
              >
                Donate Securely
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* Sidebar */}
        <Box sx={{ flex: 1, display: 'flex' }}>
          <Stack spacing={3}>
            {/* Other Ways to Give */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                Other Ways to Give
              </Typography>
              
              <List>
                {otherWaysToGive.map((way, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      {way.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={way.title}
                      secondary={way.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Transparency */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <SecurityIcon color="primary" sx={{ fontSize: 24 }} />
                <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                  Transparency
                </Typography>
              </Stack>
              
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                We are committed to transparency and accountability.
              </Typography>
              
              <List dense>
                {transparencyPoints.map((point, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckIcon color="success" sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={point}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Impact Statement */}
            <Paper elevation={2} sx={{ p: 3, backgroundColor: 'primary.50' }}>
              <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                Your Impact
              </Typography>
              
              <Stack spacing={2}>
                <Box>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    $50
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Provides coding materials for one student
                  </Typography>
                </Box>
                
                <Divider />
                
                <Box>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    $250
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sponsors a student for a full program
                  </Typography>
                </Box>
                
                <Divider />
                
                <Box>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    $1000
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Funds a complete robotics kit for the lab
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
