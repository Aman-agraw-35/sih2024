import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import ProblemId from "./components/problemId";
import Features from "./components/features";
import OurTeam from "./components/ourTeam";
import Footer from "./components/footer";
const CarRentalPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 rounded-3xl">
      {/* Header */}



      {/* Car Options Section */}
      <section className="relative z-10 max-w-screen-xl mx-auto px-12 py-10 text-white">
        <div className="flex justify-between">
          <div className="bg-white text-black p-4 rounded-xl">
            <div className="text-lg font-bold">Small</div>
            <div className="text-xl">$240+</div>
          </div>
          <div className="bg-white text-black p-4 rounded-xl">
            <div className="text-lg font-bold">Large</div>
            <div className="text-xl">$280+</div>
          </div>
        </div>
      </section>


    </div>
  );
};
const App = () => {
  return (

    <div className="min-h-screen bg-gradient-to-r  from-custom-top to-custom-bottom  items-center flex justify-center">
       <div className="h-auto w-[90vw] border-[11px] rounded-3xl bg-white border-white my-20 ">
       <Footer/>
       <Navbar/>
       <ProblemId/>
       {/* <Main/> */}
       <Features/>
       <OurTeam/>
        {/* <CarRentalPage/> */}
        
       </div>
    </div>
  );
};

export default App;
