"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Lightbulb, Users, Zap, Target } from "lucide-react"

const values = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge AI technologies",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Client Success",
    description: "Your success is our success - we're partners in your growth",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Reliability",
    description: "Dependable solutions with 99.9% uptime and 24/7 support",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Efficiency",
    description: "Streamlined processes that deliver maximum ROI",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Results Driven",
    description: "Measurable outcomes that transform your business",
    color: "red",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion",
    description: "We love what we do and it shows in our work",
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
  },
]

export function CompanyValues() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((value, index) => (
        <Card
          key={index}
          className={`group bg-gray-800/50 border-gray-700/50 hover:border-${value.color}-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm scroll-animate animate-delay-${
            (index % 3) * 100 + 100
          }`}
        >
          <CardContent className="p-6 text-center">
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
            >
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              {value.title}
            </h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{value.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
