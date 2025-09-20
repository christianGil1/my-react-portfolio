import React from 'react';
import ScrollEffects from './ScrollEffects';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 px-6 lg:px-8 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <ScrollEffects effect="parallax" className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4 transition-colors duration-300">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </ScrollEffects>

        {/* Main Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollEffects effect="slide">
            <div>
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
                Christian Gil Saldua Alaan
              </h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed text-lg transition-colors duration-300">
                I'm a passionate full-stack developer and recent graduate from Xavier University with a Bachelor's degree in Information Technology.
                I thrive on solving complex problems and am always eager to learn new tools and techniques.
              </p>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              My goal is to continue growing my skills as a developer and contribute to innovative projects that
              make a real impact. I have hands-on experience in developing comprehensive web applications using modern technologies.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm transition-colors duration-300">
                Problem Solving
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm transition-colors duration-300">
                Full-Stack Development
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm transition-colors duration-300">
                Continuous Learning
              </span>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/50 rounded-lg p-4 border border-blue-200 dark:border-blue-500/20 transition-colors duration-300">
              <h3 className="text-slate-800 dark:text-white font-semibold mb-2 transition-colors duration-300">Contact Information</h3>
              <div className="text-slate-600 dark:text-gray-300 space-y-1 text-sm transition-colors duration-300">
                <p><strong>Location:</strong> Indahag, Cagayan de Oro, Misamis Oriental 9000</p>
                <p><strong>Phone:</strong> (+63) 995-374-0913</p>
                <p><strong>Email:</strong> christiangilalaan@gmail.com</p>
              </div>
            </div>
            </div>
          </ScrollEffects>

          <ScrollEffects effect="scale" className="flex flex-col items-center">
            <div className="w-64 h-64 mb-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
              <img
                src="https://i.ibb.co/YfcjqBX/3.jpg"
                alt="Christian Gil Alaan"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm border border-blue-200 dark:border-blue-500/20 w-full max-w-sm transition-colors duration-300">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1 transition-colors duration-300">2025</div>
                  <div className="text-slate-600 dark:text-gray-300 text-xs transition-colors duration-300">Graduate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1 transition-colors duration-300">3.4</div>
                  <div className="text-slate-600 dark:text-gray-300 text-xs transition-colors duration-300">GPA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1 transition-colors duration-300">5+</div>
                  <div className="text-slate-600 dark:text-gray-300 text-xs transition-colors duration-300">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1 transition-colors duration-300">1</div>
                  <div className="text-slate-600 dark:text-gray-300 text-xs transition-colors duration-300">Internship</div>
                </div>
              </div>
            </div>
          </ScrollEffects>
        </div>

        {/* Education Section */}
        <div className="bg-white/80 dark:bg-slate-800/50 rounded-xl p-8 border border-blue-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-300 mb-8 shadow-sm dark:shadow-none">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center transition-colors duration-300">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">🎓</span>
            </div>
            Education
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-6">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white transition-colors duration-300">Bachelor of Science in Information Technology</h4>
              <p className="text-blue-600 dark:text-blue-300 transition-colors duration-300">Xavier University – Ateneo de Cagayan</p>
              <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">2021 – 2025 | GPA: 3.4</p>
              <p className="text-slate-600 dark:text-gray-300 mt-2 transition-colors duration-300">Recent graduate with comprehensive foundation in software development, database management, system analysis, and modern web technologies.</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white/80 dark:bg-slate-800/50 rounded-xl p-8 border border-blue-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-300 mb-8 shadow-sm dark:shadow-none">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center transition-colors duration-300">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">💼</span>
            </div>
            Experience
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white transition-colors duration-300">Software Engineer Intern</h4>
              <p className="text-blue-600 dark:text-blue-300 transition-colors duration-300">Fligno Software</p>
              <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">August 2024 – November 2024</p>
              <p className="text-slate-600 dark:text-gray-300 mt-2 mb-3 transition-colors duration-300">
                Developed a comprehensive inventory management system from scratch using Laravel and React,
                designed to streamline tracking and optimize supply chain operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded text-xs transition-colors duration-300">Laravel</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded text-xs transition-colors duration-300">React</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded text-xs transition-colors duration-300">MySQL</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded text-xs transition-colors duration-300">Laragon</span>
              </div>
            </div>
            <div className="border-l-4 border-cyan-400 pl-6">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white transition-colors duration-300">Student Assistant</h4>
              <p className="text-cyan-600 dark:text-cyan-300 transition-colors duration-300">Xavier University – Ateneo de Cagayan</p>
              <p className="text-slate-500 dark:text-gray-400 text-sm transition-colors duration-300">May 2023 – August 2023</p>
              <p className="text-slate-600 dark:text-gray-300 mt-2 transition-colors duration-300">
                Assisted in technical setup for theater productions, managed schedules and backstage operations,
                supported event planning for cultural programs, and conducted museum tours while helping organize exhibits.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="bg-white/80 dark:bg-slate-800/50 rounded-xl p-8 border border-blue-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-300 mb-8 shadow-sm dark:shadow-none">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center transition-colors duration-300">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">⚡</span>
            </div>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-4 transition-colors duration-300">Core Skills</h4>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Programming', 'API Integration', 'Database Management'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Agile/Scrum Project Management', 'Cloud Computing', 'Networking & Infrastructure'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 rounded-full text-sm transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-4 mt-6 transition-colors duration-300">Development Tools</h4>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['Visual Studio Code', 'Laravel', 'Tailwind', 'Bootstrap', 'Vite', 'GitHub'].map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-200 rounded text-xs transition-colors duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['ClickUp', 'Swagger/OpenAPI', 'Azure Portal', 'Postman', 'Git Bash'].map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-cyan-50 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-200 rounded text-xs transition-colors duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300 mb-4 transition-colors duration-300">Database & Infrastructure</h4>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['MySQL Workbench', 'Laragon', 'phpMyAdmin', 'Firebase Console'].map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-cyan-50 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-200 rounded text-xs transition-colors duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Cisco Packet Tracer', 'PuTTY'].map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-200 rounded text-xs transition-colors duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300 mb-4 mt-6 transition-colors duration-300">Collaboration Tools</h4>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['Google Workspace', 'Slack'].map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-green-50 dark:bg-green-500/15 text-green-600 dark:text-green-200 rounded text-xs transition-colors duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-4 mt-6 transition-colors duration-300">Certifications</h4>
              <div className="bg-blue-50 dark:bg-slate-700/50 rounded-lg p-4 border border-blue-200 dark:border-blue-500/20 space-y-3 transition-colors duration-300">
                <div className="border-l-4 border-blue-400 pl-3">
                  <p className="text-slate-800 dark:text-white text-sm font-semibold transition-colors duration-300">Cisco Networking Academy</p>
                  <p className="text-slate-600 dark:text-gray-300 text-xs transition-colors duration-300">Xavier University - Ateneo de Cagayan</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    <strong>•</strong> CCNAv7: Introduction to Networks
                  </p>
                  <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    <strong>•</strong> CCNAv7: Switching, Routing, and Wireless Essentials
                  </p>
                  <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    <strong>•</strong> Cisco: Introduction to Cybersecurity
                  </p>
                  <p className="text-slate-600 dark:text-gray-300 transition-colors duration-300">
                    <strong>•</strong> Cisco: Ethical Hacker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation/Projects Section */}
        <div className="bg-white/80 dark:bg-slate-800/50 rounded-xl p-8 border border-blue-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm dark:shadow-none">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center transition-colors duration-300">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">📋</span>
            </div>
            Professional Documentation
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-6 border border-blue-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-semibold transition-colors duration-300">August 2024 - November 2024</span>
              </div>
              <img
                src="https://i.ibb.co/8rFcFy1/file.jpg"
                alt="Fligno OJT Documentation"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 transition-colors duration-300">On-The-Job Training at Fligno Software</h4>
              <p className="text-slate-600 dark:text-gray-300 text-sm transition-colors duration-300">
                Comprehensive documentation of my internship experience developing an inventory management system
                using Laravel and React, showcasing full-stack development skills and professional growth.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-6 border border-cyan-200 dark:border-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-center mb-4">
                <span className="text-cyan-600 dark:text-cyan-300 font-semibold transition-colors duration-300">May 2023 - August 2023</span>
              </div>
              <img
                src="https://i.ibb.co/nLVBLZ2/5.jpg"
                alt="Xavier University Documentation"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 transition-colors duration-300">Student Assistant at Xavier University</h4>
              <p className="text-slate-600 dark:text-gray-300 text-sm transition-colors duration-300">
                Documentation of my role as Student Assistant, including theater production support,
                event planning for cultural programs, and museum tour coordination at Museo de Oro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
