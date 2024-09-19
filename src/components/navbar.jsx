import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black  text-white flex justify-between items-center px-5 py-2 border-8 border-white rounded-3xl">
      <div className="text-3xl font-bold">The PathFinders</div>
      <div className="flex text-center items-center justify-center flex-1">
        <div className="text-3xl font-bold">SMART TRAFFIC MANAGEMENT</div>
      </div>
      <img
        src="4.png"
        alt="sihLogo"
        className="h-20 w-auto object-contain" // Adjust the height of the image to match the navbar's height.
      />
    </header>
  );
};

export default Navbar;
