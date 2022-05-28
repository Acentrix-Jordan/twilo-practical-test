import React from "react";
import DB from "../data/data.json";

const MailingList = () => {
  const imageStyling = "max-w-60 max-h-60 p-2 box-border";

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
      <form
        name='mailing list'
        action='POST'
        data-netlify='true'
        className='flex flex-col items-center lg:flex-row'
      >
        <input
          type='text'
          placeholder='*Name'
          id='name'
          required
          className='border-2 border-yellow p-2 m-2 w-80'
        />
        <input
          type='email'
          id='email'
          placeholder='*Email'
          required
          className='border-2 border-yellow p-2 m-2 w-80'
        />
        <div data-netlify-recaptcha='true'></div>
        <div className='relative w-32 flex items-center justify-center m-4'>
          <img src='./images/mail_decoration.png' alt='' className='absolute' />
          <input
            type='submit'
            value='SUBSCRIBE'
            className='font-bold hover:text-yellow z-40 hover:transition hover:duration-300'
          />
        </div>
      </form>

      <div
        id='images'
        className='hidden md:flex justify-center overflow-hidden w-full p-4 h-[300px]'
      >
        {DB.mailingListImages.map((image) => {
          return (
            <img
              id={image.id}
              src={image.image}
              alt={image.imageDescription}
              className={
                image.id < 4 ? imageStyling : `${imageStyling} hidden lg:block`
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default MailingList;
