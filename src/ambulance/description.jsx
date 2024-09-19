import React from 'react';

const Description = () => {
  return (
    <header className="bg-black text-white flex justify-center items-center px-10 py-4 border-8 border-white rounded-3xl">
      <div className="text-center">
        <div className="text-2xl text-blue-600 font-medium mb-4">Description</div>
        <div className="text-xl font-medium text-left mb-4 ">
          Ambulance detection on the road is a technology designed to identify and track ambulances in real-time traffic. Using sensors, cameras, or audio detection systems, it recognizes the presence of an ambulance, often by detecting its sirens or visual markers like flashing lights. This information can be used to automatically control traffic signals, give priority to the ambulance, and provide real-time alerts to nearby vehicles, helping to clear the path and ensure faster emergency response times.
          <br/><br/>
          <b>Technologies used</b>: The powerful YOLOv9 object detection model and Optical Character Recognition (OCR); Python; Computer Vision Techniques; importing image datasets from Roboflow; YOLOv9; and deep learning.
        </div>
      </div>
    </header>
  );
};

export default Description;
