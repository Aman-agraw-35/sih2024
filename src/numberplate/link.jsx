import React from 'react';

const Link = () => {
  return (
    <header className="bg-black text-white flex justify-center items-center px-10 py-4 border-8 border-white rounded-3xl">
      <div className="flex items-center  md:flex-row flex-col overflow-x-auto ">
        <span className="md:text-2xl text-xs text-blue-600 font-medium">Link to the code:</span>
        <a
          href="https://colab.research.google.com/drive/18_hiDMl4MYkwvkLnU-xL22-Pa9DhAJNS?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-xl text-xs font-medium pl-5 text-blue-400 hover:text-blue-600 underline"
        >
          https://colab.research.google.com/drive/18_hiDMl4MYkwvkLnU-xL22-Pa9DhAJNS?usp=sharing
        </a>
      </div>
    </header>
  );
};

export default Link;
