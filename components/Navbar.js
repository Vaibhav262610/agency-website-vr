import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-lg px-24 flex items-center justify-around  text-white h-12">
        <div>
          <Link href="/">AVOCADO</Link>
        </div>
        <div>
          <ul className="sm:flex hidden gap-7 ">
            <li className="uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/design">design</Link>
            </li>
            <li className="uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/development">development</Link>
            </li>
            <li className="uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/production">production</Link>
            </li>
            <li className="uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/photography">photography</Link>
            </li>
            <li className="uppercase text-sm text-gray-300 cursor-pointer">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
