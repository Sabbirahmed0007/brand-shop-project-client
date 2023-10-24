import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBrandData from "./SingleBrandData";

const BrandData = () => {
  const loadedProducts = useLoaderData();
  // console.log(loadedProducts);
  return (
    <div>
      <div>
        <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: "url(https://i.ibb.co/bbQ141r/hero.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md absolute  lg:left-20">
                    <p className="mb-5 font-extrabold text-center  text-3xl">
                      The Art of Noise, Cancellation Earbuds that Silence the
                      World
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/5RmHLJr/samsungac.webp)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-sm absolute lg:left-24">
                    <p className="mb-5 font-extrabold text-3xl">
                      Choosing the Perfect AC Brand, Keep Your Cool All Summer
                      and Enhance Your Indoor Comfort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/1sZkmJp/xiaomiTV.webp)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-lg absolute  lg:left-24">
                    <p className="mb-5 font-extrabold lg:text-black text-amber-300 text-3xl">
                      Cinematic Experience at Home, Transform Your Living Room
                      with the Latest 4K Smart TVs and Enjoy Stunning Picture
                      Quality and Endless Entertainment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/2h2qk4W/Home-Main-KV-PF-KV-1440-344-pix.webp)",
                }}
              >
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-left text-neutral-content">
                  <div className="max-w-sm absolute lg:left-28">
                    <p className="mb-5 font-extrabold text-3xl">
                      A World of Wonders, Where Technology Meets Human
                      Ingenuity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/CBJQVbf/cda9827367580a5527c11d57d7fa7c3a.webp)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md absolute lg:right-16 lg:top-16">
                    <p className="mb-5 font-extrabold text-3xl">
                      A World of Wonders, Where Technology Meets Human
                      Ingenuity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide6" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/KmdV7R7/galaxy-watch6-kv-pc.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-left text-neutral-content">
                  <div className=" absolute top-11">
                    <p className="mb-5 font-extrabold text-3xl text-transparent bg-gradient-to-r from-fuchsia-300 to-emerald-200 bg-clip-text ">
                      Watch Brands that Stand the Test of Time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide7" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide7" className="carousel-item relative w-full">
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: "url(https://i.ibb.co/wwcYpjd/pixel.webp)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-sm absolute top-9">
                    <p className="mb-5 font-extrabold text-3xl text-lime-400 drop-shadow-xl ">
                      Emerging Technologies Shaping Our Future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h1 className="text-3xl font-bold capitalize text-center my-7">
          Explore here your desire products
        </h1>
      </div> */}
                {
                    loadedProducts.length>0? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center space-x-4 mx-4">{loadedProducts.map((products) => (<SingleBrandData key={products._id} products={products}></SingleBrandData>))}</div>
                    : <div><h2 className="font-bold mt-32 text-center h-60 text-3xl">No data available here</h2></div>
                }
      
    </div>
  );
};

export default BrandData;
