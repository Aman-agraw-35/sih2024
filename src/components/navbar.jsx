import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black  text-white flex justify-between items-center md:px-5 px-3  py-2 border-8 border-white rounded-3xl">
      <div className="lg:text-3xl md:text-2xl sm:text-sm  text-xs font-bold  lg:pr-3 sm:pr-3 ">The PathFinders</div>
      <div className="flex text-center items-center sm:justify-center justify-end flex-1">
        <div className="lg:text-3xl md:text-2xl  sm:text-sm text-xs font-bold   ">SMART TRAFFIC MANAGEMENT</div>
      </div>
      <img
        src="4.png"
        alt="sihLogo"
        className="md:h-20 sm:h-14 h-0  w-auto object-contain  " 
      />
    </header>
  );
};

export default Navbar;
