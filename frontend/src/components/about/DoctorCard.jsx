// src/components/about/DoctorCard.jsx
import React from 'react';

const DoctorCard = ({ name, role, image, education, specialization, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-4 aspect-h-3">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
        <div className="mt-2 space-y-2">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Education:</span> {education}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Specialization:</span> {specialization}
          </p>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default DoctorCard;