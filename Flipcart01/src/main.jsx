import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Man from './Components/Man.jsx'
import Women from './Components/Women.jsx'
import Electronic from "./Components/Electronic.jsx";
import Kids from './Components/Kids.jsx'

const router= createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>
      },{
        path : '/mens',
        element : <Man/>
      },
      {
        path :'/womens',
        element : <Women/>
      },{
        path : '/electronics',
        element : <Electronic/>
      },{
        path : "/Kids",
        element : <Kids/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

