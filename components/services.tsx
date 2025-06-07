"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [currentSlide, setCurrentSlide] = useState(0)

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
      description2:
        "Our Design & Build service is crafted to ensure a stress-free, efficient, and premium office transformation. We bring together top-tier professionals, use the finest materials, and follow a streamlined process to deliver workspaces that elevate your brand and enhance productivity.",
      description3:
        "With our 60-75 day timeline, we ensure that every stage is executed on schedule, without compromising quality. Whether you're moving into a new office or revamping your current one, we guarantee a hassle-free experience with outstanding results.",
      cta: "Build Your Office Today!",
      image: "/images/office-interior-8.png",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-black">Fast-Track Your Office Interiors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From Concept to Completion</p>
        </motion.div>

        {/* Desktop View - All Services */}
        <div className="hidden lg:block">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={index === 0 ? "service-fitout" : index === 1 ? "service-design" : "service-build"}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-96 w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-light text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  {service.description2 && <p className="text-gray-600 leading-relaxed">{service.description2}</p>}
                  {service.description3 && <p className="text-gray-600 leading-relaxed">{service.description3}</p>}
                  <Button
                    className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-none font-light"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {service.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={
                    index === 0
                      ? "service-fitout-mobile"
                      : index === 1
                        ? "service-design-mobile"
                        : "service-build-mobile"
                  }
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="space-y-6">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-light text-black">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                      {service.description2 && (
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description2}</p>
                      )}
                      <Button
                        className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-none font-light"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        {service.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full"
            aria-label="Previous service"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full"
            aria-label="Next service"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-green-700 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
