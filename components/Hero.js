import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Hero.module.css";
import Circle from "./Circle";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen container flex flex-col mt-12 sm:m-0 sm:flex-row ">
        {/* <Circle backgroundColor="#01c686" right="-40vh"  /> */}
        <div className={styles.card}>
          <h1 className="uppercase font-bold  text-6xl sm:text-5xl ">
            <span className="text-[#318035]">AVOCADO</span> Digital product
            AGENCY
          </h1>
          <p className="mt-10 text-gray-600 text-lg">
            Create live segments and target the right people for messages based
            on thier behaviors.
          </p>
          <div className="flex gap-6">
            <Link href="#Testominials">
              <button className="mt-16 w-fit uppercase font-bold border-4 px-4 py-2 hover:text-white text-green-500 rounded-lg duration-300 border-green-500 hover:bg-green-500">
                Discover
              </button>
            </Link>
            <Link href='/contact'>
              <button className="mt-16 w-fit uppercase font-bold border-4 px-4 py-2 hover:text-white text-blue-500 rounded-lg duration-300 border-blue-500 hover:bg-blue-500">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/img/Avocado.png"
            layout="fill"
            width="100%"
            objectFit="cover"
            height="100%"
            alt="Not Available"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
