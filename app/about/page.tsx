"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Users, Target, Award, ArrowRight } from 'lucide-react'

interface AboutCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="Astris Global Consulting Logo" className="h-12 w-auto" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Astris Global Consulting</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-32 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl font-extrabold sm:text-6xl sm:tracking-tight lg:text-7xl mb-6">
                About Astris Global Consulting
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl">
                Empowering businesses through strategic financial management and innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <AboutCard
                  title="Our Team"
                  description="Our team of expert financial professionals brings decades of combined experience across various industries."
                  icon={<Users className="h-10 w-10 text-primary" />}
                />
                <AboutCard
                  title="Our Mission"
                  description="To provide unparalleled financial guidance and solutions that drive business growth and success for our clients."
                  icon={<Target className="h-10 w-10 text-primary" />}
                />
                <AboutCard
                  title="Our Values"
                  description="Integrity, excellence, innovation, and client-centricity are at the core of everything we do."
                  icon={<Award className="h-10 w-10 text-primary" />}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Our Approach</h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                At Astris Global Consulting, we believe in a holistic approach to financial management. We combine strategic CFO expertise with efficient outsourcing solutions to provide comprehensive financial services tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Strategic Insight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">
                      Our CFO services go beyond numbers. We provide strategic insights that help you make informed decisions and drive your business forward.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Operational Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">
                      Our outsourcing solutions ensure that your day-to-day financial operations run smoothly, allowing you to focus on growing your business.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-primary text-white rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl font-extrabold mb-6">Ready to Transform Your Finances?</h2>
              <p className="text-xl mb-10">
                Let's discuss how our expertise can benefit your business and drive growth.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Astris Global Consulting</h3>
              <p className="text-gray-400">Empowering businesses through strategic financial management and innovative solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <p className="text-gray-400 mb-4">123 Financial Street<br />Business City, BZ 12345</p>
              <p className="text-gray-400">contact@astrisglobal.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2023 Astris Global Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AboutCard({ title, description, icon }: AboutCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          {icon}
          <span className="ml-4">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}