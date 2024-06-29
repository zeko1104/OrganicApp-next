"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Image1 from "@/public/images/slider1.png";
import Image2 from "@/public/images/slider2.jpg";
import Image3 from "@/public/images/slider3.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div className="relative h-screen">
        <Image
          src={Image1}
          alt="slider1"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0 flex items-center justify-end">
          <div className=" p-8  text-center w-[900px] ">
            <p className="text-secondary text-3xl mb-4">10% off on website</p>
            <p className="text-secondary text-6xl mb-4">Organic & healthy food</p>
            <p className="text-secondary text-xl mb-4">
              Vegetables picked at the peak of perfection
            </p>
            <button className="bg-white text-primary hover:bg-[#007d38]
             hover:text-white py-2 px-4 rounded-3xl h-12 transition duration-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        <Image
          src={Image2}
          alt="slider2"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0 flex items-center justify-end">
          <div className=" p-8 text-center w-[900px]">
            <p className="text-secondary text-3xl mb-4">15% Discount Today!</p>
            <p className="text-secondary text-6xl mb-4">Taste of Nature</p>
            <p className="text-secondary text-xl mb-4">
              The Best Food For The Best Price
            </p>
            <button className="bg-white text-primary hover:bg-[#007d38]
             hover:text-white py-2 px-4 rounded-3xl h-12 transition duration-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        <Image
          src={Image3}
          alt="slider3"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0 flex items-center justify-end">
          <div className=" p-8 text-center w-[900px]">
            <p className="text-secondary text-6xl mb-4">Real food & Real Health</p>
            <p className="text-secondary text-xl mb-4">
              Dont wait for good food, grab some healthy food
            </p>
            <button className="bg-white text-primary hover:bg-[#007d38]
             hover:text-white py-2 px-4 rounded-3xl h-12 transition duration-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
}
