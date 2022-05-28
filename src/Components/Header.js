import React from "react";
import Sidebar from "./Sidebar";
import DB from "../data/data.json";

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
        {DB.header.map((signal) => {
          return (
            <div id={signal.id} className='flex items-center'>
              <img src={signal.trustImage} alt='' />
              <p className='ml-2'>{signal.trustSignal}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
