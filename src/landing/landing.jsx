import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, ThemeProvider, createTheme, Box, CardMedia} from '@mui/material';
import './landing.css';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const pricingPlans = [
  { id: 1, name: 'Basic', price: '32', features: [
    { name: 'Validation', image: '/check.png' },
    { name: 'Overview', image: '/check.png' },
    { name: 'Trends', image: '/check.png' }] },

  { id: 2, name: 'Premium', price: '70', features: [
    { name: 'Prediction', image: '/transparent.jpg' },
    { name: 'Analysis', image: '/transparent.jpg' },
    { name: 'Insights', image: '/transparent.jpg' },
    { name: 'Tracking', image: '/transparent.jpg' }] },

  { id: 3, name: 'Gold', price: '120', features: [ 
    { name: 'Support', image: '/check.png' },
    { name: 'Monitoring', image: '/check.png' },
    { name: 'Strategy', image: '/check.png' }] }
];

const landingPageTheme = createTheme({
    typography: {
      fontFamily: 'poppins',
    }
});

const theme = createTheme({
    palette: {
      backgroundColor: createColor('#605BFF'),
    },
  });

function PricingCard({ plan, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <Card className="pricing-card" sx={{ minWidth: 390, minHeight: 574, textAlign: 'center', borderRadius: '10px', padding: '5px', gap: '5px', 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',marginLeft: '5px', marginTop: '30px', 
        transform: isActive ? 'scale(1.15)' : 'scale(1)', zIndex: isActive ? 1 : 0}}
    onMouseEnter={() => onMouseEnter(plan.id)}
    onMouseLeave={onMouseLeave}>
        
        {plan.name === "Premium" && (
        <CardMedia
          component="img"
          sx={{ width: 50, height: 50, marginLeft: 38 }} 
          image="/premium.png" 
        />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}></Box>
      <CardContent>
        <Typography variant="h5" component="div" color="#605BFF" fontWeight={550} fontSize={36} padding={2.5}>{plan.name}</Typography>
        <Typography variant="h6" color="black" fontWeight='bold' fontSize={28}>${plan.price}/month</Typography>
        <ul style={{ padding: 0 }}>
          {plan.features.map((feature, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                 {feature.image && (
                    <CardMedia
                    component="img"
                    sx={{ width: 20, height: 20, marginLeft: 13, marginTop: 1.5 }}  
                    image={feature.image}
                    />
              )}
                <Typography variant="body2" fontSize={18} marginTop={1}>{feature.name}</Typography></li>
          ))}
        </ul>
        <Button theme={theme} color = 'backgroundColor' variant="contained" sx={{ textTransform: 'none', marginTop: '30px', 
            width: '50%', borderRadius: '13px', height: '50px', fontSize: '16px','&:hover': {
      backgroundColor: '#fff',
      color: '#605BFF',//'#3c52b2',
  } }}>Buy Now</Button>
      </CardContent>
    </Card>
  );
}

function Landing() {
 const [activeCard, setActiveCard] = useState(2);  

  const handleMouseEnter = (id) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(2); 
  };
  return (
    <ThemeProvider theme={landingPageTheme}>
        <h1>Pricing</h1>
        <div className="pricing-section">
        {pricingPlans.map(plan => <PricingCard key={plan.id} plan={plan} isActive={plan.id === activeCard}
         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>)}
        </div>
    </ThemeProvider>
  );
}

export default Landing;