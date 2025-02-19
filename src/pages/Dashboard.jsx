





// import React, { useEffect, useState } from "react";
// import Header from '../components/Header'

// const LandingPage = () => {
//   const [animateContent, setAnimateContent] = useState(false);

//   useEffect(() => {
   
//     setAnimateContent(true);
//   }, []);

//   return (
//     <div>
//      <Header/>
//       <section
//         className="relative min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: "url('./landig2.jpg')" }}
//         id="home"
//         aria-label="home"
//       >
//         <div className="container mx-auto">
//           {/* Content Box */}
//           <div
//             className={`bg-black text-white text-center p-8 rounded-md transition-all duration-1000 ease-in-out transform ${
//               animateContent ? "opacity-80 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <h2 className="text-5xl font-bold">
//               <span className="text-[#0047AB] text-6xl">Build Your Own</span> Fleet
//             </h2>
//             <p className="my-5 text-xl">
//               Welcome to <strong>MyFleet</strong>—your trusted partner in fleet
//               management. Manage, track, and grow your fleet efficiently with
//               our cutting-edge solutions. Empower your business to achieve new
//               heights with seamless fleet operations.
//             </p>
//             <button className="mt-5 px-6 py-3 bg-[#0047AB] hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg">
//               Get Started
//             </button>

           
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-900 text-white text-center py-4">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} MyFleet. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useEffect, useState } from "react";
import Header from '../components/Header'

const LandingPage = () => {
  const [animateContent, setAnimateContent] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false); // Track if header should be fixed

  useEffect(() => {
    // Animate content on page load
    setAnimateContent(true);

    // Listen for scroll event to track the scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderFixed(true); // Fix header if scrolled more than 50px
      } else {
        setIsHeaderFixed(false); // Unfix header if scrolled back to the top
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Pass the isHeaderFixed state to the Header component */}
      <Header isFixed={isHeaderFixed} />
      
      <div className="container mx-auto mt-16">
          {/* Content Box */}
          <div
            className={`bg-black text-white text-center p-8 rounded-md transition-all duration-1000 ease-in-out transform ${
              animateContent ? "opacity-80 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold">
              <span className="text-[#0047AB] text-6xl">Build Your Own</span> Fleet
            </h2>
         
            <button className="mt-5 px-6 py-3 bg-[#0047AB] hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg">
              Get Started
            </button>
          </div>
        </div>

      {/* Footer Section */}
      <footer className="bg-gray-900  mt-20 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyFleet. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
