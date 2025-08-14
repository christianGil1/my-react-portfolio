import React, { useState, useEffect } from 'react';

const Journal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentMiniSlide, setCurrentMiniSlide] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const projects = [
    {
      title: "XU - Physical Plant Office Work Order System",
      description: "A web-based work order and resource management system designed to streamline operations for the Physical Plant Office with user authentication and real-time notifications.",
      technologies: ["Laravel", "Bootstrap", "PostgreSQL", "Digital Ocean"],
      image: "https://i.ibb.co/7TJsDkz/Picture1.png",
      period: "MAR 2025 - MAY 2025",
      type: "Capstone Project"
    },
    {
      title: "Fligno Inventory System",
      description: "A comprehensive inventory management system designed to streamline tracking and optimize supply chain operations with real-time monitoring and reporting features.",
      technologies: ["Laravel", "React", "MySQL", "PHP", "Laragon"],
      image: "https://i.ibb.co/K0zLj2F/image-1.png",
      period: "AUG 2024 - NOV 2024",
      type: "Internship Project"
    },
    {
      title: "XU-NSP Website",
      description: "The Xavier University - Night School Program Website developed using WordPress content management system with custom themes and functionality.",
      technologies: ["WordPress CMS", "PHP", "MySQL", "JavaScript"],
      image: "https://i.ibb.co/tw8RR350/Screenshot-2024-06-04-154609.png",
      period: "JUN 2024 - JUL 2024",
      type: "Academic Project"
    },
    {
      title: "Cruiseship Booking System",
      description: "A user-friendly booking system designed to simplify the process of booking and managing cruiseship reservations with integrated payment processing.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "https://i.ibb.co/LggMkSZ/image.png",
      period: "SEP 2023 - NOV 2023",
      type: "Academic Project"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Drag functionality
  const handleDragStart = (e) => {
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
    setIsDragging(true);
    setIsPaused(true); // Pause auto-advance while dragging
    setDragOffset(0); // Reset offset
  };

  const handleDragEnd = (e) => {
    if (!isDragging || dragStart === null) return;

    const clientX = e.type === 'mouseup' ? e.clientX : e.changedTouches[0].clientX;
    const dragDistance = dragStart - clientX;
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        // Dragged left - go to next slide
        nextSlide();
      } else {
        // Dragged right - go to previous slide
        prevSlide();
      }
    }

    // Reset drag state
    setDragStart(null);
    setIsDragging(false);
    setDragOffset(0);
    setIsPaused(false); // Resume auto-advance
  };

  const handleDragMove = (e) => {
    if (!isDragging || dragStart === null) return;
    e.preventDefault(); // Prevent text selection while dragging

    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const currentOffset = clientX - dragStart;
    setDragOffset(currentOffset);
  };

  // Auto-advance slideshow every 4 seconds (pause on hover)
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 4000); // 4 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [projects.length, isPaused]);

  const miniProjects = [
    {
      title: "Notes App",
      image: "https://i.ibb.co/0DzLwMQ/image.png",
      technologies: ["Laravel", "React", "LocalStorage"]
    },
    {
      title: "To-Do App",
      image: "https://i.ibb.co/0jkdkCg/image.png",
      technologies: ["JavaScript", "HTML", "CSS"]
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

        {/* Project Slideshow */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className={`flex cursor-grab active:cursor-grabbing select-none ${
                isDragging ? '' : 'transition-transform duration-500 ease-in-out'
              }`}
              style={{
                transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`
              }}
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseMove={handleDragMove}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
              onTouchMove={handleDragMove}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 mx-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-contain bg-slate-900/50 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-8">
                      {project.period && (
                        <div className="text-center mb-4">
                          <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-400/30">
                            {project.period}
                          </span>
                        </div>
                      )}

                      <h3 className="text-2xl font-semibold text-white mb-3 text-center">{project.title}</h3>

                      {project.type && (
                        <p className="text-cyan-300 text-center font-medium mb-4">{project.type}</p>
                      )}

                      <p className="text-gray-300 mb-6 leading-relaxed text-center">{project.description}</p>

                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
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

          <div className="relative bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 max-w-4xl mx-auto shadow-lg shadow-blue-900/20">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl pointer-events-none z-0"></div>

            <div className="relative mb-6 h-80 md:h-96 flex justify-center items-center overflow-hidden z-10">
              {/* Scattered and Tilted Images */}
              <img
                src={miniProjects[0].image}
                alt={miniProjects[0].title}
                className="w-56 h-42 rounded absolute top-12 right-35 transform rotate-[10deg] shadow-lg border-2 border-cyan-400/30 z-10"
              />
              <img
                src={miniProjects[1].image}
                alt={miniProjects[1].title}
                className="w-64 h-44 rounded absolute top-8 left-35 transform rotate-[-10deg] shadow-lg border-2 border-blue-400/30 z-20"
              />
              <img
                src={miniProjects[2].image}
                alt={miniProjects[2].title}
                className="w-56 h-42 rounded absolute bottom-8 left-1/2 transform -translate-x-1/2 rotate-[-5deg] shadow-lg border-2 border-blue-400/30 z-15"
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
