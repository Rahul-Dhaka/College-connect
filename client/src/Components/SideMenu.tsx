import React from 'react';

interface SideMenuProps {
  togglef: () => void;
  isOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ togglef, isOpen }) => {
  const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id !== 'main') {
      togglef();
    }
  };

  return (
    <div className={`fixed w-screen h-screen top-0 left-0 bg-[rgb(0,0,0,0.7)]  rounded-md shadow-lg transition-all ${isOpen ? 'translate-x-0' : '-translate-x-full' } `} onClick={clickHandle}    >
      <div id="main" className={`h-full w-4/5 bg-[rgb(0,0,0,0.8)] border-r border-gray-400 rounded-tr-xl rounded-br-xl transform transition-all ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full' } `}> 
        <button className="border text-white m-2" onClick={togglef}>Cross - {isOpen.toString()}</button>

      <div className=' p-1 m-1 flex flex-col text-white gap-3 mt-10'>
        <button className='px-2 bg-gray-50 bg-opacity-0 hover:bg-opacity-10 rounded-md w-full text-start h-10'> Courses</button>
        <button className='px-2 bg-gray-50 bg-opacity-0 hover:bg-opacity-10  rounded-md w-full text-start h-10'> About us</button>
      </div>

      </div>
    </div>
  );
}

export default SideMenu;
