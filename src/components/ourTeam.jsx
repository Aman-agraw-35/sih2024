import React from 'react';

// Team data
const teamMembers = [
  {
    role: 'Team Mentor',
    name: 'Dr. Rekha Kaushik',
    email: 'rekhakaushik@iiitbhopal.ac.in',
    phone: '9977162561',
    areaOfResearch : 'Machine Learning, Wireless Network, Data Mining',
  },
  {
    name: 'Gaurav Shukla',
    scholarNo: '23U02042',
    email: 'gauravshu2005@gmail.com',
    phone: '7505752401',
    department: 'CSE',
    year: '2nd Year'
  },
  {
    name: 'Aman Agrawal',
    scholarNo: '22U01010',
    email: 'aman.agraw.35@gmail.com',
    phone: '6261446831',
    department: 'ECE',
    year: '3rd Year'
  },
  {
    name: 'Vaibhav Kishore',
    scholarNo: '23U02020',
    email: 'vaibhavkishorevks@gmail.com',
    phone: '7355050494',
    department: 'CSE',
    year: '2nd Year'
  },
  {
    name: 'Gaurav Mishra',
    scholarNo: '23U02040',
    email: 'gaurav769786@gmail.com',
    phone: '7697868173',
    department: 'CSE',
    year: '2nd Year'
  },
  {
    name: 'Anshul Patidar',
    scholarNo: '23U02043',
    email: 'anshulpatidar45@gmail.com',
    phone: '8103941559',
    department: 'CSE',
    year: '2nd Year'
  },
  {
    name: 'Susmita Santosh Shambhukari',
    scholarNo: '24U010067',
    email: 'susmita.shambhukari@gmail.com',
    phone: '7842802555',
    department: 'ECE',
    year: '1st Year'
  }
];

const OurTeam = () => {
  return (
    <section className="pt-10 pb-16 mt-4 bg-black text-white rounded-3xl mb-1 border-white border-8 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-center text-6xl font-bold mb-12">Our Team</h2>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-2 rounded-lg shadow-lg md:max-w-2xl sm:max-w-md max-w-sm text-left ">
            <pre className="bg-gray-800 p-2  rounded text-sm overflow-x-auto ">
              {JSON.stringify(teamMembers[0], null, 2)}
            </pre>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-lg text-left">
              <pre className="bg-gray-800  p-2 rounded  text-xs xl:text-sm overflow-x-auto" >
                {JSON.stringify(member, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
