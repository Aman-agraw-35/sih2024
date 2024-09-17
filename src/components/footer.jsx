import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (isImageLoaded) {
      setIsVisible(true);
    }
  }, [isImageLoaded]);

  return (
    <header
      className={`transition-all duration-6000 ease-in-out ${isVisible ? 'max-h-screen' : 'max-h-0'} bg-white text-white flex py-2 justify-center items-center border-8 border-white rounded-3xl overflow-hidden`}
    >
      <img
        src="5.png"
        alt="footer"
        className='bg-white rounded-3xl'
        onLoad={() => setIsImageLoaded(true)}
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 5s ease-in-out' }}
      />
    </header>
  );
}

export default Footer;
