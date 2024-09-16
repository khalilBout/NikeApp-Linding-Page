import { useState } from "react";
import Button from "./Button";

import { arrowRight } from "../assets/icons";
import { statistics } from "../constants/index";

import ShoeCard from "../components/ShoeCard";

import bigShoe1 from "../assets/images/big-shoe1.png";
import bigShoe2 from "../assets/images/big-shoe2.png";
import bigShoe3 from "../assets/images/big-shoe3.png";
import bigShoe4 from "../assets/images/big-shoe4.png";
import thumbnailShoe1 from "../assets/images/thumbnail-shoe1.svg";
import thumbnailShoe2 from "../assets/images/thumbnail-shoe2.svg";
import thumbnailShoe3 from "../assets/images/thumbnail-shoe3.svg";
import thumbnailShoe4 from "../assets/images/big-shoe4.svg";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const shoes = [
    {
      thumbnail: thumbnailShoe1,
      bigShoe: bigShoe1,
    },
    {
      thumbnail: thumbnailShoe2,
      bigShoe: bigShoe2,
    },
    {
      thumbnail: thumbnailShoe3,
      bigShoe: bigShoe3,
    },
    {
      thumbnail: thumbnailShoe4,
      bigShoe: bigShoe4,
    },
  ];
  return (
    <>
      <section id="home" className="w-full flex flex-wrap justify-center gap-4">
        {/* info side  */}
        <div className="w-full xl:w-2/5 flex flex-col justify-center items-start pt-24">
          <p className="text-2xl font-montserrat text-coral-blue mt-4">
            All Weather Collection
          </p>
          <h1 className="mt-2 font-palanquin font-bold">
            <span className=" bg-white xl:whitespace-nowrap relative lg:z-10 md:z-10 pr-10 text-[32px] md:text-[64px] lg:text-[82px]">
              The Most Latest
            </span>
            <br />
            <span className="text-coral-blue inline-block text-[32px] md:text-[46px] lg:text-[54px]">
              Nike{" "}
            </span>{" "}
            <span className="text-[32px] md:text-[46px] lg:text-[54px]">
              Shoes
            </span>
          </h1>
          <p className=" font-montserrat text-slate-gray text-lg leading-2 mt-4 mb-8 max-w-lg">
            Explore Nike world of premium sportswear and athletic footwear.
            Discover top-quality products designed to enhance your athletic
            performance and style. Shop the latest collections and enjoy.
          </p>
          <Button label="Shop Now" iconUrl={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-12 gap-8">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold font-palanquin">
                  {stat.value}{" "}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* image side  */}
        <div className="w-full xl:w-3/5 md:w-full relative flex-1 flex justify-center items-center bg-gradient-to-b from-blue-200 to-teal-50 bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={500}
            height={380}
            className=""
          />
          <div className="flex justify-center items-center gap-2 absolute -bottom-[10%] w-full sm:h-[125px] md:h-[135px] px-4">
            {shoes.map((ImgData, index) => (
              <div key={index}>
                <ShoeCard
                  index={index}
                  ImgData={ImgData}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
