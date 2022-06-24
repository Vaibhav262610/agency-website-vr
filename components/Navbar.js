import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-lg px-24  flex items-center justify-around  text-white h-12">
        <div className="font-black sm:ml-0 ml-8">
          <Link href="/">AVOCADO</Link>
        </div>
        <div>
          <ul className="sm:flex hidden gap-7 ">
            <li className="transform duration-300 ease-in-out hover:scale-90 uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/products/design">design</Link>
            </li>
            <li className="transform duration-300 ease-in-out hover:scale-90 uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/products/development">development</Link>
            </li>
            <li className="transform duration-300 ease-in-out hover:scale-90 uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/products/production">production</Link>
            </li>
            <li className="transform duration-300 ease-in-out hover:scale-90 uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/products/photography">photography</Link>
            </li>
            <li className="transform duration-300 ease-in-out hover:scale-90 uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/products/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
