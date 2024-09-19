import React from 'react';

const Imagge = () => {
  // Array of image sources from the public folder
  const imageArray = [
    "num.jpeg",
    "num2.jpeg",
    "num3.jpeg"
  ];

  return (
    <section className="space-y-8 rounded-3xl border-8 border-white">
      {imageArray.map((imageSrc, index) => (
        <div key={index} className="relative rounded-3xl h-[90vh] bg-fill bg-center">
          <img
            className="rounded-2xl h-full w-full bg-fill"
            src={imageSrc}
            alt={`bg-${index + 1}`}
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.20)] bg-opacity-10 rounded-2xl"></div>
        </div>
      ))}
    </section>
  );
};

export default Imagge;
