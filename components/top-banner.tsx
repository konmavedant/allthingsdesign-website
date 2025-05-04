"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function TopBanner() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-green-800 text-white py-2 text-center"
    >
      <p className="text-sm">
        Struggling with Office Design?{" "}
        <Link href="/download" className="underline font-medium hover:text-green-200 transition-colors">
          Download Our Complete Handbook for Free!
        </Link>
      </p>
    </motion.div>
  )
}
