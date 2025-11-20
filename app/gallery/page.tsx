"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Gallery() {
  const projects = [
    {
      id: 1,
      name: "Mindtickle",
      description: "Designing for Diversity and Experience, Designing for Efficiency and Adaptability",
      image: "/images/cogo.jpg",
    },
    {
      id: 2,
      name: "Coreco Technologies",
      description: "Designing for Diversity and Experience",
      image: "/images/elleys.jpg",
    },
    {
      id: 3,
      name: "Biophilic Design Studio",
      description: "Connecting Nature with Modern Workspaces",
      image: "/images/HOS-1.jpg",
    },
    {
      id: 4,
      name: "Executive Innovation Hub",
      description: "Sophisticated Spaces for Leadership and Growth",
      image: "/images/HOS-2.jpg",
    },
    {
      id: 5,
      name: "Tech Startup Hub",
      description: "Modern workspaces for innovation and collaboration",
      image: "/images/THUB-1.jpg",
    },
    {
      id: 6,
      name: "Co-working Space",
      description: "Flexible environments for dynamic teams",
      image: "/images/THUB-2.jpg",
    },
    {
      id: 7,
      name: "Law Firm Office",
      description: "Professional spaces for legal excellence",
      image: "/images/dentos.jpg",
    },
    {
      id: 8,
      name: "Healthcare Office",
      description: "Healing environments for wellness professionals",
      image: "/images/OMR-1.jpeg",
    },
    {
      id: 9,
      name: "Creative Agency Space",
      description: "Inspiring environments for creative minds",
      image: "/images/gallery-9.jpg",
    },
    {
      id: 10,
      name: "Financial Services Office",
      description: "Trust-building spaces for financial professionals",
      image: "/images/gallery-1.jpg",
    },
    {
      id: 11,
      name: "E-commerce Headquarters",
      description: "Scalable spaces for growing businesses",
      image: "/images/gallery-2.jpeg",    
    },
    {
      id: 12,
      name: "Investment Banking Office",
      description: "Sophisticated spaces for high-stakes decisions",
      image: "/images/gallery-3.jpeg",
    },
    {
      id: 13,
      name: "Software Development Center",
      description: "Productivity-focused environments for developers",
      image: "/images/gallery-4.jpeg",
    },
    {
      id: 14,
      name: "Marketing Agency",
      description: "Dynamic spaces for brand storytelling",
      image: "/images/gallery-5.jpg",
    },
    {
      id: 15,
      name: "Pharmaceutical Office",
      description: "Research-driven spaces for medical innovation",
      image: "/images/gallery-6.jpg",   
    },
    {
      id: 16,
      name: "Innovation Lab",
      description: "Experimental spaces for breakthrough ideas",
      image: "/images/gallery-7.jpg",
    },
  ]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-8 text-black">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of inspiring office spaces designed for productivity, creativity, and success
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-700 h-96 md:h-[500px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-light mb-3">{project.name}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">Ready to Create Your Own Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your workspace into an inspiring environment that drives results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 hover:bg-green-800 text-white px-12 py-4 rounded-none font-light text-lg transition-all duration-300"       
            onClick={() => (window.location.href = "/#contact")}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
