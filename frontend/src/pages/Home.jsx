// pages/Home.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TeamSection from '../components/about/TeamSection';
import { Microscope, Users, SmilePlus } from 'lucide-react';

const Home = () => {
    return (
      <Layout>
        <HeroSection />
        
        {/* Why Choose Us Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Zia Dental?
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We combine expertise with compassion to deliver the best dental 
              care.
              </p>
            </div>
  
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 - Modern Technology */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Microscope className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Modern Technology</h3>
                    <p className="mt-2 text-base text-gray-500">
                    Latest dental technology for precise treatment
                    </p>
                  </div>
                </div>
  
                {/* Feature 2 - Experienced Team */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Experienced Team</h3>
                    <p className="mt-2 text-base text-gray-500">
                    Compassionate and qualified professionals with years of experience in the field.
                    </p>
                  </div>
                </div>
  
                {/* Feature 3 - Patient Comfort */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <SmilePlus className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Patient Comfort</h3>
                    <p className="mt-2 text-base text-gray-500">
                    Comfortable environment and dental care for a stress-free 
                    experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <ServicesSection />
        <TeamSection />

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Book your appointment today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/appointment"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;