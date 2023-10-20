import React, { useState } from 'react';

const AddProducts = () => {

    const handleAddProduct= (e)=>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const formData={name, brandName, photo, category, description, price, rating};
        console.log(formData);

    }



    return (
        <div className='md:w-4/5 w-11/12 mx-auto flex justify-center drop-shadow-lg shadow-xl p-4 my-5 rounded-lg'>
            <div className='my-9'>
                <div>
                    <h2 className='text-3xl text-center my-5 font-bold text-blue-700'>Add The Product</h2>
                </div>
                <form onSubmit={handleAddProduct} className='space-y-3'>
                    
                    <div>
                        {/* Name */}
                        <label htmlFor="name" className='font-semibold text-lg' >Name</label><br />
                        <input type="text" name="name" className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Name of the product'/>
                    </div>
                    <div>
                        {/* Brand name */}
                        <label htmlFor="brand-name" className='font-semibold text-lg'>Brand Name</label><br />
                        <input type="text" name="brandName" className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Insert the brand name' />
                    </div>
                    
                    <div>
                        {/* image url */}
                        <label htmlFor="photo" className='font-semibold text-lg'>Photo url</label><br />
                        <input type="text" name="photo" className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Photo url'/>
                    </div>
                    <div>
                        <label htmlFor="category" className='font-semibold text-lg'>Category</label><br />
                        <select name="category" id="category" className='p-2 rounded-lg bg-blue-400 w-full text-white font-bold' required>
                            <option className='font-medium p-2 bg-sky-800' value="phone">Phone</option>
                            <option className='font-medium p-2 bg-sky-800' value="computer" >Computer</option>
                            <option className='font-medium p-2 bg-sky-800' value="headphone">Headphone</option>
                            <option className='font-medium p-2 bg-sky-800' value="watch">Watch</option>
                        </select>
                    </div>
                    

                    <div>
                        {/* description */}
                        <label htmlFor="description" className='font-semibold text-lg'>Short Description</label><br />
                        <textarea type="text" name="description" className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Give a brief description...'/>
                    </div>
                    <div className='flex gap-3 '>
                    <div>
                        {/* price */}
                        <label htmlFor="price" className='font-semibold text-lg'>Price</label><br />
                        <input type="text" name="price" className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Price' />
                    </div>
                    <div className=''>
                        {/* rating */}
                        <label htmlFor="rating" className='font-semibold text-lg'>Rating</label><br />
                        <input type="text" name="rating" className='bg-slate-200 p-3 rounded-lg w-full' id="" placeholder='Rating...'/>
                    </div>
                    </div>
                    <div className='text-center pt-7'>
                        <button type='submit' className='btn w-full font-bold hover:bg-yellow-500 bg-yellow-400'>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;