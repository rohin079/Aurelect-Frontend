import React from 'react';
import { Shield, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-slate-900">
    <div className="h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600"></div>
    
    <div className="max-w-7xl mx-auto px-4">
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Aurelect Advisory
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering businesses through strategic financial guidance and innovative solutions. Building lasting partnerships for sustainable growth.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center px-3 py-2 bg-slate-800 rounded-lg">
              <Shield className="w-4 h-4 text-sky-400 mr-2" />
              <span className="text-sm text-slate-300">Certified Advisors</span>
            </div>
            <div className="flex items-center px-3 py-2 bg-slate-800 rounded-lg">
              <Globe className="w-4 h-4 text-sky-400 mr-2" />
              <span className="text-sm text-slate-300">Industry Leaders</span>
            </div>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
          <ul className="space-y-3">
            {[
              "CFO Services",
              "Financial Controller",
              "Bookkeeping Services",
              "Accounting",
              "Payroll Processing",
              "Tax Support"
            ].map((service) => (
              <li key={service} className="group">
            <Link
              href="/services"
              className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center"
            >
              <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2" />
              {service}
            </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
          <ul className="space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" }
            ].map((link) => (
              <li key={link.label} className="group">
            <Link
              href={link.href}
              className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center"
            >
              <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2" />
              {link.label}
            </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
          <div className="space-y-4">
            <p className="text-slate-300 text-sm">
              Ready to transform your business? Contact us for a consultation.
            </p>
            <div className="space-y-2">
              <p className="text-slate-300 text-sm">
                Email: Info@aurelect.com
              </p>
              <p className="text-slate-300 text-sm">
                Phone: +1 (925) 913-0865
              </p>
              <p className="text-slate-300 text-sm">
                Hours: Mon-Fri: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Aurelect Advisory. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
              { label: "Accessibility", href: "/accessibility" }
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

export default Footer;