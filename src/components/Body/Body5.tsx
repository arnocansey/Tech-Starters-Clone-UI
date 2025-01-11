export default function Body5() {
    return (
      <>
        <main className="flex flex-col items-center text-center p-8 space-y-10">
          {/* Heading Section */}
          <section className="space-y-4">
            <h1 className="text-4xl font-semibold text-blue-800">
              Why Choose Several Companies, When You Can Just Use One?
            </h1>
            <h3 className="text-lg text-blue-800">
              With TechStarters handling all of your IT needs, you can…
            </h3>
          </section>
  
          {/* Benefits Section - Horizontal layout */}
          <section className="flex flex-row space-x-8 w-full justify-center max-w-7xl">
            {/* Benefit 1: Budget Your IT Expenses */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all w-full max-w-sm">
              <h1 className="text-xl font-semibold text-orange-500 hover:text-blue-500 mb-2">
                Budget Your IT Expenses
              </h1>
              <p className="text-gray-700">
                With one, detailed flat rate invoice per month for our managed IT services, you will be able to budget accordingly for all of your IT expenses.
              </p>
            </div>
  
            {/* Benefit 2: Stay Organized */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all w-full max-w-sm">
              <h1 className="text-xl font-semibold text-orange-500 hover:text-blue-500 mb-2">
                Stay Organized
              </h1>
              <p className="text-gray-700">
                Why deal with multiple tech companies, when you can deal with one company that handles it all? We are a single-source provider for all your needs, including IT services, website management, VoIP, Microsoft solutions, and more.
              </p>
            </div>
  
            {/* Benefit 3: Manage Your Time */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all w-full max-w-sm">
              <h1 className="text-xl font-semibold text-orange-500 hover:text-blue-500 mb-2">
                Manage Your Time
              </h1>
              <p className="text-gray-700">
                Our technicians are full-time, top-level experienced professionals. When you call us, you will receive top-level support on the 1st call, every time — saving your business time and hassle.
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
  