"use client"

import CityHero from "@/components/city-hero"
import WhyChooseSection from "@/components/why-choose-section"
import PricingSection from "@/components/pricing-section"
import CityCTA from "@/components/city-cta"
import CityProjects from "@/components/city-projects"

export default function Delhi() {
  const cityProjects = [
    {
      id: 1,
      name: "Corporate Center",
      description:
        "A prestigious office space designed for a multinational corporation in Delhi, featuring elegant design and premium materials.",
      image: "/images/office-interior-5.png",
    },
    {
      id: 2,
      name: "Media Agency Office",
      description:
        "A creative and dynamic workspace designed for a media agency in Delhi, balancing functionality with inspiring design elements.",
      image: "/images/office-interior-1.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <CityHero city="Delhi" image="/images/office-interior-6.png" />
      <WhyChooseSection city="Delhi" />
      <CityProjects city="Delhi" projects={cityProjects} />
      <PricingSection city="Delhi" />
      <CityCTA city="Delhi" image="/images/office-interior-7.png" />
    </div>
  )
}
