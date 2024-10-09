"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

export default function Contact() {
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
                Contact Us
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl">
                We're here to answer any questions you may have about our services.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message" className="mt-1" />
                      </div>
                      <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription>You can also reach us using the following contact details.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ContactInfo icon={<Mail className="h-6 w-6" />} text="contact@astrisglobal.com" />
                    <ContactInfo icon={<Phone className="h-6 w-6" />} text="+1 (555) 123-4567" />
                    <ContactInfo icon={<MapPin className="h-6 w-6" />} text="123 Financial Street, Business City, BZ 12345" />
                  </CardContent>
                </Card>
              </div>
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

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>
  )
}

function ContactInfo({ icon, text }: ContactInfoProps) {
  return (
    <div className="flex items-center">
      <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
        {icon}
      </div>
      <p className="text-lg">{text}</p>
    </div>
  )
}