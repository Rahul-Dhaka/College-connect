
import menu from '@/assets/menu-left.svg';
import { useState } from 'react';
import SideMenu from './SideMenu';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "../Components/UI/drawer";
  import { Button } from "../Components/UI/button";


const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
    // const [loginpop, setLoginpop] = useState(false);

    const toggleIsOpen = ():void =>{
       setIsOpen(!isOpen);
    }


  return (
   <div className="w-full h-10 bg-[rgb(0,0,0,0.6)] flex items-center justify-center fixed top-0 p-1 backdrop-blur-sm z-10">
    <div className='h-full p-2  absolute left-0'>
        <button className='h-full md:hidden' onClick={toggleIsOpen}><img src={menu} alt="" className=' h-full  '/></button>
        <SideMenu togglef={toggleIsOpen} isOpen={isOpen}/>
    
    <div className=' text-white space-x-4 text-sm hidden md:flex ml-3'>
        <h2 className='hover:cursor-pointer'>Home</h2>
        <h2 className='hover:cursor-pointer'>Syllabus</h2>
        <h2 className='hover:cursor-pointer'>Result</h2>
        <h2 className='hover:cursor-pointer'>Events</h2>
    </div>
    </div>
    
    <h1 className='text-white text-xl '>Social Connection</h1>

    <Drawer >
          <DrawerTrigger asChild>
            <img className='h-3/5 border rounded-full right-3 absolute hover:cursor-pointer' src="https://th.bing.com/th/id/OIP.Gy4SNpvDpRneju3UXV29JAHaHa?rs=1&pid=ImgDetMain" alt="" />
            
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you're done.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>


   </div>

  )
}

export default Navbar
