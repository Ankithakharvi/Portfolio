export default function Projects() {
  const projects = [
    {
      title: "QuickBite AI",
      description: "Chatbot-style recipe assistant that suggests personalized meals, provides full recipes with nutritional info, and helps users build grocery lists based on ingredients and preferences.",
      image: "https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1545216560-68430ad77342%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Dfood%252Brecipe%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8M3x8Zm9vZCUyMHJlY2lwZXxlbnwwfHx8fDE3NTAzOTgyNzV8MA%26ixlib%3Drb-4.1.0&blend-w=1&auto=format&fit=crop&q=60",
      technologies: ["React.js", "Node.js","Express.js","RestAPI"],
      features: [
        "AI-powered recommendations",
        "Intelligent menu suggestions",
        "Seamless ordering experience"
      ],
      github: "https://github.com/Ankithakharvi/Quickbite-ai"
    },
    {
      title: "OneTapShare",
      description: "Streamlined file sharing platform with one-click sharing capabilities and secure transfer protocols for efficient collaboration.",
      image: "https://www.proofhub.com/articles/wp-content/uploads/2024/02/14-Best-File-Sharing-Apps-for-Businesses-in-2024.jpg",
      technologies: ["React.js", "Node.js", "Express" ],
      features: [
        "One-click file sharing",
        "Secure transfer protocols",
        "Efficient collaboration tools"
      ],
      github: "https://github.com/Ankithakharvi/OneTapShare"
    },
{
      title: "FMS Dashboard",
      description: "Hospital financial analytics dashboard with interactive filters and real-time KPIs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Power BI", "DAX", "Analytics"],
      features: [
        "Interactive filters and charts",
        "Real-time financial analytics",
        "KPI monitoring dashboard"
      ],
github: "https://github.com/Ankithakharvi/Fms-Dashboard"
    },
    {
      title: "KH Laboratory Portal",
      description: "Mobile-friendly web application for laboratory services with admin panel and document management.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/1/374538703/EA/HM/BP/128166579/laboratory-lab-service.jpg",
      technologies: ["React.js", "Node.js", "Admin Panel"],
      features: [
        "Service information display",
        "Patient feedback system",
        "Document upload functionality"
      ],
link:"https://khls.manipal.edu"
    },
    {
      title: "KH Patient Portal",
      description: "Mobile-based appointment system with OTP authentication and family profile management.",
      image: "data:image/jpeg;base64,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",
      technologies: ["Mobile-First", "OTP Auth", "Scheduling"],
      features: [
        "Family profile management",
        "Doctor appointment scheduling",
        "Integrated billing support"
      ],
 link:"https://khvalidation.manipal.edu"
    },
 
    
    {
      title: "Blood Bank Management",
      description: "Digital blood bank management system with donor registration, blood inventory tracking, and request management. Built with PHP for efficient healthcare operations.",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["PHP", "MySQL","XAAMP", "Bootstrap", "JavaScript"],
      features: [
        "Donor registration system",
        "Blood inventory tracking",
        "Request management"
      ],
      github: "https://github.com/Ankithakharvi/Blood-book-Mangement"
    },
    
     
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React.js": "bg-blue-500/20 text-blue-400",
      "Node.js": "bg-green-500/20 text-green-400",
      "Express": "bg-purple-500/20 text-purple-400",
      "AI/ML": "bg-pink-500/20 text-pink-400",
      "MongoDB": "bg-green-500/20 text-green-400",
      "Cloud Storage": "bg-gray-500/20 text-gray-400",
      "PHP": "bg-purple-500/20 text-purple-400",
      "MySQL": "bg-blue-500/20 text-blue-400",
      "JavaScript": "bg-yellow-500/20 text-yellow-400",
      "HTML": "bg-orange-500/20 text-orange-400",
      "CSS": "bg-blue-500/20 text-blue-400",
      "Bootstrap": "bg-purple-500/20 text-purple-400"
    };
    return colors[tech] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <section id="projects" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <img
                src={project.image}
                alt={`${project.title} project showcase`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-sm ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                 <a 
  href={project.github || project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:text-white transition-colors duration-200 inline-flex items-center"
>
  <i className="fas fa-external-link-alt mr-2"></i>View Details
</a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}