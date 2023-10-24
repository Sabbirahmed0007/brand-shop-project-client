import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    
    const Products = useLoaderData();
console.log(Products);
    const{name,category, photo, description, price, rating, brandName, _id }= Products;
    // console.log(name);
    const addToCart =()=>{
        const cartData={name, photo, price, brandName, category};
        console.log('cart added',cartData);
        fetch(`https://brand-store-server-3nbw00r92-sabbirahmed0007.vercel.app/cart`,{
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(cartData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire('','Added to the cart successfully','success');
            }
        })
    }

    return (
        <div className='my-10'>
            <div>
                <h1 className='font-bold text-xl  text-center'>{name}'s Details</h1>
                <div className='mx-7 flex my-5 flex-col lg:flex-row items-center'>
                    <div className='lg:mr-20 flex-1' data-aos="zoom-out-right">
                        <img src={photo} alt="" className='w-full rounded-md' />
                    </div>
                    <div className='mx-2 my-6 lg:mr-20 flex-1'>
                        <h1 className='font-bold text-3xl'>{name}</h1>
                        <h1 className='uppercase font-bold'>{category}</h1>
                        <h1 className='font-semibold'><span className='font-bold'>Brand : </span>{brandName}</h1>
                        <h2 className='font-semibold'><span className='font-bold'>Price : </span>{price}</h2>
                        <h2 className='font-semibold'><span>Rating : </span>{rating}</h2>
                    </div>
                    <div className='flex-1' data-aos="zoom-out-right">
                        <h3>{description}</h3>

                        <div   className=' text-center my-8'><button onClick={()=>addToCart(_id)} className='btn btn-accent font-bold'>Add to cart</button></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;