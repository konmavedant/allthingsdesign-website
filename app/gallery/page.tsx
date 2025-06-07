"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Gallery() {
  const projects = [
    {
      id: 1,
      name: "Modern Corporate Office",
      year: "2024",
      location: "Mumbai",
      area: "5000 sq ft",
      image: "/images/office-interior-1.png",
      size: "large",
    },
    {
      id: 2,
      name: "Tech Startup Hub",
      year: "2024",
      location: "Bangalore",
      area: "3500 sq ft",
      image: "/images/office-interior-2.png",
      size: "medium",
    },
    {
      id: 3,
      name: "Executive Suites",
      year: "2023",
      location: "Delhi",
      area: "4200 sq ft",
      image: "/images/office-interior-3.png",
      size: "small",
    },
    {
      id: 4,
      name: "Creative Agency Space",
      year: "2023",
      location: "Pune",
      area: "2800 sq ft",
      image: "/images/office-interior-4.png",
      size: "medium",
    },
    {
      id: 5,
      name: "Financial Services Office",
      year: "2024",
      location: "Chennai",
      area: "6000 sq ft",
      image: "/images/office-interior-5.png",
      size: "large",
    },
    {
      id: 6,
      name: "Co-working Space",
      year: "2023",
      location: "Hyderabad",
      area: "4500 sq ft",
      image: "/images/office-interior-6.png",
      size: "small",
    },
    {
      id: 7,
      name: "Law Firm Office",
      year: "2024",
      location: "Mumbai",
      area: "3200 sq ft",
      image: "/images/office-interior-7.png",
      size: "medium",
    },
    {
      id: 8,
      name: "Healthcare Office",
      year: "2023",
      location: "Bangalore",
      area: "2500 sq ft",
      image: "/images/office-interior-8.png",
      size: "small",
    },
    {
      id: 9,
      name: "Consulting Firm",
      year: "2024",
      location: "Delhi",
      area: "3800 sq ft",
      image: "/images/office-interior-1.png",
      size: "small",
    },
    {
      id: 10,
      name: "Media Production House",
      year: "2023",
      location: "Mumbai",
      area: "4200 sq ft",
      image: "/images/office-interior-2.png",
      size: "medium",
    },
    {
      id: 11,
      name: "E-commerce Headquarters",
      year: "2024",
      location: "Bangalore",
      area: "7500 sq ft",
      image: "/images/office-interior-3.png",
      size: "large",
    },
    {
      id: 12,
      name: "Design Studio",
      year: "2023",
      location: "Pune",
      area: "2200 sq ft",
      image: "/images/office-interior-4.png",
      size: "small",
    },
    {
      id: 13,
      name: "Investment Banking Office",
      year: "2024",
      location: "Mumbai",
      area: "5500 sq ft",
      image: "/images/office-interior-5.png",
      size: "medium",
    },
    {
      id: 14,
      name: "Software Development Center",
      year: "2023",
      location: "Chennai",
      area: "6200 sq ft",
      image: "/images/office-interior-6.png",
      size: "large",
    },
    {
      id: 15,
      name: "Marketing Agency",
      year: "2024",
      location: "Hyderabad",
      area: "3000 sq ft",
      image: "/images/office-interior-7.png",
      size: "small",
    },
    {
      id: 16,
      name: "Pharmaceutical Office",
      year: "2023",
      location: "Delhi",
      area: "4800 sq ft",
      image: "/images/office-interior-8.png",
      size: "medium",
    },
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2 h-96 md:h-full"
      case "medium":
        return "md:col-span-2 h-64"
      case "small":
        return "h-64"
      default:
        return "h-64"
    }
  }

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

        {/* Interactive Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-700 ${getSizeClasses(
                project.size,
              )}`}
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
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-medium mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 text-sm opacity-90">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.area}</span>
                  </div>
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
