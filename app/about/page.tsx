"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
import {
  Settings,
  Lightbulb,
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  Award,
  Layers,
  Target,
  ChartBar,
  ShieldCheck
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
  <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
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

      {/* Animated gradient accents */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-96 opacity-10"
          style={{
            background: `linear-gradient(${120 * i}deg, transparent, rgba(14, 165, 233, 0.15), transparent)`,
            animation: `pulse ${8 + i * 2}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:max-w-2xl"
        >
          <span className="inline-block text-sky-600 font-semibold mb-4">
            Welcome to Financial Group
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Secure Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              Financial Future
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Expert financial guidance and wealth management solutions tailored to help you achieve your financial goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-white text-sky-600 rounded-xl font-semibold border-2 border-sky-100 hover:bg-sky-50 transition-colors">
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 items-center text-center lg:text-left">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '$5B+', label: 'Assets Managed' },
              { value: '10k+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:flex-1 w-full lg:w-auto h-[500px]"
        >
          <div className="absolute -inset-2">
            <div className="w-full h-full rotate-2 bg-gradient-to-r from-sky-400 to-blue-500 opacity-30 blur-lg rounded-2xl"></div>
          </div>
          <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/background.jpg"
              alt="Financial Advisory Team"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
          </div>

          {/* Floating Accent Card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Market Growth</h3>
                <p className="text-sm text-slate-600">Consistent Performance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
// Core Values and Approach Sections

const CoreValuesSection = () => (
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
        <span className="text-sky-600 font-semibold mb-2 block">Our Foundation</span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Core Values & Vision
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Building trust through expertise, innovation, and unwavering commitment to our clients' success
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          <Card className="bg-white h-full hover:shadow-xl transition-shadow duration-300 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <CardHeader className="relative">
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                <ChartBar className="h-7 w-7 text-sky-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                To be the trusted leader in financial advisory services, empowering clients to achieve their financial goals through innovative solutions and personalized expertise.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sky-600 font-medium">Key Focus Areas</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Long-term wealth creation</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Sustainable growth</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-white h-full hover:shadow-xl transition-shadow duration-300 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <CardHeader className="relative">
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-sky-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                To deliver exceptional financial advisory services that empower our clients to make informed decisions and achieve their financial objectives.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sky-600 font-medium">Our Principles</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Client-first approach</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Ethical practices</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Continuous innovation</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Expertise Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-white h-full hover:shadow-xl transition-shadow duration-300 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <CardHeader className="relative">
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="h-7 w-7 text-sky-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Our Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                25+ years of excellence in providing comprehensive financial solutions, serving over 10,000 satisfied clients worldwide.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sky-600 font-medium">Core Services</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Wealth Management</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Investment Strategy</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Financial Planning</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

const ApproachSection = () => {
  const approaches = {
    holistic: {
      title: "Holistic Wealth Management",
      description:
        "We take a comprehensive view of your financial journey, integrating investment strategy with long-term wealth planning.",
      features: [
        "360° Financial Assessment",
        "Risk-Balanced Portfolio Strategy",
        "Tax-Efficient Planning",
        "Estate & Succession Planning",
      ],
      icon: <Target className="w-12 h-12 text-sky-600" />,
    },
    tailored: {
      title: "Personalized Solutions",
      description:
        "Every client's financial goals are unique. We develop customized strategies that align with your specific objectives and risk tolerance.",
      features: [
        "Custom Investment Portfolios",
        "Retirement Planning",
        "Wealth Preservation Strategies",
        "Individual Goal Mapping",
      ],
      icon: <Settings className="w-12 h-12 text-sky-600" />,
    },
    innovative: {
      title: "Modern Investment Approach",
      description:
        "Our advanced investment methodology combines traditional financial wisdom with cutting-edge technology to optimize your portfolio performance and provide real-time insights into your investments.",
      features: [
        "Data-Driven Analytics",
        "Smart Portfolio Rebalancing",
        "Digital Wealth Management",
        "Real-time Performance Tracking",
      ],
      icon: <Lightbulb className="w-12 h-12 text-sky-600" />,
    },
  };

  return (
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
          <span className="text-sky-600 font-semibold mb-2 block">Our Methodology</span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            A Strategic Approach to Financial Success
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how our comprehensive approach helps secure and grow your wealth
          </p>
        </motion.div>

        <Tabs defaultValue="holistic" className="w-full">
          <TabsList className="flex w-full bg-white rounded-lg p-1 shadow-md mb-8 border border-slate-200">
            {Object.keys(approaches).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-1 px-8 py-3 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white text-slate-600 transition-all hover:text-slate-900 data-[state=active]:shadow-md"
              >
                {approaches[tab as keyof typeof approaches].title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(approaches).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center">
                          {data.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            {data.title}
                          </h3>
                          <p className="text-slate-600 mb-8">
                            {data.description}
                          </p>
                          <ul className="space-y-4">
                            {data.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center text-slate-700"
                              >
                                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center mr-3 flex-shrink-0">
                                  <CheckCircle className="w-4 h-4 text-sky-600" />
                                </div>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -inset-2">
                          <div className="w-full h-full rotate-2 bg-gradient-to-r from-sky-400 to-blue-500 opacity-30 blur-lg rounded-2xl"></div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                          <img
                            src="/images/background.jpg"
                            alt={data.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

// New light-themed section
const AchievementsSection = () => (
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
        <span className="text-sky-600 font-semibold mb-2 block">Our Impact</span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Proven Track Record
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Building lasting financial success through expertise and dedication
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Users,
            value: "10,000+",
            label: "Satisfied Clients",
            description: "Trust and reliability",
          },
          {
            icon: TrendingUp,
            value: "$25B+",
            label: "Assets Under Management",
            description: "Growing portfolios",
          },
          {
            icon: Globe,
            value: "15+",
            label: "Global Presence",
            description: "Countries served",
          },
          {
            icon: Award,
            value: "25+",
            label: "Years of Excellence",
            description: "Industry experience",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.value}
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

const JourneySection = () => (
  <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
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
        <span className="text-sky-600 font-semibold mb-2 block">Our History</span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Journey of Excellence
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Building trust and delivering value for over two decades
        </p>
      </motion.div>

      <div className="relative space-y-12">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-600 to-blue-600 opacity-20"></div>

        {[
          {
            year: "1998",
            title: "Foundation",
            description:
              "Established with a vision to provide innovative wealth management solutions and personalized financial guidance.",
          },
          {
            year: "2005",
            title: "Market Leadership",
            description:
              "Expanded our services to include comprehensive wealth management and retirement planning solutions.",
          },
          {
            year: "2012",
            title: "Global Expansion",
            description:
              "Extended our presence to major financial centers, serving clients across multiple continents.",
          },
          {
            year: "2018",
            title: "Digital Innovation",
            description:
              "Integrated advanced financial technologies to provide real-time portfolio management and enhanced client experiences.",
          },
          {
            year: "2024",
            title: "Future Forward",
            description:
              "Leading the industry with AI-powered insights and sustainable investment strategies for the modern investor.",
          },
        ].map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"} ${
              index % 2 === 0 ? "text-right" : "text-left"
            }`}>
              <div className="space-y-3">
                <span className="text-sky-600 font-bold text-xl">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {milestone.title}
                </h3>
                <p className="text-slate-600">{milestone.description}</p>
              </div>
            </div>

            {/* Timeline node */}
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="w-8 h-8 bg-white border-4 border-sky-600 rounded-full z-10"></div>
              <div className="absolute w-16 h-16 bg-sky-100 rounded-full opacity-20"></div>
            </div>

            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


// Main Component Export
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <CoreValuesSection />
        <ApproachSection />
        <AchievementsSection />
        <JourneySection />
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Aurelect Advisory
              </h3>
              <p className="text-gray-400">
                Empowering businesses through comprehensive financial solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <p className="text-gray-400">contact@aurelectadvisory.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Aurelect Advisory. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
