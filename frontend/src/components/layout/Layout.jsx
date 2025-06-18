// src/components/layout/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Zia Dental Care
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              <Link 
                to="/appointment"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
                type="button"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <Link 
                to="/appointment"
                className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+92 314 7776565</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>clinicziadental@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-6 mr-2" />
                  <a href='https://www.google.com/maps/place/Zia+Dental+Care/@34.0788388,72.6081485,986m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38defbb4cff22761:0x9fa2b4873b31bea7!8m2!3d34.0788388!4d72.6107234!16s%2Fg%2F11fsx7c8mz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>Unnamed Road, Topi, Swabi, Khyber Pakhtunkhwa, Pakistan</a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                <li><Link to="/services" className="hover:text-blue-400">Our Services</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
                <li><Link to="/appointment" className="hover:text-blue-400">Book Appointment</Link></li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2025 Zia Dental Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;