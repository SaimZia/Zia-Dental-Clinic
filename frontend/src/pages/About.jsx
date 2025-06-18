// pages/About.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import TeamSection from '../components/about/TeamSection';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              About Zia Dental
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Dedicated to providing exceptional dental care with a gentle touch
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide comprehensive, high-quality dental care in a comfortable and welcoming environment. 
                We are committed to improving the oral health of our community through education, prevention, 
                and personalized treatment plans.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading dental care provider in our community, known for excellence in patient care, 
                innovative treatments, and a commitment to continuous improvement in dental healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our History</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Founded in 1998, Zia Dental has grown from a small practice to a comprehensive dental care center. 
              Over the years, we have invested in the latest dental technology and continued education for our staff 
              to ensure we provide the highest standard of care to our patients.
            </p>
            <p className="text-gray-600 mt-4">
              Our commitment to excellence has earned us the trust of thousands of patients and numerous accolades 
              in the dental healthcare community. We take pride in our patient-first approach and our role in 
              promoting oral health in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-blue-600">✨</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">Excellence</h3>
              <p className="mt-2 text-gray-600">
                Striving for the highest standards in dental care and patient service
              </p>
            </div>

            {/* Integrity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-blue-600">🤝</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">Integrity</h3>
              <p className="mt-2 text-gray-600">
                Maintaining honest and ethical practices in all our interactions
              </p>
            </div>

            {/* Compassion */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-blue-600">💕</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">Compassion</h3>
              <p className="mt-2 text-gray-600">
                Providing care with empathy and understanding for all patients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </Layout>
  );
};

export default About;