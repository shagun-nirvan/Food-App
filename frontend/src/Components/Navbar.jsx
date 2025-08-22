import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home")

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

    const navigate = useNavigate()

    const logout = () =>{
        localStorage.removeItem("token")
        setToken("")
        navigate("/")

    }
    return (
        <div className='py-5 px-0 flex justify-between items-center'>
            <Link to={'/'}><img src={assets.logo2} alt="" className='w-[150px] max-[1050px]:w-[140px] max-[900px]:w-[120px]' /></Link>
            <ul className='flex list-none gap-5 text-[#49557e] text-[18px]  max-[1050px]:gap-[20px] max-[1050px]:text-[17px] max-[900px]:gap-[15px] max-[900px]:text-[16px] max-[750px]:hidden'>
                <Link to='/' onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact us")} className={`cursor-pointer ${menu === "contact us" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>contact us</a>
            </ul>
            <div className='flex items-center gap-[40px] max-[1050px]:gap-[30px] max-[900px]:gap-[20px]'>
                <img className='max-[1050px]:w-[22px] max-[900px]:w-[20px]' src={assets.search_icon} alt="" />
                <div className="relative">
                    <Link to={'/cart'}><img className='max-[1050px]:w-[22px] max-[900px]:w-[20px]' src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":'absolute min-w-[10px] min-h-[10px] bg-amber-600 rounded-[5px] top-[-8px] right-[-8px]'}></div>
                </div>
                {!token 
                ? <button onClick={() => setShowLogin(true)} className='bg-transparent text-base text-[#49557e] border-[1px] border-solid border-amber-600 py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition duration-300 max-[1050px]:py-[8px] max-[1050px]:px-[25px] max-[900px]:py-[7px] max-[900px]:px-[20px] max-[900px]:text-[15px]'>sign in</button>
               : <div className='relative group'>
                <img src={assets.profile_icon} alt="" />
                <ul className='absolute hidden right-0 z-[10] group-hover:flex flex-col bg-[#fff2ef] px-5 py-3 rounded-md border border-solid border-gray-200 shadow-md list-none w-[160px] outline-1'>
                    <li onClick={()=>navigate('/myorders')} className='flex items-center gap-3 p-2 rounded-md hover:text-amber-600 cursor-pointer transition'><img className='w-[20px]' src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout} className='flex items-center gap-3 p-2 rounded-md hover:text-amber-600 cursor-pointer transition'><img className='w-[20px]' src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
               </div> }
               
            </div>
        </div>
    )
}

export default Navbar