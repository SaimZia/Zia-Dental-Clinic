import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "/images/hero/dental-clinic-1.jpg",
      alt: "Modern dental clinic interior"
    },
    {
      url: "/images/hero/dental-treatment-2.jpg",
      alt: "Professional dental treatment"
    },
    {
      url: "/images/hero/dental-team-3.jpg",
      alt: "Our experienced dental team"
    },
    {
      url: "/images/hero/dental-equipment-4.jpg",
      alt: "State-of-the-art dental equipment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative bg-white">
      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto">
        {/* Text Content Section */}
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Oral Health Is Our</span>
                <span className="block text-blue-600">Priority</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              At Zia Dental Care experience premier dental care in the most 
              comfortable, friendly and sterile environment. Our team of 
              experienced professionals is dedicated in providing you with the 
              best dental treatment available.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link 
                    to="/appointment" 
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link 
                    to="/services" 
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Slideshow Section */}
        <div className="relative h-64 sm:h-72 md:h-96 lg:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full hover:bg-white transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full hover:bg-white transition-all"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Images */}
          <div className="relative h-full w-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                  ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${index === currentImage ? 'bg-blue-600 w-4' : 'bg-white'}`}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;