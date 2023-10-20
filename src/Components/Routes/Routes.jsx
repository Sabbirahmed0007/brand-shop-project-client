import React from 'react';
import Mainlayout from '../Layout/Mainlayout';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from '../Pages/ErrorPage/Errorpage';
import Home from '../Pages/Home/Home';
import AddProducts from '../Pages/AddProducts/AddProducts';
import MyCart from '../Pages/MyCart/MyCart';
import Login from '../Pages/Login/Login';
import Register from '../Register/Register';

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
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default routes;