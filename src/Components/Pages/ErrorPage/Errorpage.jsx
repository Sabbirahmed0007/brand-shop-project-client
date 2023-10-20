import React from 'react';
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
    const goBack= useNavigate()

    const handlegoBack=()=>{
        goBack(-1);
    }

    return (
        <div className='relative bg-white'>
            <img src="https://i.ibb.co/mhYXf84/HD-wallpaper-404-error-404-error.jpg" alt="" className='h-screen lg:w-10/12 mx-auto' />
            <div className='absolute top-2 left-3 '>
                <button onClick={handlegoBack} className='btn hover:btn-info hover:text-white font-bold btn-info'>Go to the previous</button>
            </div>

        </div>
    );
};

export default Errorpage;