import React from 'react'
import {NavLink} from 'react-router'
function Header() {
  return (
    <div className='bg-amber-200 p-5'>
        <nav className='flex justify-between '>
            <img className = '' src="" alt="" />
            <ul className='flex gap-10 px-10'>
                <li className='mt-5'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='mt-5'>
                    <NavLink to="register">Register</NavLink>
                </li>
                <li className='mt-5'>
                    <NavLink to="login">Login</NavLink>
                </li>
                <li className='mt-5'>
                    <NavLink to="technologies">Technologies</NavLink>
                </li>
            </ul>
        </nav>
    </div>
)
}

export default Header