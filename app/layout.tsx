import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Kidtronic - STEM Education for Young Minds",
  description:
    "Igniting curiosity, creativity & innovation in young learners through hands-on programs in robotics, coding, AI, and engineering.",
  generator: "v0.app",
  keywords: "STEM education, robotics, coding, AI, engineering, kids, K-12, learning",
  authors: [{ name: "Kidtronic" }],
  openGraph: {
    title: "Kidtronic - STEM Education for Young Minds",
    description:
      "Igniting curiosity, creativity & innovation in young learners through hands-on programs in robotics, coding, AI, and engineering.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
