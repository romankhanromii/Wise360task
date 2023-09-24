import React, { useState } from 'react'
import icon from '../images/icon1 - Full logo.png'
import { NavLink } from "react-router-dom";


export default function Navabar() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
      };
      const divClasses = `
      w-[112px] sm:w-[80px] h-[34px] [font-family:'Inter-Medium',Helvetica]
      font-medium text-white text-[12.9px] tracking-[-0.19px] leading-[normal]
      rounded-[5.15px] border-[0.86px] border-solid border-white
      ${isClicked ? 'bg-[#00FF96] text-[#168356]' : 'hover:bg-[#cdffdb] hover:text-[#168356]'}
    `;
  return (
    <div className="flex justify-between ">
    <div className="mx-[50px]">
  <img className=" w-[71px] sm:w-10 object-cover mt-[19px] sm:mt-[45px]" alt="Full logo" src={icon} />
</div>
<div className="flex  space-x-3   mr-[50px] mt-[46px]">
<NavLink to='/faq'>
<div className={divClasses}>
  <button className="mx-11 sm:mx-7 mt-2" onClick={handleClick}>
    FAQ
  </button>
</div>
  </NavLink>
  <NavLink to='/signup'>
  <div className={divClasses}>
  <button className="mx-8 sm:mx-4 mt-2" onClick={handleClick}>
    Register
  </button>
</div>
  </NavLink>
</div>
    </div>
  )
}
