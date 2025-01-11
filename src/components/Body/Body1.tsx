import { Button } from "../ui/button";
import BackgroundVideo from "./BackgroundVideo";

export default function Body1() {
  return (
    
    <div className="relative h-screen w-full">
        
      {/* Background Video with Blur and Curved Bottom Corners */}
      <div className="overflow-hidden rounded-b-lg">
        <BackgroundVideo src="/src/assets/vid.mp4" poster="/assets/image.jpeg" blurAmount={10} />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-8 text-center text-white z-10">
        <h1 className="font-extrabold text-5xl drop-shadow-2xl">
          IT Services For Business
        </h1>
        <div className="flex space-x-16 gap-10 ">
          <Button className="p-6 bg-blue-600 text-white rounded hover:bg-orange-500">
            IT Support Plans
          </Button>
          <Button className="p-6 bg-blue-600 text-white rounded hover:bg-orange-500">
            Cybersecurity Services
          </Button>
          <Button className="p-6 bg-blue-600 text-white rounded hover:bg-orange-500">
            IT Consulting
          </Button>
        </div>
        <h1 className="font-semibold text-3xl">
          Talk <i className="underline">Nerdy</i> To Us
        </h1>
      </div>
    </div>
  );
}
