import React from 'react';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  // Define labels and paths for both sections
  const features = [
    { label: 'Vehicle Detection and Counter', path: '/vehicledetection' },
    { label: 'Ambulance Detection', path: '/ambulance' },
    { label: 'Adaptive Traffic Light Signal', path: '/adaptivetraffic' },
    { label: 'Auto Number Plate Reader', path: '/numberplate' },
    { label: 'Accident Detection', path: '/accidentdetection' },
    { label: 'Helmet Detection', path: '/helmetdetection' },
  ];

  // Handle click to navigate to the respective route
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="relative rounded-3xl border-8  border-white">
      <div className="relative rounded-3xl h-[70vh] bg-fill bg-center">
        <img
          className="rounded-2xl h-full w-full bg-fill"
          src="7.jpg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)] bg-opacity-10 rounded-2xl"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-10 text-center">
          <h2 className="text-7xl font-extrabold text-white tracking-wide pb-2">FEATURES</h2>

          <div className="grid grid-cols-3 gap-16">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-gray-800 text-white border cursor-pointer border-gray-500 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                onClick={() => handleClick(feature.path)}
              >
                <span className="text-lg font-semibold tracking-wide">{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-20">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-gray-800 text-white border cursor-pointer border-gray-500 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                onClick={() => handleClick(feature.path)}
              >
                <span className="text-lg font-semibold tracking-wide">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
