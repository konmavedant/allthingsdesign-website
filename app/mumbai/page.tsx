"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ProjectsShowcase from "@/components/projects-showcase"

export default function Mumbai() {
  const pricingTiers = [
    {
      name: "Essential",
      description: "Smart design. Efficient execution.",
      range: "1700 – 2000 Sq ft",
      color: "bg-green-500",
    },
    {
      name: "Premium",
      description: "Balanced aesthetics and performance.",
      range: "2000 – 2500 Sq ft",
      color: "bg-blue-500",
    },
    {
      name: "Luxury",
      description: "High-end interiors that make a statement.",
      range: "2500+ sq ft",
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/office-interior-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="container mx-auto px-4 z-20 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-light mb-6 text-white leading-tight">
                Smart Office Interiors in Mumbai
              </h1>
              <p className="text-xl text-gray-200 mb-8">Built for Speed, Style & Efficiency</p>
              <p className="text-lg text-gray-300 mb-8">
                75-day guaranteed execution for ergonomic, fully-furnished workspaces.
              </p>
            </motion.div>

            {/* Quick Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-medium mb-6 text-black">Get Your Free Consultation</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Name
                  </Label>
                  <Input id="name" className="mt-1" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-700">
                    Company
                  </Label>
                  <Input id="company" className="mt-1" placeholder="Company name" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone
                  </Label>
                  <Input id="phone" className="mt-1" placeholder="Phone number" />
                </div>
                <div>
                  <Label htmlFor="area" className="text-gray-700">
                    Area (Sq. Ft.)
                  </Label>
                  <Input id="area" className="mt-1" placeholder="Project area" />
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">Get Free Quote</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-black">Why Choose All Things Design?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              "Ergonomic Layouts for comfort & productivity",
              "Design + Build Expertise under one roof",
              "75-Day Turnaround Guarantee",
              "Smart Material Selection for aesthetics & durability",
              "Test Fit Plans Delivered in 24 Hours",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <span className="text-green-500 text-xl">✅</span>
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Whether you're setting up a new office or renovating your current space, our experienced Mumbai-based team
              ensures a smooth, hassle-free journey from concept to completion.
            </p>
            <p className="text-lg font-medium text-black">📍 Serving Startups, SMEs, and Corporates across Mumbai.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsShowcase />

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-black">Flexible Office Interior Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose from three tailored plans — built for functionality, designed for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className={`w-4 h-4 ${tier.color} rounded-full mx-auto mb-4`}></div>
                <h3 className="text-2xl font-medium mb-4 text-black">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <p className="text-lg font-medium text-black">{tier.range}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Not sure which plan fits you best?</p>
            <Button className="bg-black hover:bg-gray-800 text-white">Talk to our team →</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">
              Let's build an office that works as hard as you do.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black hover:bg-gray-800 text-white">Get a Free Test Fit Plan</Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Talk to Our Team - +91 9326990075
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
