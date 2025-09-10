import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge, Calendar, ExternalLink, Award } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import SEO from "@/components/seo/SEO";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const certifications = [
    {
      name: "Full Stack Developer Intern",
      issuer: "TANSAM",
      date: "JAN 2024 - FEB 2024",
      credentialId: "",
      category: "Programming",
    //   logo: "📊",
    //   description: "Gained practical experience in data analysis, data modeling, Tableau, and spreadsheet-based insights.",
    //   link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_7gZxhrnC2wE5AaAtL_1751540167964_completion_certificate.pdf"
     },
  
  
    
  
    
   
   
  ];

  const categories = ["All", "Data Analytics", "Mixed Reality", "Data Visualization", "Big Data", "Programming", "Machine Learning"];

  const filteredCertifications = useMemo(() => {
    if (selectedCategory === "All") return certifications;
    return certifications.filter(cert => cert.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <MainLayout>
      <SEO title="Certifications - SANTHOSH KUMAR's Portfolio" description="frontend development certifications and achievements." />
      <section id="certifications" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Certifications</h1>
          <p className="text-xl text-muted-foreground">Professional achievements and learning milestones</p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.logo}</div>
                <div className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                  {cert.category}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-2">
                      <Badge className="w-4 h-4" />
                      <span className="font-mono text-xs">{cert.credentialId}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm leading-relaxed">{cert.description}</p>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t">
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 p-6 bg-muted/50 rounded-lg"
        >
          <p>All certifications are verified and can be validated through their respective issuing organizations.</p>
        </motion.div>
      </section>
    </MainLayout>
  );
}
