// export default function Hero() {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };
 
// return (
//     <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <div className="mb-8">
//           <img
//             src="/Ankitha_kharvi.jpg"
//             alt="Ankitha Kharvi - Professional Headshot"
//             className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 object-cover"
//           />
//         </div>
//         <h1 className="text-5xl md:text-7xl font-bold mb-6">
//           <span className="text-white">Ankitha</span>{" "}
           
//         </h1>
//         <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
//           Full Stack Developer
//         </h2>
//         <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
//           MCA (Data Science & Computer Applications) | Passionate about building
//           responsive, user-centric web applications using modern technologies
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button
//             onClick={() => scrollToSection("projects")}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
//           >
//             View Projects
//           </button>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
//           >
//             Get In Touch
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              opacity: Math.random() * 0.5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              animation: `twinkle ${5 + Math.random() * 10}s infinite`
            }}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Profile image with glow effect */}
        <div className="mb-10">
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-70 blur-xl"></div>
            <img
              src="/Ankitha_kharvi.jpg"
              alt="Ankitha Kharvi - Professional Headshot"
              className="w-full h-full rounded-full mx-auto border-4 border-white/20 object-cover relative transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Name with gradient text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Ankitha Kharvi
          </span>
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl mb-6 animate-pulse">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-medium">
            Full Stack Developer And Software Developer
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide">
          MCA in Data Science & Computer Applications | Passionate about building
          responsive, user-centric web applications using modern technologies
        </p>
     
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="relative px-8 py-4 rounded-xl bg-transparent border-2 border-blue-500 text-blue-400 font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </button>

          <a
            href="/Ankitha_Resumee.pdf"
            download
            className="relative inline-flex items-center justify-center px-6 py-3 font-semibold tracking-wide text-white rounded-xl shadow-lg bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:from-gray-600 hover:to-gray-800 transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 mr-2 text-gray-200 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 1a1 1 0 00-1 1v12H5l5 5 5-5h-2V2a1 1 0 00-1-1H8z" />
            </svg>
            <span className="relative">Download Resume</span>
          </a>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0.2; }
        }

        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
