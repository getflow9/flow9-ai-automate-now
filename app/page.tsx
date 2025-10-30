"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Bot,
  Zap,
  Shield,
  Users,
  CheckCircle,
  MessageCircle,
  Smartphone,
  ShoppingCart,
  Code,
  Star,
  Menu,
  X,
  Target,
  Quote,
  ChevronRight,
  Sparkles,
  BarChart,
  Clock,
  Rocket,
  Layers,
  Award,
  Globe,
  TrendingUp,
  Building,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedCounter } from "@/components/animated-counter"
import { CompanyTimeline } from "@/components/company-timeline"
import { CompanyValues } from "@/components/company-values"

export default function Flow9Website() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const observerRef = useRef(null)
  const [typingText, setTypingText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "AI Automation"

  useEffect(() => {
    let charIndex = 0
    let isDeleting = false
    let timeout: NodeJS.Timeout

    const typeText = () => {
      if (!isDeleting && charIndex < fullText.length) {
        // Typing forward
        setTypingText(fullText.substring(0, charIndex + 1))
        charIndex++
        timeout = setTimeout(typeText, 100) // Slower, smoother typing
      } else if (!isDeleting && charIndex === fullText.length) {
        // Pause at end
        timeout = setTimeout(() => {
          isDeleting = true
          typeText()
        }, 2000)
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        setTypingText(fullText.substring(0, charIndex - 1))
        charIndex--
        timeout = setTimeout(typeText, 50) // Faster deleting
      } else if (isDeleting && charIndex === 0) {
        // Reset
        isDeleting = false
        timeout = setTimeout(typeText, 500)
      }
    }

    // Start typing animation
    timeout = setTimeout(typeText, 1000)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(timeout)
      clearInterval(cursorInterval)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("scroll-animate")
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el) => observerRef.current.observe(el))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const services = [
    {
      icon: <Bot className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-purple-500 to-blue-600",
      iconAnimation: "icon-pulse",
      title: "AI Automation with n8n/Make/Dify",
      description: "Custom workflow automation solutions that integrate with your existing tools and processes.",
      features: ["Workflow Automation", "Data Integration", "Process Optimization"],
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-pink-500 to-red-500",
      iconAnimation: "icon-float",
      title: "Shopify AI Plugins",
      description: "Smart plugins that enhance your Shopify store with AI-powered features and automation.",
      features: ["Custom Apps", "AI Analytics", "Sales Optimization"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600",
      iconAnimation: "icon-rotate",
      title: "Custom Software & SaaS",
      description: "Tailored software solutions and SaaS platforms built with modern technologies and AI integration.",
      features: ["Web Applications", "SaaS Platforms", "API Development"],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      iconAnimation: "icon-float",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications with AI capabilities and seamless user experiences.",
      features: ["iOS & Android", "Cross-Platform", "UI/UX Design"],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-orange-500 to-yellow-500",
      iconAnimation: "icon-pulse",
      title: "Process Optimization",
      description: "Analyze and optimize your business processes with AI-driven insights and automation strategies.",
      features: ["Process Analysis", "Efficiency Improvement", "Cost Reduction"],
    },
    {
      icon: <Target className="h-6 w-6" />,
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      iconAnimation: "icon-rotate",
      title: "AI Strategy Consulting",
      description: "Strategic guidance on implementing AI solutions that align with your business goals and ROI.",
      features: ["AI Strategy", "Implementation Planning", "ROI Analysis"],
    },
  ]

  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-blue-400" />,
      title: "Time Savings",
      description: "Reduce operational costs by up to 60% through intelligent automation of repetitive tasks.",
      stat: "60%",
      color: "blue",
    },
    {
      icon: <BarChart className="h-10 w-10 text-purple-400" />,
      title: "Productivity Boost",
      description: "Increase productivity and efficiency with AI-powered workflows and process optimization.",
      stat: "3x",
      color: "purple",
    },
    {
      icon: <Users className="h-10 w-10 text-pink-400" />,
      title: "24/7 Support",
      description: "Provide automated customer support around the clock with AI chatbots and virtual assistants.",
      stat: "24/7",
      color: "pink",
    },
    {
      icon: <Layers className="h-10 w-10 text-green-400" />,
      title: "Seamless Integration",
      description: "Connect with your existing systems and tools for a unified business ecosystem.",
      stat: "100%",
      color: "green",
    },
    {
      icon: <Rocket className="h-10 w-10 text-orange-400" />,
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, adapting to your changing needs and requirements.",
      stat: "∞",
      color: "orange",
    },
    {
      icon: <Shield className="h-10 w-10 text-cyan-400" />,
      title: "Expert Support",
      description: "Get ongoing maintenance and support from our team of AI and automation specialists.",
      stat: "99.9%",
      color: "cyan",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Solutions",
      avatar: "/placeholder.svg?height=60&width=60",
      text: "Flow9 completely transformed our business processes. Their AI automation solutions saved us 40 hours per week and increased our efficiency by 300%. The ROI was incredible!",
      rating: 5,
      metrics: "40hrs/week saved",
    },
    {
      name: "Mike Chen",
      role: "E-commerce Director",
      company: "Digital Commerce Plus",
      avatar: "/placeholder.svg?height=60&width=60",
      text: "The Shopify AI plugin they developed increased our conversion rate by 35% and automated our entire customer service workflow. Outstanding results and professional service.",
      rating: 5,
      metrics: "35% conversion boost",
    },
    {
      name: "Lisa Rodriguez",
      role: "Operations Manager",
      company: "InnovateTech Dynamics",
      avatar: "/placeholder.svg?height=60&width=60",
      text: "Professional, innovative, and reliable. Flow9 delivered exactly what we needed on time and within budget. Their AI solutions are game-changing for our industry.",
      rating: 5,
      metrics: "100% on-time delivery",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/8801616022669?text=Hi! I'm interested in Flow9's AI automation services.", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="logo-container cursor-pointer flex items-center">
              <Image src="/flow9-logo.png" alt="Flow9 Logo" width={80} height={80} className="logo-image" priority />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium"
              >
                About
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("testimonials")
                }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium"
              >
                Contact
              </a>
              <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 border-0">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span className="btn-text">WhatsApp</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 mt-4">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("about")
                  }}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("testimonials")
                  }}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                  }}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  Contact
                </a>
                <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 w-fit border-0">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span className="btn-text">WhatsApp</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Interactive Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <ParticleBackground />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/50 px-6 py-2 text-sm font-medium scroll-animate animate-gradient">
              <Sparkles className="h-4 w-4 mr-2 inline-block" />
              <span className="btn-text">AI-Powered Automation Experts</span>
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight scroll-animate">
              Transform Your Business with{" "}
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                  {typingText}
                  <span className={`typing-cursor ${showCursor ? "opacity-100" : "opacity-0"}`}></span>
                </span>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto scroll-animate animate-delay-200">
              Flow9 specializes in building custom AI-powered automation solutions using n8n, Make, and Dify. We help
              SMBs and Shopify merchants boost efficiency and leverage cutting-edge AI technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center scroll-animate animate-delay-300">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-10 py-6 rounded-xl shadow-lg shadow-blue-700/20 button-glow group transition-all duration-300 transform hover:scale-105 border-0"
              >
                <span className="btn-text mr-2">Get Started Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="border-2 border-gray-700 hover:border-blue-500 hover:bg-gray-800/50 text-white text-lg px-10 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="btn-text mr-2">Explore Services</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
              </Button>
            </div>

            {/* Stats Highlight */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transform transition-all hover:scale-105 hover:border-blue-500/50">
                <AnimatedCounter end={500} suffix="+" className="text-3xl font-bold text-blue-400 block mb-2" />
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transform transition-all hover:scale-105 hover:border-purple-500/50">
                <AnimatedCounter end={60} suffix="%" className="text-3xl font-bold text-purple-400 block mb-2" />
                <p className="text-gray-300">Cost Reduction</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transform transition-all hover:scale-105 hover:border-pink-500/50">
                <AnimatedCounter end={99.9} suffix="%" className="text-3xl font-bold text-pink-400 block mb-2" />
                <p className="text-gray-300">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800/90 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 scroll-animate">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto scroll-animate animate-delay-100">
              Comprehensive AI automation solutions tailored for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`scroll-animate animate-delay-${(index + 1) * 100}`}>
                <div className="modern-card group h-full bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden relative">
                  {/* Top Gradient Line */}
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="p-8">
                    {/* Icon with Animated Background */}
                    <div className="relative mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center text-white ${service.iconAnimation}`}
                      >
                        {service.icon}
                      </div>
                      <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">
                      {service.description}
                    </p>

                    <div className="space-y-3 mt-auto">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                            <CheckCircle className="h-3 w-3 text-blue-400" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-8 pt-4 border-t border-gray-700/50">
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Benefits Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(124,58,237,0.1),transparent_60%)]"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 scroll-animate">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Flow9
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto scroll-animate animate-delay-100">
              Our AI-powered solutions deliver measurable results that transform how you do business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`benefit-card bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 scroll-animate animate-delay-${
                  (index % 3) * 100 + 100
                }`}
              >
                <div className={`flex items-center mb-6`}>
                  <div className={`mr-4 p-3 rounded-xl bg-${benefit.color}-500/10`}>{benefit.icon}</div>
                  <div className={`text-3xl font-bold text-${benefit.color}-400`}>
                    <AnimatedCounter
                      end={Number.parseInt(benefit.stat) || 0}
                      suffix={isNaN(Number.parseInt(benefit.stat)) ? benefit.stat : ""}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>

                {/* Decorative Element */}
                <div className={`h-1 w-16 bg-${benefit.color}-500/50 rounded-full mt-6`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 scroll-animate">
              About{" "}
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Flow9
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto scroll-animate animate-delay-100">
              Leading the future of business automation with cutting-edge AI solutions
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Company Story */}
            <div className="scroll-animate">
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Story</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Flow9 was founded with a vision to democratize AI automation for businesses of all sizes. We
                    recognized that while large enterprises had access to sophisticated automation tools, SMBs were
                    often left behind.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Today, we're proud to be at the forefront of the AI revolution, helping hundreds of businesses
                    transform their operations with intelligent automation solutions that deliver real, measurable
                    results.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mission & Vision */}
            <div className="scroll-animate animate-delay-200">
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    To empower businesses with AI-driven automation solutions that eliminate inefficiencies, reduce
                    costs, and unlock new opportunities for growth and innovation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Democratize AI automation for all businesses</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Deliver measurable ROI through intelligent solutions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Foster innovation and business transformation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Company Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 scroll-animate">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h3>
              <p className="text-gray-300 scroll-animate animate-delay-100">
                Milestones that shaped our path to becoming AI automation leaders
              </p>
            </div>
            <CompanyTimeline />
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 scroll-animate">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Values
                </span>
              </h3>
              <p className="text-gray-300 scroll-animate animate-delay-100">
                The principles that guide everything we do
              </p>
            </div>
            <CompanyValues />
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-blue-500/30 text-center p-6 scroll-animate">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <AnimatedCounter end={500} suffix="+" className="text-3xl font-bold text-blue-400 block mb-2" />
                <p className="text-blue-200">Projects Completed</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 border-purple-500/30 text-center p-6 scroll-animate animate-delay-100">
              <CardContent className="p-0">
                <Users className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                <AnimatedCounter end={50} suffix="+" className="text-3xl font-bold text-purple-400 block mb-2" />
                <p className="text-purple-200">Team Members</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600/20 to-green-700/20 border-green-500/30 text-center p-6 scroll-animate animate-delay-200">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <AnimatedCounter end={15} suffix="+" className="text-3xl font-bold text-green-400 block mb-2" />
                <p className="text-green-200">Countries Served</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border-orange-500/30 text-center p-6 scroll-animate animate-delay-300">
              <CardContent className="p-0">
                <Award className="h-12 w-12 mx-auto mb-4 text-orange-400" />
                <AnimatedCounter end={10} suffix="+" className="text-3xl font-bold text-orange-400 block mb-2" />
                <p className="text-orange-200">Industry Awards</p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center scroll-animate animate-delay-400">
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
                <p className="text-gray-300 mb-6">
                  Join the hundreds of businesses that have already revolutionized their operations with Flow9's AI
                  automation solutions.
                </p>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group border-0"
                >
                  <span className="btn-text">Start Your Journey</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modern Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 scroll-animate">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto scroll-animate animate-delay-100">
              Real results from real businesses who transformed their operations with Flow9
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group scroll-animate testimonial-animate animate-delay-${(index + 1) * 200}`}
              >
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
                  <CardContent className="p-8 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                      <Quote className="h-8 w-8 text-blue-400" />
                    </div>

                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Metrics Badge */}
                    <div className="mb-6">
                      <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-3 py-1">
                        {testimonial.metrics}
                      </Badge>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full border-2 border-gray-600 group-hover:border-blue-500 transition-colors"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-blue-400 font-medium">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 scroll-animate animate-delay-600">
            <p className="text-gray-400 mb-6">Join hundreds of satisfied clients who trust Flow9</p>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 group border-0"
            >
              <span className="btn-text">Start Your Success Story</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 scroll-animate">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Business
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-10 scroll-animate animate-delay-100">
              Get in touch with our AI automation experts and discover how Flow9 can help you streamline operations,
              reduce costs, and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10 scroll-animate animate-delay-200">
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-10 py-6 rounded-xl shadow-lg shadow-green-700/20 button-glow group transition-all duration-300 transform hover:scale-105 border-0"
              >
                <MessageCircle className="mr-3 h-5 w-5 text-white" />
                <span className="btn-text">Chat on WhatsApp</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("mailto:hello@getflow9.com", "_blank")}
                className="border-2 border-gray-700 hover:border-blue-500 hover:bg-gray-800/50 text-white text-lg px-10 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="btn-text">Send Email</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
              </Button>
            </div>
            <p className="text-gray-400 scroll-animate animate-delay-300">
              WhatsApp: +880 1616 022669 | Email: hello@getflow9.com
            </p>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="logo-container mb-4 md:mb-0 cursor-pointer">
              <Image src="/flow9-logo.png" alt="Flow9 Logo" width={48} height={48} className="footer-logo" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Flow9. All rights reserved.</p>
              <div className="flex justify-center md:justify-end gap-4 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 button-glow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
