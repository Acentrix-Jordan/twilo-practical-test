import React from "react";
import DB from "../data/data.json";

const ProductGallery = () => {
  /* Responsive Styling START */
  const regularImageStyling =
    "object-cover justify-center overflow-hidden w-full md:max-w-[348px] md:h-[348px] h-[300px] max-w-[300px] rounded-lg";
  const mainImageStyling = `${regularImageStyling} 2xl:col-span-2 2xl:row-span-2 2xl:h-full 2xl:max-w-full`;
  const smallScreenStyling = `hidden sm:block ${regularImageStyling}`;
  const mediumScreenStyling = `hidden md:block ${regularImageStyling}`;
  const xxlScreenStyling = `hidden 2xl:block ${regularImageStyling}`;
  /*Responsive Styling END*/

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
        {DB.productGallery.map((image) => {
          return (
            <img
              id={image.id}
              className={
                image.isMainImage
                  ? mainImageStyling
                  : image.smallRender
                  ? smallScreenStyling
                  : image.mediumRender
                  ? mediumScreenStyling
                  : image.xxlRender
                  ? xxlScreenStyling
                  : regularImageStyling
              }
              src={image.productImage}
              alt={image.productImageDescription}
            />
          );
        })}
      </div>
      <span className='sm:m-10 sm:mb-20 mb-10 relative top-6'>
        CREATE YOUR NIGHT SKY
      </span>
    </div>
  );
};

export default ProductGallery;
