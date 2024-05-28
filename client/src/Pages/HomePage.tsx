// import { Button } from "@/Components/UI/button"
import Sections from "@/Components/HomePage/Sections"
import Top10 from "@/Components/HomePage/Top10"
import { Input } from "@/Components/UI/input"
import { useState } from "react";

const HomePage = () => {

  const [searchActive, setSearchActive] = useState(false);



  return (
    <div className="w-screen h-screen fixed">
        <div className="w-full h-2/5 md:h-3/5 rounded-b-xl rounded-br-[40%] md:rounded-br-xl overflow-hidden bg-[url('/model.jpg')] bg-cover bg-center">
          <div className="w-full h-full backdrop-brightness-[0.65] flex flex-col justify-end md:items-center md:justify-center">

            <div className="w-full text-gray-200 p-2 md:flex md:items-baseline md:justify-center md:space-x-2">
              <h3 className="text-lg">Welcome to</h3>
              <h1 className="text-2xl text-white leading-7">Social Connection</h1>
              <p className="text-sm">Your Companion in the student journey.</p>
            </div>

            {/* Search div below */}
          <div className="flex w-8/12 md:w-full max-w-md items-center  space-x-2 p-2" >
          <Input type="text" placeholder='Search..' className="bg-[rgb(0,0,0,0.6)] text-white rounded-2xl md:text-xl md:px-4 " />
          {/* <Button type="submit"  className="bg-[rgb(0,0,0,0.3)] rounded-2xl border "><i className="fa fa-search"></i></Button> */}
          </div>
          </div>
        </div>

        <div className="w-full h-[180px] mt-3 p-1"> 
        <Top10/>
        </div>

        <div className="w-full h-fit mt-4 md:mb-5 p-1"> 
        <Sections/>
        </div>
        
    </div>
  )
}

export default HomePage
