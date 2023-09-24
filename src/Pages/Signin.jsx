import React from "react";
import google from '../images/google 1.png'
import facebook from '../images/facebook 1.png'
import password from '../images/Password.svg'
import email from '../images/email.svg'
import login from '../images/login.png'
import { Link, NavLink } from "react-router-dom";
export const SignIn = () => {
  return (
    <>
   <div className="w-screen h-screen   grid grid-cols-2 my:ml-[-40px] sm:grid-cols-1 ">
    <div className="w-[593px] my:w-[500px] ipad:w-[300px] sm:w-[200px] h-[544px] ml-[81px] sm:ml-[110px] ipad:ml-[40px] mt-[275px] sm:mt-[50px] mr-[766px] my:mr-[400px] mb-[261px]  ">
      <img src={login} alt=""  className=""/>
    </div>
    <div className="  mr-[107px]  ipad:mr-[70px]  mt-[148px] sm:mt-[-600px]">
      <div className="pt-[65px]  w-[630px] my:w-[600px] ipad:w-[400px] sm:w-[350px] sm:ml-[30px] ipad:ml-[-50px] h-[785px]  bg-white rounded-[5px] shadow-[0px_4px_4px_#00000040]" >
      <div className=" [font-family:'Inter-Bold',Helvetica] font-bold text-[#323232] text-[48px] text-center tracking-[-0.72px] leading-[50.1px] whitespace-nowrap">
        Sign In
      </div>
     
      <p className="mt-[10px] [font-family:'Inter-Light',Helvetica] font-light text-[#898989] text-[20px] text-center tracking-[-0.30px] leading-[31.7px] whitespace-nowrap">
        Welcome! Login to existing Account
      </p>
      <form action="" className="mt-[44px] ml-[132px] ipad:ml-[30px] sm:ml-[20px]">
        <div className="w-[362px] ipad:w-[340px] sm:w-[315px] h-[64px] flex justify-evenly  rounded-[5px] border border-solid border-violet-100">
        <img className=" w-[18px] h-[16px] mt-[24px] ml-[9px]  object-cover" alt="Line" src={email} />
      <input type="email" placeholder="Enter your email" className="mr-[60px] px-3 focus:outline-none  "  />
      </div>
      <div className="w-[362px] ipad:w-[340px] sm:w-[315px] h-[64px] mt-[10px] flex justify-evenly  rounded-[5px] border border-solid border-violet-100">
        <img className=" w-[16px] h-[21px] mt-[22px] ml-[9px]  object-cover" alt="Line" src={password} />
      <input type="password" placeholder="Enter your password" className="mr-[60px] px-3 focus:outline-none  "  />
      </div>
      <NavLink to='/forgetpassword' className=" ml-[265px] ipad:ml-[245px] sm:ml-[220px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#c4c3c3] text-[12px] text-center tracking-[0] leading-[normal]">Forget Password?</NavLink><br/>
      <NavLink to='/dashboards'>
      <button className=" w-[112px]  h-[34px] mt-4 text-center ml-[135px] sm:ml-[100px] text-white bg-[#168356] rounded-[5.15px] border-[0.86px] border-solid border-[#18a0fb]">Log in</button><br/>
      </NavLink>
      <div className="mt-7 ml-[186px] sm:ml-[150px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#1e1e1e66] text-[14px] tracking-[0] leading-[normal]">
        or
      </div>
      <div className=" mt-[-4px] w-[362px] ipad:w-[340px] sm:w-[315px] h-px  object-cover border border-gray-300 border-opacity-20"/><br/>
      <NavLink to='/google'>
      <div className=" mt-[29px] w-[364px] ipad:w-[340px] sm:w-[315px] h-[52px]  rounded-[5px] border border-solid border-[#f0edff] flex" >
      <img className=" ml-[120px] mt-[12px] w-[30px] h-[30px] items-center  object-cover" alt="Google" src={google} />
      <span className="ml-[8px] mt-[20px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#1c1c1c] text-[12px] tracking-[0]">
          Login with{" "}
        </span>
        <span className="[font-family:'Inter-Bold',Helvetica] font-bold mt-[20px]  text-[12px] ml-1 ">google</span>
      </div>
      </NavLink>
      <NavLink to='/facebook'>
      <div className=" mt-4 w-[364px] ipad:w-[340px] sm:w-[315px] h-[52px]  rounded-[5px] border border-solid border-[#f0edff] flex" >
      <img className=" ml-[120px] mt-[12px] w-[30px] h-[30px] items-center  object-cover" alt="Google" src={facebook} />
      <span className="ml-[8px] mt-[20px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#1c1c1c] text-[12px] tracking-[0]">
          Login with{" "}
        </span>
        <span className="[font-family:'Inter-Bold',Helvetica] font-bold mt-[20px]  text-[12px] ml-1 ">Facebook</span>
      </div>
      </NavLink>
      <div className="w-[244px]  h-[17px] mt-[54px] ml-[75px] ipad:ml-[50px] sm:ml-[25px]">
      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[normal]">
        <span className="text-[#1e1e1e66]">Don’t Have an account?</span>
        <span className="text-[#000000b2]">&nbsp;</span>
        <NavLink to='/signup'>
        <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#3792de]">Signup Now.</span>
        </NavLink>
      </p>
    </div>
      </form>
      </div>
    </div>
   </div>
    </>
  )}