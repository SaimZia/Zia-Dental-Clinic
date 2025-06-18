import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import axios from 'axios';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    doctor: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      doctor: '',
      notes: ''
    });
  };

  const doctors = [
    {
      id: 'dr-haris',
      name: 'Dr. Haris Zia',
      role: 'General Dentist'
    },
    {
      id: 'dr-aleena',
      name: 'Dr. Aleena Waqar Haider',
      role: 'Endodontist'
    },
    {
      id: 'dr-shabbir',
      name: 'Dr. Shabbir Hussain',
      role: 'Pediatric Dentist'
    },
    {
      id: 'dr-abid',
      name: 'Dr. Abid Zia',
      role: 'Chief Dental Surgeon'
    },
    {
      id: 'dr-aizaz',
      name: 'Dr. Muhammad Aizaz',
      role: 'Maxilliofacial Surgeon'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const submissionData = {
      ...formData,
      dateSubmitted: new Date().toISOString()
    };

    console.log('Submitting appointment data:', submissionData);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/appointments/book', 
        submissionData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Server response:', response.data);

      if (response.data.success) {
        setSuccess(true);
        resetForm();
        // Show success message for 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError('Failed to book appointment. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(
        err.response?.data?.message || 
        'Unable to submit appointment request. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        /* Global input styles */
        .custom-input {
          border: none;
          border-bottom: 1px solid #D1D5DB;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          background-color: transparent;
        }

        .custom-input:hover {
          border-bottom-color: #60A5FA;
        }

        .custom-input:focus {
          outline: none;
          border-bottom-color: #3B82F6;
          transform: scale(1.02);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .custom-select {
          border: none;
          border-bottom: 1px solid #D1D5DB;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          background-color: transparent;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0 center;
        }

        .custom-select:hover {
          border-bottom-color: #60A5FA;
        }

        .custom-select:focus {
          outline: none;
          border-bottom-color: #3B82F6;
          transform: scale(1.02);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .custom-textarea {
          border: none;
          border-bottom: 1px solid #D1D5DB;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          background-color: transparent;
          resize: none;
        }

        .custom-textarea:hover {
          border-bottom-color: #60A5FA;
        }

        .custom-textarea:focus {
          outline: none;
          border-bottom-color: #3B82F6;
          transform: scale(1.02);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <Calendar className="w-8 h-8 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Schedule Your Visit</h2>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-md">
            <p className="text-green-700">
              Appointment request submitted successfully! We will contact you shortly to confirm your appointment.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-md">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full custom-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={loading}
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full custom-input"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={loading}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full custom-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  disabled={loading}
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="mt-1 block w-full custom-input text-gray-700"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <input
                  type="time"
                  required
                  className="mt-1 block w-full custom-input text-gray-700"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  disabled={loading}
                  min="09:00"
                  max="18:00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Service Required</label>
              <select
                required
                className="mt-1 block w-full custom-select text-gray-700"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                disabled={loading}
              >
                <option value="">Select a service</option>
                <option value="general">General Checkup</option>
                <option value="cleaning">Teeth Cleaning</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="emergency">Emergency Care</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Doctor</label>
              <select
                className="mt-1 block w-full custom-select text-gray-700"
                value={formData.doctor}
                onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                disabled={loading}
              >
                <option value="">No preference</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.role}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea
                rows="4"
                className="mt-1 block w-full custom-textarea"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                placeholder="Any specific concerns or questions?"
                disabled={loading}
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} 
                focus:outline-none`}
            >
              {loading ? 'Submitting...' : 'Book Appointment'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;