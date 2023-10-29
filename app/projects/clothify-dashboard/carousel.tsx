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
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
            <div className="  w-full h-full     ">
              <div className="   ">
                <Slider  {...settings} className="  mx-auto max-w-[1000px] h-auto overflow-auto lg:mb32  ">
                
                <Image src={"/admin_cap.png"} width={1000}  height={2000} quality={100}  className="  mx-auto mt-8"  alt="image"></Image>
                
                <Image src={"/product_cap.png"} width={1000}  height={2000} quality={100}  className="  mx-auto mt-8"  alt="image"></Image>
                
                <Image src={"/edit_cap.png"} width={1000}  height={2000} quality={100}  className="  mx-auto mt-8"  alt="image"></Image>

                </Slider>
              </div>  
        </div> 
          

      );
    }
  }