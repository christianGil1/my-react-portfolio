import React from 'react';

const Journal = () => {
  const projects = [
    {
      title: "Fligno Inventory System",
      description: "A comprehensive inventory management system designed to streamline tracking and optimize supply chain operations with real-time monitoring and reporting features.",
      technologies: ["React", "Laravel", "MySQL", "PHP", "Laragon"],
      image: "https://i.ibb.co/K0zLj2F/image-1.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Cruiseship Booking System",
      description: "A user-friendly booking system designed to simplify the process of booking and managing cruiseship reservations with integrated payment processing.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      image: "https://i.ibb.co/LggMkSZ/image.png",
      github: "#",
      demo: "#"
    },
    {
      title: "XU-NSP Website",
      description: "The Xavier University - Night School Program Website developed using WordPress content management system with custom themes and functionality.",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript"],
      image: "https://i.ibb.co/M8xRKFT/image.png",
      github: "#",
      demo: "#"
    }
  ];

  const miniProjects = [
    {
      title: "To-Do App",
      image: "https://i.ibb.co/0jkdkCg/image.png",
      technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Notes App",
      image: "https://i.ibb.co/0DzLwMQ/image.png",
      technologies: ["React", "LocalStorage"]
    },
    {
      title: "Search Filter App",
      image: "https://i.ibb.co/jvCNLhj/image.png",
      technologies: ["JavaScript", "API"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>


              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Mini Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A collection of smaller projects that showcase different skills and technologies.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="relative mb-6 h-96 flex justify-center items-center overflow-hidden">
              {/* Scattered and Tilted Images */}
              <img
                src={miniProjects[0].image}
                alt={miniProjects[0].title}
                className="w-72 h-48 rounded absolute top-4 left-1/4 transform rotate-[-10deg] shadow-lg border-2 border-blue-400/30"
              />
              <img
                src={miniProjects[1].image}
                alt={miniProjects[1].title}
                className="w-56 h-42 rounded absolute top-8 right-1/4 transform rotate-[10deg] shadow-lg border-2 border-cyan-400/30"
              />
              <img
                src={miniProjects[2].image}
                alt={miniProjects[2].title}
                className="w-56 h-42 rounded absolute bottom-4 left-1/2 transform -translate-x-1/2 rotate-[-5deg] shadow-lg border-2 border-blue-400/30"
              />
            </div>

            <h3 className="text-xl font-semibold text-white mb-4 text-center">Collection of Mini Projects</h3>
            <p className="text-gray-300 text-center mb-6">
              A collection of projects including a to-do app, notes app, search filtering app, and other applications that I developed to practice different technologies and concepts.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {miniProjects.map((project, index) =>
                project.technologies.map((tech, techIndex) => (
                  <span
                    key={`${index}-${techIndex}`}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))
              )}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
