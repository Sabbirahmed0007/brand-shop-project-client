import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import './login.css'

const Login = () => {

    const login = (e)=>{
        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        const email= form.email.value;
        const password= form.password.value;

        const userLoggedIn ={name, email, password};
        console.log(userLoggedIn);

        
    }
    const handleSignInByGoogle=()=>{

    }
    const handleGithubSignIn =()=>{

    }

    
    return (
        <div className='login py-10'>
            <div className=' w-11/12 lg:w-2/5 mx-auto flex justify-center shadow-lg border p-7 rounded-lg'>
                <div  className='w-full drop-shadow-lg '>
                    <div className='text-center mb-7'>
                        <h3 className='font-extrabold text-3xl bg-gradient-to-br capitalize from-green-600 to-yellow-500 text-transparent bg-clip-text p-2'>Good to see you again</h3>
                    </div>
                    <form onSubmit={login}>
                        {/* <div>
                            <label htmlFor="name" className='font-bold text-lg'>Name</label><br />
                            <input type="text" name="name" id="" className='w-full bg-slate-200 p-3 rounded-lg' placeholder='Enter your name' />
                        </div> */}
                        <div className='my-8'>
                            <label htmlFor="email" className='font-bold text-lg'>Email</label><br />
                            <input type="email" name="email" id="" className='w-full bg-slate-200 p-3 rounded-lg' placeholder='Enter a valid email' />
                        </div>
                        <div className='my-8'>
                            <label htmlFor="password" className='font-bold text-lg'>Password</label><br />
                            <input type="password" name="password" id="" className='w-full bg-slate-200 p-3 rounded-lg' placeholder='Enter password' />
                        </div>
                        <div>
                            <button className='btn w-full bg-green-400 hover:bg-green-500 font-bold text-white'>Log in</button>
                        </div>
                    </form>
                    <div className='h-7'>
                        <p className=' my-7 '>
                        Don't Have An Account ? <Link className='link font-bold' to={'/register'}>Create a new account</Link>
                        </p>
                    </div>
                    <div className='text-center flex  gap-2 my-4 lg:gap-1 items-center justify-center '>
                        <button onClick={handleSignInByGoogle}  className='btn btn-outline hover:bg-slate-300 hover:text-violet-700 my-2 font-bold text-white'>
                            <FaGoogle className='text-xl '></FaGoogle>
                            Log in with Google
                        </button>
                        <button onClick={handleGithubSignIn} className='btn btn-outline hover:bg-slate-300 hover:text-violet-700 my-2 font-bold text-white'>
                            <FaGithub className='text-xl '></FaGithub>
                            Log in with GitHub
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;