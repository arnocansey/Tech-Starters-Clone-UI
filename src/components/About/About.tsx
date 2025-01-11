const About = (): JSX.Element => {
  return (
    <section className="w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-32 mb-32 relative">
      {/* Heading */}
      <div className="absolute top-24 w-full text-center">
        <h1 className="text-7xl font-extrabold text-white shadow-slate-950 drop-shadow-2xl">
          About Us
        </h1>
      </div>

      {/* Service 1 */}
      <div
        className="flex flex-col items-center bg-gray-50 shadow-md hover:bg-gray-100 rounded-xl"
        style={{
          backgroundImage: "url(/src/assets/i4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-96"></div>
      </div>

      {/* Service 2 */}
      <div
        className="flex flex-col items-center bg-gray-50 shadow-md hover:bg-gray-100 rounded-xl"
        style={{
          backgroundImage: "url(/src/assets/i1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-64"></div>
      </div>

      {/* Service 3 */}
      <div
        className="flex flex-col items-center bg-gray-50 shadow-md hover:bg-gray-100 rounded-xl"
        style={{
          backgroundImage: "url(/src/assets/i5.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-64"></div>
      </div>

      {/* Service 4 */}
      <div
        className="flex flex-col items-center bg-gray-50 shadow-md hover:bg-gray-100 rounded-xl"
        style={{
          backgroundImage: "url(/src/assets/i2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-64"></div>
      </div>
    </section>
  );
};

export default About;
