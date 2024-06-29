import React from "react";
import TruckIcon from "@/public/images/Icon.png";
import PercentIcon from "@/public/images/Icon_1.png";
import WalletIcon from "@/public/images/Icon_2.png";
import ChatIcon from "@/public/images/Icon_3.png";
import Image from "next/image";

type Props = {};

export default function Services({}: Props) {
  return (
    <div className="mt-16">
      <div className="text-center text-4xl font-semibold font-sans text-secondary mb-10">
        <h1>Shop With Confidence</h1>
      </div>
      <div className="flex justify-center gap-10 p-10">
        <div className="bg-white h-[212px] w-[264px] rounded-lg flex flex-col justify-center items-center">
          <div className="mb-4">
            <Image src={TruckIcon} alt="truck" width={50} height={50} />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold font-sans text-secondary mb-2">Free Shipping</h1>
            <p className="text-md font-sans text-gray-600">Get free shipping on all orders of $100 or more</p>
          </div>
        </div>
        <div className="bg-white h-[212px] w-[264px] rounded-lg flex flex-col justify-center items-center">
          <div className="mb-4">
            <Image src={PercentIcon} alt="percent" width={50} height={50} />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold font-sans text-secondary mb-2">Daily Deals</h1>
            <p className="text-md font-sans text-gray-600">Items you love at prices that fit your budget</p>
          </div>
        </div>
        <div className="bg-white h-[212px] w-[264px] rounded-lg flex flex-col justify-center items-center">
          <div className="mb-4">
            <Image src={WalletIcon} alt="wallet" width={50} height={50} />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold font-sans text-secondary mb-2">Secure Payment</h1>
            <p className="text-md font-sans text-gray-600">Your payment information is processed securely</p>
          </div>
        </div>
        <div className="bg-white h-[212px] w-[264px] rounded-lg flex flex-col justify-center items-center">
          <div className="mb-4">
            <Image src={ChatIcon} alt="chat" width={50} height={50} />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold font-sans text-secondary mb-2">Chat With Us</h1>
            <p className="text-md font-sans text-gray-600">Get in touch with our customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
