import React from 'react'
import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'
function RootLayout() {
  return (
    <div className='flex flex-col text-center'>
        <header>
            <Header></Header>
        </header>
        <main className='min-h-screen'>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default RootLayout