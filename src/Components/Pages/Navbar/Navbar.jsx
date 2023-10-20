import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks=<div className='font-bold flex flex-col lg:flex-row'>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/addproducts'}>Add Products</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/mycart'}>My Cart</NavLink></li>
    </div>

    
    return (
        <div>
            {/* <h2>Logo with photo</h2>
            <h1>Navbar here</h1>
            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/addproducts'}>Add Products</NavLink>
                <NavLink to={'/mycart'}>My Cart</NavLink>
            </div> */}
            <div className="navbar shadow-lg mt-0">
                    <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <Link className='flex justify-center items-center'><h2 className='text-2xl font-extrabold'><span className=' bg-gradient-to-br from-indigo-700 to-green-500 text-transparent bg-clip-text'>Zeph</span><img src="https://i.ibb.co/7Qp7kfC/logo.png" alt="" className='w-6 inline' />nix  </h2></Link>
                    </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    </div>
                    <div className="navbar-end">
                    <div>
                        <Link to={'/login'} className='btn font-bold btn-sm'>Log in</Link>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;