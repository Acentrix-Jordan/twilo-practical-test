import { React, useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "../data/navbarData";

function Sidebar() {
  const [menuActive, setMenuActive] = useState(false);

  const openHandler = () => {
    setMenuActive(!menuActive);
  };

  const showNavStyling =
    "z-40 fixed right-0 p-6 pt-32 pb-32 h-full top-0 bg-header-footer w-fit flex flex-col items-end justify-between ";
  const closeNavStyling = "hidden";

  return (
    <>
      <div className='z-50 p-6'>
        <Link to='#'>
          <img
            src={
              menuActive ? "./images/exit_menu.png" : "./images/burger-menu.png"
            }
            alt='menu button'
            onClick={openHandler}
          />
        </Link>
      </div>
      <div className={menuActive ? showNavStyling : closeNavStyling}>
        <div
          className='flex flex-col justify-between h-screen items-end'
          onClick={openHandler}
        >
          {navbarData.map((item, index) => {
            return (
              <div className='w-full flex text-yellow text-2xl hover:bg-slate-800 rounded p-2 hover:transition'>
                <Link
                  id={index}
                  to={item.path}
                  className='flex items-center pl-1'
                >
                  {item.icon}
                  <span className='bg-transparent text-yellow'>
                    {item.title}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
