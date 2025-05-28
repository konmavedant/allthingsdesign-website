"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const slides = [
    {
      image: "/images/office-interior-1.png",
      title: "Creating inspiring workspaces",
    },
    {
      image: "/images/office-interior-3.png",
      title: "From leasing to design,",
      subtitle: "Your office your way",
    },
    {
      image: "/images/office-interior-4.png",
      title: "Transform your workspace in just 75 days",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        setIsVisible(true)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentSlide}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 text-black leading-tight">
                  {slides[currentSlide].title}
                </h1>
                {slides[currentSlide].subtitle && (
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-700">
                    {slides[currentSlide].subtitle}
                  </h2>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-8"
          >
           

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-2xl md:text-3xl font-light text-black"
            >
              Let's Build Your Future-Ready Office Today!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white text-lg px-12 py-6 rounded-none font-light"
              >
                Enquire Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white text-lg px-12 py-6 rounded-none font-light"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => {
                setCurrentSlide(index)
                setIsVisible(true)
              }, 500)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-black w-12" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
