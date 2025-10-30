"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TermsPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
            <Link href="/" className="logo-container cursor-pointer flex items-center">
              <Image src="/flow9-logo.png" alt="Flow9 Logo" width={80} height={80} className="logo-image" priority />
            </Link>
            <div className="flex items-center space-x-4">
              <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 border-0">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span className="btn-text">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-gray-400">Last updated: October 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using the Flow9 website and services, including our Facebook app, you accept and
                  agree to be bound by and comply with these Terms and Conditions. If you do not agree to abide by the
                  above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Use License</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  Flow9's website for personal, non-commercial transitory viewing only. This is the grant of a license,
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Disclaimer</h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials on Flow9's website are provided on an 'as is' basis. Flow9 makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including, without
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Limitations</h2>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall Flow9 or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or
                  inability to use the materials on Flow9's website, even if Flow9 or an authorized representative has
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Accuracy of Materials</h2>
                <p className="text-gray-300 leading-relaxed">
                  The materials appearing on Flow9's website could include technical, typographical, or photographic
                  errors. Flow9 does not warrant that any of the materials on its website are accurate, complete, or
                  current. Flow9 may make changes to the materials contained on its website at any time without notice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  Flow9 has not reviewed all of the sites linked to its website and is not responsible for the contents
                  of any such linked site. The inclusion of any link does not imply endorsement by Flow9 of the site.
                  Use of any such linked website is at the user's own risk.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Modifications</h2>
                <p className="text-gray-300 leading-relaxed">
                  Flow9 may revise these terms of service for its website at any time without notice. By using this
                  website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Bangladesh,
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">9. User Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed mb-4">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                  <li>Provide accurate and complete information when registering</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Not engage in any unlawful or prohibited activities</li>
                  <li>Not interfere with or disrupt the website or services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">10. Intellectual Property Rights</h2>
                <p className="text-gray-300 leading-relaxed">
                  All content on the Flow9 website, including text, graphics, logos, images, and software, is the
                  property of Flow9 or its content suppliers and is protected by international copyright laws. You may
                  not reproduce, distribute, or transmit any content without our prior written permission.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">11. Payment Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-4">If you purchase services from Flow9, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                  <li>Pay all fees and charges that you incur</li>
                  <li>Provide accurate billing information</li>
                  <li>Authorize us to charge your payment method</li>
                  <li>Accept responsibility for all charges incurred under your account</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">12. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  Flow9 reserves the right to terminate or suspend your account and access to the website at any time,
                  for any reason, without notice or liability. Upon termination, your right to use the website will
                  immediately cease.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">13. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:legal@getflow9.com" className="text-blue-400 hover:text-blue-300">
                      legal@getflow9.com
                    </a>
                  </p>
                  <p>
                    <strong>WhatsApp:</strong>{" "}
                    <a href="https://wa.me/8801616022669" className="text-blue-400 hover:text-blue-300">
                      +880 1616 022669
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> Flow9, AI Automation Solutions, Bangladesh
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="logo-container mb-4 md:mb-0 cursor-pointer">
              <Image src="/flow9-logo.png" alt="Flow9 Logo" width={48} height={48} className="footer-logo" />
            </Link>
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
