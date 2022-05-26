import React from "react";

const Welcome = () => {
  return (
    <div className=' relative top-32 flex flex-col items-center text-center 2xl:max-h-[940px] '>
      <div className='max-w-md md:max-w-[630px] lg:max-w-[930px]'>
        <h2 className='mb-10 font-bold text-grey'>
          WELCOME TO <span>LOREM IPSUM DOLOR</span>
        </h2>
        <div className='relative'>
          <h1 className='text-4xl pb-4 text-grey'>
            LOREM IPSUM DOLOR SIT AMET CONSECTETUER
          </h1>
          <img
            src='./images/welcome_decoration.png'
            alt='error'
            className='md:absolute bottom-3 lg:left-48 md:left-11 hidden md:block'
          />
        </div>
        <p className=' pb-10 text-grey'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in velit esse molestie consequat
        </p>
      </div>
      <div
        id={"container"}
        className='flex w-screen justify-around flex-wrap  '
      >
        <div className='flex flex-col items-center p-4'>
          <div className='max-h-[300px] overflow-hidden justify-center '>
            <img src='./images/dummy_image1.png' alt='' />
          </div>
          <h2 className='text-grey font-cursive text-2xl p-2'>
            LOREM IPSUM DOLOR SIT AMET CONSECTETUER
          </h2>
          <p className='max-w-[386px] text-grey'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl.
          </p>
        </div>
        <div className='flex flex-col items-center p-4'>
          <div className='max-h-[300px] overflow-hidden'>
            <img className='min-h-fit' src='./images/dummy_image2.png' alt='' />
          </div>
          <h2 className='text-grey font-cursive text-2xl p-2'>
            LOREM IPSUM DOLOR SIT AMET CONSECTETUER
          </h2>
          <p className='max-w-[386px] text-grey'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl.
          </p>
        </div>
        <div className='flex flex-col items-center p-4'>
          <img src='./images/dummy_image3.png' alt='' />
          <h2 className='text-grey font-cursive text-2xl p-2'>
            LOREM IPSUM DOLOR SIT AMET CONSECTETUER
          </h2>
          <p className='max-w-[386px] text-grey'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl.
          </p>
        </div>
      </div>
      <span className='sm:m-10 sm:mb-20 mb-10'>CREATE YOUR NIGHT SKY</span>
    </div>
  );
};

export default Welcome;
