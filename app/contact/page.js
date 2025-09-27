import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const contacts = [
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:adamanth@example.com",
      text: "adamanth@example.com"
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      href: "https://facebook.com/adamanth",
      text: "@adamanth"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/adamanth",
      text: "@adamanth"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/adamanth",
      text: "@adamanth"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h1>
          <p className="text-xl text-slate-300">Let&apos;s work together to bring your ideas to life</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-2xl p-6 card-hover animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center">
                <contact.icon className="text-3xl text-purple-400 mr-4 group-hover:text-purple-300 transition-colors" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-slate-200 transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    {contact.text}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}