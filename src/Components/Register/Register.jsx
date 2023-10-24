import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {createUser}= useContext(AuthContext);

    const [show, setshow]= useState(false);



    const handleCreateUser=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        const terms= form.terms.checked;
        
        // console.log('Created successfully');
        
        
        // password validation
        if (password.length < 8) {
            console.log("Password must be  8 characters or longer");
            Swal.fire('',"Password must be  8 characters or longer",'error');
            
            return;
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/) {
            return Swal.fire(
              "Your password must contain at least a upperCase characters and a number.",'warning'
            );
          }


        // create user by email and password
        createUser( email, password)
        .then(result=>{
            console.log(result.user);
            //update username
            updateProfile(result.user, {
                displayName:name
            })
            const userCreatedat= result.user?.metadata?.userCreatedAt;
            const newUser={name, email, password, terms, userCreatedat};
            fetch('https://brand-store-server-noiec3304-sabbirahmed0007.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire('Great job','user created successfully','success');
                        form.reset();
                    }
                    

                })
           
        })
        .catch(error=>{
            console.error('Error', error);
            Swal.fire('Opps','Something went wrong','error');
        })

    }


    return (
        <div className='body py-10'>

        <div className=' w-9/12 lg:w-2/5 mx-auto  border   drop-shadow-lg shadow-lg p-4 lg:p-7 rounded-lg'>
            <div>
                <h2 className='font-bold text-3xl text-center mb-9'>Create Account</h2>
            </div>
            <div>
                <form  onSubmit={handleCreateUser}>
                <div>
                        <label htmlFor="name" className='font-bold text-lg'>Name</label><br />
                        <input type="text" name="name" id="" className='w-full bg-slate-200 p-3 text-black rounded-lg' placeholder='Enter your name' />
                    </div>
                    <div className='my-8'>
                        <label htmlFor="email" className='font-bold text-lg'>Email</label><br />
                        <input type="email" name="email" id="" className='w-full bg-slate-200 p-3 text-black rounded-lg' placeholder='Enter a valid email' />
                    </div>
                    <div className='my-8 relative'>
                        <label htmlFor="password" className='font-bold text-lg'>Password</label><br />
                        <input type={show ? "text" : "password"} name="password" id="" className='w-full  bg-slate-200 text-black p-3 rounded-lg ' placeholder='Enter password' />
                        <p onClick={()=>setshow(!show)} className='absolute right-4 top-10'>
                                {
                                    show? <BiSolidShow className=' text-2xl text-black'></BiSolidShow>:<AiFillEyeInvisible className='text-2xl text-black'></AiFillEyeInvisible>
                                }
                            </p>
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