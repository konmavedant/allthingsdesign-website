"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"

export default function ProjectsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }))
  }

  const projects = [
    {
      id: 1,
      image: "/images/office-interior-2.png",
      name: "Trend India Ekkatuthangal",
      location: "Chennai",
    },
    {
      id: 2,
      image: "/images/office-interior-3.png",
      name: "House of Sparsh",
      location: "Mumbai",
    },
    {
      id: 3,
      image: "/images/office-interior-4.png",
      name: "Tech Hub Office",
      location: "Bangalore",
    },
    {
      id: 4,
      image: "/images/office-interior-5.png",
      name: "Corporate Center",
      location: "Delhi",
    },
    {
      id: 5,
      image: "/images/office-interior-6.png",
      name: "Creative Studio",
      location: "Pune",
    },
    {
      id: 6,
      image: "/images/office-interior-7.png",
      name: "Executive Suites",
      location: "Hyderabad",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-black">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover our portfolio of inspiring office spaces</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden mb-4">
                <Image
                  src={imageErrors[project.id] ? "/placeholder.svg?height=320&width=400" : project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={() => handleImageError(project.id)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-black">{project.name}</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
