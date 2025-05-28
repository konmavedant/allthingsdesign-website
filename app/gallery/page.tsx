"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Gallery() {
  const projects = [
    {
      id: 1,
      name: "Modern Corporate Office",
      year: "2024",
      location: "Mumbai",
      area: "5000 sq ft",
      images: ["/images/office-interior-1.png", "/images/office-interior-2.png"],
      category: "Corporate",
    },
    {
      id: 2,
      name: "Tech Startup Hub",
      year: "2024",
      location: "Bangalore",
      area: "3500 sq ft",
      images: ["/images/office-interior-3.png", "/images/office-interior-4.png"],
      category: "Startup",
    },
    {
      id: 3,
      name: "Executive Suites",
      year: "2023",
      location: "Delhi",
      area: "4200 sq ft",
      images: ["/images/office-interior-5.png", "/images/office-interior-6.png"],
      category: "Executive",
    },
    {
      id: 4,
      name: "Creative Agency Space",
      year: "2023",
      location: "Pune",
      area: "2800 sq ft",
      images: ["/images/office-interior-7.png", "/images/office-interior-8.png"],
      category: "Creative",
    },
  ]

  const [filter, setFilter] = useState("All")
  const categories = ["All", "Corporate", "Startup", "Executive", "Creative"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-black">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of inspiring office spaces designed for productivity and style
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-black">{project.name}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
