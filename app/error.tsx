"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-light mb-8 text-black">Oops!</h1>
          <h2 className="text-xl md:text-2xl font-light mb-6 text-gray-700">Something went wrong</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            We encountered an unexpected error. Please try again.
          </p>
          <Button onClick={reset} className="bg-black hover:bg-gray-800 text-white">
            Try Again
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
