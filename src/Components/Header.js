import React from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className='fixed w-screen z-20'>
      <div className='flex bg-header-footer items-center justify-between p-3'>
        <img
          src='./images/company_logo.png'
          alt='Company Logo'
          className='ml-4'
        />
        <Sidebar />
      </div>
      <div className='sm:flex hidden bg-banner-main justify-around p-2  '>
        <div className='flex items-center'>
          <img src='./images/header_image.png' alt='' className='' />
          <p className='ml-2'> Trust signal goes here</p>
        </div>
        <div className='flex items-center w-auto'>
          <img src='./images/header_image.png' alt='' />
          <p className='ml-2'>Trust signal goes here</p>
        </div>
        <div className='flex items-center'>
          <img src='./images/header_image.png' alt='' className='' />
          <p className='ml-2'>Trust signal goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
