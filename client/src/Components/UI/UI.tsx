// import Btn from "./Btn"

import { Button } from "./button";

const UI = () => {
  return (
    <>
      <div className="bg-gray-900 w-full p-1 h-10 fixed top-0 flex justify-center items-center">
        <p className="text-white text-center"> These are all the UI components available to use</p>
      </div>
      <div className="w-full h-full fixed overflow-y-auto">

        <div className=" flex flex-wrap  gap-2 mt-10 justify-center p-1">
        <div className="border drop-shadow-md bg-white border-gray-400 rounded-lg  overflow-hidden flex-1 m-1 h-fit w-fit min-h-40 min-w-40 flex flex-col items-center justify-center ">
            <h1 className="w-full bg-gray-300 text-center absolute top-0">Button</h1>
            <Button >Click me</Button>
        </div>
        <div className="border drop-shadow-md bg-white border-gray-400 rounded-lg  overflow-hidden flex-1 m-1 h-fit w-fit min-h-40 min-w-40 flex flex-col items-center justify-center ">
            <h1 className="w-full bg-gray-300 text-center absolute top-0">I am heading</h1>
            <Button >I am button</Button>
        </div>

        

        </div>
        
      </div>
    </>
  );
};

export default UI;
