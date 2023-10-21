import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurMission = () => {
    const goBack=useNavigate();

    const goBacktoprevious=()=>{
        goBack(-1);
    }


    return (
        <div className='mt-6'>
            <div className='my-10 w-4/5 lg:w-2/5 mx-auto drop-shadow-xl'>
                <h1 className='text-center font-extrabold text-3xl'>Our Mission</h1>
                <p className='font-semibold text-justify mx-3'>At <span className='font-extrabold text-xl text-amber-600'>Zephonix</span>, we are committed to providing you with up-to-date information and reviews on the latest tech trends, electronic devices, and gadgets. Our mission is to empower you with the knowledge needed to make smart choices when it comes to your tech investments.</p>
            </div>
            <div className='my-1'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/3yyzhQ0/istockphoto-1634331682-612x612.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h2 className='font-bold text-2xl text-center my-2'>Why Choose Us</h2>
                    <h2><span className='font-bold '> Expertise</span> : Our team of tech enthusiasts and experts is dedicated to researching and evaluating the newest tech products to provide you with unbiased reviews and recommendations.</h2>
                    <h2 className='my-2'><span className='font-bold'>Comprehensive Guides</span>: We offer comprehensive buying guides, tutorials, and how-to articles to ensure you get the most out of your tech investments.</h2>
                    <h2 className="my-2"><span className='font-bold'>Community</span>: Join our community of tech lovers to share insights, ask questions, and stay updated with the fast-paced tech world.</h2>
                    <h2 ><span className='font-bold'>Transparency</span>: We believe in honesty and transparency. Our reviews and recommendations are based on real testing and user experiences.</h2>
                </div>

                </div>
            </div>

            <div className='text-center'>
                <button className='capitalize btn-success my-4 ml-3 p-2 rounded-md font-bold text-white' onClick={goBacktoprevious}> ⬅  Move to Previous page</button>
            </div>

            </div>
        </div>
    );
};

export default OurMission;