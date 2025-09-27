import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Adamanth</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Turning complex code into simple, stunning experiences.
          </p>
          <Link 
            href="/projects"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            View My Work
          </Link>
        </div>
      </div>
    </div>
  )
}