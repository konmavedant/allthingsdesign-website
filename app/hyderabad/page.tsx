"use client"

import CityHero from "@/components/city-hero"
import WhyChooseSection from "@/components/why-choose-section"
import PricingSection from "@/components/pricing-section"
import CityCTA from "@/components/city-cta"
import CityProjects from "@/components/city-projects"

export default function Hyderabad() {
  const cityProjects = [
    {
      id: 1,
      name: "Executive Suites",
      description:
        "Premium office spaces designed for a corporate client in Hyderabad, featuring sophisticated design elements and executive amenities.",
      image: "/images/office-interior-7.png",
    },
    {
      id: 2,
      name: "IT Services Headquarters",
      description:
        "A modern office designed for an IT services company in Hyderabad's HITEC City, balancing functionality with contemporary aesthetics.",
      image: "/images/office-interior-2.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <CityHero city="Hyderabad" image="/images/office-interior-5.png" />
      <WhyChooseSection city="Hyderabad" />
      <CityProjects city="Hyderabad" projects={cityProjects} />
      <PricingSection city="Hyderabad" />
      <CityCTA city="Hyderabad" image="/images/office-interior-3.png" />
    </div>
  )
}
