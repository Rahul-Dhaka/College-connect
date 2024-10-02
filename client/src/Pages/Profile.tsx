import { Card, CardContent } from "@/Components/UI/card"
import { Button } from "@/Components/UI/button"
import { ChevronLeft } from "lucide-react"

const Profile = () => {
    return (
        <div className=" w-screen h-screen bg-center bg-cover bg-[url('/model.jpg')]">
          <div className=" w-full h-full pt-10  backdrop-filter backdrop-grayscale backdrop-brightness-75  ">
            <header className="flex items-center  p-4">
              <button className="">
                <ChevronLeft className="h-6 w-6" />
              </button>
              Pratyay Mandal
            </header>
            <Card className="bg-[rgb(0,0,0,0.6)] m-2 text-white overflow-hidden border rounded-xl backdrop-blur-sm">
              <CardContent className="p-2">
                <div className="relative flex flex-col md:flex-row w-full ">
                <img src="/model.jpg" alt="Profile picture"  className="w-full md:w-1/4 h-56 aspect-square rounded-lg object-cover object-center"/>
                <div className="mt-2 md:ml-6">
                      <h2 className="text-xl font-bold">Pratyay Mandal, 23</h2>
                      <p className="text-sm text-gray-300">BCA, 2nd year</p>
                      <p className="text-sm text-gray-300">Loves to - Play Basket Ball</p>
                    </div>
                  {/* <div className="absolute border-2 inset-0 z-0">
                    <img
                      src="/model.jpg"
                      alt="Background"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover filter blur-sm opacity-50"
                    />
                  </div>
                  <div className="relative z-10 flex items-start space-x-4">
                    <img
                      src="/model.jpg"
                      alt="Profile picture"
                      width={100}
                      height={100}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    
                  </div> */}
                </div>
                <Button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white">Poke</Button>
              </CardContent>
            </Card>
          </div>
          </div>
      )
}

export default Profile
