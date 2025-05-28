"use client"

import CityHero from "@/components/city-hero"
import WhyChooseSection from "@/components/why-choose-section"
import PricingSection from "@/components/pricing-section"
import CityCTA from "@/components/city-cta"
import CityProjects from "@/components/city-projects"

export default function NaviMumbai() {
  const cityProjects = [
    {
      id: 1,
      name: "Tech Park Office",
      description:
        "A modern workspace designed for a growing tech company in Navi Mumbai, featuring collaborative areas and smart office solutions.",
      image: "/images/office-interior-3.png",
    },
    {
      id: 2,
      name: "Financial Services Hub",
      description:
        "An elegant office space designed for a financial services firm in Navi Mumbai, balancing professionalism with employee comfort.",
      image: "/images/office-interior-8.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <CityHero city="Navi Mumbai" image="/images/office-interior-4.png" />
      <WhyChooseSection city="Navi Mumbai" />
      <CityProjects city="Navi Mumbai" projects={cityProjects} />
      <PricingSection city="Navi Mumbai" />
      <CityCTA city="Navi Mumbai" image="/images/office-interior-2.png" />
    </div>
  )
}
