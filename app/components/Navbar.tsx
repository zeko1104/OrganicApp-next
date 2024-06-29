import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="bg-secondary h-16">
      <div className="flex items-center justify-between h-full px-4 max-w-screen-xl mx-auto">
        <div className="relative group flex items-center bg-primary w-72 h-16 cursor-pointer px-4 transition duration-1000 ease-out">
          <RiMenu2Fill className="text-white text-2xl" />
          <h1 className="ml-2 text-white">Categories</h1>
          <FaChevronDown className="text-white ml-auto text-xs" />
          <div className="absolute left-0 top-full  hidden group-hover:block bg-white w-full shadow-lg transition duration-300 ease-out z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Fresh fruits
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Fresh meat
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Fresh vegetables
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Green sea food
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Organic dryfruit
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Blackberry 100%organic
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Organic juice
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Sea & fish
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Summer fruit
              </li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="flex items-center cursor-pointer transition duration-700 ease-out">
            <h1 className="hover:text-primary text-white text-[16px]">Home</h1>
            <FaChevronDown className="ml-1 text-white text-xs" />
          </div>
          <div className="flex items-center cursor-pointer transition duration-700 ease-out">
            <h1 className="hover:text-primary text-white text-[16px]">
              New Arrivals
            </h1>
          </div>
          <div className="flex items-center cursor-pointer transition duration-700 ease-out">
            <h1 className="hover:text-primary text-white text-[16px]">
              Best Sellers
            </h1>
          </div>
          <div className="flex items-center cursor-pointer transition duration-700 ease-out">
            <h1 className="hover:text-primary text-white text-[16px]">Blog</h1>
          </div>
          <div className="flex items-center cursor-pointer transition duration-700 ease-out ">
            <h1 className="hover:text-primary text-white text-[16px]">
              Buy Now
            </h1>
          </div>
        </div>
        <div className="hidden md:flex items-center text-white">
          <h1 className="text-[16px]">
            Hotline:{" "}
            <span className="font-bold text-[16px]">(+994)123456789</span>
          </h1>
        </div>
      </div>
    </nav>
  );
}
