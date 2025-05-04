"use client"

import Hero from "@/components/hero"
import Services from "@/components/services"
import ClientsSection from "@/components/clients-section"
import WhyWorkWithUs from "@/components/why-work-with-us"
import ContactForm from "@/components/contact-form"
import ProjectsShowcase from "@/components/projects-showcase"
import { useEffect } from "react"
import AOS from "aos"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out",
    })
  }, [])

  return (
    <main>
      <Hero />
      <ProjectsShowcase />
      <Services />
      <ClientsSection />
      <WhyWorkWithUs />
      <ContactForm />
    </main>
  )
}
