import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    const {name, category, brandName, photo, price,}=cart;
    return (
        <div className='my-10'>

            <div className='grid grid-cols-1 md:grid-cols-3 my-4 mx-10 bg-slate-200 py-8 rounded-md items-center'>
                <div className='flex-1' >
                    <img src={photo} alt="" className='w-full h-96 rounded-t-md lg:rounded-md lg:mx-3' />
                </div>
                <div className='mx-8 flex-1 md:text-center' >
                    <h2 className='font-bold text-2xl my-3'>{name}</h2>
                    <h2 className='font-bold text-lg uppercase '><span className='text-lg capitalize'>Category: </span>{category}</h2>
                    {/* <h2 className='fontbold text-lg'>{brandName}</h2> */}
                    <h1 className='mx-8 font-semibold my-3'> <span className='font-bold'>Price</span>: {price}</h1>
                </div>
                <div className='text-center flex-1 '>
                    <div className='flex  lg:flex-col mx-7 gap-2 items-center justify-evenly'>
                        <button className='btn font-bold w-44 bg-green-500 hover:bg-green-400 text-black'>Purchase</button>
                    
                        <button className='btn font-bold w-44 bg-red-500 hover:bg-red-400 text-white text-xl'>X</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;