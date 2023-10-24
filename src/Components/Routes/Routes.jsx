import React from 'react';
import Mainlayout from '../Layout/Mainlayout';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';
import AddProducts from '../Pages/AddProducts/AddProducts';
import MyCart from '../Pages/MyCart/MyCart';
import Login from '../Pages/Login/Login';
import Register from '../Register/Register';
import DisplayData from '../Pages/DisplayData/DisplayData';
import BrandData from '../Pages/BrandData/BrandData';
import PrivateRouter from './PrivateRouter';
import OurMission from '../Sections/Aboutus/OurMission';
import Details from '../Pages/BrandData/Details';
import UpdateData from '../Pages/UpdateData/UpdateData';

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
                loader:()=>fetch('https://brand-store-server-noiec3304-sabbirahmed0007.vercel.app/data')
            },

            {
                path:'/branddata/:brandName',
                element:<PrivateRouter><BrandData></BrandData></PrivateRouter>,
                loader:({params})=>fetch(`https://brand-store-server-noiec3304-sabbirahmed0007.vercel.app/data/${params.brandName}`)

            },
            {
                path:'/mycart',
                element:<PrivateRouter><MyCart></MyCart></PrivateRouter>,
                // loader: ()=> fetch('https://brand-store-server-qk48k58v0-sabbirahmed0007.vercel.app/cart')
            },
            {
                path:'/updatedata/:id',
                element:<UpdateData></UpdateData>,
                // loader:({params})=> fetch(`https://brand-store-server-ntbir785y-sabbirahmed0007.vercel.app/singledata/${params.id}`)
                loader:({params})=> fetch(`https://brand-store-server-7tjc699uy-sabbirahmed0007.vercel.app/singledata/${params.id}`)

            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=> fetch(`https://brand-store-server-ntbir785y-sabbirahmed0007.vercel.app/singledata/${params.id}`)
            }
         
        ]
    }
])

export default routes;