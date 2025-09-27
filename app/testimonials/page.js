export default function Testimonials() {
  const placeholderTestimonials = [
    {
      id: 1,
      content: "Testimonials coming soon - check back later to see what clients and colleagues have to say about working with me!",
      author: "Placeholder"
    },
    {
      id: 2,
      content: "I'm currently collecting feedback from recent projects. Exciting testimonials will be added here shortly.",
      author: "Placeholder"
    },
    {
      id: 3,
      content: "This section will feature genuine testimonials from clients and team members I've collaborated with.",
      author: "Placeholder"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Testimonials</h1>
          <p className="text-xl text-slate-300">What people say about working with me</p>
        </div>
        
        <div className="space-y-6">
          {placeholderTestimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-slate-800/50 rounded-2xl p-6 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-lg text-slate-300 italic mb-4">"{testimonial.content}"</p>
              <p className="text-slate-400 font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}