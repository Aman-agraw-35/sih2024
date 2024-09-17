import React from 'react'

const Main = () => {
  return (
    <section className=" pt-8 rounded-3xl  border-8 bg-black border-white ">
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('your-background-image.jpg')" }}>
          {/* Background image */}
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-12 py-20 text-white">
          <div className="grid grid-cols-3">
            {/* Left Section - Text */}
            <div className="col-span-2">
              <h1 className="text-9xl font-bold leading-none">CAR</h1>
              <div className="text-8xl font-extrabold leading-none mt-4">RENTAL CAR DEALS TO FIND THE RIGHT ONE.</div>
            </div>

            {/* Right Section - Search */}
            <div className="bg-black bg-opacity-80 rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">Same drop-off</button>
                <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">Different drop-off</button>
              </div>
              <input
                type="text"
                placeholder="San Francisco, California, United States"
                className="w-full px-4 py-3 mb-4 bg-gray-700 text-white rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg" />
                <input type="time" className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input type="date" className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg" />
                <input type="time" className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg" />
              </div>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Main