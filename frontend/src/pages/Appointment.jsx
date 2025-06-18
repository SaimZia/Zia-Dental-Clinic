// src/pages/Appointment.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import AppointmentForm from '../components/forms/AppointmentForm';

const Appointment = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Book an Appointment
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Schedule your visit with our experienced dental professionals
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Before Your Visit</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Please arrive 15 minutes early</li>
                <li>• Bring your insurance card</li>
                <li>• Bring a list of current medications</li>
                <li>• Bring any relevant dental records</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Care</h3>
              <p className="text-gray-600">
                For dental emergencies inside of regular hours, please call our emergency line:
                <br />
                <span className="font-semibold">+92 314 7776565</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appointment;