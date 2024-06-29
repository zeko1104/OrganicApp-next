import Image from "next/image";
import React from "react";
import Blog1 from "@/public/images/blog1.png";
import Blog2 from "@/public/images/blog2.png";
import Blog3 from "@/public/images/blog3.png";

type Props = {};

export default function Blog({}: Props) {
  return (
    <div className="flex justify-center gap-10">
      {/* blog1 */}
      <div className="h-[373px] w-[361px] bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="overflow-hidden">
          <Image
            src={Blog1}
            alt="Blog1"
            className="h-[180px] w-[320px] object-cover m-5 rounded-lg cursor-pointer transition-transform duration-500 transform group-hover:scale-110"
          />
        </div>
        <div className="p-4 text-center">
          <h1 className="text-lg font-semibold mb-2">
            The future of fashion embraces...
          </h1>
          <h1>The fashion industry is constantly evolving...</h1>
          <div className="text-gray-600 flex justify-center mt-5 gap-2">
            <p className="mb-1">
              By: <span className="font-medium">John Doe</span>
            </p>
            <span>|</span>
            <span className="text-sm">May 12, 2022</span>
          </div>
        </div>
      </div>
      {/* blog2 */}
      <div className="h-[373px] w-[361px] bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="overflow-hidden">
          <Image
            src={Blog2}
            alt="Blog2"
            className="h-[180px] w-[320px] object-cover m-5 rounded-lg cursor-pointer transition-transform duration-500 transform group-hover:scale-110"
          />
        </div>
        <div className="p-4 text-center">
          <h1 className="text-lg font-semibold mb-2">
            The future of fashion embraces...
          </h1>
          <h1>The fashion industry is constantly evolving...</h1>
          <div className="text-gray-600 flex justify-center mt-5 gap-2">
            <p className="mb-1">
              By: <span className="font-medium">John Doe</span>
            </p>
            <span>|</span>
            <span className="text-sm">May 12, 2022</span>
          </div>
        </div>
      </div>
      {/* blog3 */}
      <div className="h-[373px] w-[361px] bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="overflow-hidden">
          <Image
            src={Blog3}
            alt="Blog3"
            className="h-[180px] w-[320px] object-cover m-5 rounded-lg cursor-pointer transition-transform duration-500 transform group-hover:scale-110"
          />
        </div>
        <div className="p-4 text-center">
          <h1 className="text-lg font-semibold mb-2">
            The future of fashion embraces...
          </h1>
          <h1>The fashion industry is constantly evolving...</h1>
          <div className="text-gray-600 flex justify-center mt-5 gap-2">
            <p className="mb-1">
              By: <span className="font-medium">John Doe</span>
            </p>
            <span>|</span>
            <span className="text-sm">May 12, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}
