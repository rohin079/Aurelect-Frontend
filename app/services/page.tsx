"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Briefcase,
  Calculator,
  CheckCircle,
  ClipboardList,
  Cpu,
  CreditCard,
  FileText,
  Globe,
  GraduationCap,
  PieChart,
  TrendingUp,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Matching homepage style */}
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero section - Matching homepage gradient */}
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 h-96">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-semibold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Our Services
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
                Comprehensive business solutions tailored to drive your business
                success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services sections retain their structure but update colors */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Comprehensive Business Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* First set of ServiceCards */}
                <ServiceCard
                  title="CFO Services"
                  description="Comprehensive financial management and CFO services."
                  icon={<BarChart className="h-10 w-10 text-blue-600" />}
                  features={[
                    "Financial Strategy and Planning",
                    "Cash Flow Management",
                    "Financial Reporting and Analysis",
                    "Risk Management",
                    "Tax Planning and Compliance",
                    "Operational Efficiency",
                    "Treasury and Cash Management",
                    "Corporate Governance and Board Reporting",
                  ]}
                />
                <ServiceCard
                  title="Financial Controller Services"
                  description="Expert financial control and management solutions."
                  icon={<Calculator className="h-10 w-10 text-green-600" />}
                  features={[
                    "Accounting Management",
                    "Financial Reporting",
                    "Budgeting and Forecasting",
                    "Internal Controls and Compliance",
                    "Cash Flow and Expense Management",
                    "Tax Planning and Compliance",
                    "Inventory and Cost Accounting",
                    "Audit and Risk Management",
                    "System Implementation and Integration",
                  ]}
                />
                <ServiceCard
                  title="Bookkeeping Services"
                  description="Accurate and efficient bookkeeping solutions."
                  icon={<FileText className="h-10 w-10 text-purple-600" />}
                  features={[
                    "Transaction Recording",
                    "Bank and Credit Card Reconciliation",
                    "Accounts Payable (AP) Management",
                    "Accounts Receivable (AR) Management",
                    "Payroll Processing",
                    "Expense Tracking",
                    "Sales Tax Reporting",
                    "Cash Flow Tracking",
                    "Financial Report Preparation",
                  ]}
                />
                <ServiceCard
                  title="Accounting Services"
                  description="Comprehensive accounting and financial management."
                  icon={<PieChart className="h-10 w-10 text-red-600" />}
                  features={[
                    "Financial Reporting and Analysis",
                    "Budgeting and Forecasting",
                    "Tax Planning and Compliance",
                    "Audit Preparation and Support",
                    "Internal Controls and Compliance",
                    "Risk Management and Internal Audit",
                    "Treasury and Cash Management",
                  ]}
                />
                <ServiceCard
                  title="Payroll Processing Services"
                  description="Efficient and accurate payroll management."
                  icon={<CreditCard className="h-10 w-10 text-yellow-600" />}
                  features={[
                    "Employee Compensation Management",
                    "Tax Withholding and Compliance",
                    "Payroll Reporting and Recordkeeping",
                    "Time and Attendance Tracking",
                    "Direct Deposit and Payment Processing",
                    "Employee Benefits Administration",
                    "Employee Self-Service Portal",
                    "Customized Payroll Solutions",
                  ]}
                />
                <ServiceCard
                  title="Tax Support Services"
                  description="Comprehensive tax planning and compliance solutions."
                  icon={<ClipboardList className="h-10 w-10 text-indigo-600" />}
                  features={[
                    "Tax Preparation and Filing",
                    "Tax Planning and Strategy",
                    "Tax Compliance and Advisory",
                    "International and Cross-Border Tax",
                    "Tax Audit Support",
                    "Merger and Acquisition Tax Support",
                    "Estates and Trusts Tax Services",
                    "Payroll Tax Services",
                    "Tax Credits and Incentives",
                    "Sales and Use Tax Services",
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Specialized Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <ServiceCard
                  title="Accounting Automation Services"
                  description="Streamline your accounting processes with cutting-edge automation."
                  icon={<Zap className="h-10 w-10 text-orange-600" />}
                  features={[
                    "Automation of Bookkeeping Tasks",
                    "Accounts Payable (AP) Automation",
                    "Accounts Receivable (AR) Automation",
                    "Payroll Automation",
                    "Financial Reporting Automation",
                    "Tax Compliance Automation",
                    "Expense Management Automation",
                  ]}
                />
                <ServiceCard
                  title="Board Meeting Services"
                  description="Comprehensive support for effective board meetings."
                  icon={<Briefcase className="h-10 w-10 text-teal-600" />}
                  features={[
                    "Meeting Planning and Preparation",
                    "Meeting Facilitation",
                    "Documentation and Reporting",
                    "Performance Monitoring and Reporting",
                    "Financial Reporting Automation",
                    "Strategic Planning and Review",
                  ]}
                />
                <ServiceCard
                  title="Training Services"
                  description="Empower your team with expert financial training."
                  icon={<GraduationCap className="h-10 w-10 text-pink-600" />}
                  features={[
                    "Accounting and Bookkeeping Skills",
                    "Taxation Knowledge",
                    "Communication Skills for Client Management",
                    "Client Relationship Management",
                    "Assessment and Certification",
                    "Ongoing Support and Resources",
                  ]}
                />
                <ServiceCard
                  title="Shared and Global Business - Consultancy Services"
                  description="Expert guidance for shared services and global business operations."
                  icon={<Globe className="h-10 w-10 text-blue-600" />}
                  features={[
                    "Assessment and Strategy Development",
                    "Design and Implementation",
                    "Technology Enablement",
                    "Change Management",
                    "Performance Measurement and Continuous Improvement",
                    "Risk Management and Compliance",
                    "Industry-Specific Solutions",
                  ]}
                />
                <ServiceCard
                  title="Finance Transformation Services"
                  description="Revolutionize your financial processes and strategies."
                  icon={<TrendingUp className="h-10 w-10 text-purple-600" />}
                  features={[
                    "Current State Assessment",
                    "Strategy Development",
                    "Process Optimization",
                    "Technology Enablement",
                    "Talent Management and Organizational Design",
                    "Performance Measurement and Continuous Improvement",
                    "Compliance and Risk Management",
                    "Stakeholder Communication and Reporting",
                  ]}
                />
                <ServiceCard
                  title="Fintech Services"
                  description="Leverage cutting-edge financial technology solutions."
                  icon={<Cpu className="h-10 w-10 text-green-600" />}
                  features={[
                    "Implementation of Accounting Software",
                    "Cloud Based Accounting Solutions",
                    "Payment Processing Solutions",
                    "Financial Literacy and Training Program",
                    "Vendor Management and Payment Solutions",
                  ]}
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
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Our Approach
              </h2>
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
                      <p>
                        We begin by thoroughly understanding your business
                        objectives, challenges, and long-term vision. This forms
                        the foundation for our tailored solutions.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="analyze">
                  <Card>
                    <CardHeader>
                      <CardTitle>Comprehensive Analysis & Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our team conducts a detailed analysis of your
                        operations, identifying areas for improvement and
                        opportunities for growth across all aspects of your
                        business.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="strategize">
                  <Card>
                    <CardHeader>
                      <CardTitle>Strategic Planning & Roadmap</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        We collaborate with you to develop a customized
                        strategic plan, outlining actionable steps and a clear
                        roadmap to achieve your goals.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="implement">
                  <Card>
                    <CardHeader>
                      <CardTitle>Seamless Implementation & Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Our dedicated team provides ongoing support throughout
                        the implementation process, ensuring a smooth transition
                        and maximizing the impact of our solutions.
                      </p>
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Client Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Testimonial
                  quote="Aurelect Advisory's services transformed our financial operations. Their CFO services not only streamlined our accounting processes but also provided us with strategic insights that have been instrumental in our growth. Highly recommend their expertise!"
                  author="John"
                  position="CEO"
                />
                <Testimonial
                  quote="The solutions provided by Aurelect Advisory allowed us to focus on our core business while reducing our operational costs by 30%."
                  author="Michael Chen"
                  position="Founder"
                />
                <Testimonial
                  quote="Their strategic planning services were instrumental in helping us achieve significant growth. Aurelect Advisory's expertise is truly unmatched."
                  author="Emma Rodriguez"
                  position="CFO"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Matching homepage gradient */}
        <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold mb-6">
                Ready to Elevate Your Business Strategy?
              </h2>
              <p className="text-xl mb-10 text-gray-300">
                Let's discuss how our services can benefit your business and
                drive growth.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer remains the same structure but matches homepage colors */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Aurelect Advisory</h3>
              <p className="text-gray-400">
                Empowering businesses through strategic business management and
                innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <p className="text-gray-400 mb-4">
                123 Financial Street
                <br />
                Business City, BZ 12345
              </p>
              <p className="text-gray-400">contact@aurelectadvisory.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2023 Aurelect Advisory. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
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
        <CardDescription className="text-base mb-6">
          {description}
        </CardDescription>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Testimonial({ quote, author, position }: TestimonialProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="mb-4">
          <svg
            className="h-8 w-8 text-blue-600"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-lg mb-4">{quote}</p>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-gray-600">{position}</div>
      </CardContent>
    </Card>
  );
}
