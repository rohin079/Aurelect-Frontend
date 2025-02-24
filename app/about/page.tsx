"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  ShieldCheck,
  User,
  BookOpen,
  Briefcase,
  Award as AwardIcon,
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
            background: `linear-gradient(${
              120 * i
            }deg, transparent, rgba(14, 165, 233, 0.15), transparent)`,
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
            About Our Journey
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Shaping the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              Future of Financial Excellence
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
            A legacy of innovation, expertise, and unwavering commitment to
            transforming financial services through cutting-edge solutions and
            client-centric approaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="px-8 py-4 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule Consultation
            </button>
            <button
              className="px-8 py-4 bg-white text-sky-600 rounded-xl font-semibold border-2 border-sky-100 hover:bg-sky-50 transition-colors"
              onClick={() => (window.location.href = "/industries")}
            >
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 items-center text-center lg:text-left">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "24/7", label: "Support" },
              { value: "99%", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>
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
        <span className="text-sky-600 font-semibold mb-2 block">
          Our Foundation
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Core Values & Vision
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Establishing new standards in financial services through innovation,
          expertise, and an unwavering commitment to client success
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
                To emerge as a transformative force in financial advisory
                services, bringing fresh perspectives and innovative solutions
                to help clients navigate their financial journey.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sky-600 font-medium">Key Focus Areas</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Modern financial solutions</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Client-centric growth</span>
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
                To build lasting partnerships with our clients by providing
                transparent, innovative financial solutions that adapt to their
                evolving needs and aspirations.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sky-600 font-medium">Our Principles</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Transparent approach</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Ethical foundation</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Forward thinking</span>
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
                Bringing together a team of dedicated professionals with diverse
                financial expertise and a passion for delivering innovative
                solutions.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sky-600 font-medium">Core Services</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Strategic Planning</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Financial Analysis</span>
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0" />
                    <span>Growth Advisory</span>
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


const FounderSection = () => (
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
        <span className="text-sky-600 font-semibold mb-2 block">
          Leadership
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Meet Our Founder
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          The visionary mind behind Aurelect Advisors
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Founder Image Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4">
            <div className="w-full h-full rotate-2 bg-gradient-to-r from-sky-400 to-blue-500 opacity-30 blur-lg rounded-2xl"></div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5]">
            <img
              src="/images/rahulmehrotra.jpeg" // Make sure to add this image to your public/images folder
              alt="Rahul Mehrotra - Founder & CEO"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Rahul Mehrotra</h3>
              <p className="text-sky-300 font-medium">Founder & CEO</p>
            </div>
          </div>
        </motion.div>

        {/* Founder Bio Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="bg-white h-full hover:shadow-xl transition-shadow duration-300 relative">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Rahul Mehrotra — Founder & CEO, Aurelect Advisors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600">
                A Fellow Chartered Accountant (FCA) with an M.Com, MBA, and a Fellow in Insurance degree, Rahul Mehrotra brings exceptional credentials to Aurelect Advisors. He is also an IFRS Scholar and holds certifications in Digital Transformation and Lean Six Sigma.
              </p>
              
              <p className="text-slate-600">
                With over 25 years of experience in finance operations & transformation, outsourcing, and shared services, Rahul has built and scaled finance functions from scratch, led regulatory compliance, ERP implementations, process automation, and financial standardization, and optimized operations across multiple industries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Industry Expertise</h4>
                      <p className="text-slate-600">
                        Insurance, automobiles, non-profits, hospitality, property management, solicitors, healthcare, and manufacturing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Qualifications</h4>
                      <p className="text-slate-600">
                        Fellow Chartered Accountant, M.Com, MBA, Fellow in Insurance, IFRS Scholar, Digital Transformation and Lean Six Sigma certified
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Leadership</h4>
                      <p className="text-slate-600">
                        Led large teams managing US-based clients, including CPA firms, SMEs, franchise businesses, and enterprises
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AwardIcon className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Services</h4>
                      <p className="text-slate-600">
                        Virtual CFO, strategic advisory, bookkeeping, tax filing, financial reporting, automation, fintech solutions, ERP rollouts, RPA, and treasury management
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-slate-600">
                  Driven by a passion for helping businesses unlock financial efficiency and long-term growth, Rahul founded Aurelect Advisors with the vision of transforming finance functions into strategic enablers, empowering organizations with expert insights, process optimization, and digital finance solutions.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://www.linkedin.com/in/rahulmehrotra75/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
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
      title: "Forward-Thinking Framework",
      description:
        "Our innovative approach integrates contemporary financial strategies with adaptable planning methods to build a strong foundation for your financial future.",
      features: [
        "Comprehensive Analysis",
        "Future-Ready Strategy",
        "Adaptive Planning",
        "Growth-Focused Approach",
      ],
      icon: <Target className="w-12 h-12 text-sky-600" />,
    },
    tailored: {
      title: "Client-Focused Solutions",
      description:
        "We believe in starting fresh with each client, creating customized strategies that reflect your unique aspirations and comfort level with various financial approaches.",
      features: [
        "Personalized Strategy Design",
        "Future Goal Planning",
        "Flexible Solutions",
        "Collaborative Approach",
      ],
      icon: <Settings className="w-12 h-12 text-sky-600" />,
    },
    innovative: {
      title: "Technology-Driven Insights",
      description:
        "Leveraging the latest financial technology and analytical tools, we're building modern solutions that give you clear visibility and control over your financial journey.",
      features: [
        "Robust Analytics",
        "Dashboard Insights",
        "Comprehensive Reporting",
        "Real-Time Visibility",
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
          <span className="text-sky-600 font-semibold mb-2 block">
            Our Approach
          </span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Building Tomorrow's Financial Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore how our innovative methodology aims to shape the future of
            financial services
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
        <span className="text-sky-600 font-semibold mb-2 block">
          Our Commitment
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Driving Future Success
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Setting new standards in financial services with innovation and
          dedication
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Users,
            value: "100%",
            label: "Client Focus",
            description: "Dedicated support",
          },
          {
            icon: TrendingUp,
            value: "Reach out",
            label: "Anytime",
            description: "  24/7 availability",
          },
          {
            icon: Globe,
            value: "Digital",
            label: "Modern Platform",
            description: "Tech-enabled service",
          },
          {
            icon: Award,
            value: "Expert",
            label: "Advisory Team",
            description: "Professional excellence",
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
        <span className="text-sky-600 font-semibold mb-2 block">
          Our Vision
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Path to Innovation
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Charting a course for revolutionary financial services
        </p>
      </motion.div>

      <div className="relative space-y-12">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-600 to-blue-600 opacity-20"></div>

        {[
          {
            phase: "Phase 1",
            title: "Foundation Building",
            description:
              "Establishing our core services with a focus on innovative financial solutions and personalized client relationships.",
          },
          {
            phase: "Phase 2",
            title: "Service Excellence",
            description:
              "Expanding our service offerings to provide comprehensive financial planning and wealth management solutions.",
          },
          {
            phase: "Phase 3",
            title: "Digital Integration",
            description:
              "Implementing cutting-edge financial technologies to enhance client experience and portfolio management capabilities.",
          },
          {
            phase: "Phase 4",
            title: "Market Evolution",
            description:
              "Developing advanced analytical tools and expanding our reach to serve diverse client needs across different markets.",
          },
          {
            phase: "Vision",
            title: "Future Innovation",
            description:
              "Leading the industry transformation with AI-driven insights and sustainable financial strategies for the next generation.",
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
            <div
              className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"} ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <div className="space-y-3">
                <span className="text-sky-600 font-bold text-xl">
                  {milestone.phase}
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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <CoreValuesSection />
        <FounderSection></FounderSection>
        <ApproachSection />
        <AchievementsSection />
        <JourneySection />
      </main>

      <Footer />
    </div>
  );
}
