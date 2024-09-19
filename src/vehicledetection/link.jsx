import React from 'react';

const Link = () => {
  return (
    <header className="bg-black text-white flex justify-center items-center px-10 py-4 border-8 border-white rounded-3xl">
      <div className="flex items-center">
        <span className="text-2xl text-blue-600 font-medium">Link to the code:</span>
        <a
          href="https://colab.research.google.com/drive/1VB0q_Z9k6gprzLhlCKdpnx77LdI2q1mN?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-medium pl-5 text-blue-400 hover:text-blue-600 underline"
        >
https://colab.research.google.com/drive/1VB0q_Z9k6gprzLhlCKdpnx77LdI2q1mN?usp=sharing   </a>
      </div>
    </header>
  );
};

export default Link;
