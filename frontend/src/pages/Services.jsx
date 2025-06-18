// pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import Layout from '../components/layout/Layout';
import ServicesSection from '../components/home/ServicesSection';
import { Calendar, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Comprehensive dental care solutions for your entire family
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <ServicesSection />

      {/* Detailed Services Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Preventive Dentistry */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Preventive Dentistry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Our preventive dental care helps maintain your oral health and prevent future problems. 
                  Regular check-ups and cleanings are essential for a healthy smile.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Regular dental check-ups and cleanings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Dental X-rays and examinations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Fluoride treatments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Dental sealants</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="/images/services/preventive-dentistry.jpg" 
                  alt="Preventive Dentistry"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Restorative Dentistry */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Restorative Dentistry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/images/services/restorativedentistry.jpg" 
                  alt="Restorative Dentistry"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6">
                  We offer comprehensive restorative dental services to repair damaged teeth 
                  and restore your beautiful smile.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Dental fillings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Dental crowns and bridges</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Root canal therapy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Dental implants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg shadow-xl mt-12">
            <div className="px-6 py-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Schedule Your Appointment?
              </h3>
              <p className="text-blue-100 mb-8">
                Contact us today to schedule a consultation with our experienced dental team.
              </p>
              <Link
                to="/appointment"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;