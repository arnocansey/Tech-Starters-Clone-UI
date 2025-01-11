// import React from "react";
import { Button } from "../ui/button";

const Body8 = (): JSX.Element => {
  return (
    <section className="py-10 px-5 pb-48">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome to Our Services</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Box 1 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg text-center w-48 h-48 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-2">Service 1</h3>
          <p className="text-gray-700 mb-2 text-sm">
            Short description of the service.
          </p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Box 2 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg text-center w-48 h-48 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-2">Service 2</h3>
          <p className="text-gray-700 mb-2 text-sm">
            Short description of the service.
          </p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Box 3 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg text-center w-48 h-48 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-2">Service 3</h3>
          <p className="text-gray-700 mb-2 text-sm">
            Short description of the service.
          </p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Box 4 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg text-center w-48 h-48 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-2">Service 4</h3>
          <p className="text-gray-700 mb-2 text-sm">
            Short description of the service.
          </p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-orange-500 w-2/3 h-64 relative top-80 rounded-xl  shadow-2xl left-64 opacity-85 flex flex-col justify-center">
        <h1 className="text-5xl text-center font-bold m-9 text-white">
          Interested in Partnering With a <br /> Managed Service Provider?
        </h1>
        <Button className="bg-blue-800 hover:bg-orange-600 w-1/3 text-white rounded text-center self-center p-5 text-xl font-semibold">
          Request A Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Body8;
