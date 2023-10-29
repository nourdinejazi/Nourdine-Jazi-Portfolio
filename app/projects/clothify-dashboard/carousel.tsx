"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import edit_cap from "/public/edit_cap.png"
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
                <Slider  {...settings} className="  mt-8 mx-auto max-w-[900px] h-[550px]  rounded-xl  overflow-auto    ">
                
                <div className="h-[550px] overflow-auto ">
                  <Image src={edit_cap} width={1000} placeholder="blur" height={2000} quality={100}  className="  mx-auto "  alt="image"></Image>
                </div>
                <div className="h-[550px] overflow-auto ">
                  <Image src={"/product_cap.png"} width={1000}  height={2000} quality={100}  className="  mx-auto "  alt="image"></Image>
                </div>
                <div className="h-[550px] overflow-auto ">
                  <Image src={"/admin_cap.png"} width={1000}  height={2000} quality={100}  className="  mx-auto "  alt="image"></Image>
                </div>


                </Slider>
              </div>  
        </div> 
          

      );
    }
  }