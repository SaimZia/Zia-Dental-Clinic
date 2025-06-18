import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTooth, faTeeth, faKitMedical, faShieldAlt,
  faCut, faSyringe, faChevronDown, faChevronUp,
  faAlignJustify, faTeethOpen, faSmileBeam
} from '@fortawesome/free-solid-svg-icons';

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      icon: faTooth,
      link: "/services#general"
    },
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking replacement teeth for a confident smile.",
      icon: faTeeth,
      link: "/services#implants"
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with modern braces and clear aligners.",
      icon: faAlignJustify, // Updated icon for Orthodontics
      link: "/services#orthodontics"
    },
    {
      title: "Emergency Care",
      description: "Immediate dental care for unexpected oral health issues.",
      icon: faKitMedical,
      link: "/services#emergency"
    },
    {
      title: "Preventive Care",
      description: "Regular check-ups and cleanings to maintain optimal oral health.",
      icon: faShieldAlt,
      link: "/services#preventive"
    },
    {
      title: "Oral Surgery",
      description: "Expert surgical procedures including wisdom teeth removal and jaw surgeries.",
      icon: faCut,
      link: "/services#surgery"
    },
    {
      title: "Periodontal Treatment",
      description: "Specialized care for gum disease and maintaining gum health.",
      icon: faTeethOpen,
      link: "/services#periodontal"
    },
    {
      title: "Root Canal Therapy",
      description: "Advanced endodontic treatment to save damaged or infected teeth.",
      icon: faSyringe,
      link: "/services#rootcanal"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and other aesthetic procedures.",
      icon: faSmileBeam,
      link: "/services#cosmetic"
    },
  ];

  const handleViewAllServices = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive dental care for all your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {visibleServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={<FontAwesomeIcon icon={service.icon} className="text-blue-600 h-6 w-6" />}
              link={service.link}
            />
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          {/* View More/Less Button */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
          >
            {showAll ? (
              <>
                Show Less <FontAwesomeIcon icon={faChevronUp} className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                View More <FontAwesomeIcon icon={faChevronDown} className="ml-2 h-5 w-5" />
              </>
            )}
          </button>

          {/* Services Page Link */}
          <div>
            <button
              onClick={handleViewAllServices}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              View All Services Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;



