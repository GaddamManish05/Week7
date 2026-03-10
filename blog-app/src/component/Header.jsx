import React from 'react'
import blog from '../assets/blog.jpg'
import { NavLink } from 'react-router'

import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass
} from '../styles/Common'

function Header() {
  return (

    <nav className={navbarClass}>

      <div className={navContainerClass}>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={blog} alt="blog" className="w-8 h-8 rounded-xl" />
          <span className={navBrandClass}>BlogSpace</span>
        </div>

        {/* Navigation Links */}
        <ul className={navLinksClass}>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? navLinkActiveClass : navLinkClass
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? navLinkActiveClass : navLinkClass
              }
            >
              Register
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? navLinkActiveClass : navLinkClass
              }
            >
              Login
            </NavLink>
          </li>

        </ul>

      </div>

    </nav>

  )
}

export default Header