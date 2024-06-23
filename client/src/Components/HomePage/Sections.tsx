import { Button } from "../UI/button"


const Sections = () => {
  return (
    <div className="w-full h-fit flex flex-wrap justify-center p-2 border rounded-xl shadow gap-2 md:gap-10">
      <Button variant='outline' className="min-w-[120px] flex-1 bg-gray-100">Syllabus</Button>
      <Button variant='outline' className="min-w-[120px] flex-1 bg-gray-100">Result</Button>
      <Button variant='outline' className="min-w-[120px] flex-1 bg-gray-100">Chat</Button>
      <Button variant='outline' className="min-w-[120px] flex-1 bg-gray-100">Events</Button>
      <Button variant='outline' className="min-w-[120px] flex-1 bg-gray-100">Blogs</Button>
    </div>
  )
}

export default Sections
