export default function Body4() {
  return (
    <>
      <main className="flex justify-around m-10 gap-20    ">
        {/* Section for IT Services Description */}
        <section className="flex flex-col w-1/3 space-y-6">
          <div className="border-b-4 border-orange-600">
            <h1 className="text-blue-700 font-extrabold text-3xl m-3">
              <a href="#" className="text-orange-500">
                Cybersecurity
              </a>
              <br /> Solutions.
            </h1>
          </div>
          <div>
            <p className="text-xl text-gray-800 leading-relaxed">
              Cybersecurity solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Section for Services List (Using Grid) */}
        <section className="w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700 ">
              Multi-Factor Authentication
            </h2>
            {/* <span className="text-sm text-gray-600">Ensure your business data is always protected and easily recoverable.</span> */}
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">
              Data Loss Prevention
            </h2>
            {/* <span className="text-sm text-gray-600">Mitigate risks with our comprehensive disaster recovery plans.</span> */}
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">Zero Trust</h2>
            {/* <span className="text-sm text-gray-600">24/7 support for all your IT needs to ensure smooth business operations.</span> */}
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">MDM / MAM</h2>
            {/* <span className="text-sm text-gray-600">End-to-end management of your IT infrastructure for optimal performance.</span> */}
          </div>

          {/* Service 5 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">
              Endpoint Protection
            </h2>
            {/* <span className="text-sm text-gray-600">Tailored IT solutions designed to meet your unique business needs.</span> */}
          </div>

          {/* Service 6 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 shadow-md hover:bg-gray-100">
            <h2 className="text-lg font-bold text-gray-700">
              Message Encryption
            </h2>
            {/* <span className="text-sm text-gray-600">Seamless migration of your server infrastructure to enhance scalability and performance.</span> */}
          </div>
        </section>
      </main>
    </>
  );
}
