import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "All Things Design - Creating Inspiring Workspaces",
  description:
    "Transform your workspace in just 75 days with high-performance, brand-driven designs that enhance productivity, reflect your vision, and optimize costs.",
  keywords:
    "office interior design, workspace design, office renovation, Mumbai, Delhi, Bangalore, Chennai, Pune, Hyderabad",
  openGraph: {
    title: "All Things Design - Creating Inspiring Workspaces",
    description: "Transform your workspace in just 75 days with high-performance, brand-driven designs",
    images: ["/images/logo.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
