import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const MyCart = () => {

    const [cartdata, setcartData]= useState([]);


    useEffect(()=>{
        fetch(`https://brand-store-server-qk48k58v0-sabbirahmed0007.vercel.app/cart`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setcartData(data);
        })
    },[])

    return (
        <div>
            <h2 className='font-bold text-2xl text-center capitalize my-5'>My cart's products</h2>
            {/* <h2>My cart page</h2> */}
            {
                cartdata.map(cart=><Cart key={cart._id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default MyCart;