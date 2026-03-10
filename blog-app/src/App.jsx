import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Register from './component/Register'
import Login from './component/Login'
import AddArticle from './component/AddArticle'
import Home from './Home'
import RootLayout from './component/RootLayout'
import UserProfile from './component/UserProfile'
import AuthorProfile from './component/AuthorProfile'
import {Toaster} from 'react-hot-toast'
function App() {
  let routingObj = createBrowserRouter([
    {
      path : "/",
      element :<RootLayout></RootLayout>,
      children :[
        {
          path: "",
          element : <Home></Home>
        },
        {
          path: "register",
          element : <Register></Register>
        },
        {
          path: "login",
          element : <Login></Login>
        },
        {
          path: "user-profile",
          element : <UserProfile></UserProfile>
        },
        {
          path: "author-profile",
          element : <AuthorProfile></AuthorProfile>,
          children : [
            {
                path: "add-article",
                element : <AddArticle></AddArticle>
            }
          ]
        }
      ]
    }
  ])
  return (
    <>
      <Toaster position='top-center' reverseOrder= {false}></Toaster>
      <RouterProvider router = {routingObj}></RouterProvider>
    </>
  )
}

export default App