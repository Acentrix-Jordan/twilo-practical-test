import React from "react";

const Ending = () => {
  return (
    <div className='flex relative top-20 border-t'>
      <div className='flex h-screen max-h-[657px] align-center '>
        <div id='image_container'>
          <div className='relative left-[320px] top-[200px]'>
            <div id='square' className='h-[450px] w-[450px] bg-grey z-50'>
              .
            </div>
            <img
              className='relative bottom-[490px] right-[120px] -z-10'
              src='./images/lightning.png'
              alt=''
            />
            <div className='w-[450px] h-[450px] overflow-hidden absolute top-[-10px] left-[-10px]'>
              <img
                src='./images/dummy_image3.png'
                alt=''
                className='object-cover h-[450px]'
              />
            </div>
          </div>
        </div>
        <div>
          <h1>lorem ipsum dolor sit amet</h1>
        </div>
      </div>
    </div>
  );
};

export default Ending;
