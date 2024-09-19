import React from 'react';

const Heading = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center px-5 py-2 border-8 border-white rounded-3xl">
      <div className="text-3xl font-bold">The PathFinders</div>
      <div className="flex text-center items-center justify-center flex-1">
        <div className="text-3xl font-bold">VEHICLE DETECTION AND COUNTER</div>
      </div>
      <img
        src="4.png"
        alt="sihLogo"
        className="h-20 w-auto object-contain" 
      />
    </header>
  );
};

export default Heading;
