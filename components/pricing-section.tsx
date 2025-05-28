"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingSectionProps {
  city?: string
}

export default function PricingSection({ city = "" }: PricingSectionProps) {
  const pricingTiers = [
    {
      name: "Essential",
      description: "Smart design. Efficient execution.",
      range: "1700 – 2000 Sq ft",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      features: [
        "Space planning & layout design",
        "Basic furniture & fixtures",
        "Standard lighting solutions",
        "Essential branding elements",
        "Basic acoustic treatments",
      ],
      icon: "🟢",
    },
    {
      name: "Premium",
      description: "Balanced aesthetics and performance.",
      range: "2000 – 2500 Sq ft",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      features: [
        "Everything in Essential, plus:",
        "Custom furniture solutions",
        "Enhanced lighting design",
        "Advanced acoustic planning",
        "Comprehensive branding integration",
      ],
      icon: "🔵",
      featured: true,
    },
    {
      name: "Luxury",
      description: "High-end interiors that make a statement.",
      range: "2500+ sq ft",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      features: [
        "Everything in Premium, plus:",
        "Bespoke furniture & fixtures",
        "Architectural lighting features",
        "Premium material finishes",
        "Smart office technology integration",
      ],
      icon: "🟣",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-black">
            Flexible Office Interior Pricing{city ? ` in ${city}` : ""}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from three tailored plans — built for functionality, designed for growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                tier.featured ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className={`${tier.color} p-1`}>
                <div className="bg-white p-8 rounded-lg h-full flex flex-col">
                  <div className="text-3xl mb-4">{tier.icon}</div>
                  <h3 className="text-2xl font-medium mb-2 text-black">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <p className="text-lg font-medium text-black mb-6">{tier.range}</p>

                  <div className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      tier.featured
                        ? "bg-blue-600 hover:bg-blue-700"
                        : tier.name === "Essential"
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-purple-600 hover:bg-purple-700"
                    } text-white`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">Not sure which plan fits you best?</p>
          <Button className="bg-black hover:bg-gray-800 text-white">Talk to our team →</Button>
        </div>
      </div>
    </section>
  )
}
