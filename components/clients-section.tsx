"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import CountUp from "react-countup"

export default function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    if (isInView) {
      setCounting(true)
    }
  }, [isInView])

  const clients = [
    { id: 1, logo: "/images/office-interior-1.png", alt: "Client 1" },
    { id: 2, logo: "/images/office-interior-2.png", alt: "Client 2" },
    { id: 3, logo: "/images/office-interior-3.png", alt: "Client 3" },
    { id: 4, logo: "/images/office-interior-4.png", alt: "Client 4" },
    { id: 5, logo: "/images/office-interior-5.png", alt: "Client 5" },
    { id: 6, logo: "/images/office-interior-6.png", alt: "Client 6" },
  ]

  const stats = [
    { id: 1, icon: "🏢", value: 300000, suffix: "+", prefix: "", label: "Sq. Ft. of Office Space Designed" },
    { id: 2, icon: "🌍", value: 5, suffix: "+", prefix: "", label: "Cities Served" },
    { id: 3, icon: "🏗", value: 100, suffix: "+", prefix: "", label: "Office Spaces Designed & Built" },
  ]

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex overflow-hidden mb-20"
        >
          <div className="flex animate-marquee">
            {clients.map((client) => (
              <div key={client.id} className="mx-8 flex-shrink-0">
                <div className="relative h-20 w-40 overflow-hidden rounded-lg">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {clients.map((client) => (
              <div key={`duplicate-${client.id}`} className="mx-8 flex-shrink-0">
                <div className="relative h-20 w-40 overflow-hidden rounded-lg">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2 text-green-600 flex items-center justify-center">
                <span>{stat.prefix}</span>
                {counting && (
                  <CountUp start={0} end={stat.value} duration={2.5} separator="," decimal="," suffix={stat.suffix} />
                )}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl mb-10 text-gray-800">
            Let's build a workspace that works for you—designed for efficiency, built for Success. 🚀
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 py-6 px-8 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 9326990075
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-6 px-8 rounded-full"
            >
              🔹 Get a Free Test Fitout in 24 Hours
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-6 px-8 rounded-full"
            >
              🔹 Enquire Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
