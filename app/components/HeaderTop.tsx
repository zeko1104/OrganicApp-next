import React from 'react';

type Props = {};

export default function HeaderTop({}: Props) {
  return (
    <div className="bg-[#EAF0ED] h-14 w-full flex items-center justify-between px-4">
      <div className="flex space-x-4">
        <h1 className="cursor-pointer text-inherit font-light hover:text-primary">Find Stores</h1>
        <h1 className="cursor-pointer text-inherit font-light hover:text-primary">Gift Cards</h1>
      </div>

      <div className="text-center text-sm">
        <p className='font-light'>Limited Time Only: Up to 50% off Fresh Fruits Shop now</p>
      </div>

      <div className="flex space-x-2">
        <select className="p-1 bg-transparent font-light outline-none cursor-pointer" name="language" id="language">
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>

        <select className="p-1 bg-transparent font-light outline-none cursor-pointer" name="currency" id="currency">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>
    </div>
  );
}
