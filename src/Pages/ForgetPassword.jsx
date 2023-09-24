import React from 'react'
import forgetpassword from '../images/Forget Password.png'
import email from '../images/email.svg'
import { NavLink } from 'react-router-dom'

export default function ForgetPassword() {
  return (
    <div className="w-screen h-screen   grid grid-cols-2 sm:grid-cols-1 ">
         <div className="w-[545px] my:w-[500px] ipad:w-[300px] sm:w-[250px] sm:ml-[110px] ipad:ml-[15px] sm:mt-[20px] h-[710px] ml-[122px] mt-[185px] mr-[766px] my:mr-[400px] mb-[261px]  ">
      <img src={forgetpassword} alt=""  className=""/>
    </div>
    <div className=" mt-[147px]">
      <div className=" w-[630px] my:w-[550px] ipad:w-[450px] sm:w-[400px] sm:mt-[-800px] ipad:ml-[-90px] h-[785px] my:h-[640px]  bg-white rounded-[5px]" >
      <div className="pt-[252px]  [font-family:'Inter-Bold',Helvetica] font-bold text-[#323232] text-[36px] text-center tracking-[-0.54px] leading-[50.1px] whitespace-nowrap">
        Forget Password
      </div>
      <p className="mt-[13px]   [font-family:'Inter-Light',Helvetica] font-light text-[#898989] text-[20px] sm:text-[18px] text-center  tracking-[-0.30px] leading-[31.7px] whitespace-nowrap">
        Don’t worry. Enter your email to reset password.
      </p>
      <div className="mt-[44px] mx-[134px] my:mx-[100px] ipad:mx-[50px] sm:mx-[40px] w-[362px] ipad:w-[340px] sm:w-[315px] h-[64px] flex justify-evenly  rounded-[5px] border border-solid border-violet-100">
        <img className=" w-[18px] h-[16px] mt-[28px] ml-[9px]  object-cover" alt="Line" src={email} />
      <input type="email" placeholder="Enter Email Address Here" className="mr-[90px] px-3 focus:outline-none  "  />
      
      </div>
      <NavLink to=''>
        <button className=" mt-[44px] ml-[259px] my:ml-[230px] ipad:ml-[160px] sm:ml-[145px] w-[112px] h-[34px]  bg-[#168356] text-white rounded-[5.15px] border-[0.86px] border-solid border-[#18a0fb]">Send</button>
      </NavLink>
      </div>
    </div>

    </div>
  )
}
