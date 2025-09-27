export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern payment integration and admin dashboard.",
      status: "Coming Soon"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team collaboration features.",
      status: "Coming Soon"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool with customizable templates and analytics.",
      status: "Coming Soon"
    },
    {
      title: "Health & Fitness Tracker",
      description: "Comprehensive fitness tracking application with progress analytics and social features.",
      status: "Coming Soon"
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate listing platform with advanced search and virtual tour capabilities.",
      status: "Coming Soon"
    },
    {
      title: "Social Media Dashboard",
      description: "Unified social media management dashboard with scheduling and analytics.",
      status: "Coming Soon"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 gradient-text">My Projects</h1>
          <p className="text-xl text-slate-300">Explore my latest work and creative solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 rounded-2xl p-6 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <button 
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                disabled
              >
                {project.status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}