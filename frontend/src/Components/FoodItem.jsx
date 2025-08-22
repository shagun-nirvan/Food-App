import React from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import { useContext } from 'react'

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <div style={{animation : 'fadeIn 1s'}} className='w-full m-auto rounded-[15px] shadow-[0_0_10px_#00000015] transition duration-300'>
        <div className="relative">
            <img className='w-full rounded-t-[15px] rounded-b-[0px]' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
                    ? <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='bottom-[15px] absolute right-[15px] flex items-center gap-[10px] p-[4.3px] rounded-[50px] bg-white'>
                        <img className='w-[30px] ' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img className='w-[30px] ' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>

            }
        </div>
        <div className="p-[20px]">
            <div className="flex justify-between items-center mb-[10px]">
                <p className='text-[20px] font-medium'>{name}</p>
                <img className='w-[70px]' src={assets.rating_starts} alt="" />
            </div>
            <p className="text-[12px] text-[#676767]">{description}</p>
            <p className="text-amber-600 text-[22px] font-medium my-[10px] mx-0">₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem