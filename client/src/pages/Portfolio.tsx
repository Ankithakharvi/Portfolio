import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400">
            © 2024 Ankitha Kharvi. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
