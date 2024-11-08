"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Calculator,
  CheckCircle,
  ChevronRight,
  DollarSign,
  FileText,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  TrendingUp,
  Users,
  Shield,
  ChartBar,
  MonitorSmartphone,
  Target,
  Award,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import "./style.css";

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
    {/* Background Effects */}
    <div className="absolute inset-0 bg-[url('/images/background.jpg')] opacity-30 bg-cover bg-center" />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent" />

    {/* Main Content Container */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-left text-white lg:max-w-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Elevate Your Financial Future
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300">
          Strategic CFO expertise and innovative solutions for exponential
          business growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 group"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            className="border-white bg-white text-black hover:bg-gray-200 hover:text-gray-900 px-8 py-6"
          >
            Watch Demo
          </Button>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 flex items-center gap-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-300">Trusted by 500+ businesses</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">Enterprise-grade security</span>
          </div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative lg:flex-1 w-full lg:w-auto h-[400px] lg:h-[600px]"
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
          <img
            src="/api/placeholder/800/1000"
            alt="Financial Dashboard"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-white font-semibold">Cost Saving</div>
              <div className="text-green-400">Upto 40%</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute -right-8 bottom-1/4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <BarChart className="w-8 h-8 text-blue-400" />
            <div>
              <div className="text-white font-semibold">Scalability</div>
              <div className="text-blue-400">+30%</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronRight className="w-8 h-8 text-white rotate-90" />
    </div>
  </section>
);

const ValuePropositionSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Aurelect Advisory?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We combine innovative financial strategies with deep industry
          expertise to help your business thrive
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Users,
            title: "Expert Team",
            description:
              "Our team brings decades of combined experience from top financial institutions",
          },
          {
            icon: ShieldCheck,
            title: "Risk-First Approach",
            description:
              "We prioritize protecting your assets while pursuing strategic growth opportunities",
          },
          {
            icon: TrendingUp,
            title: "Innovation Focus",
            description:
              "Leveraging cutting-edge financial technologies and methodologies for optimal results",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <item.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A systematic methodology to transform your financial operations
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            number: "01",
            title: "Discovery",
            description:
              "Comprehensive analysis of your current financial position",
          },
          {
            number: "02",
            title: "Strategy",
            description: "Customized planning aligned with your business goals",
          },
          {
            number: "03",
            title: "Implementation",
            description: "Executing solutions with precision and care",
          },
          {
            number: "04",
            title: "Optimization",
            description: "Continuous monitoring and refinement of strategies",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section className="relative py-24 overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    {/* Background effects */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"
            style={{
              backgroundColor: i % 2 === 0 ? 'hsla(217, 91%, 60%, 0.3)' : 'hsla(250, 91%, 60%, 0.3)',
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Our Expertise
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Bringing innovative solutions to complex financial challenges
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Shield,
            title: "Risk Assessment",
            description: "Advanced risk modeling and mitigation strategies",
            image: "/api/placeholder/600/400"
          },
          {
            icon: ChartBar,
            title: "Market Analysis",
            description: "Deep market insights and trend forecasting",
            image: "/api/placeholder/600/400"
          },
          {
            icon: MonitorSmartphone,
            title: "Digital Integration",
            description: "Seamless technology implementation for financial operations",
            image: "/api/placeholder/600/400"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm group-hover:bg-gray-900/80 transition-colors duration-300" />
            </div>
            <div className="relative p-8 h-full">
              <div className="mb-6 bg-blue-600/10 p-4 rounded-lg inline-block">
                <item.icon className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
            <div className="absolute inset-0 border border-blue-600/0 group-hover:border-blue-600/100 rounded-xl transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const InnovationSection = () => (
  <section className="relative py-24 bg-gray-900 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900" />
      
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'linear-gradient(to right, #60A5FA 1px, transparent 1px), linear-gradient(to bottom, #60A5FA 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'moveGrid 20s linear infinite'
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Innovation Hub
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Leveraging cutting-edge technology to transform financial services
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Target,
            title: "AI-Powered Analytics",
            value: "Real-time insights",
            bgImage: "/api/placeholder/400/300"
          },
          {
            icon: Shield,
            title: "Blockchain Security",
            value: "Enhanced protection",
            bgImage: "/api/placeholder/400/300"
          },
          {
            icon: Target,
            title: "Predictive Modeling",
            value: "Future-ready planning",
            bgImage: "/api/placeholder/400/300"
          },
          {
            icon: MonitorSmartphone,
            title: "Digital Integration",
            value: "Seamless operations",
            bgImage: "/api/placeholder/400/300"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0">
              <img
                src={item.bgImage}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm group-hover:bg-gray-900/80 transition-colors duration-300" />
            </div>
            <div className="relative p-6 text-center">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.value}</p>
            </div>
            <div className="absolute inset-0 border border-blue-600/0 group-hover:border-blue-600/100 rounded-xl transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MetricsSection = () => (
  <section className="relative py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    <div className="absolute inset-0">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
      
      {/* Animated stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: '2px',
            height: '2px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 2}s infinite`
          }}
        />
      ))}

      {/* Gradient rays */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-96 opacity-30"
            style={{
              background: `linear-gradient(${120 * i}deg, transparent, rgba(96, 165, 250, 0.1), transparent)`,
              animation: `rotate ${15 + i * 5}s linear infinite`
            }}
          />
        ))}
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Award,
            metric: "Top 10",
            label: "Emerging FinTech",
            image: "/images/background.jpg"
          },
          {
            icon: Users,
            metric: "24/7",
            label: "Expert Support",
            image: "/api/placeholder/400/300"
          },
          {
            icon: Clock,
            metric: "<48h",
            label: "Response Time",
            image: "/api/placeholder/400/300"
          },
          {
            icon: Shield,
            metric: "100%",
            label: "Secure Platform",
            image: "/api/placeholder/400/300"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
            </div>
            <div className="relative p-6 text-center">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {item.metric}
              </div>
              <div className="text-lg text-gray-300">{item.label}</div>
            </div>
            <div className="absolute inset-0 border border-blue-600/0 group-hover:border-blue-600/100 rounded-xl transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionsSection = () => (
  <section className="relative py-24 bg-gray-100 overflow-hidden">
    <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-repeat" />
    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Featured Solutions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive financial solutions designed for modern businesses
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Strategic Planning",
            description: "Long-term financial roadmapping and goal setting",
            features: ["Market Analysis", "Risk Assessment", "Growth Strategy"],
          },
          {
            title: "Digital Transformation",
            description: "Modernize your financial operations",
            features: [
              "Cloud Integration",
              "Process Automation",
              "Data Analytics",
            ],
          },
          {
            title: "Risk Management",
            description: "Comprehensive risk mitigation solutions",
            features: ["Compliance", "Security", "Disaster Recovery"],
          },
        ].map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
            <p className="text-gray-600 mb-6">{solution.description}</p>
            <ul className="space-y-3">
              {solution.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700">
              Learn More
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
    {/* Background Effects */}
    <div className="absolute inset-0">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
      
      {/* Gradient blobs */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{
              background: i === 0 ? '#60A5FA' : i === 1 ? '#818CF8' : '#A78BFA',
              width: '50%',
              height: '50%',
              left: `${i * 30}%`,
              top: `${Math.random() * 40}%`,
              animation: `float-slow ${10 + i * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-lg bg-blue-100/50"
            style={{
              width: '4px',
              height: '4px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `sparkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>
    </div>

    {/* Content Container */}
    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-xl border border-blue-100">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation with our expert team and discover how we can
            help your business thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity duration-300"
            >
              <span className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              <span className="flex items-center">
                Download Brochure
                <FileText className="ml-2 w-5 h-5" />
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-blue-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, text: "Enterprise Security" },
                { icon: Clock, text: "24/7 Support" },
                { icon: Users, text: "500+ Clients" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-gray-600">
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Accents */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </motion.div>
    </div>
  </section>
);

const IndustrySection = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Specialized expertise across key growth sectors
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Technology",
            description:
              "Supporting fast-growing tech companies with scalable financial solutions",
            icon: Server,
          },
          {
            title: "Healthcare",
            description:
              "Navigate complex regulations while optimizing financial performance",
            icon: ShieldCheck,
          },
          {
            title: "Manufacturing",
            description: "Streamline operations and maximize profit margins",
            icon: TrendingUp,
          },
          {
            title: "E-commerce",
            description:
              "Scale your online business with strategic financial planning",
            icon: DollarSign,
          },
          {
            title: "Professional Services",
            description: "Optimize cash flow and enhance service delivery",
            icon: Users,
          },
          {
            title: "Real Estate",
            description:
              "Maximize returns through strategic investment planning",
            icon: MapPin,
          },
        ].map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <industry.icon className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
            <p className="text-gray-300">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />

      <Navbar />

      <main className="flex-grow pt-16">
        <HeroSection />
        <ValuePropositionSection />
        <IndustrySection />
        <ProcessSection />
        <ExpertiseSection />
        <InnovationSection />
        <SolutionsSection />
        <MetricsSection />
        <CTASection />

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

