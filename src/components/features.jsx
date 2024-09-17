import React from 'react';

const Features = () => {
  // Define labels for both sections
  const featureLabels = [
    'Vehicle Detection',
    'Vehicle Counter',
    'Adaptive Traffic Light Signal',
    'Auto Number Plate Reader',
    'Accident Detection'
  ];

  const futureGoals = [
    'Emergency Vehicle Recognition and prioritize clearing their route',
    'No Helmet Riding and Person Detection and fining the rule-breakers'
  ];

  return (
    <section className="relative rounded-3xl border-8 border-white">
      <div className="relative rounded-3xl h-[90vh] bg-fill bg-center">
        <img
          className="rounded-2xl h-full w-full bg-fill"
          src="7.jpg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.70)] bg-opacity-10 rounded-2xl"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-10 text-center">
          <h2 className="text-5xl font-extrabold text-white tracking-wide pb-2">FEATURES</h2>

          <div className="grid grid-cols-3 gap-8">
            {featureLabels.slice(0, 3).map((label, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-gray-800 text-white border cursor-pointer border-gray-500 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              >
                <span className="text-lg font-semibold tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          {/* Second row - Features (2 items) */}
          <div className="grid grid-cols-2 gap-8 justify-center">
            {featureLabels.slice(3).map((label, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-gray-800 text-white border cursor-pointer border-gray-500 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
              >
                <span className="text-lg font-semibold tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          {/* Second row - Scope of the project */}
          <h2 className="text-5xl font-extrabold text-white mt-8  pb-2">SCOPE OF THE PROJECT & FUTURE GOALS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {futureGoals.map((goal, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-gray-800 text-white border border-gray-400 rounded-lg shadow-lg transition transform "
              >
                <span className="text-base lg:text-lg font-normal tracking-wide">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
