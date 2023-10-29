"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import long_cap_clothify_big from '/public/long_cap_clothify_big.png'

import Link from "next/link";



export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
            <div className="  w-full h-full     ">
            

              <div className="   ">
                <Slider  {...settings} className="  mx-auto max-w-[1000px] h-auto overflow-auto lg:mb32  ">

                <Image src={long_cap_clothify_big}  width={1000}  height={2000} quality={100} placeholder="blur"  className="  mx-auto mt-8"  alt="image"></Image>
                

                <Image src={"/long_cap_collection_clothify.png"}   width={1000} height={2000} quality={100}  className="  mx-auto mt-8"  alt="image"></Image>
             
                <Image src={"/item_long_cap.png"}   width={1000} height={2000} quality={100}  className="  mx-auto mt-8"  alt="image"></Image>
                
                <Image src={"/filter_page_cap.png"}   width={1000} height={2000} quality={100}  className="  mx-auto mt-8"  alt="image"></Image>
                
                <Image src={"/cart_cap.png"}   width={1000} height={2000} quality={100}  className="  mx-auto mt-8"  alt="image"></Image>

                </Slider>
              </div>  
        </div> 
          

      );
    }
  }