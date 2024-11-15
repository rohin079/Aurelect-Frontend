"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "../actions/sendEmail";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Users,
  Building,
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Award,
  ChartBar,
  XCircle,
  X,
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
  <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
    {/* Subtle geometric patterns */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />

      {/* Professional accent elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 transform skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-indigo-50/30 transform -skew-x-12" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start a<span className="text-blue-600"> Conversation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Have questions or need assistance? Our team of financial experts is
            here to help. Reach out to us through any of our contact channels.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+1 (925) 913-0865</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">Info@aurelect.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">Quick Response</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">Expert Team</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-sky-500 opacity-20 blur-2xl rounded-3xl" />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-2xl" />

            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/background.jpg"
                alt="Customer Support Team"
                className="w-full h-full object-cover"
              />

              {/* Floating accent cards */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Global Offices
                    </p>
                    <p className="text-sm text-gray-600">24/7 Available</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Expert Team</p>
                    <p className="text-sm text-gray-600">Ready to Help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

interface ServiceOption {
  value: string;
  label: string;
  description: string;
}

const serviceOptions: ServiceOption[] = [
  {
    value: "finance-outsourcing",
    label: "Finance Outsourcing",
    description:
      "Outsourced finance services including management of financial records, financial reporting, and related advisory services.",
  },
  {
    value: "bookkeeping-accounting",
    label: "Bookkeeping and Accounting",
    description:
      "Full-spectrum accounting services for businesses, individuals, and organizations globally.",
  },
  {
    value: "taxation",
    label: "Taxation (Direct and Indirect)",
    description:
      "Tax advisory and compliance services, including preparation, filing, and representation related to direct and indirect taxes.",
  },
  {
    value: "cfo-services",
    label: "CFO Services",
    description:
      "Chief Financial Officer (CFO) and other senior financial management services on a consultancy or outsourced basis.",
  },
  {
    value: "company-creation",
    label: "Company Creation and Corporate Services",
    description:
      "Assistance in formation, registration, and incorporation of companies, including secretarial and legal compliance services.",
  },
  {
    value: "kpo-bpo",
    label: "KPO and BPO Services",
    description:
      "Specialized knowledge services and process outsourcing services across finance, accounting, HR, and marketing.",
  },
  {
    value: "back-office",
    label: "Back-Office Operations",
    description:
      "Back-office support services such as data entry, transaction processing, and administrative services.",
  },
  {
    value: "hr-solutions",
    label: "HR Solutions",
    description:
      "HR advisory and outsourcing services, including recruitment, payroll management, and employee benefits administration.",
  },
  {
    value: "it-networking",
    label: "IT and Networking Services",
    description:
      "IT consulting, networking solutions, and system integration services, including maintenance of hardware and software infrastructure.",
  },
  {
    value: "software-development",
    label: "Software Development",
    description:
      "Development, design, and maintenance of software applications, solutions, and platforms for various business needs.",
  },
  {
    value: "ecommerce",
    label: "E-commerce and Web-Enabled Business",
    description:
      "E-commerce solutions, online marketplaces, and web-enabled business models.",
  },
  {
    value: "server-maintenance",
    label: "Server Maintenance and Support",
    description:
      "Server hosting, maintenance, and support services, ensuring robust IT infrastructure for businesses.",
  },
  {
    value: "legal-services",
    label: "Legal Services",
    description:
      "Legal advisory and compliance services related to business operations, company law, contract law, intellectual property, and other corporate matters.",
  },
  {
    value: "financial-consulting",
    label: "Financial Consulting and Advisory",
    description:
      "Management consulting, business transformation, strategic financial advisory, and risk management services.",
  },
];

const ContactFormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const form = e.currentTarget;
    const checkboxes = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[name="services"]:checked')
    );

    const formData = {
      from_name: (form.elements.namedItem("name") as HTMLInputElement).value,
      from_email: (form.elements.namedItem("email") as HTMLInputElement).value,
      from_phone: (form.elements.namedItem("phone") as HTMLInputElement).value, // Added phone
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      selected_services: checkboxes.map((input) => input.value).join(", "),
    };
    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setShowSuccess(true);
        form.reset();

        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        setErrorMessage("Failed to send email. Please try again later.");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 5000);
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form-section"
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 transform skew-x-12" />
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-indigo-50/30 transform -skew-x-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Get Started Today
              </CardTitle>
              <CardDescription className="text-gray-600">
                Tell us about your project and we'll get back to you promptly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50"
                    >
                      <div className="text-center p-8 rounded-lg">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Thank You!
                        </h3>
                        <p className="text-gray-600">
                          We'll get back to you soon.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {showError && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute top-0 left-0 right-0 flex items-center justify-center z-50"
                    >
                      <div className="bg-red-50 border border-red-200 rounded-lg shadow-lg p-4 w-full">
                        <div className="flex items-center gap-3">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex-shrink-0"
                          >
                            <XCircle className="h-6 w-6 text-red-500" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-red-800">
                              Submission Failed
                            </h3>
                            <p className="text-sm text-red-700">
                              {errorMessage}
                            </p>
                          </div>
                          <button
                            onClick={() => setShowError(false)}
                            className="flex-shrink-0 p-1.5 rounded-lg hover:bg-red-100 transition-colors"
                          >
                            <X className="h-4 w-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (123) 456-7890"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        pattern="[0-9+\s()-]*"
                        title="Please enter a valid phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services">Services Required</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {serviceOptions.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-pointer"
                        >
                          <Checkbox
                            id={option.value}
                            name="services"
                            value={option.value}
                            className="mt-1 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <div>
                            <label
                              htmlFor={option.value}
                              className="block text-md font-semibold text-gray-900 mb-1"
                            >
                              {option.label}
                            </label>
                            <p className="text-sm text-gray-600">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirement..."
                      className="min-h-32 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center h-12 bg-blue-600 hover:bg-blue-700 text-white transition-colors group rounded-md disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  {/* Trust Indicators */}
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className="flex items-center text-gray-600">
                        <Shield className="w-5 h-5 text-blue-600 mr-2" />
                        <span>Secure Form</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                        <span>24h Response Time</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        <span>Certified Advisors</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {children}
    </label>
  );
}

const FAQSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
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
        <span className="text-sky-600 font-semibold mb-2 block">FAQ</span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our financial services and how
          we can help you achieve your financial goals
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-8"
        >
          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-2 bg-gradient-to-r from-sky-400 to-blue-500 opacity-30 blur-lg"></div>
            </div>
            <img
              src="/images/background.jpg"
              alt="Financial Advisory Team"
              className="relative rounded-2xl shadow-xl w-full h-40 object-cover"
            />
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Need More Information?
            </h3>
            <p className="text-slate-600 mb-4">
              Our financial experts are here to help you make informed decisions
              about your financial future.
            </p>
            <button
              onClick={() => {
                const contactFormSection = document.getElementById(
                  "contact-form-section"
                );
                if (contactFormSection) {
                  contactFormSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full py-3 px-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium"
            >
              Schedule a Consultation
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                question: "What financial services do you provide?",
                answer:
                  "We offer a comprehensive suite of financial services including investment management, retirement planning, tax optimization strategies, estate planning, and personalized wealth management solutions. Our team works closely with you to develop strategies aligned with your financial goals and risk tolerance.",
              },
              {
                question: "How do your fees work?",
                answer:
                  "Our fee structure is transparent and based on the services you choose. We typically charge a percentage of assets under management for investment services, while financial planning services may be offered on a flat-fee or retainer basis. We'll provide a detailed fee schedule during your initial consultation.",
              },
              {
                question: "What's your investment philosophy?",
                answer:
                  "Our investment philosophy centers on long-term wealth creation through diversified, risk-managed portfolios. We emphasize transparent, evidence-based investing strategies tailored to your specific goals, time horizon, and risk tolerance. Regular portfolio rebalancing and tax-efficient management are key components of our approach.",
              },
              {
                question: "How do you ensure my financial security?",
                answer:
                  "We maintain the highest standards of security and compliance. Your assets are held with reputable custodians, protected by advanced encryption, and backed by comprehensive insurance. We're regulated by relevant financial authorities and undergo regular audits to ensure compliance with industry standards.",
              },
              {
                question: "What makes your firm different?",
                answer:
                  "Our combination of personalized service, innovative technology, and deep expertise sets us apart. We maintain a low client-to-advisor ratio to ensure personalized attention, use advanced financial planning tools, and provide ongoing education and support to help you make informed financial decisions.",
              },
              {
                question: "How do I get started?",
                answer:
                  "Getting started is simple. Schedule a complimentary consultation through our website or call us directly. During this initial meeting, we'll discuss your financial goals, assess your current situation, and explain how our services can help you achieve your objectives. We'll then develop a customized plan tailored to your needs.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-slate-900 hover:text-sky-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  </section>
);

const LocationSection = () => (
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
          Our Location
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Visit Our Financial Center
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Schedule a meeting with our financial advisors to discuss your
          investment goals and strategies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-sky-50">
                  <MapPin className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Office Address
                  </h3>
                  <p className="text-slate-600">35 Harte Place, Piscataway</p>
                  <p className="text-slate-600">New Jersey 08854</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-sky-50">
                    <Phone className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">
                      Phone
                    </h4>
                    <p className="text-slate-600">+1 (925) 913-0865</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-sky-50">
                    <Mail className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">
                      Email
                    </h4>
                    <p className="text-slate-600">Info@aurelect.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-sky-50">
                  <Clock className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Business Hours
                  </h3>
                  <div className="space-y-2 mt-2">
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM IST
                    </p>
                    {/* <p className="text-slate-600">
                      Saturday: By Appointment Only
                    </p>
                    <p className="text-slate-600">Sunday: Closed</p> */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule Meeting Card */}
          <Card className="bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Schedule a Consultation
              </h3>
              <p className="mb-4 text-sky-100">
                Meet with our financial experts to discuss your investment
                strategy
              </p>
              <button
                onClick={() => {
                  const contactFormSection = document.getElementById(
                    "contact-form-section"
                  );
                  if (contactFormSection) {
                    contactFormSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-3 px-4 bg-white text-sky-600 rounded-lg hover:bg-sky-50 transition-colors font-medium"
              >
                Book an Appointment
              </button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-8"
        >
          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-1 bg-gradient-to-r from-sky-400 to-blue-500 opacity-30 blur-lg"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.045812224508!2d-74.4606216845947!3d40.55104497934907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c6d2b4b4b4b3%3A0x4b4b4b4b4b4b4b4b!2s35%20Harte%20Pl%2C%20Piscataway%2C%20NJ%2008854%2C%20USA!5e0!3m2!1sen!2sus!4v1630412335495!5m2!1sen!2sus"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="relative py-24 bg-white overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-slate-100 to-slate-200" />
      <div
        className="absolute inset-0"
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
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Our Financial Impact
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Trusted by individuals and businesses worldwide for financial
          excellence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: ChartBar,
            metric: "$5B+",
            label: "Assets Managed",
            description: "Growing portfolios globally",
            color: "sky",
          },
          {
            icon: Shield,
            metric: "10,000+",
            label: "Secure Transactions",
            description: "Safe and reliable service",
            color: "sky",
          },
          {
            icon: Award,
            metric: "25+",
            label: "Years Experience",
            description: "Industry expertise",
            color: "sky",
          },
          {
            icon: Clock,
            metric: "24/7",
            label: "Client Support",
            description: "Always available",
            color: "sky",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.metric}
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

// Main component export with updated structure and styling
export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <ContactFormSection />
        <StatsSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

const scrollToContactForm = () => {
  const contactFormSection = document.getElementById("contact-form-section");
  if (contactFormSection) {
    contactFormSection.scrollIntoView({ behavior: "smooth" });
  }
};
