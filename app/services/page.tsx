"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  CheckCircle,
  Shield,
  ChartBar,
  Calculator,
  FileText,
  PieChart,
  CreditCard,
  ClipboardList,
  Zap,
  Search,
  Target,
 Activity,
 MapPin,
 Mail,
 Phone,
 ArrowUp,
 Briefcase,
 Globe,
 GraduationCap,
 TrendingUp,
 Cpu,

} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";

// Types
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

// Service Card Component
const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => (
  <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <CardHeader className="relative">
      <CardTitle className="flex items-center text-xl font-bold text-slate-900">
        <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4">
          {React.cloneElement(icon as React.ReactElement, {
            className: "w-6 h-6 text-sky-600"
          })}
        </div>
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <CardDescription className="text-base text-slate-600 mb-6">
        {description}
      </CardDescription>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-700">
            <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mr-3 flex-shrink-0">
              <CheckCircle className="w-3 h-3 text-sky-600" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

// Hero Section
const ServicesHero = () => (
  <section className="relative pt-32 pb-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
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
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="text-sky-600 font-semibold mb-4 block">Our Services</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
          Financial Solutions for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
            Your Success
          </span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
          Comprehensive financial services tailored to help you achieve your business goals
        </p>
      </motion.div>
    </div>
  </section>
);

// Main Services Section
const MainServicesSection = () => (
  <section className="relative py-24 bg-white">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.15]"
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
        <span className="text-sky-600 font-semibold mb-2 block">Core Services</span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Comprehensive Financial Solutions
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Expert financial services designed to help your business thrive
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main service cards */}
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
        {/* Additional service cards... */}
      </div>
    </div>
  </section>
);


// Specialized Services Section
const SpecializedServicesSection = () => (
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
          <span className="text-sky-600 font-semibold mb-2 block">Specialized Solutions</span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Advanced Financial Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cutting-edge solutions designed for modern financial challenges
          </p>
        </motion.div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Specialized service cards */}
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
          {/* Additional specialized service cards... */}
        </div>
      </div>
    </section>
  );
  
  // Approach Section
  const ApproachSection = () => (
    <section className="relative py-24 bg-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
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
          <span className="text-sky-600 font-semibold mb-2 block">Our Process</span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Strategic Approach
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A methodical process designed to maximize your financial success
          </p>
        </motion.div>
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Process Steps */}
          {[
            {
              step: "1",
              title: "Discovery",
              description: "Understanding your financial goals and current position",
              icon: <Search className="h-6 w-6 text-sky-600" />,
              features: [
                "Initial Consultation",
                "Goals Assessment",
                "Risk Tolerance Analysis",
                "Current Portfolio Review"
              ]
            },
            {
              step: "2",
              title: "Analysis",
              description: "Comprehensive evaluation of opportunities and strategies",
              icon: <BarChart className="h-6 w-6 text-sky-600" />,
              features: [
                "Market Analysis",
                "Investment Opportunities",
                "Risk Assessment",
                "Strategy Development"
              ]
            },
            {
              step: "3",
              title: "Implementation",
              description: "Executing your personalized financial strategy",
              icon: <Target className="h-6 w-6 text-sky-600" />,
              features: [
                "Portfolio Construction",
                "Risk Management",
                "Asset Allocation",
                "Strategy Execution"
              ]
            },
            {
              step: "4",
              title: "Monitoring",
              description: "Continuous oversight and strategy refinement",
              icon: <Activity className="h-6 w-6 text-sky-600" />,
              features: [
                "Performance Tracking",
                "Regular Reviews",
                "Strategy Adjustment",
                "Progress Reports"
              ]
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                      <span className="text-sky-600 font-bold">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {step.title}
                  </CardTitle>
                  <p className="text-slate-600 mt-2">{step.description}</p>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-sky-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

// Types
interface TestimonialProps {
    quote: string;
    author: string;
    position: string;
    company: string;
    image?: string;
  }
  
  // Testimonial Card Component
  const TestimonialCard = ({ quote, author, position, company, image }: TestimonialProps) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="p-8 relative">
          {/* Quote Icon */}
          <div className="mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
              <svg
                className="h-6 w-6 text-sky-600"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
          </div>
  
          {/* Quote Text */}
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            {quote}
          </p>
  
          {/* Author Info */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4">
              {image ? (
                <img
                  src={image}
                  alt={author}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-xl font-bold text-sky-600">
                  {author[0]}
                </span>
              )}
            </div>
            <div>
              <h4 className="font-bold text-slate-900">{author}</h4>
              <p className="text-sm text-slate-600">{position}</p>
              <p className="text-sm text-sky-600">{company}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
  
  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
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
          <span className="text-sky-600 font-semibold mb-2 block">Success Stories</span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from organizations that have transformed their financial future with our expertise
          </p>
        </motion.div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Their strategic financial guidance has been instrumental in our growth. The team's expertise in wealth management and investment strategy has helped us achieve exceptional returns."
            author="Robert Chen"
            position="Chief Executive Officer"
            company=""
          />
          <TestimonialCard
            quote="The personalized approach to financial planning and wealth management has made a significant difference. Our portfolio performance has exceeded expectations."
            author="Sarah Williams"
            position="Chief Financial Officer"
            company=""
          />
          <TestimonialCard
            quote="Outstanding service and expertise in investment management. Their team's dedication to our financial success has been evident in every interaction."
            author="Michael Thompson"
            position="Managing Director"
            company=""
          />
        </div>
      </div>
    </section>
  );
  
  // CTA Section
  const CTASection = () => (
    <section className="relative py-24 bg-white">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-slate-900/10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl transform rotate-12" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
  
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Schedule a consultation with our financial experts and discover how we can help you achieve your financial goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white text-sky-600 hover:bg-sky-50 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl transition-all duration-300"
                >
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
  
              {/* Trust Indicators */}
              <div className="mt-12 pt-12 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                   { value: '25+', label: 'Years of Expertise' },
                   { value: '1st', label: 'Client Focus' },
                   { value: '100%', label: 'Tailored Solutions' },
                   { value: '98%', label: 'User Satisfaction' }
                   
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
  

  const Footer = () => (
    <footer className="relative bg-slate-900">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600"></div>
  
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
                { icon: "twitter", href: "https://twitter.com" },
                { icon: "linkedin", href: "https://linkedin.com" },
                { icon: "facebook", href: "https://facebook.com" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors duration-300"
                >
                  <span className="text-white capitalize">{social.icon[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
  
          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "Wealth Management",
                "Investment Strategy",
                "Financial Planning",
                "Retirement Planning",
                "Tax Advisory",
                "Estate Planning"
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300"
                  >
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
                "About Us",
                "Our Team",
                "Careers",
                "Contact",
                "Blog",
                "Resources"
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-300">
                <MapPin className="w-5 h-5 text-sky-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  123 Financial District
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
  
        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800">
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
  
  // Main Services Page Component
  export default function ServicesPage() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    return (
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />
  
        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <ServicesHero />
  
          {/* Main Services Grid */}
          <MainServicesSection />
  
          {/* Specialized Services */}
          <SpecializedServicesSection />
  
          {/* Our Approach */}
          <ApproachSection />
  
          {/* Testimonials */}
          <TestimonialsSection />
  
          {/* CTA Section */}
          <CTASection />
        </main>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  }
  
  // Animations for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Scroll to top utility
  const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 transition-all duration-300 ${
          isVisible ? "visible" : "invisible"
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    );
  };
  
  // Add ScrollToTop to the main page component
  ServicesPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <>
        {page}
        <ScrollToTop />
      </>
    );
  };