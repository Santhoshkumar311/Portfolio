import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
  
      {
      id: 7,
      title: "Food-Cart",
      description: "A frontend clone of the Food Cart website built using HTML, CSS, JavaScript and React.js. The project focuses on responsive design, clean UI, and interactive elements to replicate the look and feel of the original site.",
      image: "/Food-cart.png",
      category: "Frontend Development",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/Santhoshkumar311",
      live: "https://food-cart-theta-sable.vercel.app",
      featured: true
    },
    {
      id: 1,
      title: "Nat-Habit-Clone",
      description: "A frontend clone of the Nat Habit website built using HTML, CSS, and JavaScript. The project focuses on responsive design, clean UI, and interactive elements to replicate the look and feel of the original site.",
      image: "/nathabit.png",
      category: "Frontend Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Santhoshkumar311",
      live: "https://santhoshkumar311.github.io/Nat-Habit-Clone/",
      featured: true
    },
 

     {
      id: 3,
      title: "QR Code Generator",
      description: "Developed a dynamic QR Code Generator using React.js that allows users to instantly create QR codes for text, URLs, or custom input. Implemented real-time rendering, input validation, and responsive design to ensure smooth user experience.",
      image: "/Qr.png",
      category: "Frontend Development",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/Santhoshkumar311",
      live: "https://qr-app-kohl.vercel.app/",
      featured: true
    },
      {
      id: 4,
      title: "BMI Calculator",
      description: "Developed a dynamic BMI Calculator using React.js that allows users to instantly calculate their Body Mass Index based on height and weight inputs. Implemented real-time rendering, input validation, and responsive design to ensure smooth user experience.",
      image: "/BMI.png",
      category: "Frontend Development",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/Santhoshkumar311",
      live: "https://bmi-calculator-q5067s0cz-santhoshkumars-projects-e5ba15b7.vercel.app/",
      featured: true
    },
    {
      id: 5,
      title: "Currency Converter",
      description: "Develop a dynamic Currency Converter using React.js that allows users to instantly convert currencies based on real-time exchange rates. Implemented real-time rendering, input validation, and responsive design to ensure smooth user experience.",
      image: "/currency.png",
      category: "Frontend Development",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/Santhoshkumar311",
      live: "https://currency-converter-five-pearl.vercel.app/",
      featured: true
    },
    {
      id: 6,
      title: "Weather App",
      description: "Developed a dynamic Weather App using React.js that allows users to instantly check the current weather and forecast for any location. Implemented real-time data fetching from a weather API, input validation, and responsive design to ensure smooth user experience.",
      image: "/weater.png",
      category: "Frontend Development",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/Santhoshkumar311",
      live: "https://weather-app-react.vercel.app/",
      featured: true
    },
     {
      id: 2,
      title: "E-Commerce Website",
      description: "Built a responsive e-commerce website for clothing collections with product categories, customer experience highlights, and “Shop Now” call-to-actions. Designed with HTML, CSS, and JavaScript to deliver a clean and user-friendly shopping experience.",
      image: "/commerce.png",
      category: "Frontend Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Santhoshkumar311",
      live: "https://santhoshkumar311.github.io/Veloce/",
      featured: true
    },


   
    
   
  ];

  return (
    <MainLayout>
      <SEO title="Projects - SANTHOSH's Portfolio" description="A showcase of my data analytics and business intelligence projects." />
      <section id="projects" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground"></p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
