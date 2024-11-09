"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  ChevronDown,
  Menu,
  BarChart,
  Calculator,
  FileText,
  PieChart,
  CreditCard,
  ClipboardList,
  Zap,
  Briefcase,
  GraduationCap,
  Globe,
  TrendingUp,
  Cpu
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      category: "Core Financial Services",
      items: [
        { label: "CFO Services", icon: BarChart, description: "Comprehensive financial management" },
        { label: "Financial Controller", icon: Calculator, description: "Expert financial control" },
        { label: "Bookkeeping", icon: FileText, description: "Accurate record keeping" },
        { label: "Accounting", icon: PieChart, description: "Professional accounting services" },
        { label: "Payroll Processing", icon: CreditCard, description: "Efficient payroll management" },
        { label: "Tax Support", icon: ClipboardList, description: "Tax planning & compliance" }
      ]
    },
    {
      category: "Specialized Services",
      items: [
        { label: "Automation", icon: Zap, description: "Financial process automation" },
        { label: "Board Meeting", icon: Briefcase, description: "Strategic meeting support" },
        { label: "Training", icon: GraduationCap, description: "Financial education" },
        { label: "Global Business", icon: Globe, description: "International solutions" },
        { label: "Transformation", icon: TrendingUp, description: "Business modernization" },
        { label: "Fintech", icon: Cpu, description: "Technology integration" }
      ]
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone className="w-4 h-4 text-sky-400 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <span className="text-slate-400">|</span>
            <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/client-portal" className="hover:text-sky-400 transition-colors">
              Client Portal
            </Link>
            <span className="text-slate-400">|</span>
            <Link href="/careers" className="hover:text-sky-400 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                FG
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Financial Group
                </h1>
                <p className="text-xs text-slate-600">Wealth Management</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link href="/" className="flex items-center text-slate-600 hover:text-sky-600 transition-colors py-2 relative group">
                    Home
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full" />
                  </Link>
                </li>
                <li className="relative group">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    className="flex items-center text-slate-600 hover:text-sky-600 transition-colors py-2 relative group"
                  >
                    Services
                    <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" />
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full" />
                  </button>

                  {/* Services Dropdown */}
                  <div
                    className={`absolute top-full -left-4 w-[600px] bg-white rounded-xl shadow-xl border border-slate-200 transition-all duration-300 ${
                      isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                    }`}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="p-6 grid grid-cols-2 gap-6">
                      {services.map((category, index) => (
                        <div key={index}>
                          <h3 className="text-sm font-semibold text-slate-900 mb-4">
                            {category.category}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((service, serviceIndex) => (
                              <li key={serviceIndex}>
                                <Link
                                  href={`/services/${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="flex items-center p-2 rounded-lg hover:bg-slate-50 group/item transition-colors"
                                >
                                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-sky-100 transition-colors">
                                    <service.icon className="w-4 h-4 text-slate-600 group-hover/item:text-sky-600 transition-colors" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-slate-900">
                                      {service.label}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                      {service.description}
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="/about" className="flex items-center text-slate-600 hover:text-sky-600 transition-colors py-2 relative group">
                    About
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center text-slate-600 hover:text-sky-600 transition-colors py-2 relative group">
                    Contact
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden lg:flex border-2 border-sky-200 text-sky-600 hover:bg-sky-50 px-6"
              >
                Client Login
              </Button>
              <Button className="bg-sky-600 hover:bg-sky-700 px-6">
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;