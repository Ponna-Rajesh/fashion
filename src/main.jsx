import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import Men from "./components/pages/Men"
import Women from "./components/pages/Women"
import Kids from "./components/pages/Kids"
import Home from "./components/pages/Home"
import Beauty from "./components/pages/Beuty"
import { Provider } from "react-redux"
import appStore from './components/store/store'
import WishList from './components/pages/WishList'
import Bag from './components/pages/Bag'
import All from "../src/components/pages/All"

function App() {
  return (
    <>
   
    <div className="w-full max-w-[95rem] mx-auto">
       <Provider store={appStore}>
          <Header />
          <Outlet /> 
        </Provider>
    </div>
   
    </>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/men",
        element: <Men />
      },
      {
        path: "/women",
        element: <Women />
      },
      {
        path: "/kids",
        element: <Kids />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/beauty",
        element: <Beauty />
      },
      {
        path: "/wishlist",
        element: <WishList />
      },
      {
        path: "/bag",
        element: <Bag />
      },
      {
        path: "/all",
        element: <All />
      }
    ], 
    // errorElement: <Error />,
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={appRouter}/>
)
