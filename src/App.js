import React from "react";
import Navbar from "./components/navbar";
import ProblemId from "./components/problemId";
import Features from "./components/features";
import OurTeam from "./components/ourTeam";
import Header from "./components/header";
import Carousal from "./components/carousal";
import Video from "./components/video";
import Challenges from "./components/callenges";


const App = () => {
  return (

    <div className="min-h-screen bg-gradient-to-r  from-custom-top to-custom-bottom  items-center flex justify-center">
       <div className="h-auto w-[90vw] border-[11px] rounded-3xl bg-white border-white my-20 ">
       <Header/>
       <Navbar/>
       <ProblemId/>
       <Carousal/>
       <Video/>
       <Features/>
       <Challenges/>
       <OurTeam/>
        
       </div>
    </div>
  );
};

export default App;
