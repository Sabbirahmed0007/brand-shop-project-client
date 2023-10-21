import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/5LCVsbX/istockphoto-527613951-612x612.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-center">About Us</h1>
                    <p className="py-6 text-center"><span className='text-2xl font-bold text-fuchsia-600'>Welcome to</span> <Link className='flex justify-center items-center'><h2 className='text-2xl font-extrabold inline'><span className='inline bg-gradient-to-br from-indigo-700 to-green-500 text-transparent bg-clip-text'>Zeph</span><img src="https://i.ibb.co/7Qp7kfC/logo.png" alt="" className='w-6 inline' />nix  </h2></Link> Your trusted source for the latest in technology and electronics. Our passion for innovation and cutting-edge gadgets has driven us to create a platform that not only showcases the most exciting products but also helps you make informed decisions.</p>
                    <div className='text-center'>
                    <Link to={'/ourmission'} className="btn bg-lime-300 font-bold  hover:bg-lime-600 hover:text-white">Know more about us</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;