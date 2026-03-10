import React from 'react'
import {Outlet,NavLink} from 'react-router'
import Java from './Java'
import Angular from './Angular'
import Vue from './Vue'

function Technologies() {
  return (
    <div className='mt-10'>
        <nav>
            <ul className='flex justify-evenly'>
                <li>
                    <NavLink to = "java">Java</NavLink>
                </li>
                <li>
                    <NavLink to = "angular">Angular</NavLink>
                </li>
                <li>
                    <NavLink to = "vue">Vue</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Technologies