// components/Banner.js

import Image from "next/image";
import React from "react";
import Banner1 from "@/public/images/Mask_group_2.png";
import Banner2 from "@/public/images/Mask_group_3.png";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="flex justify-center mx-10 gap-10 ">
        {/* banner1 */}
      <div className="relative h-[350px] md:w-1/2 xl:w-1/2 overflow-hidden rounded-xl">
        <Image
          src={Banner1}
          alt="Fresh Meat"
          height={350}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center m-10 w-60">
          <h2 className="text-white text-xl font-normal mb-2">100% ORGANIC</h2>
          <h3 className="text-white text-3xl font-bold mb-2">
            Daily offer <br />
            Fresh meat
          </h3>
          <p className="text-white text-lg mb-4">All fresh Meats</p>
          <button className="bg-white text-primary hover:bg-[#007d38] hover:text-white py-2 px-4 rounded-3xl h-12 transition duration-700">
            Shop Now
          </button>
        </div>
      </div>
      {/* banner2 */}
      <div className="relative h-[350px] md:w-1/2 xl:w-1/2 overflow-hidden rounded-xl">
        <Image
          src={Banner2}
          alt="Vegetarian Food"
          height={350}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center m-10 w-60">
          <h2 className="text-white text-xl font-normal mb-2">100% ORGANIC</h2>
          <h3 className="text-white text-3xl font-bold mb-2">
            Sale up to 30% <br />
            Vegetarian
          </h3>
          <p className="text-white text-lg mb-4">All fresh food</p>
          <button className="bg-white text-primary hover:bg-[#007d38] hover:text-white py-2 px-4 rounded-3xl h-12 transition duration-700">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
