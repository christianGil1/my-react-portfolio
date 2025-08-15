import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const Home = () => {
  const [showPdfModal, setShowPdfModal] = useState(false);
  const toolbarPluginInstance = toolbarPlugin();

  const openPdfModal = () => {
    setShowPdfModal(true);
  };

  const closePdfModal = () => {
    setShowPdfModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-20 pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
                <img
                  src="https://i.imgur.com/fTn18pP.jpg"
                  alt="Christian Gil Alaan"
                  className="w-full h-full rounded-full object-cover object-top"
                  style={{objectPosition: '50% 20%'}}
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Christian Gil Alaan</span>
          </h1>

          <p className="text-xl leading-8 text-gray-300 mb-8 max-w-2xl mx-auto">
            Recent IT graduate and Software Engineer Intern with hands-on experience in full-stack development.
            Passionate about creating innovative web solutions using modern technologies like Laravel and React.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/journal"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 text-center"
            >
              View My Work
            </Link>
            <button
              onClick={openPdfModal}
              className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 cursor-pointer"
            >
              View Resume
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section className="px-6 lg:px-8 py-20 bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Recent Graduate & Software Engineer
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a recent Bachelor of Science in Information Technology graduate from Xavier University
                with hands-on experience as a Software Engineer Intern at Fligno Software. I thrive on
                solving complex problems and am always eager to learn new tools and techniques.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Problem Solving
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Continuous Learning
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">2025</div>
                    <div className="text-gray-300 text-sm">Graduate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">3.4</div>
                    <div className="text-gray-300 text-sm">GPA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">4</div>
                    <div className="text-gray-300 text-sm">Cisco Certs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">2</div>
                    <div className="text-gray-300 text-sm">Internships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">WD</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
              <div className="space-y-3">
                {['Laravel', 'React', 'PHP', 'JavaScript', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Infrastructure */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">DB</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Database & Infrastructure</h3>
              <div className="space-y-3">
                {['MySQL', 'Firebase', 'Laragon', 'phpMyAdmin', 'Azure Portal', 'API Integration'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">DT</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Development Tools</h3>
              <div className="space-y-3">
                {['Visual Studio Code', 'Git', 'GitHub', 'Postman', 'Vite', 'Swagger/OpenAPI'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Resume - Christian Gil Alaan</h3>
              <button
                onClick={closePdfModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                <Viewer
                  fileUrl="/ChristianGil_Alaan_Resume.pdf"
                  plugins={[toolbarPluginInstance]}
                  onLoadError={(error) => {
                    console.error('PDF Load Error:', error);
                    alert('Error loading PDF. Please check if resume.pdf exists in the public folder.');
                  }}
                />
              </Worker>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;