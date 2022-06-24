import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="flex flex-col border-t-2 cursor-none border-t-green-400 justify-center items-center"> 
          <h1 className="font-semibold mt-12 ">Made By 💖</h1>
          <h1 className="font-bold text-2xl mb-8 animate-pulse">Vaibhav Rajpoot</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
