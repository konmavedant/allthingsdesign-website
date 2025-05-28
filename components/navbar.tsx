"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [citiesDropdownOpen, setCitiesDropdownOpen] = useState(false)
  const pathname = usePathname()

  const cities = ["Mumbai", "Pune", "Chennai", "Bangalore", "Hyderabad", "Delhi", "Navi Mumbai"]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm text-black" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="All Things Design" width={120} height={60} className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link
            href="/about"
            className={`hover:text-green-600 transition-colors text-lg font-light ${pathname === "/about" ? "text-green-600" : ""}`}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className={`hover:text-green-600 transition-colors text-lg font-light ${pathname === "/gallery" ? "text-green-600" : ""}`}
          >
            Gallery
          </Link>

          

          <Link
            href="/#contact"
            className="hover:text-green-600 transition-colors text-lg font-light"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
            onClick={() => window.open("tel:+919326990075", "_self")}
          >
            <Phone size={16} />
            +91 9326990075
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link
                href="/about"
                className="py-2 hover:text-green-600 transition-colors text-lg font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="py-2 hover:text-green-600 transition-colors text-lg font-light"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>

              {/* Mobile Cities Dropdown */}
              <div className="py-2">
                <button
                  className="flex items-center justify-between w-full hover:text-green-600 transition-colors text-lg font-light"
                  onClick={() => setCitiesDropdownOpen(!citiesDropdownOpen)}
                >
                  Cities{" "}
                  <ChevronDown size={16} className={`transition-transform ${citiesDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {citiesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 pl-4 space-y-2"
                    >
                      {cities.map((city) => (
                        <Link
                          key={city}
                          href={`/${city.toLowerCase().replace(" ", "-")}`}
                          className="block py-1 hover:text-green-600 transition-colors text-gray-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {city}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#contact"
                className="py-2 hover:text-green-600 transition-colors text-lg font-light"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Us
              </Link>

              <Button
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 mt-2"
                onClick={() => window.open("tel:+919326990075", "_self")}
              >
                <Phone size={16} />
                +91 9326990075
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
