"use client";

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
import { Toast } from "@/components/ui/toast"
import { Mail, Phone, MapPin, Globe, Clock, Users, Building, MessageSquare, Send, ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar';
import WhatsApp from '@/components/whatsapp';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

interface FAQProps {
  question: string;
  answer: string;
}

interface ServiceOption {
  value: string;
  label: string;
  description: string;
}

const serviceOptions: ServiceOption[] = [
  { value: "finance-outsourcing", label: "Finance Outsourcing", description: "Outsourced finance services including management of financial records, financial reporting, and related advisory services." },
  { value: "bookkeeping-accounting", label: "Bookkeeping and Accounting", description: "Full-spectrum accounting services for businesses, individuals, and organizations globally." },
  { value: "taxation", label: "Taxation (Direct and Indirect)", description: "Tax advisory and compliance services, including preparation, filing, and representation related to direct and indirect taxes." },
  { value: "cfo-services", label: "CFO Services", description: "Chief Financial Officer (CFO) and other senior financial management services on a consultancy or outsourced basis." },
  { value: "company-creation", label: "Company Creation and Corporate Services", description: "Assistance in formation, registration, and incorporation of companies, including secretarial and legal compliance services." },
  { value: "kpo-bpo", label: "KPO and BPO Services", description: "Specialized knowledge services and process outsourcing services across finance, accounting, HR, and marketing." },
  { value: "back-office", label: "Back-Office Operations", description: "Back-office support services such as data entry, transaction processing, and administrative services." },
  { value: "hr-solutions", label: "HR Solutions", description: "HR advisory and outsourcing services, including recruitment, payroll management, and employee benefits administration." },
  { value: "it-networking", label: "IT and Networking Services", description: "IT consulting, networking solutions, and system integration services, including maintenance of hardware and software infrastructure." },
  { value: "software-development", label: "Software Development", description: "Development, design, and maintenance of software applications, solutions, and platforms for various business needs." },
  { value: "ecommerce", label: "E-commerce and Web-Enabled Business", description: "E-commerce solutions, online marketplaces, and web-enabled business models." },
  { value: "server-maintenance", label: "Server Maintenance and Support", description: "Server hosting, maintenance, and support services, ensuring robust IT infrastructure for businesses." },
  { value: "legal-services", label: "Legal Services", description: "Legal advisory and compliance services related to business operations, company law, contract law, intellectual property, and other corporate matters." },
  { value: "financial-consulting", label: "Financial Consulting and Advisory", description: "Management consulting, business transformation, strategic financial advisory, and risk management services." },
]

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      services: formData.getAll('services'),
      serviceDescription: formData.get('service-description'),
      message: formData.get('message'),
    }
    console.log(data)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-32">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Let's Work Together
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Transform your business with our expert guidance and comprehensive solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Tabs defaultValue="contact-form" className="w-full">
                <TabsList className="grid w-full md:w-96 grid-cols-2 mx-auto mb-12">
                  <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
                  <TabsTrigger value="contact-info">Contact Info</TabsTrigger>
                </TabsList>
                <TabsContent value="contact-form">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">Get Started Today</CardTitle>
                      <CardDescription>Tell us about your project and we'll get back to you promptly.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="services">Services Required</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {serviceOptions.map((option) => (
                              <div
                                key={option.value}
                                className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors cursor-pointer"
                              >
                                <Checkbox
                                  id={option.value}
                                  name="services"
                                  value={option.value}
                                  className="mt-1"
                                />
                                <div>
                                  <label
                                    htmlFor={option.value}
                                    className="block text-md font-semibold text-gray-900 mb-1"
                                  >
                                    {option.label}
                                  </label>
                                  <p className="text-sm text-gray-500">{option.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Your Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            className="min-h-32 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" name="terms" required />
                          <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the{" "}
                            <Link href="/terms" className="text-blue-600 hover:underline">
                              terms and conditions
                            </Link>
                          </label>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="contact-info">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                      <CardDescription>Get in touch with us through any of these channels.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ContactInfo
                          icon={<Mail className="h-6 w-6 text-blue-600" />}
                          title="Email Us"
                          content={
                            <a href="mailto:info@aurelect.com" className="text-blue-600 hover:underline">
                              info@aurelect.com
                            </a>
                          }
                        />
                        <ContactInfo
                          icon={<Phone className="h-6 w-6 text-blue-600" />}
                          title="Call Us"
                          content={
                            <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                              +1 (555) 123-4567
                            </a>
                          }
                        />
                        <ContactInfo
                          icon={<MapPin className="h-6 w-6 text-blue-600" />}
                          title="Visit Us"
                          content="123 Business Street, Financial District, BZ 12345"
                        />
                        <ContactInfo
                          icon={<Clock className="h-6 w-6 text-blue-600" />}
                          title="Business Hours"
                          content={
                            <div className="space-y-1">
                              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                              <p>Sat: 10:00 AM - 2:00 PM</p>
                              <p>Sun: Closed</p>
                            </div>
                          }
                        />
                      </div>
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
              <h2 className="text-3xl font-semibold text-gray-900  mb-12 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <FAQ
                  question="What services does Aurelect Advisory offer?"
                  answer="Aurelect Advisory offers a wide range of services including finance outsourcing, bookkeeping and accounting, taxation services, CFO services, company creation and corporate services, KPO and BPO services, back-office operations, HR solutions, IT and networking services, software development, e-commerce solutions, server maintenance, legal services, and financial consulting and advisory."
                />
                <FAQ
                  question="How can I schedule a consultation?"
                  answer="You can schedule a consultation by filling out the contact form on this page, calling our office directly, or sending an email to info@aurelect.com. One of our representatives will get back to you promptly to arrange a meeting at a time that's convenient for you."
                />
                <FAQ
                  question="Do you work with businesses of all sizes?"
                  answer="Yes, we work with businesses of all sizes, from startups to large corporations. Our services are tailored to meet the specific needs and goals of each client, regardless of their size or industry."
                />
                <FAQ
                  question="What industries do you specialize in?"
                  answer="While we have experience across various industries, our comprehensive range of services allows us to cater to businesses in finance, technology, healthcare, manufacturing, retail, and professional services sectors. Our expertise allows us to adapt our services to any industry's specific needs."
                />
                <FAQ
                  question="How can Aurelect Advisory help my business grow?"
                  answer="Aurelect Advisory can help your business grow by providing expert financial management, streamlining your operations through our outsourcing services, offering strategic advice for business expansion, implementing efficient IT solutions, and ensuring compliance with legal and regulatory requirements. Our holistic approach addresses all aspects of your business, allowing you to focus on core activities and growth opportunities."
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

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Aurelect Advisory</h3>
              <p className="text-gray-400">Empowering businesses through comprehensive financial, business advisory, and technology-enabled services.</p>
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
              <p className="text-gray-400 mb-4">123 Business Street<br />Financial District, BZ 12345</p>
              <p className="text-gray-400">info@aurelect.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2023 Aurelect Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && (
        <Toast>
          <p>Your message has been sent successfully!</p>
        </Toast>
      )}
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