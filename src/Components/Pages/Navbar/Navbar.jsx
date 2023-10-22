import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const {user, logOut}= useContext(AuthContext);
    console.log(user);


    const [theme, setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"): "light")

    useEffect(()=>{
        localStorage.setItem("theme", theme );
        const localTheme = localStorage.getItem("theme");
        document.querySelector('html').setAttribute("data-theme", localTheme)
        // setTheme(localTheme);

    },[theme])


    const navLinks=<div className='font-bold flex flex-col lg:flex-row'>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/addproducts'}>Add Products</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/mycart'}>My Cart</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/displaydata'}>All Products</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/branddata'}>Brands Products</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/register'}>Register</NavLink></li>
    </div>

const handleLogOut=()=>{
    logOut()
    .then(()=>{
        console.log('You logged out successfully');
        swal("Good job!", "You Logged out successfully!", "success");
    })
    .catch(error=>{
        console.error("Error", error.massage);
    })
}

    
    return (
        <div>
           
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
                    <div className='flex items-center justify-center align-middle gap-4'>
                        <div>
                        <label className="swap swap-rotate">
  
                                <input type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                                
                                {/* light */}

                                <svg className="swap-on fill-current w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                                
                                {/* dark*/}
                                <svg className="swap-off fill-current w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                                
                            </label>
                        </div>
                        <Link className='flex justify-center items-center'><h2 className='text-2xl font-extrabold'><span className=' bg-gradient-to-br from-indigo-700 to-green-500 text-transparent bg-clip-text'>Zeph</span><img src="https://i.ibb.co/7Qp7kfC/logo.png" alt="" className='w-6 inline' />nix  </h2></Link>
                    </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    </div>
                    <div className="navbar-end">
                    <div className=" flex items-center justify-center">
                    <li className='list-none font-bold'><a href="https://www.sabbirahmed3071@gmail.com">{user&& user.displayName}</a></li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                user?<div className="w-10 rounded-full"><img src={user && user.photoURL} /></div>: " "
                            }
                            
                        </label>
                    </div>
                    <div>
                        {
                            user? <Link onClick={handleLogOut} className='btn  font-bold border-cyan-600 text-cyan-600' to={'/'}>Log Out</Link>
                            :
                            <Link className='btn  font-bold  border-fuchsia-500 text-fuchsia-600' to={'/login'}>Log In</Link>

                        }
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;