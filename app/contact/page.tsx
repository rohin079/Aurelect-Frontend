"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Globe, Clock, Users, Building, MessageSquare } from 'lucide-react'

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

interface FAQProps {
  question: string;
  answer: string;
}

export default function Contact() {
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
                Get in Touch
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
                We're here to answer your questions and provide the financial guidance your business needs.
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
              <Tabs defaultValue="contact-form" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
                  <TabsTrigger value="contact-info">Contact Information</TabsTrigger>
                </TabsList>
                <TabsContent value="contact-form">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Send us a message</CardTitle>
                      <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your email" className="mt-1" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" placeholder="Your phone number" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" placeholder="Your company name" className="mt-1" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="service">Service of Interest</Label>
                          <Select>
                            <SelectTrigger className="w-full mt-1">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cfo-services">CFO Services</SelectItem>
                              <SelectItem value="outsourcing">Outsourcing Solutions</SelectItem>
                              <SelectItem value="financial-analysis">Financial Analysis</SelectItem>
                              <SelectItem value="strategic-planning">Strategic Planning</SelectItem>
                              <SelectItem value="risk-management">Risk Management</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Your message" className="mt-1" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the terms and conditions
                          </label>
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="contact-info">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Contact Information</CardTitle>
                      <CardDescription>Reach out to us through any of the following channels.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ContactInfo icon={<Mail className="h-6 w-6" />} title="Email" content="contact@astrisglobal.com" />
                      <ContactInfo icon={<Phone className="h-6 w-6" />} title="Phone" content="+1 (555) 123-4567" />
                      <ContactInfo icon={<MapPin className="h-6 w-6" />} title="Address" content="123 Financial Street, Business City, BZ 12345" />
                      <ContactInfo icon={<Globe className="h-6 w-6" />} title="Website" content={<Link href="https://www.astrisglobal.com" className="text-blue-600 hover:underline">www.astrisglobal.com</Link>} />
                      <ContactInfo 
                        icon={<Clock className="h-6 w-6" />} 
                        title="Business Hours" 
                        content={
                          <div>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        } 
                      />
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
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">How We Can Help</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Users className="h-6 w-6 mr-2" />
                      Personalized Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Schedule a one-on-one consultation with our financial experts to discuss your specific business needs and goals.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Building className="h-6 w-6 mr-2" />
                      Tailored Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We develop customized financial strategies and solutions that align with your company's unique challenges and opportunities.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <MessageSquare className="h-6 w-6 mr-2" />
                      Ongoing Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team provides continuous support and guidance to ensure the successful implementation of our financial strategies.</p>
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <FAQ 
                  question="What services does Astris Global Consulting offer?" 
                  answer="Astris Global Consulting offers a wide range of financial services including CFO services, outsourcing solutions, financial analysis, strategic planning, and risk management. Our goal is to provide comprehensive financial guidance to help businesses grow and succeed."
                />
                <FAQ 
                  question="How can I schedule a consultation?" 
                  answer="You can schedule a consultation by filling out the contact form on this page, calling our office directly, or sending us an email. One of our representatives will get back to you promptly to arrange a meeting at a time that's convenient for you."
                />
                <FAQ 
                  question="Do you work with businesses of all sizes?" 
                  answer="Yes, we work with businesses of all sizes, from startups to large corporations. Our services are tailored to meet the specific needs and goals of each client, regardless of their size or industry."
                />
                <FAQ 
                  question="What industries do you specialize in?" 
                  answer="While we have experience across various industries, we specialize in technology, healthcare, manufacturing, and professional services. However, our expertise allows us to adapt our services to any industry."
                />
                <FAQ 
                  question="How long does it typically take to see results from your services?" 
                  answer="The timeline for results can vary depending on the specific services and the unique situation of each client. However, many of our clients start seeing improvements in their financial processes and decision-making within the first few months of engagement."
                />
              </Accordion>
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492404069!3d40.75889083440232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412335495!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white  py-16">
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

function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="bg-gray-100 p-3 rounded-full">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{content}</p>
      </div>
    </div>
  )
}

function FAQ({ question, answer }: FAQProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}