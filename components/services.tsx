"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, 100])

  const services = [
    {
      id: 1,
      title: "Due Diligence & Test Fitout Layout",
      description:
        "Get a space assessment and layout within 24 hours to help you visualize and make informed decisions.",
      cta: "Get a free Test Fitout Layout in 24 Hours",
      image: "/images/office-interior-2.png",
    },
    {
      id: 2,
      title: "Tailor-made Office Designs, Ready in Just 3 weeks",
      description:
        "Experience our exclusive design-only service, where creativity meets precision. In just 3 weeks, we craft meticulously tailored office designs that align with your brand identity and functional needs.",
      description2:
        "You'll receive a comprehensive design package, including detailed drawings, 3D visualizations, and material specifications—empowering you to execute your project with confidence and clarity.",
      cta: "Start your Office Design Now",
      image: "/images/office-interior-5.png",
    },
    {
      id: 3,
      title: "Design & Build Your Dream Office – Ready in Just 75 Days",
      description:
        "Effortless execution, precision craftsmanship, and brand-focused interiors—delivered on time and within budget. 🚀",
      description2:
        "Our Design & Build service is crafted to ensure a stress-free, efficient, and premium office transformation. We bring together top-tier professionals, use the finest materials, and follow a streamlined process to deliver workspaces that elevate your brand and enhance productivity.",
      description3:
        "With our 60-75 day timeline, we ensure that every stage is executed on schedule, without compromising quality. Whether you're moving into a new office or revamping your current one, we guarantee a hassle-free experience with outstanding results.",
      cta: "Build Your Office Today!",
      image: "/images/office-interior-8.png",
    },
  ]

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Fast-Track Your Office Interiors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From Concept to Completion</p>
        </motion.div>

        {/* Services with alternating layout */}
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 mb-20 items-center`}
          >
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl shadow-xl">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              </div>
            </div>

            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                <span className="text-green-500 mr-2">✅</span>
                {service.title}
              </h3>
              <p className="mb-4 text-gray-700">{service.description}</p>
              {service.description2 && <p className="mb-4 text-gray-700">{service.description2}</p>}
              {service.description3 && <p className="mb-4 text-gray-700">{service.description3}</p>}
              <Button className="bg-green-500 hover:bg-green-600 mt-4 py-6 px-8 rounded-lg text-white">
                {service.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
