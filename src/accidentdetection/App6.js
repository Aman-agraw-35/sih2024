import React from "react";
import Heading from "./heading";
import Description from "./description";
import Imagge from "./imagge";
const App = () => {
  return (

    <div className="min-h-screen bg-gradient-to-r  from-custom-top to-custom-bottom  items-center flex justify-center">
       <div className="h-auto w-[90vw] border-[11px] rounded-3xl bg-white border-white my-20 ">
       <Heading/>
       <Description/>
       <Imagge/>
       </div>
    </div>
  );
};

export default App;
