import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div style={{ fontSize: 'max(3vw, 20px)' }} className='mx-auto m-auto mt-[100px] text-center font-medium' id='app-download'>
        <p>For Better Experience Download <br/> Foodly App</p>
        <div className='flex justify-center gap-[max(2vw,10px)] mt-[40px]'>
            <img className='w-[max(30vw,120px)] max-w-[180px] transition duration-500 cursor-pointer hover:scale-105' src={assets.play_store} alt="" />
            <img className='w-[max(30vw,120px)] max-w-[180px] transition duration-500 cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload