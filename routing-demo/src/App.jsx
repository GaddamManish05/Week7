import React from 'react'
import {createBrowserRouter,RouterProvider,Navigate} from 'react-router'
import RootLayout from './components/RootLayout'
import Login from './components/spects/login'
import Register from './components/spects/Register'
import Technologies from './components/spects/Technologies'
import Home from './components/spects/Home'
import Java from './components/spects/Java'
import Vue from './components/spects/Vue'
import Angular from './components/spects/Angular'

function App() {
  const routingObj = createBrowserRouter([
    {
      path : "/",
      element : <RootLayout/>,
      children : [
        {
          path : "",
          element : <Home/>
        },
        {
          path : "register",
          element : <Register/>
        },
        {
          path : "login",
          element : <Login/>
        },
        {
          path : "technologies",
          element : <Technologies/>,
          children : [
            {
              path : "java",
              element : <Java/>
            },
            {
              path : "angular",
              element : <Angular/>
            },
            {
              path : "vue",
              element : <Vue/>
            },
            {
              path:"",
              element:<Navigate to="java"/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routingObj}/>
  )
}

export default App