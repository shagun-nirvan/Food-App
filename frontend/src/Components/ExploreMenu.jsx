import React from 'react'
import { menu_list } from '../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='flex flex-col gap-[20px]' id='explore-menu'>
            <h1 className='text-3xl text-[#262626] font-medium'>Explore our Menu</h1>
            <p className='max-w-[60%] text-[#808080] max-[1050px]:max-w-[100%] max-[1050px]:text-[14px]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className='flex justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] overflow-x-scroll hide-scrollbar'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img src={item.menu_image} alt="" className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200 ${category === item.menu_name ? "border-[4px] border-solid border-amber-600 p-[2px]" : ""}`} />
                            <p style={{ fontSize: 'max(1.4vw, 16px)' }} className='mt-[10px] text-[#747474]'>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr className='my-[10px] mx-[0px] h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu