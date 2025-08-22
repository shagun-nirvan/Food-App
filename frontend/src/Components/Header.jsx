import React from 'react'

const Header = () => {
  return (
    <div className="h-[34vw] m-[30px] mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative ">

        <div style={{animation : 'fadeIn 3s'}} className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] max-[1050px]:max-w-[45%] max-[750px]:max-w-[65%]">
            <h2 style={{ fontSize: 'max(4.5vw, 5px)' }} className="text-2xl font-medium text-white">Order your favourite food here</h2>
            <p className='text-white text-[1vw] max-[750px]:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, onedelicious meal at a time.</p>
            <button style={{ fontSize: 'max(1vw, 13px)' }} className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white rounded-[50px] max-[750]:py-[2vw] max-[750]:px-[4vw]'>View More</button>
        </div>

    </div>
  )
}

export default Header