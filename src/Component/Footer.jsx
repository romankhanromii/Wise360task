import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="flex justify-between">
    <p className=" mt-[116px] ml-[43px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[16px] sm:text-[12px]  tracking-[-0.24px] leading-[31.7px] whitespace-nowrap">
      All Rights Reserved © LIAM 2023
    </p>
    <div className='flex mt-[116px] space-x-6 sm:space-x-5 mr-[44px] sm:ml-[10px]  '>
      <NavLink to="https://www.instagram.com/your-instagram-link">
        <FaInstagram size={32} color="white"  />
      </NavLink>
      <NavLink to="https://www.facebook.com/your-facebook-link">
        <FaFacebook size={32} color="white" />
      </NavLink>
      <NavLink to="https://www.twitter.com/your-twitter-link">
        <FaTwitter size={32} color="white" />
      </NavLink>
    </div>
  </div>
  )
}
