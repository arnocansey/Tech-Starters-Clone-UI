export default function Body3() {
  return (
    <>
      <main className="flex justify-around m-10 gap-20  pt-20  ">
        {/* Section for Services List (Using Grid) */}
        <section className="w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700 ">
              Migrations To Micosoft 365
            </h2>
            {/* <span className="text-sm text-gray-600">Ensure your business data is always protected and easily recoverable.</span> */}
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">
              Microsoft 365 Support Plan
            </h2>
            {/* <span className="text-sm text-gray-600">Mitigate risks with our comprehensive disaster recovery plans.</span> */}
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">
              OneDrive For Business
            </h2>
            {/* <span className="text-sm text-gray-600">24/7 support for all your IT needs to ensure smooth business operations.</span> */}
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">
              Microsoft Sharepoint
            </h2>
            {/* <span className="text-sm text-gray-600">End-to-end management of your IT infrastructure for optimal performance.</span> */}
          </div>

          {/* Service 5 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">Microsoft Teams</h2>
            {/* <span className="text-sm text-gray-600">Tailored IT solutions designed to meet your unique business needs.</span> */}
          </div>

          {/* Service 6 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">Intune MDM/MAM</h2>
            {/* <span className="text-sm text-gray-600">Seamless migration of your server infrastructure to enhance scalability and performance.</span> */}
          </div>
        </section>

        {/* Section for IT Services Description */}
        <section className="flex flex-col w-1/3 space-y-6">
          <div className="border-b-4 border-orange-600">
            <h1 className="text-blue-700 font-extrabold text-3xl m-3 text-right">
              Get{" "}
              <a href="#" className="text-orange-500">
                Microsoft <br /> Business
              </a>{" "}
              Support and Licensing.
            </h1>
          </div>
          <div>
            <p className="text-xl text-gray-800 leading-relaxed">
              We are a Microsoft certified partner providing Microsoft
              consulting, ongoing Microsoft support plans, licensing audits,
              cybersecurity testing and more.
            </p>
          </div>
        </section>
      </main>
      <div className="bg-blue-900 text-center text-white p-2 ">
        <h1 className="font-bold text-3xl">Call Today</h1><br />
        <h1 className="font-bold text-5xl">(877) 932-0040</h1>
      </div>
    </>
  );
}
