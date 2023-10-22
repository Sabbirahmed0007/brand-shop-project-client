import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBrandData from './SingleBrandData';

const BrandData = () => {
    const loadedProducts= useLoaderData();
    console.log(loadedProducts);
    return (
        <div>
            <div>
            <div>
                <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JyxBn6r/istockphoto-535702471-612x612.jpg)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-sm">
                            <p className="mb-5 font-extrabold text-3xl">A World of Wonders, Where Technology Meets Human Ingenuity.</p>

                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/5RmHLJr/samsungac.webp)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-sm">
                            <p className="mb-5 font-extrabold text-3xl">A World of Wonders, Where Technology Meets Human Ingenuity.</p>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/1sZkmJp/xiaomiTV.webp)'}}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-sm">
                            <p className="mb-5 font-extrabold text-3xl">A World of Wonders, Where Technology Meets Human Ingenuity.</p>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/2h2qk4W/Home-Main-KV-PF-KV-1440-344-pix.webp)'}}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-left text-neutral-content">
                        <div className="max-w-sm">
                            <p className="mb-5 font-extrabold text-3xl">A World of Wonders, Where Technology Meets Human Ingenuity.</p>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide5" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/CBJQVbf/cda9827367580a5527c11d57d7fa7c3a.webp)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-sm">
                            <p className="mb-5 font-extrabold text-3xl">A World of Wonders, Where Technology Meets Human Ingenuity.</p>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 

            </div>
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center space-x-4 mx-4'>
                {
                    loadedProducts.map(products=><SingleBrandData key={products._id} products={products}></SingleBrandData>)
                }
            </div>
        </div>
    );
};

export default BrandData;