import React from 'react';

const Description = () => {
  return (
    <header className="bg-black text-white flex justify-center items-center px-10 py-4 border-8 border-white rounded-3xl">
      <div className="items-center justify-center">
        <div className="text-2xl text-blue-600 font-medium justify-center items-center flex">Description</div>
        <div className="text-xl font-medium justify-center items-center">
          Accident detection for smart traffic management involves using advanced technologies like sensors, cameras, and AI algorithms to identify vehicle collisions in real-time. These systems monitor traffic conditions and detect accidents by analyzing sudden changes in vehicle speed, direction, or impacts. When an accident is detected, the system can automatically alert emergency services, adjust traffic signals to manage flow around the incident, and provide real-time information to other drivers. This rapid response helps reduce secondary accidents, minimize congestion, and improve overall road safety.
          <br/><br/>
          <b>Technologies used</b>: Accelerometers and Gyroscopes Installed in vehicles to detect sudden changes in speed or direction, indicating a potential collision; CCTV Cameras with Computer Vision; Acoustic Sensors to detect the sound of collisions; V2X (Vehicle-to-Everything) Communication; Radar and LIDAR Sensors; GPS and Telematics Systems; Smart Traffic Signals.
        </div>
      </div>
    </header>
  );
};

export default Description;
