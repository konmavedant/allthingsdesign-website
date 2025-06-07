"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown } from "lucide-react"

interface PricingSectionProps {
  city?: string
}

export default function PricingSection({ city = "" }: PricingSectionProps) {
  const pricingTiers = [
    {
      name: "Essential",
      description: "Smart design. Efficient execution.",
      range: "1700 – 2000 Sq ft",
      gradient: "from-emerald-400 via-green-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      borderColor: "border-green-200",
      features: [
        "Space planning & layout design",
        "Basic furniture & fixtures",
        "Standard lighting solutions",
        "Essential branding elements",
        "Basic acoustic treatments",
        "Project management support",
      ],
      icon: Zap,
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      name: "Premium",
      description: "Balanced aesthetics and performance.",
      range: "2000 – 2500 Sq ft",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      features: [
        "Everything in Essential, plus:",
        "Custom furniture solutions",
        "Enhanced lighting design",
        "Advanced acoustic planning",
        "Comprehensive branding integration",
        "Premium material selection",
        "Dedicated project coordinator",
      ],
      icon: Star,
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      featured: true,
    },
    {
      name: "Luxury",
      description: "High-end interiors that make a statement.",
      range: "2500+ sq ft",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      features: [
        "Everything in Premium, plus:",
        "Bespoke furniture & fixtures",
        "Architectural lighting features",
        "Premium material finishes",
        "Smart office technology integration",
        "Executive meeting rooms",
        "Luxury amenities & finishes",
        "White-glove service",
      ],
      icon: Crown,
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Flexible Pricing Plans
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-black">
            Choose Your Perfect Plan{city ? ` in ${city}` : ""}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three tailored solutions designed for functionality, built for growth, and crafted for success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative group ${tier.featured ? "lg:-mt-8 lg:mb-8" : ""}`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {tier.featured && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    ⭐ Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${tier.bgGradient} border-2 ${tier.borderColor} shadow-xl group-hover:shadow-2xl transition-all duration-500`}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tier.icon size={32} className={tier.iconColor} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-black">{tier.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{tier.description}</p>
                    <div className="bg-white rounded-lg px-4 py-3 shadow-sm border">
                      <p className="text-lg font-medium text-black">{tier.range}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start group/item"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover/item:bg-green-200 transition-colors">
                          <Check size={14} className="text-green-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full ${tier.buttonColor} text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0`}
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
