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
import { Toast } from "@/components/ui/toast"
import { Mail, Phone, MapPin, Globe, Clock, Users, Building, MessageSquare, Send } from 'lucide-react'

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
    
    // Here you would typically send this data to your server
    // For demonstration, we'll just log it and show a toast
    console.log(data)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

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
                Get in Touch
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
                We're here to answer your questions and provide the financial and business guidance you need.
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
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Your name" className="mt-1" required />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="Your email" className="mt-1" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="Your phone number" className="mt-1" required />
                        </div>
                        <div>
                          <Label htmlFor="services">Services of Interest</Label>
                          <div className="space-y-2">
                            {serviceOptions.map((option) => (
                              <div key={option.value} className="flex items-center space-x-2">
                                <Checkbox id={option.value} name="services" value={option.value} />
                                <label htmlFor={option.value} className="text-sm text-gray-700">{option.label}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="service-description">Service Descriptions</Label>
                          <Textarea 
                            id="service-description" 
                            name="service-description" 
                            placeholder="Please provide a short description for each selected service" 
                            className="mt-1" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" name="message" placeholder="Your message" className="mt-1" required />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" name="terms" required />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the terms and conditions
                          </label>
                        </div>
                        <Button type="submit" className="w-full">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
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
                      <ContactInfo icon={<Mail className="h-6 w-6" />} title="Email" content="info@aurelect.com" />
                      <ContactInfo icon={<Phone className="h-6 w-6" />} title="Phone" content="+1 (555) 123-4567" />
                      <ContactInfo icon={<MapPin className="h-6 w-6" />} title="Address" content="123 Business Street, Financial District, BZ 12345" />
                      <ContactInfo icon={<Globe className="h-6 w-6" />} title="Website" content={<Link href="https://www.aurelect.com" className="text-blue-600 hover:underline">www.aurelect.com</Link>} />
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
                      Comprehensive Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>From finance outsourcing to IT solutions, we offer a wide range of services to meet all your business needs.</p>
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
                    <p>We develop customized strategies and solutions that align with your company's unique challenges and opportunities.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <MessageSquare className="h-6 w-6 mr-2" />
                      Expert Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team of experts provides continuous support and guidance to ensure the successful implementation of our strategies.</p>
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

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
            clipRule="evenodd"
          />
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L2.87 21l3.23-1.01c1.57.85 3.36 1.34 5.27 1.34 5.52 0 10-4.48 10-10S17.52 2 12 2zm.97 14.95c-.76.07-1.52.12-2.28-.42-.66-.47-1.14-1.08-1.59-1.73-.45-.65-.81-1.36-1.09-2.09-.28-.73-.4-1.5-.33-2.26.07-.76.29-1.5.66-2.18.37-.68.88-1.29 1.51-1.77.63-.48 1.37-.82 2.15-.95.78-.13 1.58-.05 2.33.23.75.28 1.43.74 1.97 1.34.54.6.93 1.31 1.15 2.08.22.77.26 1.58.11 2.37-.15.79-.48 1.54-.95 2.2-.47.66-1.08 1.22-1.79 1.61-.71.39-1.5.61-2.31.65-.81.04-1.62-.1-2.37-.42-.75-.32-1.42-.8-1.97-1.41s-.96-1.33-1.21-2.1c-.25-.77-.31-1.58-.19-2.38.12-.8.42-1.56.87-2.24.45-.68 1.05-1.26 1.75-1.7.7-.44 1.5-.73 2.32-.84.82-.11 1.65-.04 2.44.21.79.25 1.52.67 2.13 1.24.61.57 1.09 1.27 1.39 2.04.3.77.42 1.6.35 2.42-.07.82-.32 1.62-.74 2.34-.42.72-.99 1.35-1.67 1.84-.68.49-1.46.83-2.28.99-.82.16-1.66.13-2.47-.09-.81-.22-1.57-.62-2.22-1.16-.65-.54-1.18-1.21-1.55-1.96-.37-.75-.57-1.57-.59-2.41-.02-.84.14-1.68.47-2.46.33-.78.83-1.49 1.46-2.09.63-.6 1.39-1.07 2.22-1.38.83-.31 1.72-.45 2.61-.41.89.04 1.77.26 2.58.64.81.38 1.54.92 2.14 1.58.6.66 1.06 1.43 1.35 2.26.29.83.41 1.71.34 2.58-.07.87-.32 1.72-.74 2.5-.42.78-.99 1.47-1.68 2.03-.69.56-1.49.98-2.35 1.23-.86.25-1.76.32-2.65.22z"
          />
        </svg>
      </a>

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