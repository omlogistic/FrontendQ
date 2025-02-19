import React from "react";

const FleetComponent = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">My Fleet</h1>
          <h2 className="text-2xl mb-2">Logistics Maintenance</h2>
          <p className="text-base mb-6">
            Simplifying logistics maintenance for businesses of all sizes. Launching soon to revolutionize your operations.
          </p>
          <form className="flex justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 w-full max-w-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-blue-900 font-bold rounded-md hover:bg-blue-700 hover:text-white transition"
            >
              Notify Me
            </button>
          </form>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Tracking",
                description: "Real-time monitoring and updates for your logistics fleet.",
              },
              {
                title: "Maintenance Alerts",
                description: "Never miss a service or repair with automatic notifications.",
              },
              {
                title: "Streamlined Workflow",
                description: "Integrate seamlessly into your daily operations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>
          © 2024 Fleet. All rights reserved. |{" "}
          <a
            href="#"
            className="text-blue-500 font-bold hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default FleetComponent;
