
import menu from '@/assets/menu-left.svg';

const Navbar = () => {
  return (
   <div className="w-full h-10 bg-[rgb(0,0,0,0.6)] flex items-center justify-center fixed top-0 p-1 backdrop-blur-sm z-10">
    <div className='h-full p-2  absolute left-0'>
        <button className='h-full md:hidden' onClick={()=>alert(' menu button clicked')}><img src={menu} alt="" className=' h-full  '/></button>
    
    <div className=' text-white space-x-4 text-sm hidden md:flex ml-3'>
        <h2 className='hover:cursor-pointer'>Home</h2>
        <h2 className='hover:cursor-pointer'>Syllabus</h2>
        <h2 className='hover:cursor-pointer'>Result</h2>
        <h2 className='hover:cursor-pointer'>Events</h2>
    </div>
    </div>
    
    <h1 className='text-white text-xl '>Social Connection</h1>
    <img className='h-3/5 border rounded-full right-3 absolute' src="https://th.bing.com/th/id/OIP.Gy4SNpvDpRneju3UXV29JAHaHa?rs=1&pid=ImgDetMain" alt="" />
   </div>
  )
}

export default Navbar
