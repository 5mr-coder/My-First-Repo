export default function Resume() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Resume</h1>
          <p className="text-xl text-slate-300 mb-8">Download my resume to learn more about my experience and skills</p>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 max-w-2xl mx-auto card-hover">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Professional Experience</h2>
              <p className="text-slate-400 mb-4">
                Full-stack web developer with expertise in modern technologies and frameworks. 
                Passionate about creating efficient, scalable, and user-friendly applications.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Technical Skills</h3>
              <p className="text-slate-400">
                React, Next.js, TypeScript, Node.js, Express, PostgreSQL, Tailwind CSS, Docker, Git, REST & GraphQL APIs
              </p>
            </div>
            
            <a 
              href="/resume.pdf"
              download
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}