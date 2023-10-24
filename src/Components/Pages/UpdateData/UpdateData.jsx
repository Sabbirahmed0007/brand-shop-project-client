import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateData = () => {

    const singleProductsData= useLoaderData();
    // console.log(singleProductsData);
    const {name, brandName, category, description, photo, price, rating, _id }=singleProductsData;

    const handleUpdateProduct=e =>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const brandName= form.brandName.value;
        const photo= form.photo.value;
        const category= form.category.value;
        const description= form.description.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const updatedData={name, brandName, photo, category, description, price, rating}
        console.log(updatedData);

        fetch(`https://brand-store-server-7tjc699uy-sabbirahmed0007.vercel.app/singledata/${_id}`, {
            method:'PUT',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedData)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire('','The product updated successfully', 'success');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


    return (
        <div className='md:w-4/5 w-11/12 mx-auto flex justify-center drop-shadow-lg shadow-xl p-4 my-5 rounded-lg'>
            <div className='my-9'>
                <div>
                    <h2 className='text-3xl text-center my-5 font-bold text-violet-500'>Update Your Product</h2>
                </div>
                <form onSubmit={handleUpdateProduct} className='space-y-3'>
                    
                    <div>
                        {/* Name */}
                        <label htmlFor="name" className='font-semibold text-lg' >Name</label><br />
                        <input type="text" name="name" defaultValue={name} className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Name of the product'/>
                    </div>
                    <div>
                        {/* Brand name */}
                        <label htmlFor="brand-name" className='font-semibold text-lg'>Brand Name</label><br />
                        <input type="text" name="brandName" defaultValue={brandName} className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Insert the brand name' />
                    </div>
                    
                    <div>
                        {/* image url */}
                        <label htmlFor="photo" className='font-semibold text-lg'>Photo url</label><br />
                        <input type="text" name="photo" defaultValue={photo} className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Photo url'/>
                    </div>
                    <div>
                        <label htmlFor="category" className='font-semibold text-lg'>Category</label><br />
                        <select name="category" id="category" defaultValue={category} className='p-2 rounded-lg bg-blue-400 w-full text-white font-bold' required>
                            <option className='font-medium p-2 bg-sky-800' value="phone">Phone</option>
                            <option className='font-medium p-2 bg-sky-800' value="computer" >Computer</option>
                            <option className='font-medium p-2 bg-sky-800' value="laptop" >Laptop</option>
                            <option className='font-medium p-2 bg-sky-800' value="tab" >Tab</option>
                            <option className='font-medium p-2 bg-sky-800' value="headphone">Headphone</option>
                            <option className='font-medium p-2 bg-sky-800' value="watch">Watch</option>
                            <option className='font-medium p-2 bg-sky-800' value="scooter">Scooter</option>
                            <option className='font-medium p-2 bg-sky-800' value="TV">TV</option>
                        </select>
                    </div>
                    

                    <div>
                        {/* description */}
                        <label htmlFor="description" className='font-semibold text-lg'>Short Description</label><br />
                        <textarea type="text" name="description" defaultValue={description} className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Give a brief description...'/>
                    </div>
                    <div className='flex gap-3 '>
                    <div>
                        {/* price */}
                        <label htmlFor="price" className='font-semibold text-lg'>Price</label><br />
                        <input type="text" name="price" defaultValue={price} className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Price' />
                    </div>
                    <div className=''>
                        {/* rating */}
                        <label htmlFor="rating" className='font-semibold text-lg'>Rating</label><br />
                        <input type="text" name="rating"defaultValue={rating} className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Rating...'/>
                    </div>
                    </div>
                    <div className='text-center pt-7'>
                        <button type='submit' className='btn w-full font-bold hover:bg-yellow-500 bg-yellow-400 text-black'>Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateData;