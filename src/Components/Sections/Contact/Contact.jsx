import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='my-14 bg-violet-300 text-black py-4' data-aos="fade-up">
            <h1 className='capitalize font-bold text-3xl text-center my-4'>Contact with us through</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 space-y-5 text-center px-2'>
                <div className=' mx-auto'>
                    <h1 className=' font-bold text-xl'>Contact Info</h1>
                    <div className='grid grid-cols-2 my-5  mx-1 gap-4'>
                        <div className='font-semibold'>
                            <p><span className='font-bold'>Address</span>: House #123, Road #45, Gulshan-2</p>
                            <p><span className='font-bold'>PostalCode</span>: 1212</p>
                            <p className='font-bold text-lg'>Dhaka</p>
                            <p className='font-bold text-lg'>Bangladesh</p>
                        </div>
                        <div className='font-semibold'>
                            <p>Phone: +1 (123) 456-7890</p>
                            <p>Email: www.zephonix@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className=' mx-auto py-4'>
                    <h2 className='font-bold text-2xl my-3'>Follow us on Social Media</h2>
                    <div className='text-center w-3/5 mx-auto flex  justify-center gap-5'>
                        <a href='https://www.facebook.com' className='font-bold text-3xl' data-aos="zoom-out-right"><FaFacebookF className='text-blue-500'></FaFacebookF></a>
                        <a href='https://www.twitter.com' className='font-bold text-3xl' data-aos="zoom-out-up"><FaTwitter className='text-blue-400'></FaTwitter></a>
                        <a href='https://www.instagram.com' className='font-bold text-3xl' data-aos="zoom-out-down"><FaInstagram className=''></FaInstagram></a>
                        <a href='https://www.linkedin.com' className='font-bold text-3xl' data-aos="zoom-out-left"><FaLinkedinIn className='text-blue-800'></FaLinkedinIn></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;