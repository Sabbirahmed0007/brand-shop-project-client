import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
    return (
        <div className='body py-10'>

        <div className=' w-9/12 lg:w-2/5 mx-auto  border   drop-shadow-lg shadow-lg p-4 lg:p-7 rounded-lg'>
            <div>
                <h2 className='font-bold text-3xl text-center mb-9'>Create Account</h2>
            </div>
            <div>
                <form >
                <div>
                        <label htmlFor="name" className='font-bold text-lg'>Name</label><br />
                        <input type="text" name="name" id="" className='w-full bg-slate-200 p-3 rounded-lg' placeholder='Enter your name' />
                    </div>
                    <div className='my-8'>
                        <label htmlFor="email" className='font-bold text-lg'>Email</label><br />
                        <input type="email" name="email" id="" className='w-full bg-slate-200 p-3 rounded-lg' placeholder='Enter a valid email' />
                    </div>
                    <div className='my-8'>
                        <label htmlFor="password" className='font-bold text-lg'>Password</label><br />
                        <input type="password" name="password" id="" className='w-full bg-slate-200 p-3 rounded-lg' placeholder='Enter password' />
                    </div>
                    <div className='flex items-center my-5'>
                        <input type="checkbox" name="terms" id="" />&nbsp;
                         I accept all the &nbsp;
                        <Link className='link font-bold'> terms and conditions</Link>
                        {/* <input type="text" name="name" id="" placeholder='Enter your name'/> */}
                    </div>
                    <div>
                        <button type="submit" className='btn w-full hover:bg-lime-500 text-white bg-lime-400 font-bold'>Create a New Account</button>
                    </div>
                </form>
                <div className='my-5 '>
                    <h1 className='font-medium'>Already have an account? <Link className='link font-bold' to={'/login'}> Log in</Link></h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;