import React from 'react';

const OurTeam = () => {
  // Team members list
  const teamMembers = [
    'Team Mentor - Dr. Rekha Kaushik',
    'Gaurav Shukla',
    'Aman Agrawal',
    'Vaibhav Kishore',
    'Gaurav Mishra',
    'Anshul Patidar',
    'Susmita Santosh Shambhukari',
  ];

  return (
    <section className="pt-6 pb-10 rounded-3xl my-4 mx-2 bg-black border-gray-700">
      {/* Content container */}
      <div className="relative max-w-screen-xl mx-auto px-8 py-10 text-gray-300">
        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-medium leading-tight">Our Team</h2>
        </div>

        {/* Team Members List */}
        <div className="mt-8 grid grid-cols-1 gap-4 text-center">
          {/* First member - Centered */}
          <div className="bg-gray-800 bg-opacity-70 rounded-md p-4 col-span-1">
            <p className="text-lg font-light">{teamMembers[0]}</p>
          </div>

          {/* Other members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-70 rounded-md p-4">
                <p className="text-lg font-light">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
