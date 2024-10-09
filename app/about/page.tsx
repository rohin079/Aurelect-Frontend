"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Users, Target, Award, ChevronRight, Globe, Briefcase, GraduationCap } from 'lucide-react'

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
}

export default function About() {
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
              <h1 className="text-4xl font-semibold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
                About Astris Global Consulting
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
                Empowering businesses through strategic financial management and innovative solutions.
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Users className="h-8 w-8 text-gray-700 mr-4" />
                      Our Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Our team of expert financial professionals brings decades of combined experience across various industries, ensuring top-tier advice and solutions for our clients.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Target className="h-8 w-8 text-gray-700 mr-4" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      To provide unparalleled financial guidance and solutions that drive business growth and success for our clients, empowering them to achieve their strategic goals.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Award className="h-8 w-8 text-gray-700 mr-4" />
                      Our Values
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Integrity, excellence, innovation, and client-centricity are at the core of everything we do. We are committed to delivering the highest quality services with transparency and ethical practices.
                    </CardDescription>
                  </CardContent>
                </Card>
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Approach</h2>
              <Tabs defaultValue="holistic" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                  <TabsTrigger value="holistic">Holistic Perspective</TabsTrigger>
                  <TabsTrigger value="tailored">Tailored Solutions</TabsTrigger>
                  <TabsTrigger value="innovative">Innovative Thinking</TabsTrigger>
                </TabsList>
                <TabsContent value="holistic">
                  <Card>
                    <CardHeader>
                      <CardTitle>Holistic Perspective</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>At Astris Global Consulting, we believe in taking a comprehensive view of your business. We don't just look at the numbers; we consider your industry, market position, growth potential, and long-term objectives to provide truly impactful financial strategies.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tailored">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tailored Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We understand that every business is unique. That's why we develop customized financial solutions that address your specific challenges and capitalize on your unique opportunities. Our approach ensures that you receive strategies and advice that are perfectly aligned with your business goals.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="innovative">
                  <Card>
                    <CardHeader>
                      <CardTitle>Innovative Thinking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>In today's rapidly changing business environment, innovation is key. We constantly stay ahead of the curve, leveraging the latest financial technologies and methodologies to provide you with cutting-edge solutions that give you a competitive edge in your industry.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TeamMember
                  name="John Doe"
                  position="Founder & CEO"
                  bio="With over 25 years of experience in financial consulting, John has led Astris Global Consulting to become a leader in the industry."
                  image="/placeholder.svg?height=300&width=300"
                />
                <TeamMember
                  name="Jane Smith"
                  position="Chief Financial Officer"
                  bio="Jane brings 20 years of expertise in corporate finance and has been instrumental in developing our innovative financial strategies."
                  image="/placeholder.svg?height=300&width=300"
                />
                <TeamMember
                  name="Michael Johnson"
                  position="Head of Client Relations"
                  bio="With a strong background in business development, Michael ensures our clients receive unparalleled service and support."
                  image="/placeholder.svg?height=300&width=300"
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
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Journey</h2>
              <div className="space-y-8">
                <Milestone
                  year="2005"
                  title="Foundation"
                  description="Astris Global Consulting was founded with a vision to provide innovative financial solutions to businesses worldwide."
                />
                <Milestone
                  year="2010"
                  title="Expansion"
                  description="We expanded our services to include comprehensive CFO solutions, meeting the growing demand for strategic financial leadership."
                />
                <Milestone
                  year="2015"
                  title="Global Reach"
                  description="Astris Global Consulting established offices in major financial hubs, extending our services to clients across the globe."
                />
                <Milestone
                  year="2020"
                  title="Digital Transformation"
                  description="We embraced cutting-edge financial technologies, enhancing our ability to provide real-time insights and data-driven strategies."
                />
                <Milestone
                  year="Today"
                  title="Industry Leader"
                  description="Astris Global Consulting continues to set the standard for financial consulting, serving a diverse portfolio of clients across various industries."
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
              <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Financial Strategy?</h2>
              <p className="text-xl mb-10 text-gray-300">
                Let's discuss how our expertise can benefit your business and drive growth.
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

function TeamMember({ name, position, bio, image }: TeamMemberProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
        <p className="text-gray-600 text-center mb-4">{position}</p>
        <p className="text-gray-700 text-center">{bio}</p>
      </CardContent>
    </Card>
  )
}

function Milestone({ year, title, description }: MilestoneProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-24 text-right">
        <span className="text-lg font-semibold text-gray-900">{year}</span>
      </div>
      <div className="ml-8 border-l-2 border-gray-300 pl-8 pb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}