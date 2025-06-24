export default function Experience() {
  const experiences = [
    {
      company: "Kasturba Hospital, Manipal",
      position: "Software Developer Intern",
      period: "Jan 2025 – June 2025",
      color: "bg-blue-500",
      achievements: [
        "Developed FMS Dashboard using Power BI with interactive filters, charts, and DAX KPIs",
        "Built KH Laboratory Services Portal with React + Node.js for mobile-friendly service viewing",
        "Created KH Patient Portal with OTP authentication and appointment scheduling system",
       ]
    },
    {
      company: "CodTech IT Solutions",
      position: "Web Developer Intern",
      period: "June 2024 – July 2024",
      color: "bg-green-500",
      achievements: [
        "Built responsive e-commerce website for ice cream shop using modern web technologies",
        "simple weather forcasting website",
        "Technologies used: HTML, CSS, JavaScript, PHP, MySQL"
      ]
    }
  ];

  const certifications = [
    { name: "Johns Hopkins University", subject: "HTML, CSS, JavaScript", color: "text-blue-500" },
    { name: "IBM - Coursera", subject: "Full Stack Developer", color: "text-green-500" },
    { name: "Meta - Coursera", subject: "Front-End Developer", color: "text-blue-400" },
    { name: "Google - Coursera", subject: "Advanced Data Analytics", color: "text-yellow-400" },
    { name: "Microsoft", subject: "Power BI", color: "text-orange-400" }
  ];

  return (
    <section id="experience" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Professional <span className="text-blue-500">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>
              <div className={`absolute left-4 top-6 w-4 h-4 ${exp.color} rounded-full border-4 border-black`}></div>
              <div className="ml-16">
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <p className="text-blue-500">{exp.position}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black"></div>
            <div className="ml-16">
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Manipal Academy of Higher Education</h3>
                    <p className="text-yellow-400">MCA - Data Science & Computer Applications</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">2023 – 2025</span>
                </div>
                <p className="text-gray-300">
                  Specialized in data science methodologies, computer applications, and full-stack development with focus on modern web technologies and data analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center">
                <i className={`fas fa-certificate ${cert.color} text-2xl mb-2`}></i>
                <h4 className="font-semibold">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
