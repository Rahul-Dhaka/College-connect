
const Top10 = () => {

    const iterations:number[] = Array.from({length:10},(_, index)=> index);

  return (
    <div className=" w-full h-full border rounded-xl shadow flex flex-col overflow-hidden">
      <h1 className="w-full font-semibold text-gray-500 px-2">Top 10 searches</h1>
      <div className=" w-full h-full  space-x-6 overflow-x-scroll scrollbar-hide overflow-y-clip">
            <div className="w-fit h-full min-w-full flex items-center justify-around">
            {iterations.map((index:number)=>(
                <div key={index} className="relative rounded-lg flex flex-col justify-center items-center m-1 h-5/6 w-24 border shadow  ml-4 bg-white">
                    <div className="absolute bottom-0 left-0 -ml-5 -mb-0  text-red-600  h-1/4  rounded-full px-1  py-0 text-3xl font-bold  ">{index+1}</div>
                    <img className="rounded-full w-4/5  " alt="Profile picture" src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain" />
                    <div className="text-[12px] font-semibold">Jack Original</div>
                </div>  
            ))}
            </div>
            
      </div>
    </div>
  )
}

export default Top10
