'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart, DollarSign, ShieldCheck, BookOpen, Calculator, Users } from 'lucide-react'

export function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="Astris Global Consulting Logo" className="h-10 w-auto" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Astris Global Consulting</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Comprehensive Financial Services
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Strategic CFO expertise and traditional outsourcing solutions for your financial management needs.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="CFO Services"
                description="Strategic financial planning and analysis to drive your business forward."
                icon={<BarChart className="h-6 w-6" />}
              />
              <ServiceCard
                title="Outsourcing Solutions"
                description="Efficient handling of day-to-day financial operations and compliance."
                icon={<Calculator className="h-6 w-6" />}
              />
              <ServiceCard
                title="Risk Management"
                description="Proactive identification and mitigation of financial risks."
                icon={<ShieldCheck className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Expertise"
                description="Our team of financial experts brings years of industry experience."
                icon={<Users className="h-6 w-6" />}
              />
              <FeatureCard
                title="Holistic Approach"
                description="We combine strategic insights with practical solutions for comprehensive financial management."
                icon={<BookOpen className="h-6 w-6" />}
              />
              <FeatureCard
                title="Results-Driven"
                description="Our focus is on maximizing your profitability and driving business success."
                icon={<DollarSign className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Astris Global Consulting</h3>
              <p className="text-gray-400">Empowering businesses through strategic financial management.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Financial Street<br />Business City, BZ 12345</p>
              <p className="text-gray-400 mt-2">contact@astrisglobal.com</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2023 Astris Global Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description, icon }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ title, description, icon }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}