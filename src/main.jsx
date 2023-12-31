import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Applied_jobs from './Component/Applied_jobs/Applied_jobs';
import Blog from './Component/Blog/Blog';
import View_details from './Component/View_details/View_details';
import datas from '../view';
import applyloaded from './Component/Apply_jobs';
import ErrorPage from './Component/Errorpage/Errorpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
path:"/",
element:<Home></Home>,
loader:()=>fetch('data.json'),
    },{
      path:"/Statistics",
      element:<Statistics></Statistics>,
      
    },
    
    {
      path:"/Apply_job",
      element:<Applied_jobs></Applied_jobs>,
      loader:applyloaded,
    },
   
    {
      path:"/view_detail",
      element:<View_details></View_details>,
      loader:datas,
    },
    {
      path:"/Blogs",
      element:<Blog></Blog>
   
    },
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
   
     <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
