"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart, Calculator, ShieldCheck, DollarSign, TrendingUp, Users, CheckCircle, BookOpen, Server } from 'lucide-react'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="Aurelect Advisory Logo" className="h-12 w-auto" />
            <h1 className="ml-3 text-2xl font-semibold text-gray-900">Aurelect Advisory</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-semibold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
                Our Services
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
                Comprehensive business solutions tailored to drive your business success.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Comprehensive Business Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ServiceCard
                  title="Finance & Accounting"
                  description="Comprehensive financial management, bookkeeping, and CFO services."
                  icon={<BarChart className="h-10 w-10 text-gray-700" />}
                  features={[
                    "Finance Outsourcing",
                    "Bookkeeping and Accounting",
                    "Taxation Services",
                    "CFO Services",
                    "Financial Analysis",
                    "Strategic Planning",
                    "Risk Management"
                  ]}
                />
                <ServiceCard
                  title="Technology & Operations"
                  description="IT solutions, software development, and business process outsourcing."
                  icon={<Server className="h-10 w-10 text-gray-700" />}
                  features={[
                    "IT and Networking Services",
                    "Software Development",
                    "E-commerce Solutions",
                    "Server Maintenance",
                    "Back-Office Operations",
                    "KPO and BPO Services",
                    "HR Solutions"
                  ]}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Specialized Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <TrendingUp className="h-6 w-6 text-gray-700 mr-2" />
                      Financial Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      In-depth examination of financial statements and performance metrics to identify trends and opportunities for growth.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <ShieldCheck className="h-6 w-6 text-gray-700 mr-2" />
                      Risk Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Proactive identification and mitigation of financial risks to safeguard your business and ensure long-term stability.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <BookOpen className="h-6 w-6 text-gray-700 mr-2" />
                      Strategic Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Developing actionable financial strategies aligned with your business goals to drive sustainable growth and success.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <ShieldCheck className="h-6 w-6 text-gray-700 mr-2" />
                      Legal Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Expert legal counsel to ensure your business operates within the bounds of the law.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <ShieldCheck className="h-6 w-6 text-gray-700 mr-2" />
                      Corporate Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Comprehensive corporate services to streamline your business operations.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Approach</h2>
              <Tabs defaultValue="understand" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                  <TabsTrigger value="understand">Understand</TabsTrigger>
                  <TabsTrigger value="analyze">Analyze</TabsTrigger>
                  <TabsTrigger value="strategize">Strategize</TabsTrigger>
                  <TabsTrigger value="implement">Implement</TabsTrigger>
                </TabsList>
                <TabsContent value="understand">
                  <Card>
                    <CardHeader>
                      <CardTitle>Understanding Your Business Needs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We begin by thoroughly understanding your business objectives, challenges, and long-term vision. This forms the foundation for our tailored solutions.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="analyze">
                  <Card>
                    <CardHeader>
                      <CardTitle>Comprehensive Analysis & Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our team conducts a detailed analysis of your operations, identifying areas for improvement and opportunities for growth across all aspects of your business.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="strategize">
                  <Card>
                    <CardHeader>
                      <CardTitle>Strategic Planning & Roadmap</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We collaborate with you to develop a customized strategic plan, outlining actionable steps and a clear roadmap to achieve your goals.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="implement">
                  <Card>
                    <CardHeader>
                      <CardTitle>Seamless Implementation & Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our dedicated team provides ongoing support throughout the implementation process, ensuring a smooth transition and maximizing the impact of our solutions.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Client Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Testimonial
                  quote="Aurelect Advisory's services helped us streamline our operations and increase our efficiency by 20% in just six months."
                  author="Sarah Johnson"
                  position="CEO, TechStart Inc."
                />
                <Testimonial
                  quote="The solutions provided by Aurelect Advisory allowed us to focus on our core business while reducing our operational costs by 30%."
                  author="Michael Chen"
                  position="Founder, GrowFast Enterprises"
                />
                <Testimonial
                  quote="Their strategic planning services were instrumental in helping us achieve significant growth. Aurelect Advisory's expertise is truly unmatched."
                  author="Emma Rodriguez"
                  position="CFO, InnovateTech Solutions"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold mb-6">Ready to Elevate Your Business Strategy?</h2>
              <p className="text-xl mb-10 text-gray-300">
                Let's discuss how our services can benefit your business and drive growth.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100">
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
              <h3 className="text-2xl font-semibold mb-6">Aurelect Advisory</h3>
              <p className="text-gray-400">Empowering businesses through strategic business management and innovative solutions.</p>
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
              <p className="text-gray-400">contact@aurelectadvisory.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2023 Aurelect Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          {icon}
          <span className="ml-4">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-6">{description}</CardDescription>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function Testimonial({ quote, author, position }: TestimonialProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="mb-4">
          <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-lg mb-4">{quote}</p>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-gray-600">{position}</div>
      </CardContent>
    </Card>
  )
}