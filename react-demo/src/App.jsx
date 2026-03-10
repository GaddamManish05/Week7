import React from 'react'
import {createBrowserRouter,RouterProvider,Navigate} from 'react-router'
import RootLayout from './componenets/RootLayout'
import Home from './componenets/Home'
import ProductList from './componenets/ProductList'
import Contact from './componenets/Contact'
import Product from './componenets/Product'
function App() {
  const routerObj = createBrowserRouter([
    {
      path : '/',
      element : <RootLayout/>,
      children: [
        {
          path: '',
          element : <Home/>
        },
        {
          path: 'products',
          element : <ProductList/>
        },
        {
          path: 'contact',
          element : <Contact/>
        },
        {
          path : '/product',
          element : <Product/>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={routerObj}/>
    </div>
  )
}

export default App