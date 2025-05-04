"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function WhyWorkWithUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const reasons = [
    {
      id: 1,
      icon: "💡",
      title: "Clarity Before You Commit",
      description:
        "We take the guesswork out of office planning. Our test fit-out layouts give you a clear vision of your workspace before any major decisions. Whether it's optimizing for seating, workflow efficiency, or branding, we help you visualize and validate your office layout—fast and free—so you make informed choices with confidence.",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Fast-Paced & Deadline-Driven",
      description:
        "Speed is our strength. We understand that office spaces are crucial for business operations, so we work on an accelerated timeline without compromising quality. With designs in just 3 weeks and design-build execution in 60-75 days, we ensure your office is ready on time, every time.",
    },
    {
      id: 3,
      icon: "👥",
      title: "Lean Team, Maximum Efficiency",
      description:
        "We believe in agility over bulk—our lean, expert-driven team ensures efficient execution without unnecessary overhead. This means faster communication, quicker decision-making, and a streamlined process to get your office up and running without delays. Personal involvement at every stage.",
    },
    {
      id: 4,
      icon: "🤝",
      title: "One Point of Contact for Seamless Coordination",
      description:
        "No running around, no miscommunication. We provide a dedicated single point of contact (POC) for your project, ensuring seamless coordination between designers, contractors, and vendors. With one POC, you get clear updates, smooth problem-solving, and a hassle-free experience from start to finish.",
    },
    {
      id: 5,
      icon: "📉",
      title: "Cost-Effective & Transparent Pricing",
      description:
        "No surprises, no inflated costs. We prioritize value-driven design, using strategic material selection and smart space planning to deliver premium quality within budget. Our transparent pricing ensures you get exactly what you pay for, with no hidden charges.",
    },
  ]

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center"
        >
          Why Work With <span className="text-green-500">Us</span>?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-200 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-500 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold text-green-500">
            🚀 Let's Build Your Dream Office—Fast, Efficient, and Hassle-Free!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
