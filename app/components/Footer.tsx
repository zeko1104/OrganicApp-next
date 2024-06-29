import React from "react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex ,FaGooglePay, FaCcApplePay} from "react-icons/fa";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-white w-full py-10 px-20">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
        <div className="text-3xl font-bold mb-8 md:mb-0">
          <h1 className="text-primary">ORGANIC</h1>
        </div>
        <div className="w-full md:w-auto">
          <p className="text-gray-700 mb-4 md:mb-0">
            15% OFF your order when you sign-up to our emails
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[300px] md:w-[400px] lg:w-[700px] h-12 p-2 pl-4 border border-gray-300 rounded-l-lg focus:outline-none focus:border-[#418200] text-sm"
            />
            <button className="bg-secondary text-white hover:bg-[#007d38] py-2 px-4 rounded-r-lg h-12 transition duration-300 text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-10">
        <div className="w-full md:w-1/5 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Info</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Open time</h3>
            <p className="text-gray-600">Mon - Fri: 9:00 - 18:00</p>
            <p className="text-gray-600">Sat: 9:00 - 18:00</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800">Address</h3>
            <p className="text-gray-600">
              10250 Santa Monica Blvd.
              <br />
              Los Angeles, CA 90067-6658
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Hotline</h3>
            <p className="text-gray-600">(+994)123456789</p>
          </div>
        </div>
        <div className="w-full md:w-1/5 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Quick links</h2>
          <ul className="flex flex-col space-y-2 text-gray-600">
            <li className="hover:text-[#007d38] cursor-pointer">About us</li>
            <li className="hover:text-[#007d38] cursor-pointer">Contact us</li>
            <li className="hover:text-[#007d38] cursor-pointer">FAQs</li>
            <li className="hover:text-[#007d38] cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">My Account</h2>
          <ul className="flex flex-col space-y-2 text-gray-600">
            <li className="hover:text-[#007d38] cursor-pointer">My Account</li>
            <li className="hover:text-[#007d38] cursor-pointer">Cart</li>
            <li className="hover:text-[#007d38] cursor-pointer">Wishlist</li>
            <li className="hover:text-[#007d38] cursor-pointer">Search</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Help center</h2>
          <ul className="flex flex-col space-y-2 text-gray-600">
            <li className="hover:text-[#007d38] cursor-pointer">Privacy policy</li>
            <li className="hover:text-[#007d38] cursor-pointer">Refund policy</li>
            <li className="hover:text-[#007d38] cursor-pointer">Shipping & Return</li>
            <li className="hover:text-[#007d38] cursor-pointer">Term & conditions</li>
            <li className="hover:text-[#007d38] cursor-pointer">Store locations</li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Payments</h2>
          <div className="flex space-x-4 text-gray-600">
            <FaCcVisa size={24} />
            <FaCcMastercard size={24} />
            <FaCcPaypal size={24} />
            <FaCcAmex size={24} />
            <FaGooglePay size={24} />
            <FaCcApplePay size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
