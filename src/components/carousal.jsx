import React, { useState, useRef, useEffect } from 'react';

const Carousal = () => {
  const images = ['ppt1.jpg', 'ppt2.png', 'ppt3.png', 'ppt4.png', 'ppt5.png', 'ppt6.png'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 6000);

    // Clear the interval when the component unmounts or re-renders
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startPos;
    if (diff > 50) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPos(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startPos;
    if (diff > 50) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative rounded-3xl border-8 my-2 border-white overflow-hidden">
      {/* Inner container with black border */}
      <div className="border-2 border-black rounded-3xl overflow-hidden">
        <div
          ref={containerRef}
          className="relative rounded-2xl lg:h-[90vh] md:h-[80vh] h-auto  flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-full w-full flex-shrink-0"
              style={{ overflow: 'hidden' }} // Ensure no overflow
            >
              <img
                className="h-full w-full object-fill"
                src={image}
                alt={`carousel-${index}`}
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-gray-800 p-4 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 ease-in-out"
        >
          <span className="text-2xl">&#8592;</span>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-gray-800 p-4 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 ease-in-out"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default Carousal;
