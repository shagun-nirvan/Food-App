import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/assets'


const MyOrders = () => {

    const {url,token} = useContext(StoreContext)
    const [data,setData] = useState([])

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data);
        
        
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])


  return (
    <div className='my-[50px] mx-[0px]'>
        <h2 className='text-3xl'>My Orders</h2>
        <div className="flex flex-col gap-[20px] mt-[30px]">
            {data.map((order,index)=>{
                return(
                    <div key={index} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] max-w-[900px]:grid-col-[1fr_2fr_1fr] items-center gap-[30px] text-[14px] py-[10px] px-[20px] text-[#454545] border-1 border-solid border-amber-600 max-w-[900px]:gap-y-[5px] max-w-[900px]:text-[12px]">
                    <img className='w-[50px]' src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                            return item.name+" x "+item.quantity
                        }
                        else{
                             return item.name+" x "+item.quantity+", "
                        }
                    })}</p>
                    <p>₹{order.amount}.00</p>
                    <p>Items:{order.items.length}</p>
                    <p><span className='text-amber-600'>&#x25cf;</span><b className='font-medium text-[#454545]'>{order.status}</b></p>
                    <button onClick={fetchOrders} className='py-[12px] px-[0px] rounded-[4px] bg-[#ffe1e1] cursor-pointer text-[#454545] max-w-[900px]:text-[10px]'>Track Order</button>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders