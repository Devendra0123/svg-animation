import Image from "next/image";
import React from "react";
import {Freehand} from "next/font/google";


const freehand = Freehand({
  subsets:["khmer", "latin"],
  weight: ['400']
});

const LeftSection = () => {
  return (
    <div className="relative pl-[100px] lg:pl-[150px]">
      <div>
        <div>
          <p className="font-bold text-[19px]">Devendra Chaudhary</p>
        </div>
        <div>
          <div>
            <div className="flex items-center">
              <Image
                src="/react-icon.png"
                alt="react-icon"
                width={60}
                height={60}
                className=""
              />
              <span className="text-primaryBlue font-bold text-[27px]">
                REACT
              </span>
              <span className="ml-[30px]">&&</span>
              <Image
                src="/nextjs-icon.png"
                alt="next-icon"
                width={100}
                height={60}
                className="ml-[30px] "
              />
            </div>
            <p className="ml-[50px] font-bold">{`developer(Javascript)`}</p>
          </div>
        </div>
        <div className="mt-[25px] ml-[50px] flex items-center gap-[10px]">
          <button className="bg-yellow1 py-[10px] px-[25px] font-medium">
            Hire Now
          </button>
          {/* <button className={`${freehand.className} text-xl font-bold text-primaryBlue`}>
             Resume
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
