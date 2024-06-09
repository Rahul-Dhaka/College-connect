import React from 'react';

interface SideMenuProps {
  togglef: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ togglef }) => {
  const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id !== 'main') {
      togglef();
    }
  };

  return (
    <div className="fixed w-screen h-screen left-0 top-0 z-10 bg-[rgb(0,0,0,0.7)] transition-all ease-in-out" onClick={clickHandle}>
      <div id="main" className="h-full w-4/5 bg-[rgb(0,0,0,0.7)] border-r border-gray-400 rounded-tr-xl rounded-br-xl"> 
        <button className="border text-white m-2" onClick={togglef}>Cross</button>
      </div>
    </div>
  );
}

export default SideMenu;
