// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import PageWrapper from './components/PageWrapper';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <PageWrapper 
                component={Home}
                title="Home"
                description="Welcome to Zia Dental Care - Your trusted dental clinic in Swabi offering comprehensive dental services."
                keywords="dental clinic Swabi, best dentist Swabi, dental care services"
              />
            }
          />
          <Route 
            path="/about" 
            element={
              <PageWrapper 
                component={About}
                title="About Us"
                description="Learn about our experienced dental team, modern facilities, and commitment to quality dental care."
                keywords="dental clinic team, dental facility Swabi, experienced dentists"
              />
            }
          />
          <Route 
            path="/services" 
            element={
              <PageWrapper 
                component={Services}
                title="Our Services"
                description="Comprehensive dental services including cleanings, implants, cosmetic dentistry, and emergency dental care."
                keywords="dental services, teeth cleaning, dental implants, cosmetic dentistry"
              />
            }
          />
          <Route 
            path="/contact" 
            element={
              <PageWrapper 
                component={Contact}
                title="Contact Us"
                description="Get in touch with Zia Dental Care. Schedule an appointment or visit our clinic in Swabi."
                keywords="dental clinic contact, dentist appointment, dental clinic location"
              />
            }
          />
          <Route 
            path="/appointment" 
            element={
              <PageWrapper 
                component={Appointment}
                title="Book Appointment"
                description="Schedule your dental appointment online. Easy and convenient booking process."
                keywords="dental appointment booking, schedule dentist visit, dental consultation"
              />
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;