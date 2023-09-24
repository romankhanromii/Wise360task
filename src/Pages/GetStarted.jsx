import React from "react";
import Navabar from "../Component/Navabar";
import Getstartcenter from "../Component/Getstartcenter";
import Footer from "../Component/Footer";

export const GetStarted = () => {
  
  return (
    <div className=" w-screen h-[1024px]  bg-[#168356]" >
        <Navabar/>
        <Getstartcenter/>
        <Footer/>

    </div>
  );
};
