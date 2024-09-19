import React from 'react';

const Imagge = () => {

 

  return (
    <section className="relative rounded-3xl border-8  border-white">
      <div className="relative rounded-3xl h-[90vh] bg-fill bg-center">
        <img
          className="rounded-2xl h-full w-full bg-fill"
          src="num.jpeg"
          alt="bg"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.20)] bg-opacity-10 rounded-2xl"></div>


      </div>
    </section>
  );
};

export default Imagge;
