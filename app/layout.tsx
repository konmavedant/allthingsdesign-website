import type React from "react"
import type { Metadata } from "next"
import { Bree_Serif } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bree-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "All Things Design - Creating Inspiring Workspaces",
  description:
    "Transform your workspace in just 75 days with high-performance, brand-driven designs that enhance productivity, reflect your vision, and optimize costs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${breeSerif.variable}`}>
      <body className={breeSerif.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
