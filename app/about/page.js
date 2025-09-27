import { skills } from '../../utils/constants'

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 gradient-text">About Me</h1>
        </div>
        
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 card-hover">
          <p className="text-lg text-slate-300 leading-relaxed">
            I&apos;m Adamanth, a web developer who loves making the strange and complex feel approachable. 
            I thrive on creative problem-solving, blending clean code with thoughtful design. 
            My work is all about building digital experiences that are functional, engaging, and a little bit unexpected.
          </p>
        </div>

        <div className="animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Skills & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-slate-800/50 rounded-xl p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3">
                  <skill.icon className="text-2xl text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <p className="text-slate-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}