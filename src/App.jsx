import React from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
const App = () => {
  return (
    <div className="bg-[#0D0D11]">
      <Navbar />
      <div >
        <Hero />
      </div>
    </div>
  );
};

export default App;
