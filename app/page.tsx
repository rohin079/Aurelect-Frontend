"use client";
import React, { useEffect, useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  BarChart,
  DollarSign,
  ShieldCheck,
  BookOpen,
  Calculator,
  Users,
  CheckCircle,
  TrendingUp,
  FileText,
  Server,
  Scale,
  Layers,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Growth chart data
const growthData = [
  { name: "2019", value: 30 },
  { name: "2020", value: 45 },
  { name: "2021", value: 65 },
  { name: "2022", value: 85 },
  { name: "2023", value: 100 },
];

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

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/[^0-9]/g, ""));
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {count}
      {value.toString().includes("+") ? "+" : ""}
    </span>
  );
};

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Elevate Your Financial Future
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-gray-300">
        Strategic CFO expertise and innovative solutions for exponential
        business growth
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
        >
          Schedule Consultation
          <ArrowRight className="ml-2" />
        </Button>
        <Button
          size="lg"
          // variant="outline"
          className="border-white bg-white text-black hover:bg-gray-200 hover:text-gray-900 px-8 py-6"
        >
          Watch Demo
        </Button>
      </div>
    </motion.div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronRight className="w-8 h-8 text-white rotate-90" />
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { value: "500+", label: "Clients Served", icon: Users },
          { value: "$2B+", label: "Revenue Optimized", icon: DollarSign },
          { value: "30%", label: "Cost Reduction", icon: TrendingUp },
          { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
        ].map((stat, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-lg transition-shadow"
          >
            <CardContent className="pt-6">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-4xl font-bold mb-2 text-gray-900">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const GrowthChart = () => (
  <div className="h-[300px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={growthData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />

      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/api/placeholder/40/40"
                alt="Logo"
                className="h-10 w-auto"
              />
              <h1 className="ml-3 text-xl font-semibold text-gray-900">
                Aurelect Advisory
              </h1>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <HeroSection />
        <StatsSection />

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your business
                needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Financial Strategy",
                  description:
                    "Comprehensive financial planning and strategy development",
                  icon: BarChart,
                },
                {
                  title: "Risk Management",
                  description:
                    "Identify and mitigate financial risks effectively",
                  icon: ShieldCheck,
                },
                {
                  title: "Investment Advisory",
                  description: "Expert guidance on investment opportunities",
                  icon: TrendingUp,
                },
                {
                  title: "Tax Planning",
                  description: "Optimize your tax strategy and compliance",
                  icon: Calculator,
                },
                {
                  title: "Business Analytics",
                  description:
                    "Data-driven insights for better decision making",
                  icon: FileText,
                },
                {
                  title: "Digital Transformation",
                  description: "Modernize your financial operations",
                  icon: Server,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <service.icon className="h-6 w-6 text-blue-600 mr-3" />
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Driving Business Growth
                </h2>
                <p className="text-gray-600 mb-8">
                  Track record of helping businesses achieve sustainable growth
                  through strategic financial management.
                </p>
                <GrowthChart />
              </div>
              <div className="space-y-6">
                {[
                  { label: "Revenue Growth", value: 85 },
                  { label: "Cost Reduction", value: 70 },
                  { label: "Operational Efficiency", value: 90 },
                  { label: "Client Satisfaction", value: 95 },
                ].map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{metric.label}</span>
                      <span className="text-blue-600">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  Ready to transform your business? Let's discuss how we can
                  help.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Phone, text: "+1 (555) 123-4567" },
                    { icon: Mail, text: "contact@aurelectadvisory.com" },
                    {
                      icon: MapPin,
                      text: "123 Financial Street, Business City",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center">
                      <contact.icon className="h-5 w-5 text-blue-400 mr-3" />
                      <span className="text-gray-300">{contact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-white/10 backdrop-blur border-0">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                    />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Aurelect Advisory</h3>
              <p className="text-gray-400">
                Empowering businesses through strategic financial management and
                innovative solutions.
              </p>
              <div className="flex space-x-4">
                {["twitter", "facebook", "linkedin", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <img
                          src={`/api/placeholder/20/20`}
                          alt={social}
                          className="w-4 h-4"
                        />
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Contact",
                  "Blog",
                  "Careers",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "Financial Strategy",
                  "Risk Management",
                  "Investment Advisory",
                  "Tax Planning",
                  "Business Analytics",
                  "Digital Transformation",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href={`/services/${service
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  123 Financial Street, Business City, BZ 12345
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@aurelectadvisory.com
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Aurelect Advisory. All rights
                reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// TypeScript interfaces
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
}

interface StatProps {
  value: string;
  label: string;
  icon: React.ElementType;
}

// Export all components
export {
  ScrollProgress,
  AnimatedCounter,
  HeroSection,
  StatsSection,
  GrowthChart,
};
