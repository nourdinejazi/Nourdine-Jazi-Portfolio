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
        arrows : true,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      return (
            <div className="scrollimg     ">
          
              <div className="   ">
                <Slider  {...settings} className=" mt-8 mx-auto max-w-[900px]    ">

                <div className="h-[450px] overflow-auto rounded-xl ">
                  <Image src={long_cap_clothify_big}  width={1000}  height={2000} quality={100} placeholder="blur"  className="  mx-auto "  alt="image"></Image>
                </div>
                
                <div className="h-[450px] overflow-auto rounded-xl">
                <Image src={"/long_cap_collection_clothify.png"}   width={1000} height={2000} quality={100}  className="  mx-auto "  alt="image"></Image>
                </div>

                <div className="h-[450px] overflow-auto rounded-xl">
                <Image src={"/item_long_cap.png"}   width={1000} height={2000} quality={100}  className="  mx-auto "  alt="image"></Image>
                </div>

                <div className="h-[450px] overflow-auto rounded-xl">
                <Image src={"/filter_page_cap.png"}   width={1000} height={2000} quality={100}  className="  mx-auto "  alt="image"></Image>
                </div>

                <div className="h-[450px] overflow-auto rounded-xl">
                <Image src={"/cart_cap.png"}   width={1000} height={2000} quality={100}  className="  mx-auto "  alt="image"></Image>
                </div>
                </Slider>
              </div>  
        </div> 
          

      );
    }
  }