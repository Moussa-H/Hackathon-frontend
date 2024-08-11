import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, ThemeProvider, createTheme, Box, CardMedia, Accordion, AccordionSummary, AccordionDetails, TextField, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

  function FAQAndContact() {
    const faqs = [
        { question: "What does AppRicot do ?", answer: "AppRicot provides analytics tools for app developers." },
        { question: "How often is the data updated?", answer: "Data is updated every 24 hours." },
        { question: "Do I need technical skills to use AppRicot?", answer: "Basic technical skills are helpful but not required." },
        { question: "Can I customize the dashboard?", answer: "Yes, the dashboard is fully customizable." },
        { question: "How do I get started?", answer: "Sign up for an account and follow the onboarding process." },
        { question: "How accurate are the predictions?", answer: "Our predictions are highly accurate with precision metrics." },
        { question: "Can I compare my app with competitors?", answer: "Yes, our tools allow for competitive analysis." },
        { question: "Is my data secure?", answer: "We ensure top-level security protocols to protect your data." }
    ];
    return (
        <Container minWidth="md" sx={{ mt: 20}}>
            <Typography variant="h4" sx={{ mb: 5, fontSize: 32, textAlign: 'center'}}>Frequently Asked Questions</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {faqs.map((faq, index) => (
                    <Accordion key={index} sx={{ width: '48%', mb: 3, backgroundColor: '#ffffff', boxShadow: 'none', border: '1px solid #605BFF', borderRadius: '20px', 
                    '&:before': { display: 'none' } }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 56 }}>
                            <Typography sx={{ fontWeight: 'medium', fontSize: 16 }}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        </Container>
      );
    }
    
function ContactUs() {
    return (
        <Container width="xl" sx={{mt: 18, mb: 8,bgcolor: '#E0E0FF', p: 10, boxShadow: 1}}>
            <Container sx={{bgcolor:'#9A97FF', display: 'flex', flexDirection: 'row', alignItems: 'center', borderRadius: '20px', p: 4, padding: '20px', width: '90%'}}>
            <Box sx={{ textAlign: 'center', mb: 6, marginLeft: '100px'}}>
            <Typography sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', width: '90%', fontSize: 32}}>Contact Us</Typography>
            <Typography>Have a question about how our tools work? <br></br>Do you perhaps have some feedback <br></br> you’d like us to know?
            </Typography>
            </Box>
            <Box component="form" sx={{width: 600, display: 'flex', flexDirection: 'column', gap: 1, marginLeft: '180px', padding: '20px'}}>
                <TextField fullWidth label="First Name" variant="outlined" sx={{ mb: 2 }} InputLabelProps={{ shrink: true, style: {margin: '-10px', fontWeight: 'bold'}}} placeholder="John" 
                InputProps={{ style: { backgroundColor: 'white', backgroundImage: 'url("/User.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 400px center',
                    padding: '0px 0px 4px 18px'}}}/>
                <TextField fullWidth  label="Last Name" variant="outlined" sx={{ mb: 2 }} InputLabelProps={{ shrink: true, style: {margin: '-10px', fontWeight: 'bold'} }} placeholder="Doe" 
                InputProps={{ style: { backgroundColor: 'white', backgroundImage: 'url("/User.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 400px center',
                    padding: '0px 0px 4px 18px' }}}/>
                <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} InputLabelProps={{ shrink: true, style: {margin: '-10px', fontWeight: 'bold'} }} placeholder="john@email.com" 
                InputProps={{ style: { backgroundColor: 'white', backgroundImage: 'url("/email.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 400px center',
                    padding: '0px 0px 4px 18px' }}}/>
                <TextField fullWidth label="Message" multiline rows={4} variant="outlined" sx={{ mb: 2 }} InputLabelProps={{ shrink: true, style: {margin: '-10px', fontWeight: 'bold'} }} 
                placeholder="type your message here ...." InputProps={{ style: { backgroundColor: 'white', fontSize: '13px', fontStyle: 'italic', backgroundImage: 'url("/message.png")', 
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 400px top 23px',padding: '20px 20px 20px 32px' }}}/>
                <Button variant="contained" theme={theme} color= 'backgroundColor' sx={{ mt: 1, borderRadius: '10px',  height: 40, width: 240, 
                    textTransform: 'none', alignSelf: 'center'}}>Send</Button>
            </Box>
            </Container>
        </Container>
    );
}


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
            width: '50%', borderRadius: '13px', height: '50px', fontSize: '16px','&:hover': { backgroundColor: '#9A97FF'} }}>Buy Now</Button>
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
        <p>Pricing</p>
        <div className="pricing-section">
        {pricingPlans.map(plan => <PricingCard key={plan.id} plan={plan} isActive={plan.id === activeCard}
         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>)}
        </div>
        <div>
            <FAQAndContact />
        </div>
        <div>
            <ContactUs />
        </div>
    </ThemeProvider>
  );
}

export default Landing;