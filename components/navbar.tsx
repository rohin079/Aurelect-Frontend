"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
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
  Cpu,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

interface ServiceItem {
  label: string;
  icon: LucideIcon;
  description: string;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    category: "Core Financial Services",
    items: [
      {
        label: "CFO Services",
        icon: BarChart,
        description: "Comprehensive financial management",
      },
      {
        label: "Financial Controller",
        icon: Calculator,
        description: "Expert financial control",
      },
      {
        label: "Bookkeeping",
        icon: FileText,
        description: "Accurate record keeping",
      },
      {
        label: "Accounting",
        icon: PieChart,
        description: "Professional accounting services",
      },
      {
        label: "Payroll Processing",
        icon: CreditCard,
        description: "Efficient payroll management",
      },
      {
        label: "Tax Support",
        icon: ClipboardList,
        description: "Tax planning & compliance",
      },
    ],
  },
  {
    category: "Specialized Services",
    items: [
      {
        label: "Automation",
        icon: Zap,
        description: "Financial process automation",
      },
      {
        label: "Board Meeting",
        icon: Briefcase,
        description: "Strategic meeting support",
      },
      {
        label: "Training",
        icon: GraduationCap,
        description: "Financial education",
      },
      {
        label: "Global Business",
        icon: Globe,
        description: "International solutions",
      },
      {
        label: "Transformation",
        icon: TrendingUp,
        description: "Business modernization",
      },
      { 
        label: "Fintech", 
        icon: Cpu, 
        description: "Technology integration" 
      },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path) || false;
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`flex items-center transition-colors py-2 relative group ${
        isActive(href) ? "text-sky-600" : "text-slate-600 hover:text-sky-600"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-0.5 left-0 h-0.5 bg-sky-600 transition-all ${
          isActive(href) ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );

  return (
    <>
      <div className="hidden lg:block bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone className="w-4 h-4 text-sky-400 mr-2" />
              <span>+91 6357171102</span>
              <span className="mx-2">|</span>
              <span>+1 (925) 913-0865</span>
            </div>
            <span className="text-slate-400">|</span>
            <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                <img
                  src="/logos/file.png"
                  alt="Aurelect Advisors Logo"
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Aurelect Advisors
                </h1>
                <p className="text-xs text-slate-600">Financial Outsourcing</p>
              </div>
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li className="relative group">
                  <button
                    onMouseEnter={() => setIsServicesOpen(true)}
                    className={`flex items-center transition-colors py-2 relative group ${
                      isActive("/services") ? "text-sky-600" : "text-slate-600 hover:text-sky-600"
                    }`}
                  >
                    Services
                    <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" />
                  </button>

                  <div
                    className={`absolute top-full -left-4 w-[600px] bg-white rounded-xl shadow-xl border border-slate-200 transition-all duration-300 ${
                      isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
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
                                  href="/services"
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
                <li><NavLink href="/industries">Industries</NavLink></li>
                <li><NavLink href="/contact">Contact</NavLink></li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/contact" className="hidden sm:block">
                <Button className="bg-sky-600 hover:bg-sky-700 px-6">
                  Get Started
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white z-50 transform transition-all duration-300 ease-in-out lg:hidden shadow-xl flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-sky-600 to-blue-600">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <img
                src="/logos/file.png"
                alt="Aurelect Advisors Logo"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Menu</h2>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <div className="flex items-center text-sm text-slate-600">
            <Phone className="w-4 h-4 text-sky-600 mr-2" />
            <span>+91 6357171102</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <div className="px-4 py-6">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive("/")
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive("/about")
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors ${
                    mobileServicesOpen
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>Services</span>
                  <ChevronRight
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileServicesOpen ? "max-h-[2000px]" : "max-h-0"
                  }`}
                >
                  <div className="px-4 py-3 space-y-6">
                    {services.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate-900 px-2">
                          {category.category}
                        </h3>
                        <ul className="space-y-1">
                          {category.items.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                href="/services"
                                className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors"
                              >
                                <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center mr-3 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
                                  <service.icon className="w-4 h-4 text-sky-600" />
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
                <Link
                  href="/industries"
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive("/industries")
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive("/contact")
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Bottom CTA */}
        <div className="p-4 border-t border-slate-200 bg-slate-50">
          <Link href="/contact">
            <Button className="w-full bg-sky-600 hover:bg-sky-700">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}