"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-green-900 to-green-700" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's Discuss Your Office Space</h2>
          <p className="text-green-200 mt-4 text-xl">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side - Decorative */}
              <div className="hidden lg:block lg:col-span-2 p-12 relative">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Create Your Ideal Workspace</h3>
                    <p className="text-green-200 mb-8">
                      Fill out the form and our team will get back to you within 24 hours to discuss your office design
                      needs.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center text-white">
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
                        className="mr-3"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      +91 9326990075
                    </div>
                    <div className="flex items-center text-white">
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
                        className="mr-3"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      contact@allthingsdesign.in
                    </div>
                    <div className="flex items-center text-white">
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
                        className="mr-3"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Mumbai, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.8 }}
                className="p-8 md:p-12 lg:col-span-3"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name (Required)
                      </Label>
                      <Input
                        id="name"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring focus:ring-green-400/20 transition-all rounded-lg"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company Name (Required)
                      </Label>
                      <Input
                        id="company"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring focus:ring-green-400/20 transition-all rounded-lg"
                        placeholder="Your company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Work Email ID (Required)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring focus:ring-green-400/20 transition-all rounded-lg"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-white">
                        City Name (Required)
                      </Label>
                      <Input
                        id="city"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring focus:ring-green-400/20 transition-all rounded-lg"
                        placeholder="Your city"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="area" className="text-white">
                        Project Area (Sq. Ft.) (Required)
                      </Label>
                      <Input
                        id="area"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring focus:ring-green-400/20 transition-all rounded-lg"
                        placeholder="Area in sq. ft."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-white">
                        Mobile Number (Required)
                      </Label>
                      <Input
                        id="mobile"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring focus:ring-green-400/20 transition-all rounded-lg"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring focus:ring-green-400/20 transition-all rounded-lg"
                      placeholder="Tell us about your project"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      className="text-green-500 border-white/50 rounded data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                    />
                    <Label htmlFor="privacy" className="text-sm text-white/80">
                      I agree to the Privacy Policy and updates from All Things Design.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-400 text-white py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
