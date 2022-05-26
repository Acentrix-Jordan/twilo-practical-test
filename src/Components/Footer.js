import React from "react";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col p-4 text-white bg-header-footer '>
        <div className=' flex md:flex-row justify-between p-6 flex-col'>
          <div className='flex flex-col p-2'>
            <a href='/'>Home</a>
            <a href='/'>Canvas Builder</a>
            <a href='/'>Gift Certificates</a>
          </div>
          <div className='flex flex-col p-2'>
            <a href='/'>About Us</a>
            <a href='/'>Contact Us</a>
            <a href='/'>Blog</a>
            <a href='/'>Testimonials</a>
            <a href='/'>Case Studies</a>
            <a href='/'>Trade Account</a>
          </div>
          <div className='flex flex-col p-2'>
            <a href='/'>Help</a>
            <a href='/'>Delivery</a>
            <a href='/'>Terms & Conditions</a>
            <a href='/'>Returns</a>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Cookies Policy</a>
          </div>
          <div id='social_links' className='flex flex-col p-2'>
            <p>Find us on Social Media</p>
            <div className='flex flex-row'>
              <a href='/'>
                <AiFillFacebook className='text-5xl p-2' />
              </a>
              <a href='/'>
                <AiFillInstagram className='text-5xl p-2' />
              </a>
              <a href='/'>
                <BsPinterest className='text-5xl p-2' />
              </a>
            </div>
          </div>
          <div id='payment_methods' className='text-left md:text-right'>
            <p className='p-2'>Secure Payments</p>
            <div className='flex flex-wrap max-w-80 justify-start md:justify-end'>
              <img src='./images/visa.png' alt='' className='w-20 p-1' />
              <img src='./images/maestro.png' alt='' className='w-20 p-1' />
              <img src='./images/mastercard.png' alt='' className='w-20 p-1' />
              <img
                src='./images/american_express.png'
                alt=''
                className='w-20 p-1'
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id='copyright_banner'
        className='bg-copyright-main flex flex-col-reverse text-center justify-around p-10 lg:flex-row'
      >
        <p className='text-white p-1'>
          &copy; 2022 Lorem Ipsum Dolor Sit Amet. All Rights Reserved
        </p>
        <p className='text-white p-1'>
          Made with <p className='inline text-red-500'>&#x2764;</p> by Jordan
          Wilson
        </p>
        <p className='text-twilo p-1'>Website Design by Twilo Creative</p>
      </div>
    </div>
  );
};

export default Footer;
