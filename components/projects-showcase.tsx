"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectsShowcase() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const projects = [
    {
      id: 1,
      image: "/images/office-interior-2.png",
      alt: "Modern office lounge with green walls and pendant lighting",
    },
    {
      id: 2,
      image: "/images/office-interior-3.png",
      alt: "Contemporary office space with blue furniture and wooden flooring",
    },
    {
      id: 3,
      image: "/images/office-interior-4.png",
      alt: "Meeting room with blue ceiling and yellow chairs",
    },
    {
      id: 4,
      image: "/images/office-interior-5.png",
      alt: "Minimalist office with glass partitions",
    },
    {
      id: 5,
      image: "/images/office-interior-6.png",
      alt: "Modern office with collaborative spaces",
    },
    {
      id: 6,
      image: "/images/office-interior-7.png",
      alt: "Bright office with natural lighting",
    },
    {
      id: 7,
      image: "/images/office-interior-8.png",
      alt: "Executive office with elegant design",
    },
  ]

  // For mobile scrolling
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollAmount = 300

  const handleScroll = (direction) => {
    const container = document.getElementById("project-scroll-container")
    if (container) {
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
        setScrollPosition(Math.max(0, scrollPosition - scrollAmount))
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
        setScrollPosition(scrollPosition + scrollAmount)
      }
    }
  }

  return (
    <div ref={ref} className="relative overflow-hidden py-10 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Our Latest Projects</h2>
      </motion.div>

      {/* Desktop Horizontal Scroll */}
      <div className="hidden md:block relative">
        <motion.div ref={containerRef} style={{ x: `${x}%` }} className="flex space-x-4 py-4 w-[300%]">
          {projects.map((project) => (
            <div key={project.id} className="relative w-[500px] h-[300px] flex-shrink-0 overflow-hidden rounded-xl">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold">{project.alt}</h3>
                  <p className="text-green-300 mt-2">View Project</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Horizontal Scroll with Buttons */}
      <div className="md:hidden relative">
        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            id="project-scroll-container"
            className="flex overflow-x-auto scrollbar-hide py-4 px-4 space-x-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <div key={project.id} className="relative w-[280px] h-[200px] flex-shrink-0 overflow-hidden rounded-xl">
                <Image src={project.image || "/placeholder.svg"} alt={project.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-white text-sm font-semibold">{project.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
