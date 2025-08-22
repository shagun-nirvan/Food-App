import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country : "",
    phone: ""

  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+50
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("Error")
    }
    
  }

  const navigate = useNavigate()

  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className="w-full max-w-[max(30%,500px)]">
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className="flex gap-[10px]">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='First Name'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName}  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text"  placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="email" placeholder='Email address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='Street'/>
        <div className="flex gap-[10px]">
          <input required name='city' onChange={onChangeHandler} value={data.city} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='City'/>
          <input required name='state' onChange={onChangeHandler} value={data.state} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text"  placeholder='State'/>
        </div>
        <div className="flex gap-[10px]">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='Zip Code'/>
          <input required name='country' onChange={onChangeHandler} value={data.country} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text"  placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-amber-600' type="text" placeholder='Phone'/>
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
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
          <button type='submit'  className='border-none text-white bg-amber-600 w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer'>PROCEED TO PAY</button>

        </div>
      </div>
    </form>
  )
}

export default PlaceOrder