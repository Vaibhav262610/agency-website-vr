import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = ({ services }) => {
  return (
    <>
      <div className="sm:px-24 px-4 mt-24 sm:mt-0  ">
        <h1 className="text-3xl p-4 border-b-green-500 border-b-2 max-w-full font-semibold">What We Can Do?</h1>
        <h1 className="text-5xl p-4 text-green-700">Services we can help you with</h1>

        <div className="flex flex-wrap gap-10 justify-center mt-24">
          {services.map(services => (
            <Link passHref key={services.id} href={`/products/${services.name}`}>
              <div className="service rounded-lg">
                <div className="w-9/12 text-center absolute z-50 descr ">{services.desc}</div>
                <span className="absolute top-2 left-2 text-gray-400 tracking-[5px] font-normal uppercase">{services.title}</span>
                <div className="w-10/12 h-10/12 z-40 rounded-full overflow-hidden media">
                    {services.video ? (
                      <video src={`/img/${services.video}`}  autoPlay loop className="w-full h-full object-cover"/>
                    ) : (
                      <Image src={`/img/${services.photo}`} width='100%' height='100%' layout='responsive' objectFit='cover' alt="" />
                    )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
