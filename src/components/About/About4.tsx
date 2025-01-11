import { Button } from "../ui/button";

export default function About4() {
  return (
    <>
      <section className="flex flex-col items-center py-12 bg-gray-100 ">
        <h1 className="text-5xl font-semibold mb-8 text-blue-800 border-b-2 border-orange-700 pb-4">
          Our Partners
        </h1>
        <div className="flex flex-wrap justify-center gap-8 pb-44">
          <img
            src="/src/assets/logo3.png"
            alt="Partner Logo 3"
            className="w-32 h-32 object-contain transform transition duration-300 hover:scale-110 hover:opacity-90 hover:border hover:shadow-2xl"
          />
          <img
            src="/src/assets/logo5.png"
            alt="Partner Logo 5"
            className="w-32 h-32 object-contain transform transition duration-300 hover:scale-110 hover:opacity-90 hover:border hover:shadow-2xl"
          />
          <img
            src="/src/assets/logo1.png"
            alt="Partner Logo 1"
            className="w-32 h-32 object-contain transform transition duration-300 hover:scale-110 hover:opacity-90 hover:border hover:shadow-2xl"
          />
          <img
            src="/src/assets/logo4.png"
            alt="Partner Logo 4"
            className="w-32 h-32 object-contain transform transition duration-300 hover:scale-110 hover:opacity-90 hover:border hover:shadow-2xl"
          />
          <img
            src="/src/assets/logo2.png"
            alt="Partner Logo 2"
            className="w-32 h-32 object-contain transform transition duration-300 hover:scale-110 hover:opacity-90 hover:border hover:shadow-2xl"
          />
        </div>
      </section>
      <div className="bg-orange-500 text-center flex justify-around p-5 ">
        <h1 className="text-white text-4xl font-bold ">How Can We Help Your Business?</h1>
        <Button className="text-orange-600 bg-white rounded-3xl px-8 py-7 hover:border-white border-2 hover:text-white">SCHEDULE A FREE CONSULTATION</Button>
      </div>
    </>
  );
}
