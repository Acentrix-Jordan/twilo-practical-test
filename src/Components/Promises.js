import React from "react";

const promises = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between relative top-20 p-8 pt-16 mb-20 items-center'>
      <div className='items-center flex flex-col justify-center mt-4'>
        <img src='./images/england_heart.png' alt='error' />
        <h1>Lovingly hand-made in britain</h1>
        <p className='max-w-[450px] text-center mt-6'>
          Our canvas prints & picture frames are all handmade in Britain in our
          West Yorkshire studio. We believe everything is in the detail, which
          is why we produce the highest quality handmade products for our
          customers around the world.
        </p>
      </div>
      <div className='items-center flex flex-col justify-center mt-8'>
        <img src='./images/24_hours.png' alt='' />
        <h1>free next day delivery!</h1>
        <div className='mt-2 text-grey'>
          <h2 className='uppercase font-bold'>
            on canvas orders <span className='p-1 rounded'>in mainland uk</span>
          </h2>
        </div>

        <p className='max-w-[450px] text-center mt-8'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam.
        </p>
      </div>
      <div className='items-center flex flex-col justify-center mt-4'>
        <img src='./images/wreath_tick.png' alt='' />
        <h1>perfect print promise</h1>
        <p className='max-w-[450px] text-center mt-6'>
          Our beautiful canvas prints come with love guaranteed – no fussing or
          a-fightin’. Something not quite right? We will fix it. What's more,
          with our promise, we guarantee you'll receive the most beautiful
          canvas prints.
        </p>
      </div>
    </div>
  );
};

export default promises;
