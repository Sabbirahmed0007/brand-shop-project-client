import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut}= useContext(AuthContext);
    console.log(user);
    const navLinks=<div className='font-bold flex flex-col lg:flex-row'>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/addproducts'}>Add Products</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : ""} to={'/mycart'}>My Cart</NavLink></li>
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
                    <div className=" flex items-center justify-center">
                    <li className='list-none'><a href="https://www.sabbirahmed3071@gmail.com">{user&& user.email}</a></li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                user?<div className="w-10 rounded-full"><img src={user && user.photoURL} /></div>: " "
                            }
                            
                        </label>
                    </div>
                    <div>
                        {
                            user? <Link onClick={handleLogOut} className='btn  font-bold btn-sm' to={'/'}>Log Out</Link>
                            :
                            <Link className='btn  font-bold btn-sm' to={'/login'}>Log In</Link>

                        }
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;