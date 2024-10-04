import React from 'react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    { label: 'Vehicle Detection and Counter', path: '/vehicledetection' },
    { label: 'Ambulance Detection', path: '/ambulance' },
    { label: 'Adaptive Traffic Light Signal', path: '/adaptivetraffic' },
    { label: 'Auto Number Plate Reader', path: '/numberplate' },
    { label: 'Accident Detection', path: '/accidentdetection' },
    { label: 'Helmet Detection', path: '/helmetdetection' },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="relative rounded-3xl border-8 border-white">
      <div className="relative rounded-3xl h-[80vh]  bg-fill bg-center">
        <img
          className="rounded-2xl h-full w-full object-cover"
          src="7.jpg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)] bg-opacity-10 rounded-2xl"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 text-center p-4">
          {/* Title */}
          <h2 className="md:text-7xl text-4xl font-extrabold text-white tracking-wide">FEATURES</h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="px-4 py-2 lg:px-6 lg:py-4 bg-gray-800 text-white border cursor-pointer border-gray-500 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                onClick={() => handleClick(feature.path)}
              >
                <span className="text-sm sm:text-md md:text-lg font-semibold tracking-wide">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
