import React from 'react';

const Description = () => {
  return (
    <header className="bg-black text-white flex justify-center items-center sm:px-10 px-4 py-4 border-8 border-white rounded-3xl">
      <div className="items-center justify-center">
        <div className="sm:text-2xl text-sm text-blue-600 font-medium justify-center items-center flex">Description</div>
        <div className="sm:text-xl text-sm font-medium justify-center items-center">
          Adaptive Traffic Light Signals for smart traffic management use real-time data from sensors and cameras to dynamically adjust traffic light timings based on current traffic conditions. Unlike traditional fixed-timing systems, adaptive signals respond to fluctuating traffic volumes, prioritizing high-traffic lanes, reducing wait times, and minimizing congestion. This results in more efficient traffic flow, reduced travel times, and lower emissions, enhancing overall road safety and mobility.
          <br/><br/>
          <b>Technologies used</b>: Inductive Loop Sensors, Infrared Sensors, Microwave Radar Sensors, LIDAR (Light Detection and Ranging), CCTV Cameras with Computer Vision, Machine Learning Algorithms, Edge Computing Devices, V2X.
        </div>
      </div>
    </header>
  );
};

export default Description;
