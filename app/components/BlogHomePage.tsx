import Link from "next/link";
import React from "react";
import Blog from "./Blog";

type Props = {};

export default function BlogHomePage({}: Props) {
  return (
    <div className="">
      <div className="flex justify-between m-16">
        <h1 className="text-4xl font-semibold font-sans text-secondary">
          Read our stories
        </h1>
        <Link
          href="/"
          className="text-[#05264e] overflow-visible p-0 capitalize items-center"
        >
          View All Blogs
        </Link>
      </div>
      <div className="">
        <Blog />
      </div>
    </div>
  );
}
