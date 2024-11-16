import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  ShoppingBag,
  Utensils,
  Users,
  Home,
  Factory,
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Shield,
  BarChart
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const industries = [
  {
    icon: FileText,
    title: "Tax & Accounting Firms",
    description: "Specialized solutions for accounting firms, tax professionals, and financial advisors",
    features: [
      "Practice Management Tools",
      "Client Collaboration Platforms",
      "Tax Compliance Solutions",
      "Workflow Automation"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Retail & Franchises",
    description: "Comprehensive financial management for retail chains and franchise operations",
    features: [
      "Multi-location Accounting",
      "Inventory Management",
      "Franchise Reporting",
      "POS Integration"
    ]
  },
  {
    icon: Utensils,
    title: "Restaurants & Hospitality",
    description: "Tailored solutions for restaurants, hotels, and hospitality businesses",
    features: [
      "Food Cost Management",
      "Labor Cost Optimization",
      "Multi-location Support",
      "POS Integration"
    ]
  },
  {
    icon: Users,
    title: "Non-Profit Organizations",
    description: "Specialized financial solutions for non-profits and charitable organizations",
    features: [
      "Fund Accounting",
      "Grant Management",
      "Donor Tracking",
      "Compliance Reporting"
    ]
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Comprehensive solutions for real estate and property management firms",
    features: [
      "Tenant Management",
      "Property Accounting",
      "Maintenance Tracking",
      "Lease Management"
    ]
  },
  {
    icon: Factory,
    title: "Manufacturing & Automotive",
    description: "Specialized financial management for manufacturing and automotive industries",
    features: [
      "Cost Accounting",
      "Inventory Control",
      "Supply Chain Finance",
      "Production Tracking"
    ]
  }
];

const IndustriesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-sky-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block text-sky-600 font-semibold mb-4">
              Industry Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
              Specialized Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              Tailored financial services and solutions designed to meet the unique challenges and opportunities in your sector
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              {[
                { icon: BarChart, value: "30-50%", label: "Cost Savings" },
                { icon: Globe, value: "24/7", label: "Support Available" },
                { icon: Shield, value: "100%", label: "Data Security" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold mb-2 block">Our Focus</span>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Deep expertise and proven solutions across key sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors duration-300">
                    <industry.icon className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{industry.description}</p>

                  <ul className="space-y-3 mt-6 pt-6 border-t border-slate-100">
                    {industry.features.map((feature, idx) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600"></div>
            <CardContent className="p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                  Ready to Transform Your Industry Operations?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Let's discuss how our industry-specific solutions can address your unique challenges and drive your success.
                </p>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule a Consultation
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                  {[
                    {
                      icon: Shield,
                      title: "Industry Compliance",
                      description: "Sector-specific compliance measures"
                    },
                    {
                      icon: TrendingUp,
                      title: "Proven Success",
                      description: "Track record across industries"
                    },
                    {
                      icon: Globe,
                      title: "Global Support",
                      description: "24/7 expert assistance"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-3">
                        <item.icon className="w-6 h-6 text-sky-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesPage;