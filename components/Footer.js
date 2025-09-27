export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold gradient-text">Adamanth</span>
            <p className="text-slate-400 mt-2">Turning complex code into simple, stunning experiences.</p>
          </div>
          <div className="text-slate-400">
            <p>&copy; {new Date().getFullYear()} Adamanth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}