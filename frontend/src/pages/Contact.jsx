// src/pages/Contact.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/forms/ContactForm';
import LocationMap from '../components/maps/LocationMap';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              We're here to help. Reach out to us for any questions or concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Phone</h3>
                </div>
                <p className="mt-2 text-gray-600">+92 314 7776565</p>
              </div>

              {/* Email */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Email</h3>
                </div>
                <p className="mt-2 text-gray-600">clinicziadental@gmail.com</p>
              </div>

              {/* Address */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Location</h3>
                </div>
                <p className="mt-2 text-gray-600">
                <a href='https://www.google.com/maps/place/Zia+Dental+Care/@34.0788388,72.6081485,986m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38defbb4cff22761:0x9fa2b4873b31bea7!8m2!3d34.0788388!4d72.6107234!16s%2Fg%2F11fsx7c8mz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>Unnamed Road, Topi, Khyber Pakhtunkhwa, Pakistan</a>
                </p>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Hours</h3>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
            <LocationMap />
            <div className="mt-4 text-center text-gray-600">
              <p>Visit us at our clinic to experience top-quality dental care</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;