import React, { useRef } from 'react';

const Vid = () => {
  const videoRef = useRef(null);

  return (

      <section className="relative lg:h-[90vh] h-auto rounded-3xl border-8 my-2 border-white overflow-hidden">
      {/* Inner container with black border */}
      <div className="border-2 h-[99%] border-black rounded-3xl overflow-hidden">
      <video
        ref={videoRef}
        className="rounded-2xl h-[100%] w-full object-fill"
        controls // Enabling default video controls
      >
        <source src="adaptive.mp4" type="video/mp4" muted={false} />
        Your browser does not support the video tag.
      </video>
      </div>
    </section>
  );
};

export default Vid;
