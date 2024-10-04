import React from 'react'

const Descripton = () => {
  return (
    <header className="bg-black text-white flex justify-center  items-center sm:px-10 px-4 py-4   border-8    border-white rounded-3xl ">
    <div className="  items-center justify-center ">
    <div className="sm:text-2xl text-sm text-blue-600 font-medium justify-center items-center flex ">Description</div>
    <div className="sm:text-xl text-sm font-medium justify-center items-center  ">Automatic Number Plate Reader (ANPR) is a technology that uses optical character recognition to automatically read vehicle license plates. It typically involves cameras to capture images of license plates and software to process the images, extracting the plate numbers. ANPR systems are used in various applications such as traffic management, law enforcement, toll collection, and parking access control, enabling efficient monitoring and data collection.
    <br/><br/><b>Technologies used</b> : the powerful YOLOv9 object detection model and Optical Character Recognition (OCR) ; Python ; Computer Vision Techniques ;  importing image dataset from Roboflow ; Yolov9 ; and deep learning</div>
    </div>
  </header>
  )
}

export default Descripton;