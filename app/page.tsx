"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BarChart, DollarSign, ShieldCheck, BookOpen, Calculator, Users, CheckCircle, TrendingUp } from 'lucide-react'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
}

interface StatProps {
  value: string;
  label: string;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="Astris Global Consulting Logo" className="h-12 w-auto" />
            <h1 className="ml-3 text-2xl font-semibold text-gray-900">Astris Global Consulting</h1>
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
              <h2 className="text-4xl font-semibold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
                Elevate Your Financial Strategy
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
                Strategic CFO expertise and innovative outsourcing solutions for your business growth.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-gray-900 hover:bg-gray-100 hover:text-gray-900">
                  <Link href="/services">
                    Our Services
                  </Link>
                </Button>
              </div>
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                  title="CFO Services"
                  description="Strategic financial planning and analysis to drive your business forward."
                  icon={<BarChart className="h-10 w-10 text-gray-700" />}
                />
                <ServiceCard
                  title="Outsourcing Solutions"
                  description="Efficient handling of day-to-day financial operations and compliance."
                  icon={<Calculator className="h-10 w-10 text-gray-700" />}
                />
                <ServiceCard
                  title="Risk Management"
                  description="Proactive identification and mitigation of financial risks."
                  icon={<ShieldCheck className="h-10 w-10 text-gray-700" />}
                />
                <ServiceCard
                  title="Financial Analysis"
                  description="In-depth examination of financial statements and performance metrics."
                  icon={<TrendingUp className="h-10 w-10 text-gray-700" />}
                />
                <ServiceCard
                  title="Strategic Planning"
                  description="Developing actionable financial strategies aligned with your business goals."
                  icon={<BookOpen className="h-10 w-10 text-gray-700" />}
                />
                <ServiceCard
                  title="Profitability Analysis"
                  description="Evaluating product and service profitability for informed decision-making."
                  icon={<DollarSign className="h-10 w-10 text-gray-700" />}
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Users className="h-6 w-6 text-gray-700 mr-2" />
                      Expert Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Our team of financial experts brings years of industry experience to your business, ensuring top-tier advice and solutions.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <BookOpen className="h-6 w-6 text-gray-700 mr-2" />
                      Tailored Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      We combine strategic insights with practical solutions for comprehensive financial management tailored to your unique needs.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <DollarSign className="h-6 w-6 text-gray-700 mr-2" />
                      Proven Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Our focus is on maximizing your profitability and driving business success, with a track record of delivering tangible results.
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Process</h2>
              <Tabs defaultValue="assess" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                  <TabsTrigger value="assess">Assess</TabsTrigger>
                  <TabsTrigger value="strategize">Strategize</TabsTrigger>
                  <TabsTrigger value="implement">Implement</TabsTrigger>
                  <TabsTrigger value="monitor">Monitor & Optimize</TabsTrigger>
                </TabsList>
                <TabsContent value="assess">
                  <Card>
                    <CardHeader>
                      <CardTitle>Comprehensive Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We begin by conducting a thorough analysis of your current financial situation, identifying strengths, weaknesses, and areas for improvement.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="strategize">
                  <Card>
                    <CardHeader>
                      <CardTitle>Strategic Planning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Based on our assessment, we develop a tailored financial strategy that aligns with your business goals and addresses your specific challenges.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="implement">
                  <Card>
                    <CardHeader>
                      <CardTitle>Seamless Implementation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our team works closely with you to implement the agreed-upon strategies, ensuring a smooth transition and minimal disruption to your operations.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="monitor">
                  <Card>
                    <CardHeader>
                      <CardTitle>Continuous Improvement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We continuously monitor the performance of implemented strategies, making data-driven adjustments to optimize results and ensure long-term success.</p>
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Client Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Testimonial
                  quote="Astris Global Consulting transformed our financial strategy, leading to a 30% increase in profitability within the first year."
                  author="Jane Doe"
                  position="CEO, Tech Innovators Inc."
                />
                <Testimonial
                  quote="Their outsourcing solutions streamlined our operations and reduced costs by 25%. Highly recommended!"
                  author="John Smith"
                  position="CFO, Global Manufacturing Co."
                />
                <Testimonial
                  quote="The strategic insights provided by Astris helped us navigate a complex merger successfully. Their expertise is unmatched."
                  author="Emily Johnson"
                  position="Director of Finance, Merger Specialists LLC"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Stat value="500+" label="Clients Served" />
                <Stat value="$2B+" label="Client Revenue Optimized" />
                <Stat value="30%" label="Average Cost Reduction" />
                <Stat value="98%" label="Client Satisfaction Rate" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Finances?</h2>
              <p className="text-xl mb-10 text-gray-300">
                Let's discuss how our expertise can benefit your business and drive growth.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-gray-900  hover:bg-gray-100">
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

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          {icon}
          <span className="ml-4">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
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

function Stat({ value, label }: StatProps) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="text-4xl font-bold mb-2">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </CardContent>
    </Card>
  )
}