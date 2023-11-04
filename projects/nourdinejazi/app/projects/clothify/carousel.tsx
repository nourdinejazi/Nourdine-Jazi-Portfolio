"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import Link from "next/link";




export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
            <div className="  w-full h-full  flex flex-col   items-center justify-center    ">
              <div className=" w-[95%]  text-center   ">
              <div className="">
                <p> VISIT LINK :  <Link className="text-bl   underline" href="https://clothify-store.vercel.app/" target="_"  >clothify-store.app</Link>  </p>
              </div>
                <Slider {...settings} className=" items-center justify-center mb-16">
                  <div className="    ">
                  <Image src={"/public/Create Next App.png"} width={1000} className="mx-auto   sm:mt-52 mt-32" height={500} alt="image"></Image>
                  </div>

                  <div className=" w-full h-full">
                  <Image src={"/public/Create Next App (1).png"} width={200} className=" mx-auto mt-32 " height={100} alt="image"></Image>
                  </div>

                  <div>
                  <Image src={"/public/Create Next App (2).png"} width={1000} className=" mx-auto sm:mt-52 mt-32  " height={100} alt="image"></Image>
                  </div>

                  <div>
                  <Image src={"/public/Create Next App (3).png"} width={200} className=" mx-auto mt-32 " height={100} alt="image"></Image>
                  </div>

                  <div>
                  <Image src={"/public/Create Next App (4).png"} width={1000} className=" mx-auto sm:mt-52  " height={100} alt="image"></Image>
                  </div>
                  <div>
                  <Image src={"/public/Create Next App (8).png"} width={1000} className=" mx-auto sm:mt-52   " height={100} alt="image"></Image>
                  </div>

                  <div>
                  <Image src={"/public/Create Next App (6).png"} width={200} className=" mx-auto mt-32 " height={100} alt="image"></Image>
                  </div>
                  
                  <div>
                  <Image src={"/public/Create Next App (7).png"} width={200} className=" mx-auto mt-32 " height={100} alt="image"></Image>
                  </div>


                </Slider>
              </div>  
        </div> 
          

      );
    }
  }