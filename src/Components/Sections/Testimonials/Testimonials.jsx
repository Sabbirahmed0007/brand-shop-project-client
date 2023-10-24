import React, { useEffect, useState } from 'react';

const Testimonials = () => {

    const [testimonials, setTestimonials]=useState([]);

    useEffect(()=>{
        fetch(`review.json`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setTestimonials(data);
        })
    },[])

    return (
        <div>
            <div className='mt-20'>
                <h2 className='capitalize font-bold text-center my-7 text-2xl'>Testimonial and Public review</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 my-10 mx-5'>
                {
                    testimonials.map(testimonial=>
                        <div key={testimonial.id} className='shadow-md'>
                            <div className=' p-2 py-6 rounded-md drop-shadow-xl border-2'>
                                <h2 className='text-center my-1 font-medium'>{testimonial.date}</h2>
                                <h1 className='text-center my-1 text-lg font-extrabold text-amber-500'>{testimonial.name}</h1>
                                <p className='text-center my-1 font-semibold'><span className='font-bold'>Rating: </span>{testimonial.rating}</p>
                                <p className='text-center my-1 font-medium text-green-600'><span className='font-extrabold '>Testimonial: </span>{testimonial.comment}</p>
                            </div>

                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Testimonials;