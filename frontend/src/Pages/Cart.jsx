import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount , url} = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className='mt-[100px] '>
      <div className="cart-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] my-10px mx-0px text-black p-[9px]">
                  <img className='w-[50px]' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>x</p>

                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
              </div>

            )
          }
        })}
      </div>
      <div className='mt-[80px] flex justify-between gap-[max(12vw,20px)] max-[750px]:flex-col-reverse'>
        <div className="flex-1 flex flex-col gap-[20px]">
          <h2 className='text-3xl'>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555] ">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px] mx-[0px]' />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr className='my-[10px] mx-[0px]' />
            <div className="flex justify-between text-[#555] mb-[4px]">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 50}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className='border-none text-white bg-amber-600 w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>

        </div>
        <div className='flex-1 max-[750px]:justify-start'>
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input className='bg-transparent outline-none pl-[10px]' type="text" placeholder='promo code' />
              <button className='w-[max(10vw,150px)] py-[12px] px-[5px] bg-black border-none text-white rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart