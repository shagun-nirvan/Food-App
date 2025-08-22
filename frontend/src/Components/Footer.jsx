import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]' id='footer'>
        <div className='w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px] max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-[35px]'>
            <div className="flex flex-col items-start gap-[20px]">
                <img className='w-[180px] h-[50px] ' src={assets.logo2} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloribus eos cum animi nostrum earum? Perspiciatis exercitationem dolorum harum commodi suscipit laudantium.</p>
                <div className="w-[40px] mr-[15px] flex flex-row gap-[10px]">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
                <h2 className='text-2xl font-medium text-white'>COMPANY</h2>
                <ul className='mb-[10px] cursor-pointer'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="flex flex-col items-start gap-[20px]">
                <h2 className='text-2xl font-medium text-white'>CONTACT INFO</h2>
                <ul className='mb-[10px] cursor-pointer'>
                    <li>+1-433-768-3829</li>
                    <li>contact@mymail.com</li>
                </ul>

            </div>
            
        </div>
        <hr className='w-full h-[2px] my-[20px] mx-[0px] bg-grey ' />
        <p className="max-[750px]:text-center">Copyright 2025 ©  Foodly.com - All Rights Reserved.
</p>
    </div>
  )
}

export default Footer