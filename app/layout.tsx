import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Flow9 - AI-Powered Automation Solutions",
  description: "Custom AI automation solutions for businesses using n8n, Make, and Dify",
  icons: {
    icon: "/flow9-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
