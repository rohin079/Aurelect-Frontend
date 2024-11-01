"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  ArrowRight,
  Users,
  Target,
  Award,
  ChevronRight,
  Globe,
  Briefcase,
  GraduationCap,
  Layers,
} from "lucide-react";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Aurelect Advisory Logo"
              className="h-12 w-auto"
            />
            <h1 className="ml-3 text-2xl font-semibold text-gray-900">
              Aurelect Advisory
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-semibold sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
                About Aurelect Advisory
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
                Empowering businesses through comprehensive financial, business
                advisory, and technology-enabled services.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Layers className="h-8 w-8 text-gray-700 mr-4" />
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      To be the leading outsourcing partner in the finance
                      sector, recognized for empowering businesses and
                      accounting firms through innovative financial solutions
                      and collaborative growth. We envision a future where
                      organizations can focus on their core objectives while we
                      provide the expertise and support needed to enhance
                      operational efficiency and drive financial success.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Target className="h-8 w-8 text-gray-700 mr-4" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Our mission is to deliver exceptional CFO-level
                      outsourcing services that enable our clients and
                      accounting firms to thrive in a competitive landscape. We
                      are committed to:
                      <ul className="mt-4 space-y-2">
                        <li>
                          <strong>Collaboration:</strong> Building strong
                          partnerships with our clients, understanding their
                          unique needs, and providing tailored solutions that
                          foster mutual growth.
                        </li>
                        <li>
                          <strong>Innovation:</strong> Leveraging cutting-edge
                          technology and best practices to streamline financial
                          processes, enhance accuracy, and deliver actionable
                          insights.
                        </li>
                        <li>
                          <strong>Excellence:</strong> Upholding the highest
                          standards of quality and professionalism in all our
                          services, ensuring that our clients receive
                          unparalleled support and value.
                        </li>
                        <li>
                          <strong>Empowerment:</strong> Equipping businesses and
                          accounting firms with the tools and knowledge
                          necessary to navigate the complexities of finance,
                          enabling them to focus on strategic initiatives and
                          long-term success.
                        </li>
                      </ul>
                      Together, we strive to create a shared journey of growth
                      and success, transforming challenges into opportunities
                      for advancement.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Award className="h-8 w-8 text-gray-700 mr-4" />
                      Our Founder
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Our Founder brings over 24 years of unparalleled
                      experience in managing more than 1,000 outsourcing
                      operations across diverse industries. Aurelect Advisory
                      specializes in delivering a comprehensive suite of
                      financial services, including bookkeeping, accounting,
                      taxation, compliance, CFO, and controller-level solutions,
                      all tailored to meet the unique needs of both direct
                      clients and accounting firms. Leveraging cutting-edge
                      technology and best practices in digital transformation,
                      the company ensures efficiency and accuracy in all
                      operations. With a steadfast commitment to excellence and
                      strategic insights, the company empowers organizations to
                      focus on their core competencies, handling complex
                      financial functions on their behalf. Clients who partner
                      with Aurelect Advisory benefit from streamlined processes,
                      cost reduction, and enhanced financial performance, as
                      together they work toward driving business growth.
                    </CardDescription>
                  </CardContent>
                </Card>
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
                Our Founder
              </h2>
              <Tabs defaultValue="holistic" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                  <TabsTrigger value="holistic">
                    Holistic Perspective
                  </TabsTrigger>
                  <TabsTrigger value="tailored">Tailored Solutions</TabsTrigger>
                  <TabsTrigger value="innovative">
                    Innovative Thinking
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="holistic">
                  <Card>
                    <CardHeader>
                      <CardTitle>Holistic Perspective</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        At Aurelect Advisory, we believe in taking a
                        comprehensive view of your business. We consider your
                        financial needs alongside your broader business goals,
                        ensuring our strategies are fully aligned with your
                        overall objectives.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tailored">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tailored Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        We understand that every business is unique. Aurelect
                        Advisory crafts customized solutions addressing your
                        specific challenges and leveraging your unique
                        opportunities. Our approach ensures strategies and
                        advice perfectly aligned with your business goals,
                        whether they are financial, operational, or
                        technological.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="innovative">
                  <Card>
                    <CardHeader>
                      <CardTitle>Innovative Thinking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        In today's dynamic business environment, innovation is
                        paramount. Aurelect Advisory stays ahead of the curve,
                        leveraging the latest financial technologies and
                        methodologies to provide cutting-edge solutions that
                        give you a competitive edge. We integrate technology to
                        streamline processes and enhance decision-making.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
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
                Our Leadership Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TeamMember
                  name="Placeholder 1"
                  position="Placeholder Position"
                  bio="Placeholder Bio"
                  image="/placeholder.svg?height=300&width=300"
                />
                <TeamMember
                  name="Placeholder 2"
                  position="Placeholder Position"
                  bio="Placeholder Bio"
                  image="/placeholder.svg?height=300&width=300"
                />
                <TeamMember
                  name="Placeholder 3"
                  position="Placeholder Position"
                  bio="Placeholder Bio"
                  image="/placeholder.svg?height=300&width=300"
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
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Our Journey
              </h2>
              <div className="space-y-8">
                <Milestone
                  year="2005"
                  title="Foundation"
                  description="Aurelect Advisory was founded with a vision to provide innovative financial solutions to businesses worldwide."
                />
                <Milestone
                  year="2010"
                  title="Expansion"
                  description="We expanded our services to include comprehensive CFO solutions, meeting the growing demand for strategic financial leadership."
                />
                <Milestone
                  year="2015"
                  title="Global Reach"
                  description="Aurelect Advisory established offices in major financial hubs, extending our services to clients across the globe."
                />
                <Milestone
                  year="2020"
                  title="Digital Transformation"
                  description="We embraced cutting-edge financial technologies, enhancing our ability to provide real-time insights and data-driven strategies."
                />
                <Milestone
                  year="Today"
                  title="Industry Leader"
                  description="Aurelect Advisory continues to set the standard for financial consulting, serving a diverse portfolio of clients across various industries."
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold mb-6">
                Ready to Transform Your Financial Strategy?
              </h2>
              <p className="text-xl mb-10 text-gray-300">
                Let's discuss how our expertise can benefit your business and
                drive growth.
              </p>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100"
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

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Aurelect Advisory</h3>
              <p className="text-gray-400">
                Empowering businesses through comprehensive financial, business
                advisory, and technology-enabled services.
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

function TeamMember({ name, position, bio, image }: TeamMemberProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
        <p className="text-gray-600 text-center mb-4">{position}</p>
        <p className="text-gray-700 text-center">{bio}</p>
      </CardContent>
    </Card>
  );
}

function Milestone({ year, title, description }: MilestoneProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-24 text-right">
        <span className="text-lg font-semibold text-gray-900">{year}</span>
      </div>
      <div className="ml-8 border-l-2 border-gray-300 pl-8 pb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
