import { useState } from "react"

const Test = () => {
const[isOpen, setIsOpen] = useState(false);

const clickHandle = ():void=> {
    setIsOpen(!isOpen);
}

  return (
    <div className="m-10 border rounded p-4 h-40 overflow-hidden">


      <div className={`relative top-0 -left-16 h-full bg-red-300 w-10 rounded-md shadow-lg transition-all ease-linear duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-14' } `}>
{/* className={`fixed m-1 rounded-md top-0 right-0 w-80 h-full bg-red-300 shadow-lg transform transition-transform duration-300 z-50  ${isOpen ? 'translate-x-0' : 'translate-x-full' }`}  */}
            <h1 className={`w-fit text-end ml-14 relative hover:cursor-pointer transition-all ease-linear duration-400 ${isOpen ? 'rotate-0' : 'rotate-90' }`} onClick={clickHandle}>|||</h1>
     </div>
    </div>
  )
}

export default Test
