import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiExpress,
  SiPostgresql,
  SiGraphql,
  SiAmazonaws
} from 'react-icons/si'

export const skills = [
  {
    name: "React",
    icon: FaReact,
    description: "Modern React with hooks, context, and advanced patterns"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Full-stack React framework with SSR and static generation"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Utility-first CSS framework for rapid UI development"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Type-safe JavaScript for better developer experience"
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description: "Server-side JavaScript runtime for scalable applications"
  },
  {
    name: "Express",
    icon: SiExpress,
    description: "Minimalist web framework for Node.js applications"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description: "Powerful open-source relational database system"
  },
  {
    name: "APIs (REST & GraphQL)",
    icon: SiGraphql,
    description: "Design and implementation of robust API architectures"
  },
  {
    name: "Docker",
    icon: FaDocker,
    description: "Containerization for consistent development and deployment"
  },
  {
    name: "Git/GitHub",
    icon: FaGitAlt,
    description: "Version control and collaborative development workflows"
  },
  {
    name: "AI Integrations",
    icon: SiAmazonaws,
    description: "Integrating AI services and machine learning capabilities"
  }
]