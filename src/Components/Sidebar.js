import { React, useState } from "react";

function Sidebar() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className='z-50'>
      <button
        onClick={() => {
          menuActive ? setMenuActive(false) : setMenuActive(true);
        }}
      >
        <img
          src='./images/burger-menu.png'
          alt='burger menu'
          className='mr-4'
        />
      </button>

      <div className=''></div>
    </div>
  );
}

export default Sidebar;
