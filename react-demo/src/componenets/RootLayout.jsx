import React from 'react'
import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'

function RootLayout() {
  return (
    <div>
        <Header></Header>
        <div className='text-center mt-10'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout