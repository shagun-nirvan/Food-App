import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-[100vh] border-[1.5px] border-solid border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
        <div className='pt-[50px] pl-[20%] flex flex-col gap-[20px]'>
            <NavLink to='/add' className={({isActive})=>
              `flex items-center gap-[12px] border-[1px] border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer ${isActive ? "border-amber-600 bg-[#fff0ed]" : ""}`}>
                <img src={assets.add_icon} alt="" />
                <p className='max-[900px]:hidden'>Add Items</p>
            </NavLink>
             <NavLink to='list' className={({isActive})=>
              `flex items-center gap-[12px] border-[1px] border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer ${isActive ? "border-amber-600 bg-[#fff0ed]" : ""}`}>
                <img src={assets.order_icon} alt="" />
                <p className='max-[900px]:hidden'>List Items</p>
            </NavLink>
             <NavLink to='orders' className={({isActive})=>
              `flex items-center gap-[12px] border-[1px] border-solid border-[#a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px_0px_0px_3px] cursor-pointer ${isActive ? "border-amber-600 bg-[#fff0ed]" : ""}`}>
                <img src={assets.order_icon} alt="" />
                <p className='max-[900px]:hidden'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar