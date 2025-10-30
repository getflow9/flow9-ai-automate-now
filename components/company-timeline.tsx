"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Award, Target, Globe } from "lucide-react"

const timelineData = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to democratize AI automation for SMBs",
    icon: <Rocket className="h-5 w-5" />,
    color: "blue",
  },
  {
    year: "2021",
    title: "First 100 Clients",
    description: "Reached our first milestone with successful automation deployments",
    icon: <Users className="h-5 w-5" />,
    color: "green",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Awarded 'Best AI Automation Platform' by TechReview",
    icon: <Award className="h-5 w-5" />,
    color: "purple",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded services to serve clients across 15+ countries",
    icon: <Globe className="h-5 w-5" />,
    color: "orange",
  },
  {
    year: "2024",
    title: "500+ Success Stories",
    description: "Helping businesses save millions through intelligent automation",
    icon: <Target className="h-5 w-5" />,
    color: "pink",
  },
]

export function CompanyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5 },
    )

    const timelineItems = timelineRef.current?.querySelectorAll("[data-index]")
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className={`relative flex items-start space-x-6 transition-all duration-500 ${
              activeIndex >= index ? "opacity-100 translate-x-0" : "opacity-50 translate-x-4"
            }`}
          >
            {/* Timeline Dot */}
            <div
              className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 shadow-lg transition-all duration-500 ${
                activeIndex >= index ? "scale-100 shadow-2xl" : "scale-75"
              }`}
            >
              {item.icon}
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <Card className="bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge className={`bg-${item.color}-500/20 text-${item.color}-300 border-${item.color}-500/30`}>
                      {item.year}
                    </Badge>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
