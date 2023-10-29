"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import espace_home_cap from "/public/espace_home_cap.png"
import reserv_cap from "/public/reserv_cap.png"
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
            <div className="  w-full     ">
              <div className="   ">
                <Slider  {...settings} className="   mt-8 mx-auto max-w-[900px] h-[550px]     ">
                  <div className="h-[450px] overflow-auto  rounded-xl ">
                  <Image src={espace_home_cap} placeholder="blur"  width={1000}  height={2000} quality={70}  className="  mx-auto "  alt="image"></Image>
                  </div>

                  <div className="h-[450px] overflow-auto  rounded-xl ">
                  <Image src={reserv_cap} placeholder="blur"  width={1000}  height={2000} quality={70}  className="  mx-auto "  alt="image"></Image>
                  </div>
                </Slider>
              </div>  
        </div> 
          

      );
    }
  }