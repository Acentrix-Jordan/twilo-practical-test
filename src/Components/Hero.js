import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='flex bg-hero-image bg-cover bg-center relative top-20'>
      <div className='flex min-h-screen align-center '>
        <div className='flex flex-col lg:max-w-[690px] justify-center items-center relative bottom-10 text-center lg:ml-24'>
          <div>
            <h1 className='text-white text-6xl m-4'>
              Lorem Ipsem Dolor Sit Amet
            </h1>
          </div>
          <div>
            <p className='text-white text-xl mb-8 text-center max-w-[380px] md:max-w-[690px] pl-4 lg:pl-0'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam, nonummy nibh euismor tincidunt ut laoreet dolore magna,
              aliquam erat volutpat. Ut wisi enim veniam, quis nostrud exerci
              tation
            </p>
          </div>
          <div className='mb-10'>
            <span>Create your night sky</span>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-white'>EXPLORE</p>
            <div className='text-white text-3xl'>
              <FaLongArrowAltDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
