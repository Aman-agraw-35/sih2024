import React from 'react';

const Description = () => {
  return (
    <header className="bg-black text-white flex justify-center items-center px-10 py-4 border-8 border-white rounded-3xl">
      <div className="items-center justify-center">
        <div className="text-2xl text-blue-600 font-medium justify-center items-center flex">Description</div>
        <div className="text-xl font-medium justify-center items-center">
          Vehicle detection and counting for smart traffic management involves using sensors, cameras, or radar to identify and count the number of vehicles on the road in real-time. This data helps in analyzing traffic flow, congestion levels, and road usage patterns. By integrating this information into traffic control systems, cities can optimize signal timings, reduce congestion, and improve overall traffic efficiency, leading to smoother and safer road conditions.
          <br/><br/>
          <b>Technologies used</b>: OpenCV; Background Subtraction by Gaussian blurring; NumPy.
        </div>
      </div>
    </header>
  );
};

export default Description;
