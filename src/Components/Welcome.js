import React from "react";
import DB from "../data/data.json";

const Welcome = () => {
  return (
    <div className=' relative top-32 flex flex-col items-center text-center'>
      <div className='max-w-md md:max-w-2xl lg:max-w-5xl'>
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
            className='md:absolute bottom-3 lg:left-60 md:left-16 hidden md:block'
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
      <div id='container' className='flex w-screen justify-around flex-wrap  '>
        {DB.welcome.map((section) => {
          return (
            <div className='flex flex-col items-center p-4'>
              <div className='max-h-[300px] overflow-hidden justify-center '>
                <img src={section.image} alt={`${section.imageAlt}`} />
              </div>
              <h2 className='text-grey font-cursive text-2xl p-2'>
                {section.title}
              </h2>
              <p className='max-w-[386px] text-grey'>{section.description}</p>
            </div>
          );
        })}
      </div>
      <span className='sm:m-10 sm:mb-20 mb-10'>CREATE YOUR NIGHT SKY</span>
    </div>
  );
};

export default Welcome;
