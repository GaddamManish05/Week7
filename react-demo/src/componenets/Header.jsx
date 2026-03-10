import React from 'react'
import logo from '../assets/logo.jpg'
import {NavLink} from 'react-router'
function Header() {
  return (
    <div className='bg-blue-300'>
        <nav className='flex justify-between'>
            <img width = "11%" className = 'px-10 rounded-full' src={logo} alt="" />
                <ul className='flex gap-10 px-10 m-5'>
                    <li >
                        <NavLink to = "" className={({isActive}) => isActive ? "text-white" : "text-black-500"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = "products" className={({isActive}) => isActive ? "text-white" : "text-black-500"}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to = "contact" className={({isActive}) => isActive ? "text-white" : "text-black-500"}>Product</NavLink>
                    </li>
                </ul>
            </nav>
    </div>
)
}

export default Header