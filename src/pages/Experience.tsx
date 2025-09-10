import SEO from "@/components/seo/SEO";
import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Award, Users, TrendingUp, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Full stack Developer Intern",
    company: "TANSAM",
    location: "Remote",
    duration: "JAN/2024 - FEB/2024",
    type: "Internship",
    description: "Working on data analysis projects using Python, SQL, and Power BI to provide actionable business insights.",
    achievements: [
      "Full Stack Developer Intern @ TANSAM (1 month) – Worked on frontend development using React.js, HTML, CSS, JavaScript, gained hands-on experience with backend integration, and contributed to building responsive web applications."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Git"]
  },
  

 
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-xl border bg-card/30 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg ${
        experience.featured ? 'border-primary/50 bg-primary/5' : 'border-border/50'
      }`}
    >
      {/* Featured Badge */}
      {experience.featured && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
            <Award className="w-3 h-3" />
            Featured
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {experience.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            experience.type === 'Internship' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
            experience.type === 'Contract' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
            experience.type === 'Research' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
            'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
          }`}>
            {experience.type}
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4" />
            {experience.company}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {experience.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {experience.duration}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Key Achievements
        </h4>
        <ul className="space-y-1">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <MainLayout>
      <SEO 
        title="Experience - SANTHOSHKUMAR's Portfolio" 
        description="Professional experience, internships, and achievements in data analytics and business intelligence." 
      />
      
      <section id="experience" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in data analytics, from internships to freelance consulting, 
            showcasing growth and impact across various projects and organizations.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to new opportunities and exciting projects. 
              Let's discuss how we can collaborate to achieve your data-driven goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                Get In Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Users className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Experience;



