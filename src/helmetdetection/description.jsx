import React from 'react';

const Description = () => {
  return (
    <header className="bg-black text-white flex justify-center items-center px-10 py-4 border-8 border-white rounded-3xl">
      <div className="items-center justify-center">
        <div className="text-2xl text-blue-600 font-medium justify-center items-center flex">Description</div>
        <div className="text-xl font-medium justify-center items-center">
          Helmet detection and challan (fine) issuance is an automated system used in traffic management to identify motorcyclists or cyclists not wearing helmets and issue fines accordingly. Using computer vision and AI algorithms, the system analyzes video feeds from traffic cameras to detect riders without helmets. When a violation is detected, the system captures the vehicle's license plate using Automatic Number Plate Recognition (ANPR) technology. It then automatically generates a challan, sending the fine notification to the registered vehicle owner. This process helps enforce helmet laws, improves road safety, and reduces the need for manual traffic policing.
          <br/><br/>
          <b>Technologies used</b>: The powerful YOLOv9 object detection model, Optical Character Recognition (OCR), Python, Computer Vision Techniques, importing image dataset from Roboflow, Yolov9, and deep learning.
        </div>
      </div>
    </header>
  );
};

export default Description;
