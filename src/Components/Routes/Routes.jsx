import React from 'react';
import Mainlayout from '../Layout/Mainlayout';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';
import AddProducts from '../Pages/AddProducts/AddProducts';
import MyCart from '../Pages/MyCart/MyCart';
import Login from '../Pages/Login/Login';
import Register from '../Register/Register';
import Brands from '../Sections/Brands/Brands';
import DisplayData from '../Pages/DisplayData/DisplayData';
import BrandData from '../Pages/BrandData/BrandData';
import PrivateRouter from './PrivateRouter';
import OurMission from '../Sections/Aboutus/OurMission';

const routes= createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addproducts',
                element:<PrivateRouter><AddProducts></AddProducts></PrivateRouter>

            },
            {
                path:'/ourmission',
                element:<OurMission></OurMission>
            },

            {
                path:'/mycart',
                element:<PrivateRouter><MyCart></MyCart></PrivateRouter>
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
           
            {
                path:'/displaydata',
                element:<PrivateRouter><DisplayData></DisplayData></PrivateRouter>,
                loader:()=>fetch('http://localhost:5000/data')
            },

            {
                path:'/branddata/:brandName',
                element:<BrandData></BrandData>,
                loader:({params})=>fetch(`http://localhost:5000/data/${params.brandName}`)

            }
         
        ]
    }
])

export default routes;