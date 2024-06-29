import Link from "next/link";
import React from "react";
import Card from "../components/Card";

type Props = {};

export default function Products({}: Props) {
  return (
    <div className="">
      <div className="flex justify-between m-16">
        <h1 className="text-4xl font-semibold font-sans text-secondary">
          Arrivals daily fresh
        </h1>
        <Link
          href="/products"
          className="text-[#05264e] overflow-visible p-0 capitalize items-center"
        >
          View All Products
        </Link>
      </div>
      <div className="">
        <Card />
      </div>
    </div>
  );
}
