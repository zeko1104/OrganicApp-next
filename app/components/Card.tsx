// components/Card.js

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import productData from "@/app/data/data";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

type Props = {};

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  image: string;
  size: string;
}

export default function Card({}: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const calculateDiscountPercentage = (price: number, discountPrice: number) => {
    return Math.round(((price - discountPrice) / price) * 100);
  };

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative w-[222px] h-[342px] bg-white shadow-lg rounded-lg p-4"
        >
          {product.discountPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 z-10">
              -{calculateDiscountPercentage(product.price, product.discountPrice)}%
            </div>
          )}
          <div className="relative group">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={300}
              className="w-full h-40 object-cover rounded-md mb-4 cursor-pointer transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-0 right-0 w-10 h-full flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="relative group-hover:bg-primary bg-white rounded-full p-2 transition-colors duration-300">
                <FiShoppingCart className="text-xl group-hover:text-white cursor-pointer" />
                <span className="absolute right-full mr-2 w-24 bg-black text-white text-xs rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </span>
              </div>
              <div className="relative group-hover:bg-primary bg-white rounded-full p-2 transition-colors duration-300">
                <FaRegHeart className="text-xl group-hover:text-white cursor-pointer" />
                <span className="absolute right-full mr-2  bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Wishlist
                </span>
              </div>
              <div className="relative group-hover:bg-primary bg-white rounded-full p-2 transition-colors duration-300">
                <FiEye className="text-xl group-hover:text-white cursor-pointer" />
                <span className="absolute right-full mr-2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 .587l3.668 7.568 8.332 1.091-6.064 5.888 1.522 8.106L12 18.883l-7.458 4.357 1.522-8.106L0 9.246l8.332-1.091L12 .587z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <h2 className="text-base font-semibold mb-2 text-center hover:text-primary cursor-pointer">
              {product.name}
            </h2>
            <div className="flex justify-around">
              <span className="text-lg font-bold text-primary">
                ${product.discountPrice ? product.discountPrice.toFixed(2) : product.price.toFixed(2)}
              </span>
              {product.discountPrice && (
                <span className="text-lg line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
