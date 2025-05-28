"use client"

import CityHero from "@/components/city-hero"
import WhyChooseSection from "@/components/why-choose-section"
import PricingSection from "@/components/pricing-section"
import CityCTA from "@/components/city-cta"
import CityProjects from "@/components/city-projects"

export default function Chennai() {
  const cityProjects = [
    {
      id: 1,
      name: "Trend India Ekkatuthangal",
      description:
        "A contemporary office space designed for a fashion brand in Chennai, featuring elegant design elements and functional work areas.",
      image: "/images/office-interior-3.png",
    },
    {
      id: 2,
      name: "Software Development Center",
      description:
        "A modern tech office in Chennai's IT corridor, designed to enhance productivity and team collaboration with smart space planning.",
      image: "/images/office-interior-5.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <CityHero city="Chennai" image="/images/office-interior-2.png" />
      <WhyChooseSection city="Chennai" />
      <CityProjects city="Chennai" projects={cityProjects} />
      <PricingSection city="Chennai" />
      <CityCTA city="Chennai" image="/images/office-interior-4.png" />
    </div>
  )
}
