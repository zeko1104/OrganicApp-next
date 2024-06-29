import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

type Props = {};

export default function HeaderMain({}: Props) {
  return (
    <div className="bg-white h-24 w-full flex items-center justify-between px-4">
      <div className="text-3xl font-bold ml-20">
        <h1 className="text-primary">ORGANIC</h1>
      </div>

      <div className="relative mx-4">
        <input
          type="text"
          placeholder="Enter keyword"
          className="w-[700px] h-12 p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#418200]"
        />
        <CiSearch className="absolute left-2 top-2.5 text-gray-400 text-3xl cursor-pointer" />
      </div>

      <div className="flex space-x-8 text-2xl mr-20">
        <div className="relative">
          <FaRegHeart className="cursor-pointer hover:text-primary" />
          <span className="absolute -top-2 -right-3 bg-primary text-sm text-white rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </div>
        <div className="relative">
          <FiShoppingCart className="cursor-pointer hover:text-primary" />
          <span className="absolute -top-2 -right-3 bg-primary text-sm text-white rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </div>
        <div>
          <FaRegUser className="cursor-pointer hover:text-primary" />
        </div>
      </div>
    </div>
  );
}
