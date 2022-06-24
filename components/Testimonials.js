import React from "react";
import Circle from "./Circle";
import { users } from "../data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div className="sm:h-screen h-auto  flex flex-col justify-around items-center pb-20 p-12 sm:p-0 ">
        <h1 className="text-center w-10/12 border-b-green-500 border-b-2 font-bold mb-16 sm:mb-0 m-0 text-4xl p-4">
          Testimonials
        </h1>

        <div className="flex flex-wrap flex-col gap-8 sm:flex-row justify-around  items-center">
          {users.map((user) => (
            <div
              className="sm:w-1/4 wi-full  cursor-none hover:text-green-700 hover:bg-gray-200 p-4 hover:scale-105 transform duration-300 rounded-lg"
              key={user.id}
            >
              <Image src={`/img/${user.logo}`} alt="" width="30" height="30" />
              <p className="text-base mt-2  mb-4">{user.comment}</p>
              <div className="flex items-center">
                <Image
                  objectFit="cover "
                  className="rounded-full"
                  src={`/img/${user.avatar}`}
                  width="45"
                  height="45"
                  alt=""
                />
                <div className="flex flex-col ml-5">
                  <span className="font-bold text-[#555]">{user.name}</span>
                  <span className="text-sm">{user.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
