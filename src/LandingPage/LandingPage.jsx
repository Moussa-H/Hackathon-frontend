import React, { useState } from 'react';
import React, { useState } from 'react';
import NavBar from '../component/Navbar/NavBar'; 
import './LandingPage.css';
import hero from '../Images/hero-logo.png';
import missionImage from '../Images/mission-image.png';
import featureImage1 from '../Images/feature1.png';
import featureImage2 from '../Images/feature2.png';
import featureImage3 from '../Images/feature3.png';
import trustedLogo1 from '../Images/logo-item1.png'; 
import trustedLogo2 from '../Images/logo-item2.png';
import trustedLogo3 from '../Images/logo-item3.png';
import trustedLogo4 from '../Images/logo-item4.png';
import trustedLogo5 from '../Images/logo-item5.png';
import trustedLogo6 from '../Images/logo-item6.png';
import trustedLogo7 from '../Images/logo-item7.png';
import trustedLogo8 from '../Images/logo-item8.png';
import trustedLogo9 from '../Images/logo-item9.png';
import trustedLogo10 from '../Images/logo-item10.png';
import trustedLogo11 from '../Images/logo-item11.png';
import trustedLogo12 from '../Images/logo-item12.png';
import trustedLogo13 from '../Images/logo-item13.png';
import trustedLogo14 from '../Images/logo-item14.png';
import trustedLogo15 from '../Images/logo-item15.png';
import MuiAlert from '@mui/material/Alert';
import { Card, CardContent, Typography, Button, ThemeProvider, createTheme, Box, CardMedia, Accordion, AccordionSummary, AccordionDetails, 
    TextField, Container, Link, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
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
          <Container width="md" sx={{ mt: 20}}>
              <Typography variant="h4" sx={{ mb: 5, fontSize: 32, textAlign: 'center'}}>Frequently Asked Questions</Typography>
                  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {faqs.map((faq, index) => (
                      <Accordion key={index} sx={{ width: '48%', mb: 3, backgroundColor: '#ffffff', boxShadow: 'none', border: '1px solid #605BFF', borderRadius: '20px', 
                      '&:before': { display: 'none' } }}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 56 }}>
                              <Typography sx={{ fontWeight: 'medium', fontSize: 16 }}>{faq.question}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography sx={{textAlign: 'left'}}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          </Container>
        );
      }
      
  const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  function ContactUs() {
      const [formData, setFormData] = useState({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        const [openSnackbar, setOpenSnackbar] = useState(false);
      
        const handleChange = (event) => {
          const { name, value } = event.target;
          console.log(name, value);
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        };
      
        const handleSubmit = () => {
          if (!formData.firstName == '' || !formData.lastName == '' || !formData.email == '' || !formData.message == '' && formData.email.includes('@')) {
              console.log(formData);
              setOpenSnackbar(true);
              setFormData({
              firstName: '',
              lastName: '',
              email: '',
              message: ''
              });
          };
        };
      
        const handleCloseSnackbar =(reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setOpenSnackbar(false);
        };
      return (
          <Container id="contact-us" width="xl" sx={{mt: 18, mb: 8}}>
              <Container sx={{bgcolor:'#9A97FF', display: 'flex', flexDirection: 'row', alignItems: 'center', borderRadius: '20px', p: 4, padding: '20px', width: '90%'}}>
              <Box sx={{ textAlign: 'center', mb: 6, marginLeft: '100px'}}>
              <Typography sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center', width: '90%', fontSize: 32}}>Contact Us</Typography>
              <Typography>Have a question about how our tools work? <br></br>Do you perhaps have some feedback <br></br> you’d like us to know?
              </Typography>
              </Box>
              <Box component="form" sx={{width: 600, display: 'flex', flexDirection: 'column', gap: 1, marginLeft: '180px', padding: '20px'}}>
                  <TextField fullWidth label="First Name" name='firstName' sx={{ mb: 2 }} InputLabelProps={{ shrink: true, style: {margin: '-10px', fontWeight: 'bold'}}} placeholder="John" 
                  InputProps={{ style: { backgroundColor: 'white', backgroundImage: 'url("/User.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 400px center',
                      padding: '0px 0px 4px 18px'}}} value={formData.firstName} onChange={handleChange}/>
                  <TextField fullWidth  label="Last Name" name ='lastName' variant="outlined" sx={{ mb: 2 }} InputLabelProps={{ shrink: true, style: {margin: '-10px', fontWeight: 'bold'} }} placeholder="Doe" 
                  InputProps={{ style: { backgroundColor: 'white', backgroundImage: 'url("/User.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 400px center',
                      padding: '0px 0px 4px 18px' }}} value={formData.lastName} onChange={handleChange}/>
                  <TextField fullWidth label="Email" name='email' sx={{ mb: 2 }} InputLabelProps={{ shrink: true, style: {margin: '-10px', fontWeight: 'bold'} }} placeholder="john@email.com" 
                  InputProps={{ style: { backgroundColor: 'white', backgroundImage: 'url("/email.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 400px center',
                      padding: '0px 0px 4px 18px' }}} value={formData.email} onChange={handleChange}/>
                  <TextField fullWidth label="Message" multiline rows={4} name='message' sx={{ mb: 2 }} InputLabelProps={{ shrink: true, style: {margin: '-10px', fontWeight: 'bold'} }} 
                  placeholder="type your message here ...." InputProps={{ style: { backgroundColor: 'white', fontSize: '13px', fontStyle: 'italic', backgroundImage: 'url("/message.png")', 
                      backgroundRepeat: 'no-repeat', backgroundPosition: 'right 400px top 23px',padding: '20px 20px 20px 32px' }}} value={formData.message} onChange={handleChange}/>
                  <Button variant="contained" theme={theme} color= 'backgroundColor' sx={{ mt: 1, borderRadius: '10px',  height: 40, width: 240, 
                      textTransform: 'none', alignSelf: 'center'}} onClick={() => handleSubmit()}>Send</Button>
                  <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
                  <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>Message delivered successfully!</Alert>
                  </Snackbar>
              </Box>
              </Container>
          </Container>
      );
  }
  
  
  function PricingCard({ plan, isActive, onMouseEnter, onMouseLeave }) {
    return (
      <Card id="pricing-section" className="pricing-card" sx={{ width: 390, minHeight: 574, textAlign: 'center', borderRadius: '10px', padding: '5px', gap: '5px', 
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
  
  function Footer() {
      const navigate=useNavigate();
      return (
          <Box sx={{ width: '100%', padding: '20px 0', marginTop: '100px' }}>
              <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', gap: '70px', marginBottom: '50px' }}>
                  <Box>
                      <Link href="#" sx={{ marginRight: 20, color: 'grey', textDecoration: 'none' }}>About Us</Link>
                      <Link href="#pricing-section" sx={{ marginRight: 20, color: 'grey', textDecoration: 'none' }}>Pricing</Link>
                      <Button  sx={{ textTransform: 'none', color: 'grey', font:'poppins', fontSize: '17px', marginRight: 20}} onClick={() => navigate('/login')}>Login</Button>
                      <Link href="#" sx={{ marginRight: 20, color: 'grey', textDecoration: 'none' }}>Features</Link>
                      <Link href="#contact-us" sx={{ color: 'grey', textDecoration: 'none'}}>Contact Us</Link>
                  </Box>
                  <Container sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
                  <Box sx={{ textAlign: 'center' }}>
                      <img src="/logo.png" style={{ width: 200,height: 170 }} />
                  </Box>
                  
                  <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: 26, marginBottom: 3 }}>Connect with us</Typography>
                      <Box>
                          <Link href="https://youtube.com"><img src="/youtube.png" style={{ width: 43, marginRight: 20 }} /></Link>
                          <Link href="https://instagram.com"><img src="/instagram.png" style={{ width: 39, marginRight: 20 }} /></Link>
                          <Link href="https://facebook.com"><img src="/facebook.png"style={{ width: 39, marginRight: 20 }} /></Link>
                          <Link href="https://linkedin.com"><img src="/linkedin.png" style={{ width: 39 }} /></Link>
                      </Box>
                      <Typography variant="body2" sx={{ marginTop: 3, fontSize:10, fontWeight: 'bold' }}>&copy; 2024 App Ricot system - All Rights Reserved</Typography>
                  </Box>
                  </Container>
              </Container>
          </Box>
      );
  }
function LandingPage() {
    const logos = [
        trustedLogo1, trustedLogo2, trustedLogo3, trustedLogo4,
        trustedLogo5, trustedLogo6, trustedLogo7, trustedLogo8,
        trustedLogo9, trustedLogo10, trustedLogo11, trustedLogo12,
        trustedLogo13, trustedLogo14, trustedLogo15, 
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };
    const [activeCard, setActiveCard] = useState(2);  

  const handleMouseEnter = (id) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(2); 
  };
    
    return (
        <div className="landing-page-container">
            <NavBar />
            <div className="hero-section">
                <div className="hero-logo">
                    <img src={hero} alt="App Ricot Logo" />
                </div>
                <div className="app-ricot">
                    App Ric<span className="special-o">o</span>t
                </div>
                <div className="hero-content">
                    <p>
                        At App Ricot, we help startups and developers turn their app ideas into 
                        successful, market-ready products by offering AI-driven insights and 
                        comprehensive tools for validation and competitive analysis.
                    </p>
                </div>
            </div>
            <section className="mission">
                <div className="mission-text">
                    <h2>Our Mission</h2>
                    <p>
                        Our goal is to empower startups and developers by providing them with the tools
                        and insights they need to bring innovative app ideas to life, ensuring success in a
                        competitive market.
                    </p>
                </div>
                <img src={missionImage} alt="Mission Visual" className="mission-image" />
            </section>
            <section id="features" className="features">
                <h2>Features</h2>
                <div className="feature-item">
                    <div>
                        <h3>AI-Powered Website Idea Validation</h3>
                        <p>This feature allows users to receive instant, data-backed feedback on their ideas without needing to spend days or weeks on manual research.</p>
                    </div>
                    <img src={featureImage1} alt="AI-Powered Website Idea Validation" className="feature-image" />
                </div>
                <div className="feature-item">
                    <div>
                        <h3>Data Collection & Preprocessing</h3>
                        <p>This feature allows users gather updated data and analyze them relying on Natural Language Processing (NLP) by identifying common pain points, desired features, and areas of satisfaction.</p>
                    </div>
                    <img src={featureImage2} alt="Data Collection & Preprocessing" className="feature-image" />
                </div>
                <div className="feature-item">
                    <div>
                        <h3>Machine Learning Model</h3>
                        <p>This feature allows users to benefit from a developed and updated model that predicts the potential of success of the app based on features by analyzing competitors.</p>
                    </div>
                    <img src={featureImage3} alt="Machine Learning Model" className="feature-image" />
                </div>
            </section>
            <section className="trusted-by">
                <h2>Our Platform is Trusted By</h2>
                <div className="trusted-by-logos">
                    <button className="nav-arrow left" onClick={handlePrevClick}>❮</button>
                    <div className="logo-slider">
                        {logos.slice(currentIndex, currentIndex + 5).map((logo, index) => (
                            <div className="logo-item" key={index}><img src={logo} alt={`Client ${index + 1}`} /></div>
                        ))}
                    </div>
                    <button className="nav-arrow right" onClick={handleNextClick}>❯</button>
                <div className="trusted-by-logos">
                    <button className="nav-arrow left" onClick={handlePrevClick}>❮</button>
                    <div className="logo-slider">
                        {logos.slice(currentIndex, currentIndex + 5).map((logo, index) => (
                            <div className="logo-item" key={index}><img src={logo} alt={`Client ${index + 1}`} /></div>
                        ))}
                    </div>
                    <button className="nav-arrow right" onClick={handleNextClick}>❯</button>
                </div>
            </section>
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
        <div>
            <Footer />
        </div>
    </ThemeProvider>
        </div>
    );
}

export default LandingPage;
