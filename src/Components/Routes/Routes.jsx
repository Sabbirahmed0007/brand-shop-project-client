import React from 'react';
import Mainlayout from '../Layout/Mainlayout';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';
import AddProducts from '../Pages/AddProducts/AddProducts';
import MyCart from '../Pages/MyCart/MyCart';

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
                element:<AddProducts></AddProducts>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            }
        ]
    }
])

export default routes;