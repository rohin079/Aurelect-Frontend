"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Toast } from "@/components/ui/toast";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Users,
  Building,
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Award,
  ChartBar,
  Twitter,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";
import Navbar from "@/components/navbar";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-[0%] z-50"
      style={{ scaleX }}
    />
  );
};

const HeroSection = () => (
  <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
    {/* Subtle geometric patterns */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />

      {/* Professional accent elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 transform skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-indigo-50/30 transform -skew-x-12" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Strategic Financial
            <span className="text-blue-600"> Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Expert financial guidance and innovative solutions to help your
            business achieve sustainable growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
            >
              Schedule Consultation
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">Licensed & Regulated</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">1000+ Clients</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">Industry Leader</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/background.jpg"
              alt="Financial Services"
              className="w-full h-full object-cover"
            />
            {/* Professional overlay cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-gray-900 font-semibold">Market Growth</h3>
                  <p className="text-gray-600">
                    Sustainable financial strategies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

interface ServiceOption {
  value: string;
  label: string;
  description: string;
}

const serviceOptions: ServiceOption[] = [
  {
    value: "finance-outsourcing",
    label: "Finance Outsourcing",
    description:
      "Outsourced finance services including management of financial records, financial reporting, and related advisory services.",
  },
  {
    value: "bookkeeping-accounting",
    label: "Bookkeeping and Accounting",
    description:
      "Full-spectrum accounting services for businesses, individuals, and organizations globally.",
  },
  {
    value: "taxation",
    label: "Taxation (Direct and Indirect)",
    description:
      "Tax advisory and compliance services, including preparation, filing, and representation related to direct and indirect taxes.",
  },
  {
    value: "cfo-services",
    label: "CFO Services",
    description:
      "Chief Financial Officer (CFO) and other senior financial management services on a consultancy or outsourced basis.",
  },
  {
    value: "company-creation",
    label: "Company Creation and Corporate Services",
    description:
      "Assistance in formation, registration, and incorporation of companies, including secretarial and legal compliance services.",
  },
  {
    value: "kpo-bpo",
    label: "KPO and BPO Services",
    description:
      "Specialized knowledge services and process outsourcing services across finance, accounting, HR, and marketing.",
  },
  {
    value: "back-office",
    label: "Back-Office Operations",
    description:
      "Back-office support services such as data entry, transaction processing, and administrative services.",
  },
  {
    value: "hr-solutions",
    label: "HR Solutions",
    description:
      "HR advisory and outsourcing services, including recruitment, payroll management, and employee benefits administration.",
  },
  {
    value: "it-networking",
    label: "IT and Networking Services",
    description:
      "IT consulting, networking solutions, and system integration services, including maintenance of hardware and software infrastructure.",
  },
  {
    value: "software-development",
    label: "Software Development",
    description:
      "Development, design, and maintenance of software applications, solutions, and platforms for various business needs.",
  },
  {
    value: "ecommerce",
    label: "E-commerce and Web-Enabled Business",
    description:
      "E-commerce solutions, online marketplaces, and web-enabled business models.",
  },
  {
    value: "server-maintenance",
    label: "Server Maintenance and Support",
    description:
      "Server hosting, maintenance, and support services, ensuring robust IT infrastructure for businesses.",
  },
  {
    value: "legal-services",
    label: "Legal Services",
    description:
      "Legal advisory and compliance services related to business operations, company law, contract law, intellectual property, and other corporate matters.",
  },
  {
    value: "financial-consulting",
    label: "Financial Consulting and Advisory",
    description:
      "Management consulting, business transformation, strategic financial advisory, and risk management services.",
  },
];

const ContactFormSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white">
    {/* Subtle background patterns */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />

      {/* Professional accent elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 transform skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-indigo-50/30 transform -skew-x-12" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Tabs defaultValue="contact-form" className="w-full">
          <TabsList className="grid w-full md:w-96 grid-cols-2 mx-auto mb-12 bg-gray-100/80 p-1 rounded-lg">
            <TabsTrigger
              value="contact-form"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-600 rounded-md transition-all"
            >
              Contact Form
            </TabsTrigger>
            <TabsTrigger
              value="contact-info"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-600 rounded-md transition-all"
            >
              Contact Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact-form">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Get Started Today
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Tell us about your project and we'll get back to you promptly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
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
                          className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-pointer"
                        >
                          <Checkbox
                            id={option.value}
                            name="services"
                            value={option.value}
                            className="mt-1 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <div>
                            <label
                              htmlFor={option.value}
                              className="block text-md font-semibold text-gray-900 mb-1"
                            >
                              {option.label}
                            </label>
                            <p className="text-sm text-gray-600">
                              {option.description}
                            </p>
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
                      placeholder="Tell us about your requirement..."
                      className="min-h-32 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      name="terms"
                      required
                      className="text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        terms and conditions
                      </Link>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white transition-colors group"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  {/* Trust Indicators */}
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="flex items-center text-gray-600">
                        <Shield className="w-5 h-5 text-blue-600 mr-2" />
                        <span>Secure Form</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                        <span>24h Response Time</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        <span>Certified Advisors</span>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact-info">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Get in touch with us through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-blue-50">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Email Us
                      </h3>
                      <a
                        href="mailto:info@aurelect.com"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        info@aurelect.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-blue-50">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Call Us
                      </h3>
                      <a
                        href="tel:+15551234567"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-blue-50">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Visit Us
                      </h3>
                      <p className="text-gray-600">
                        123 Business Street
                        <br />
                        Financial District, BZ 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-blue-50">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Business Hours
                      </h3>
                      <div className="text-gray-600">
                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p>Sat: 10:00 AM - 2:00 PM</p>
                        <p>Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Trust Indicators */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 rounded-lg bg-blue-50">
                      <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="text-gray-900 font-medium">
                        Licensed & Regulated
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Full compliance with financial regulations
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-blue-50">
                      <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="text-gray-900 font-medium">
                        Data Security
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Enterprise-grade security measures
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-blue-50">
                      <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="text-gray-900 font-medium">Expert Team</h4>
                      <p className="text-gray-600 text-sm">
                        Certified financial advisors
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  </section>
);
function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-300 mb-1"
    >
      {children}
    </label>
  );
}

const FAQSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
    <div className="absolute inset-0">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Light decorative shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">FAQ</span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our financial services and how we can help you achieve your financial goals
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-8"
        >
          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-2 bg-gradient-to-r from-sky-400 to-blue-500 opacity-30 blur-lg"></div>
            </div>
            <img
              src="/images/background.jpg"
              alt="Financial Advisory Team"
              className="relative rounded-2xl shadow-xl w-full h-40 object-cover"
            />
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Need More Information?
            </h3>
            <p className="text-slate-600 mb-4">
              Our financial experts are here to help you make informed decisions about your financial future.
            </p>
            <button className="w-full py-3 px-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                question: "What financial services do you provide?",
                answer:
                  "We offer a comprehensive suite of financial services including investment management, retirement planning, tax optimization strategies, estate planning, and personalized wealth management solutions. Our team works closely with you to develop strategies aligned with your financial goals and risk tolerance.",
              },
              {
                question: "How do your fees work?",
                answer:
                  "Our fee structure is transparent and based on the services you choose. We typically charge a percentage of assets under management for investment services, while financial planning services may be offered on a flat-fee or retainer basis. We'll provide a detailed fee schedule during your initial consultation.",
              },
              {
                question: "What's your investment philosophy?",
                answer:
                  "Our investment philosophy centers on long-term wealth creation through diversified, risk-managed portfolios. We emphasize transparent, evidence-based investing strategies tailored to your specific goals, time horizon, and risk tolerance. Regular portfolio rebalancing and tax-efficient management are key components of our approach.",
              },
              {
                question: "How do you ensure my financial security?",
                answer:
                  "We maintain the highest standards of security and compliance. Your assets are held with reputable custodians, protected by advanced encryption, and backed by comprehensive insurance. We're regulated by relevant financial authorities and undergo regular audits to ensure compliance with industry standards.",
              },
              {
                question: "What makes your firm different?",
                answer:
                  "Our combination of personalized service, innovative technology, and deep expertise sets us apart. We maintain a low client-to-advisor ratio to ensure personalized attention, use advanced financial planning tools, and provide ongoing education and support to help you make informed financial decisions.",
              },
              {
                question: "How do I get started?",
                answer:
                  "Getting started is simple. Schedule a complimentary consultation through our website or call us directly. During this initial meeting, we'll discuss your financial goals, assess your current situation, and explain how our services can help you achieve your objectives. We'll then develop a customized plan tailored to your needs.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-slate-900 hover:text-sky-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  </section>
);


const LocationSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
    {/* Background Elements */}
    <div className="absolute inset-0">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Light decorative shapes */}
      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-80 h-80 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">Our Location</span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Visit Our Financial Center
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Schedule a meeting with our financial advisors to discuss your investment goals and strategies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-sky-50">
                  <MapPin className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Office Address
                  </h3>
                  <p className="text-slate-600">
                    123 Financial District Boulevard
                  </p>
                  <p className="text-slate-600">New York, NY 10004</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-sky-50">
                    <Phone className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">Phone</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-sky-50">
                    <Mail className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">Email</h4>
                    <p className="text-slate-600">contact@financialgroup.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-sky-50">
                  <Clock className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Business Hours
                  </h3>
                  <div className="space-y-2 mt-2">
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-slate-600">
                      Saturday: By Appointment Only
                    </p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule Meeting Card */}
          <Card className="bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Schedule a Consultation
              </h3>
              <p className="mb-4 text-sky-100">
                Meet with our financial experts to discuss your investment strategy
              </p>
              <button className="w-full py-3 px-4 bg-white text-sky-600 rounded-lg hover:bg-sky-50 transition-colors font-medium">
                Book an Appointment
              </button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-8"
        >
          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-1 bg-gradient-to-r from-sky-400 to-blue-500 opacity-30 blur-lg"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492404069!3d40.75889083440232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412335495!5m2!1sen!2sus"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="relative py-24 bg-white overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-slate-100 to-slate-200" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Our Financial Impact
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Trusted by individuals and businesses worldwide for financial excellence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: ChartBar,
            metric: "$5B+",
            label: "Assets Managed",
            description: "Growing portfolios globally",
            color: "sky",
          },
          {
            icon: Shield,
            metric: "10,000+",
            label: "Secure Transactions",
            description: "Safe and reliable service",
            color: "sky",
          },
          {
            icon: Award,
            metric: "25+",
            label: "Years Experience",
            description: "Industry expertise",
            color: "sky",
          },
          {
            icon: Clock,
            metric: "24/7",
            label: "Client Support",
            description: "Always available",
            color: "sky",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.metric}
                </h3>
                <p className="text-lg font-semibold text-slate-800 mb-1">
                  {stat.label}
                </p>
                <p className="text-slate-600">{stat.description}</p>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-full -mr-12 -mt-12 opacity-20" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-sky-100 rounded-full -ml-8 -mb-8 opacity-20" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative bg-slate-900">
    {/* Top decorative border */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600"></div>

    <div className="max-w-7xl mx-auto px-4">
      {/* Main footer content */}
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Financial Group
              </h3>
              <p className="text-slate-300">
                Expert financial guidance and wealth management solutions for a secure future.
              </p>
            </div>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Instagram, href: 'https://instagram.com' }
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Wealth Management',
                'Financial Planning',
                'Investment Strategy',
                'Retirement Planning',
                'Tax Advisory',
                'Estate Planning'
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                'About Us',
                'Our Team',
                'Testimonials',
                'Latest Insights',
                'Careers',
                'Contact'
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-300">
                <MapPin className="w-5 h-5 text-sky-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  123 Financial District Boulevard
                  <br />
                  New York, NY 10004
                </div>
              </li>
              <li>
                <a
                  href="mailto:contact@financialgroup.com"
                  className="flex items-center text-slate-300 hover:text-sky-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-sky-400 mr-3" />
                  contact@financialgroup.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center text-slate-300 hover:text-sky-400 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-sky-400 mr-3" />
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Financial Group. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Cookie Policy', href: '/cookies' },
              { label: 'Accessibility', href: '/accessibility' }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// Main component export with updated structure and styling
export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      services: formData.getAll("services"),
      serviceDescription: formData.get("service-description"),
      message: formData.get("message"),
    };
    console.log(data);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <ContactFormSection />
        <StatsSection />
        <FAQSection />
        <LocationSection />
        
      </main>
      <Footer />
    

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          <p>Your message has been sent successfully!</p>
        </div>
      )}
    </div>
  );
}
