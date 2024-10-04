import React from 'react';

const Challenges = () => {
  // Define labels for both sections
  const featureLabels = [
    "Data Privacy Concerns", "System Integration", "Cybersecurity Risks", "Installment cost"
  ];

  const futureGoals = [
    "Fuel Savings and Eco Impact Tracker", "Real-Time Insights for Dynamic Navigation",
    "Future Traffic Pattern Prediction Model Training", "Real-Time Emergency Alerts on Google Maps"
  ];

  return (
    <section className="rounded-3xl border-8 mt-4 border-white">
      <div className="relative rounded-3xl md:h-[70vh] h-[100vh] bg-fill bg-center">
        <img
          className="rounded-2xl h-full w-full object-cover"
          src="t.jpg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] rounded-2xl"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:p-8 p-2 w-full max-w-screen-xl">
            {/* Future Vision */}
            <div className="md:w-1/2 w-full">
              <h2 className="md:text-5xl text-2xl font-bold text-white md:pl-5 pl-3 tracking-wide md:pb-8 pb-4">
                Future Vision
              </h2>
              <ul className="bg-gray-800 rounded-lg">
                {futureGoals.map((goal, index) => (
                  <li
                    key={index}
                    className="px-6 sm:py-4 py-1 py-1 text-white border-b-[1px] border-black"
                  >
                    <span className="md:text-lg sm:text-md text-sm font-normal tracking-wide">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="md:w-1/2 w-full">
              <h2 className="md:text-5xl text-2xl font-bold text-white md:pl-5 pl-3 tracking-wide md:pb-8 pb-4">
                Challenges
              </h2>
              <ul className="bg-gray-800 rounded-lg">
                {featureLabels.map((label, index) => (
                  <li
                    key={index}
                    className="px-6 sm:py-4 py-1 text-white border-b-[1px] border-black"
                  >
                    <span className="md:text-lg sm:text-md text-sm font-normal tracking-wide">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
