import { Button } from "../ui/button";
export default function Body7() {
    return (
      <>
        <section className="flex flex-col md:flex-row justify-around items-center p-8 space-y-8 md:space-y-0 ">
          {/* Text Section */}
          <div className="flex flex-col space-y-4 max-w-2xl text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-blue-600">
              We speak <i className="text-orange-500">nerd</i>, so you don’t have to.
            </h1>
            <h2 className="text-lg text-gray-700">
              TechStarters was founded in 2010 with a mission to provide technological solutions and excellent service to local businesses. Since then, TechStarters Inc. has become the most recognized, trusted, and professional IT services company servicing South Jersey, Philadelphia, Delaware, New York, and many more locations across the nation. Our client base has grown to provide business solutions for corporate, municipalities, non-profits, and of course, the local businesses that have always trusted in TechStarters.
            </h2>
            <Button className="bg-blue-700 text-white w-1/4 self-center">Learn More</Button>
          </div>
  
          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/src/assets/Choose-To-Be-Nerdy.png"
              alt="Choose to be nerdy"
              className="w-full max-w-md"
            />
          </div>
        </section>
      </>
    );
  }
  