import React from 'react';

const Challenges = () => {
  // Define labels for both sections
  const featureLabels = [
    "Data Privacy Concerns","System Integration","Cybersecurity Risks","Installment cost"
  ];

  const futureGoals = [
    "Fuel Savings and Eco Impact Tracker","Real-Time Insights for Dynamic Navigation","future Traffic Pattern Prediction Model Training","Real-Time Emergency Alerts on Google Maps"
  ];

  return (
    <section className=" rounded-3xl border-8 mt-4 border-white">
      <div className="relative rounded-3xl h-[70vh] bg-fill bg-center">
        <img
          className="rounded-2xl h-full w-full bg-fill"
          src="t.jpg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.0)] rounded-2xl"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-8 p-8 w-full max-w-screen-xl">
                        {/* Right Div - Scope and Future Goals */}
                        <div className="w-1/2 ">
              <h2 className="text-5xl font-bold text-white pl-5  tracking-wide pb-8">Future Vision</h2>
              <ul className=" bg-gray-800 rounded-lg">
                {futureGoals.map((goal, index) => (
                  <li
                    key={index}
                    className="px-6 py-4  text-white   border-b-[1px] border-black "
                  >
                    <span className="text-lg  font-normal tracking-wide">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Left Div - Features */}
            <div className="w-1/2 ">
              <h2 className="text-5xl font-bold text-white pl-5 pb-8  tracking-wide">Challenges</h2>
              <ul className=" bg-gray-800 rounded-lg ">
                {featureLabels.map((label, index) => (
                  <li
                    key={index}
                    className="px-6 py-4  text-white   border-b-[1px] border-black "
                  >
                    <span className="text-lg  font-normal tracking-wide">{label}</span>
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
