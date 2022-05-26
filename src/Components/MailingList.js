import React from "react";

const MailingList = () => {
  return (
    <div className='p-8 bg-mail-main flex flex-col items-center'>
      <div className='relative items-center justify-center'>
        <img
          src='./images/welcome_decoration.png'
          alt=''
          className='absolute top-3'
        />
        <h1 className='text-xl p-4'>
          join the mailing list and send in your photos
        </h1>
      </div>
      <form action='POST' className='flex flex-col items-center lg:flex-row'>
        <input
          type='text'
          placeholder='*Name'
          required
          className='border-2 border-yellow p-2 m-2 w-80'
        />
        <input
          type='email'
          placeholder='*Email'
          required
          className='border-2 border-yellow p-2 m-2 w-80'
        />
        <div className='relative w-32 flex items-center justify-center m-4'>
          <img src='./images/mail_decoration.png' alt='' className='absolute' />
          <input
            type='submit'
            value='SUBSCRIBE'
            className='font-bold hover:text-yellow z-40'
          />
        </div>
      </form>

      <div
        id='images'
        className='hidden md:flex justify-center overflow-hidden w-full p-4 h-[300px]'
      >
        <img
          src='./images/dummy_image4.png'
          alt=''
          className='max-w-60 max-h-60 p-2 box-border hidden lg:block'
        />
        <img
          src='./images/dummy_image5.png'
          alt=''
          className='max-w-60 max-h-60 p-2 box-border '
        />
        <img
          src='./images/dummy_image6.png'
          alt=''
          className='max-w-60 max-h-60 p-2 box-border '
        />
        <img
          src='./images/dummy_image7.png'
          alt=''
          className='max-w-60 max-h-60 p-2 box-border '
        />
        <img
          src='./images/dummy_image8.png'
          alt=''
          className='max-w-60 max-h-60 p-2 box-border hidden lg:block'
        />
      </div>
    </div>
  );
};

export default MailingList;
