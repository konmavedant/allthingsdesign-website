"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light text-black mb-6">Let's Discuss Your Office Space</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      Name (Required)
                    </Label>
                    <Input
                      id="name"
                      required
                      className="border-gray-300 focus:border-black focus:ring focus:ring-black/20 transition-all rounded-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700">
                      Company Name (Required)
                    </Label>
                    <Input
                      id="company"
                      required
                      className="border-gray-300 focus:border-black focus:ring focus:ring-black/20 transition-all rounded-none"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Work Email ID (Required)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="border-gray-300 focus:border-black focus:ring focus:ring-black/20 transition-all rounded-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700">
                      City Name (Required)
                    </Label>
                    <Input
                      id="city"
                      required
                      className="border-gray-300 focus:border-black focus:ring focus:ring-black/20 transition-all rounded-none"
                      placeholder="Your city"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area" className="text-gray-700">
                      Project Area (Sq. Ft.) (Required)
                    </Label>
                    <Input
                      id="area"
                      required
                      className="border-gray-300 focus:border-black focus:ring focus:ring-black/20 transition-all rounded-none"
                      placeholder="Area in sq. ft."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-gray-700">
                      Mobile Number (Required)
                    </Label>
                    <Input
                      id="mobile"
                      required
                      className="border-gray-300 focus:border-black focus:ring focus:ring-black/20 transition-all rounded-none"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="border-gray-300 focus:border-black focus:ring focus:ring-black/20 transition-all rounded-none"
                    placeholder="Tell us about your project"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    className="text-black border-gray-300 rounded-none data-[state=checked]:bg-black data-[state=checked]:border-black"
                  />
                  <Label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the Privacy Policy and updates from All Things Design.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-none text-lg font-light"
                >
                  Submit
                </Button>
              </form>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-96 lg:h-full min-h-[500px] overflow-hidden">
                <Image src="/images/office-interior-1.png" alt="Modern office interior" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-light mb-2">Ready to Transform Your Workspace?</h3>
                  <p className="text-lg opacity-90">Let's create something amazing together</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
