import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="block group">
      <div className="h-full bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
          {icon}  {/* ✅ Render `icon` directly */}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;