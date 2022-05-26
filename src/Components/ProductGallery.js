import React from "react";

const ProductGallery = () => {
  return (
    <div className='flex relative top-24 align-center flex-col back bg-header-footer justify-center items-center '>
      <div className='relative top-12 w-[320px] items-center'>
        <h1 className='text-4xl text-white'>(Product_Title) Gallery</h1>
        <img
          src='./images/welcome_decoration.png'
          alt='error'
          className='md:absolute bottom-2 right-4 hidden md:block'
        />
      </div>
      <div
        id='container'
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-{200px} 2xl:grid-cols-5 2xl:auto-rows-{348px} box-border gap-4 2xl:gap-5 p-8 relative top-12'
      >
        <img
          id='main_image'
          className='object-cover justify-center overflow-hidden w-full md:max-w-[348px] md:h-[348px] h-[300px] max-w-[300px] 2xl:col-span-2 2xl:row-span-2 2xl:h-full 2xl:max-w-full border rounded-lg'
          src='./images/dummy_image1.png'
          alt=''
        />
        <img
          className=' object-cover justify-center overflow-hidden w-full md:max-w-[348px] md:h-[348px] h-[300px] max-w-[300px] rounded-lg'
          src='./images/dummy_image1.png'
          alt=''
        />
        <img
          className=' object-cover justify-center overflow-hidden w-full md:max-w-[348px] md:h-[348px] h-[300px] max-w-[300px] rounded-lg'
          src='./images/dummy_image1.png'
          alt=''
        />
        <img
          className='hidden sm:block object-cover justify-center overflow-hidden w-full md:max-w-[348px] md:h-[348px] h-[300px] max-w-[300px] rounded-lg'
          src='./images/dummy_image1.png'
          alt=''
        />
        <img
          className='hidden md:block object-cover justify-center overflow-hidden w-full md:max-w-[348px] md:h-[348px] h-[300px] max-w-[300px] rounded-lg'
          src='./images/dummy_image1.png'
          alt=''
        />
        <img
          className='hidden md:block object-cover justify-center overflow-hidden w-full md:max-w-[348px] md:h-[348px] h-[300px] max-w-[300px] rounded-lg'
          src='./images/dummy_image1.png'
          alt=''
        />
        <img
          className='hidden 2xl:block object-cover justify-center overflow-hidden w-full md:max-w-[348px] md:h-[348px] h-[300px] max-w-[300px] rounded-lg'
          src='./images/dummy_image1.png'
          alt=''
        />
      </div>
      <span className='sm:m-10 sm:mb-20 mb-10 relative top-6'>
        CREATE YOUR NIGHT SKY
      </span>
    </div>
  );
};

export default ProductGallery;
