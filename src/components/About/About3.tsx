import { Button } from "../ui/button";

export default function About3() {
  return (
    <section className="bg-blue-900 py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-12 pb-64">
      <div className="text-white max-w-lg flex flex-col items-start md:items-center text-left md:text-center">
        <h1 className="text-orange-500 text-4xl md:text-6xl font-bold mb-6 text-left">
          Supporting Our Local Communities
        </h1>
        <p className="mb-4 text-left text-xl font-medium">
          We believe in staying involved and contributing to our local
          communities. Our offices have always been focused on helping kids.
          TechStarters Inc. self-purchases toys and distributes them to children
          in need, year-round. We also support local education foundations,
          children’s sports activities, and leagues. Additionally, we provide
          deeply discounted pricing to 501(c)(3) non-profit organizations.
        </p>
        <p className="mb-8 text-left text-xl">
          Our <i>nerdy</i> employees take pride in being actively involved in
          the local communities we serve, volunteering their time and talents to
          various causes.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded shadow w-full md:w-auto">
          Learn More
        </Button>
      </div>
      <div className="w-full md:w-1/2 h-72">
        <img
          src="/src/assets/i3.jpg"
          alt="Community involvement illustration"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
