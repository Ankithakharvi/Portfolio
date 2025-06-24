export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate developer focused on building responsive,
              user-centric web applications using modern web technologies. With a
              strong academic background and real-world experience, I specialize
              in both frontend and backend development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From creating peer-to-peer platforms to data-driven dashboards, I
              bring ideas to life through clean, efficient code and intuitive
              user experiences.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace with laptop and coding environment"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors duration-200">
            <div className="text-blue-500 text-3xl mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["C++", "JavaScript", "SQL", "HTML/CSS"].map((skill) => (
                <span
                  key={skill}
                  className="bg-black border border-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors duration-200">
            <div className="text-green-400 text-3xl mb-4">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Node.js", "Express", "REST APIs"].map((skill) => (
                <span
                  key={skill}
                  className="bg-black border border-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors duration-200">
            <div className="text-yellow-400 text-3xl mb-4">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["Git/GitHub", "VS Code", "Power BI", "MySQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-black border border-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
