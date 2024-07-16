import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {

return(
  <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className="bg-violet-400 h-[4px] w-[180px] mx-auto mt-1"></div>
      <Testimonial reviews={reviews}/>
    </div>
  </div>
)
};

export default App;
