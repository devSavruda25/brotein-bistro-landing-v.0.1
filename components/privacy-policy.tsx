"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin, Calendar, Users, FileText, AlertTriangle, CheckCircle, Cookie, CreditCard, UserCheck, Settings, Download, Trash2, RefreshCw, TrendingUp, Instagram } from 'lucide-react'
import { FranchiseModal } from "@/components/franchise-modal"
import { GymPartnershipModal } from "@/components/gym-modal"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import footerlogo from "@/public/logo.png"
export function PrivacyPolicy() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const lastUpdated = "January 2025"
  const effectiveDate = "January 2025"
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false)
  const [isGymModalOpen, setIsGymModalOpen] = useState(false)

  const dataTypes = [
    {
      icon: UserCheck,
      title: "Personal Information",
      description: "Name, contact number, email, and address for order processing and customer support",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Delivery Information",
      description: "Address details for order delivery and loyalty program benefits",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CreditCard,
      title: "Payment Data",
      description: "Processed through encrypted and PCI-compliant platforms (not stored by us)",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Users,
      title: "Franchise Applications",
      description: "Business details from franchise inquiry forms stored in secure CRM systems",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Mail,
      title: "Communication Preferences",
      description: "Contact preferences for promotional offers via WhatsApp, SMS, or email",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "Consent Records",
      description: "Records of your consent for data processing and marketing communications",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const userRights = [
    {
      icon: Eye,
      title: "Right to Access",
      description: "Request a copy of all personal data we hold about you",
    },
    {
      icon: Settings,
      title: "Right to Rectification",
      description: "Correct any inaccurate or incomplete personal information",
    },
    {
      icon: Trash2,
      title: "Right to Erasure",
      description: "Request deletion of your personal data under certain conditions",
    },
    {
      icon: Download,
      title: "Right to Portability",
      description: "Receive your data in a structured, machine-readable format",
    },
    {
      icon: RefreshCw,
      title: "Right to Object",
      description: "Object to processing of your data for marketing purposes",
    },
    {
      icon: Lock,
      title: "Right to Restrict",
      description: "Limit how we process your personal information",
    },
  ]

  const securityMeasures = [
    "SSL/TLS encryption for all data transmission",
    "Regular security audits and vulnerability assessments",
    "Access controls and employee training programs",
    "Secure data storage with backup and recovery systems",
    "PCI DSS compliance for payment processing",
    "Regular software updates and security patches",
  ]

  const tableOfContents = [
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use-information", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "marketing-communication", title: "Marketing & Communication" },
    { id: "franchise-data", title: "Franchise Data Handling" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "consent-updates", title: "Consent & Updates" },
    { id: "contact-us", title: "Contact Us" },
  ]

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Elements - Responsive positioning */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-blue-300 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-green-300 rounded-full opacity-20 animate-pulse" />
          <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-purple-300 rounded-full opacity-20 animate-pulse" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-blue-50 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2" />
              <span className="text-blue-700 font-medium text-xs sm:text-sm">Privacy & Data Protection</span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Privacy <span className="text-green-500">Policy</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Your privacy is important to us. This policy explains how Brotein Bistro collects, uses, and protects your
              personal information when you use our services.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Badge className="bg-green-100 text-green-800 px-3 sm:px-4 py-2 text-xs sm:text-sm">
                <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Last Updated: {lastUpdated}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 text-xs sm:text-sm">
                <CheckCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Effective: {effectiveDate}
              </Badge>
            </motion.div>

            {/* Quick Stats - Responsive grid */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { icon: Shield, label: "GDPR Compliant", color: "text-blue-500" },
                { icon: Lock, label: "SSL Encrypted", color: "text-green-500" },
                { icon: Database, label: "Secure Storage", color: "text-purple-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={heroInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${stat.color} mx-auto mb-2`}>
                    <stat.icon className="w-full h-full" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="shadow-lg border-0">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                  <FileText className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                  Table of Contents
                </h2>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
                  {tableOfContents.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium mr-2 sm:mr-3 group-hover:bg-green-500 group-hover:text-white transition-colors duration-200 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover:text-green-600 transition-colors duration-200">
                        {item.title}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            {/* Information We Collect */}
            <motion.div
              id="information-we-collect"
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Database className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                Information We Collect
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {dataTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4 sm:p-6">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <type.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                          {type.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">{type.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2 text-sm sm:text-base">Important Note</h4>
                      <p className="text-blue-700 text-xs sm:text-sm">
                        We only collect information that is necessary to provide our services and improve your
                        experience. You can choose not to provide certain information, but this may limit your ability
                        to use some features of our service.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Separator />

            {/* How We Use Your Information */}
            <motion.div
              id="how-we-use-information"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Settings className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                How We Use Your Information
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Order Processing & Support",
                    description:
                      "Process food orders, manage deliveries, provide customer support, and maintain loyalty program benefits.",
                    icon: CheckCircle,
                  },
                  {
                    title: "Marketing Communications",
                    description:
                      "Send promotional offers and updates through WhatsApp, SMS, or email (with opt-out options available).",
                    icon: Mail,
                  },
                  {
                    title: "Franchise Development",
                    description:
                      "Evaluate franchise applications and contact potential franchisees (data accessed only by franchise team).",
                    icon: Users,
                  },
                  {
                    title: "Service Improvement",
                    description: "Analyze customer preferences to improve our menu offerings and service quality.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Legal Compliance",
                    description: "Comply with food safety regulations, tax requirements, and other applicable laws.",
                    icon: Shield,
                  },
                ].map((use, index) => (
                  <motion.div
                    key={use.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                            <use.icon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold mb-2">{use.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base">{use.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <Separator />

            {/* Information Sharing */}
            <motion.div
              id="information-sharing"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Users className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                Information Sharing
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">We Never Share Your Data</h3>
                <Card className="bg-green-50 border-green-200 mb-4 sm:mb-6">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800 mb-2 text-sm sm:text-base">Strict No-Sharing Policy</h4>
                        <p className="text-green-700 text-xs sm:text-sm">
                          Your data is securely stored and is never sold or shared with third parties without your
                          explicit consent. Franchise applicant details are not disclosed to any third party without
                          consent.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h4 className="text-base sm:text-lg font-semibold mb-4">Limited Sharing Only For:</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Encrypted payment processing (PCI-compliant platforms only)",
                    "Legal compliance when required by law",
                    "Internal franchise development team (for franchise applications only)",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <Separator />

            {/* Marketing & Communication */}
            <motion.div
              id="marketing-communication"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Mail className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                Marketing & Communication
              </h2>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Communication Channels</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {[
                        "WhatsApp messages for order updates and offers",
                        "SMS notifications for delivery status",
                        "Email newsletters with promotional content",
                        "Push notifications through our app",
                      ].map((channel, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-xs sm:text-sm">{channel}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-800">Easy Opt-Out Options</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {[
                        "Click unsubscribe links in emails",
                        "Reply 'STOP' to SMS messages",
                        "Contact customer support",
                        "Update preferences in your account",
                      ].map((option, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                          <span className="text-blue-700 text-xs sm:text-sm">{option}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <Separator />

            {/* Franchise Data Handling */}
            <motion.div
              id="franchise-data"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Users className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                Franchise Data Handling
              </h2>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Get Franchise Form Data</h3>
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-bold mb-3 sm:mb-4 text-orange-800 text-sm sm:text-base">Secure Storage</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {[
                          "All franchise leads stored in secure internal CRM systems",
                          "Access limited to franchise development team only",
                          "Data used solely for evaluation and contact purposes",
                          "No sharing with third parties without explicit consent",
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                            <span className="text-orange-700 text-xs sm:text-sm">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 sm:mb-4 text-red-800 text-sm sm:text-base">Confidentiality Promise</h4>
                      <p className="text-red-700 mb-3 sm:mb-4 text-xs sm:text-sm">
                        We understand that franchise applications contain sensitive business information. Your
                        application details remain strictly confidential and are never disclosed without your explicit
                        consent.
                      </p>
                      <Badge className="bg-red-100 text-red-800 text-xs sm:text-sm">
                        <Lock className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        100% Confidential
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Separator />

            {/* Data Security */}
            <motion.div
              id="data-security"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Lock className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                Data Security
              </h2>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Security Measures</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {securityMeasures.map((measure, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-xs sm:text-sm">{measure}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-green-800">Your Role in Security</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {[
                        "Use strong, unique passwords",
                        "Keep your login credentials confidential",
                        "Log out from shared devices",
                        "Report suspicious activity immediately",
                        "Keep your contact information updated",
                      ].map((tip, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                          <span className="text-green-700 text-xs sm:text-sm">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <Separator />

            {/* Your Rights */}
            <motion.div
              id="your-rights"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <UserCheck className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                Your Rights
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {userRights.map((right, index) => (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4 sm:p-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                          <right.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 group-hover:text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {right.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">{right.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-800">How to Exercise Your Rights</h3>
                  <p className="text-blue-700 mb-4 text-sm sm:text-base">
                    To exercise any of these rights, please contact us using the information provided in the "Contact
                    Us" section. We will respond to your request within 30 days.
                  </p>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base">
                    <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Contact Privacy Team
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <Separator />

            {/* Consent & Updates */}
            <motion.div
              id="consent-updates"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center">
                <Cookie className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                Consent & Updates
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    We use cookies and similar technologies to enhance your browsing experience, analyze site traffic,
                    and personalize content. Cookies are small text files stored on your device.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { type: "Essential", description: "Required for basic site functionality" },
                      { type: "Analytics", description: "Help us understand how you use our site" },
                      { type: "Marketing", description: "Used to deliver relevant advertisements" },
                    ].map((cookie, index) => (
                      <div key={cookie.type} className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold mb-2 text-sm sm:text-base">{cookie.type}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{cookie.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Separator />

            {/* Contact Section */}
            <motion.div
              id="contact-us"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
                <Mail className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                Contact Us
              </h2>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Privacy Questions?</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-sm sm:text-base">privacy@broteinbistro.com</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-sm sm:text-base">+91 99229 69673</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-sm sm:text-base">Nashik, Maharashtra, India</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Data Protection Officer</h3>
                      <p className="text-gray-700 mb-4 text-sm sm:text-base">
                        For specific privacy concerns or to exercise your rights under data protection laws, you can
                        contact our Data Protection Officer directly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-green-900/20 rounded-full -translate-y-24 sm:-translate-y-48 translate-x-24 sm:translate-x-48" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-0"
            >
              <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                <Image 
                  src={footerlogo} 
                  alt="Brotein Bistro Logo" 
                  width={80} 
                  height={80} 
                  loading="lazy" 
                />
              </motion.div>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Fuel your fitness journey with delicious, protein-rich meals crafted for health-conscious food lovers in
                Nashik.
              </p>

              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.instagram.com/broteinbistro_nashik?igsh=bjV0Nnp3cjJzMTFx"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button
                    onClick={() => setIsFranchiseOpen(true)}
                    className="text-left text-gray-400 hover:text-white transition-colors duration-200 w-full text-sm sm:text-base"
                  >
                    Get Franchise
                  </button>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/privacy-policy">
                    <button className="text-left text-gray-400 hover:text-white transition-colors duration-200 w-full text-sm sm:text-base">
                      Privacy Policy
                    </button>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Contact Info</h4>
              <ul className="space-y-2 sm:space-y-3">
                <motion.li className="flex items-center text-gray-400 text-sm sm:text-base" whileHover={{ x: 5 }}>
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-red-400 flex-shrink-0" />
                  Nashik, Maharashtra
                </motion.li>
                <motion.li className="flex items-center text-gray-400 text-sm sm:text-base" whileHover={{ x: 5 }}>
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-red-400 flex-shrink-0" />
                  +91 99229 69673
                </motion.li>
                <motion.li className="flex items-center text-gray-400 text-sm sm:text-base" whileHover={{ x: 5 }}>
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-red-400 flex-shrink-0" />
                  hq.brotein@gmail.com
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold mb-4 sm:mb-6 text-sm sm:text-base">Order Online</h4>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    name: "Brotein Bistro",
                    logo: "https://www.uengage.in/images/addo/logos/logo-58949-1749106970.jpeg",
                    link: "http://order.broteinbistro.com/"
                  },
                  {
                    name: "Swiggy",
                    logo: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-768x432.png",
                    link: "https://www.swiggy.com/city/nashik/brotein-bistro-guilt-free-goodness-college-road-gangapur-road-rest831016"
                  },
                  {
                    name: "Zomato",
                    logo: "https://img.icons8.com/?size=100&id=Sy4ktCHZULQ7&format=png&color=FF0808",
                    link: "https://www.zomato.com/nashik/brotein-bistro-guilt-free-goodness-college-road?amp=1"
                  },
                ].map((platform) => (
                  <motion.div key={platform.name} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={platform.link}
                      className="block bg-gray-800 hover:bg-gray-700 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-lg"
                      target="_blank"
                    >
                      <div className="flex items-center">
                        <Image
                          src={platform.logo }
                          alt={`${platform.name} logo`}
                          width={32}
                          height={32}
                          loading="lazy"
                          className="mr-2 sm:mr-3 rounded flex-shrink-0"
                        />
                        <span className="text-xs sm:text-sm">Order on {platform.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://broteinbistro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 duration-200"
              >
                Brotein Bistro.
              </a>
              All rights reserved. Designed And Developed By Team{" "}
              <a
                href="https://savruda.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 duration-200"
              >
                Savruda Innovation, Nashik
              </a>
            </p>
          </motion.div>
        </div>
        
        <FranchiseModal isOpen={isFranchiseOpen} onClose={() => setIsFranchiseOpen(false)} />
        <GymPartnershipModal isOpen={isGymModalOpen} onClose={() => setIsGymModalOpen(false)} />
      </footer>
    </div>
  )
}
