"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: October 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  Flow9 ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website and
                  use our services, including our Facebook app.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Information We Collect</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Personal Information</h3>
                    <p>
                      We may collect personal information that you voluntarily provide, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                      <li>Name and email address</li>
                      <li>Phone number</li>
                      <li>Company information</li>
                      <li>Payment information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Automatically Collected Information</h3>
                    <p>When you use our services, we automatically collect:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                      <li>IP address and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Pages visited and time spent</li>
                      <li>Referral source</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">3. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address fraud and security issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Information Sharing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                  <li>Service providers who assist us in operating our website and conducting our business</li>
                  <li>Business partners with your consent</li>
                  <li>Law enforcement when required by law</li>
                  <li>Other parties in connection with company transactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your personal information, we cannot guarantee its absolute
                  security.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Your Privacy Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to opt-out of marketing communications</li>
                  <li>Right to data portability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Third-Party Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices of these external sites. We encourage you to review the privacy policies of any third-party
                  sites before providing your personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">9. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are not directed to children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that a child under 13 has provided us with
                  personal information, we will delete such information and terminate the child's account.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">11. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:privacy@getflow9.com" className="text-blue-400 hover:text-blue-300">
                      privacy@getflow9.com
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
