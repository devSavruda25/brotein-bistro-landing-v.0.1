"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  CheckCircle,
  Loader2,
  Dumbbell,
  Clock,
  Users,
  TrendingUp,
  HeartPulse,
  ShieldCheck,
  Handshake,
  Percent,
  Award,
  ChevronDown,
  Store,
  Coffee,
  Box,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

interface GymModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GymPartnershipModal({ isOpen, onClose }: GymModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    footfall: "",
    members: "",
    operatingHours: "",
    kioskNeeded: "",
    kioskArea: "",
    haveavendor: "",
    vendorName: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/hq.brotein@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Gym Partnership Inquiry - Brotein Bistro",
          _template: "box",
          _captcha: "false",
          _autoresponse: "Thank you for partnering with Brotein Bistro! We'll get back to you shortly.",
        }),
      })
      const result = await response.json()
      if (result.success) {
        setFormSubmitted(true)
      } else {
        alert("Submission failed. Try again.")
      }
    } catch (err) {
      alert("Something went wrong.")
    } finally {
      setIsLoading(false)
    }
  }

  const gymStats = [
    { icon: Users, label: "Avg. Revenue Boost", value: "25-40%" },
    { icon: HeartPulse, label: "Member Retention", value: "+30%" },
    { icon: Percent, label: "Revenue Share", value: "Flexible" },
    { icon: TrendingUp, label: "Growth", value: "60% YoY" },
  ]

  const features = [
    { icon: Dumbbell, title: "Exclusive Brotein EXPRESS Model", desc: "Compact setup perfect for gym spaces" },
    { icon: Handshake, title: "Flexible Partnership Models", desc: "Revenue share or rental options" },
    { icon: Award, title: "Co-Branded Promotions", desc: "Joint marketing campaigns" },
    { icon: ShieldCheck, title: "Zero Operational Hassle", desc: "We handle everything" },
  ]

  const vendorOptions = [
    { value: "", label: "Select option", icon: Box },
    { value: "Yes", label: "Yes", icon: CheckCircle },
    { value: "No", label: "No", icon: X },
  ]

  const kioskOptions = [
    { value: "", label: "Select option", icon: Box },
    { value: "Yes", label: "Yes", icon: CheckCircle },
    { value: "No", label: "No", icon: X },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-6xl bg-white sm:rounded-2xl shadow-2xl flex flex-col sm:m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Fixed */}
            <div className="relative bg-gradient-to-r from-green-500 to-green-600 p-4 sm:p-6 text-white flex-shrink-0 sm:rounded-t-2xl">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200 z-10"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-center pr-12 sm:pr-0">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2"
                >
                  Gym Partnership Program
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-green-100 text-sm sm:text-base"
                >
                  Boost your gym's revenue and member satisfaction
                </motion.p>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 sm:p-6">
                {!formSubmitted ? (
                  <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
                    {/* Stats Section - Mobile: Full width, Desktop: 2/5 */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                      <h3 className="text-lg sm:text-xl font-bold">Why Partner With Brotein?</h3>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {gymStats.map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                          >
                            <Card className="text-center p-3 sm:p-4 hover:shadow-lg transition-shadow duration-300">
                              <CardContent className="p-0">
                                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mx-auto mb-2" />
                                <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-base sm:text-lg">Partnership Benefits:</h4>
                        {features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="p-2 bg-green-100 rounded-full flex-shrink-0">
                              <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                            </div>
                            <div className="min-w-0">
                              <h5 className="font-medium text-gray-900 text-sm sm:text-base">{feature.title}</h5>
                              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Form Section - Mobile: Full width, Desktop: 3/5 */}
                    <div className="lg:col-span-3">
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium">
                              Full Name *
                            </Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your full name"
                                className="pl-10 h-11"
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                              Email *
                            </Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="pl-10 h-11"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {/* Phone & Designation Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium">
                              Phone *
                            </Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone"
                                className="pl-10 h-11"
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="designation" className="text-sm font-medium">
                              Designation *
                            </Label>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <select
                                id="designation"
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputChange}
                                className="w-full h-11 px-3 pl-10 pr-8 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500 appearance-none bg-white"
                                required
                              >
                                <option value="">Select your role</option>
                                <option value="Owner">Owner</option>
                                <option value="Manager">Manager</option>
                                <option value="Marketing">Marketing Head</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Footfall & Members Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="footfall" className="text-sm font-medium">
                              Daily Footfall *
                            </Label>
                            <Input
                              id="footfall"
                              name="footfall"
                              value={formData.footfall}
                              onChange={handleInputChange}
                              placeholder="Approx. daily visitors"
                              className="h-11"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="members" className="text-sm font-medium">
                              Active Members *
                            </Label>
                            <Input
                              id="members"
                              name="members"
                              value={formData.members}
                              onChange={handleInputChange}
                              placeholder="Number of members"
                              className="h-11"
                              required
                            />
                          </div>
                        </div>

                        {/* Operating Hours */}
                        <div className="space-y-2">
                          <Label htmlFor="operatingHours" className="text-sm font-medium">
                            Operating Hours *
                          </Label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="operatingHours"
                              name="operatingHours"
                              value={formData.operatingHours}
                              onChange={handleInputChange}
                              placeholder="e.g. 6AM-10PM"
                              className="pl-10 h-11"
                              required
                            />
                          </div>
                        </div>

                        {/* Vendor & Kiosk Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="haveavendor" className="text-sm font-medium">
                              Do you Have Food Vendor *
                            </Label>
                            <div className="relative">
                              <Store className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <select
                                id="haveavendor"
                                name="haveavendor"
                                value={formData.haveavendor}
                                onChange={handleInputChange}
                                className="w-full h-11 px-3 pl-10 pr-8 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500 appearance-none bg-white"
                                required
                              >
                                {vendorOptions.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="kioskNeeded" className="text-sm font-medium">
                              Kiosk Needed? *
                            </Label>
                            <div className="relative">
                              <Box className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <select
                                id="kioskNeeded"
                                name="kioskNeeded"
                                value={formData.kioskNeeded}
                                onChange={handleInputChange}
                                className="w-full h-11 px-3 pl-10 pr-8 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500 appearance-none bg-white"
                                required
                              >
                                {kioskOptions.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Conditional Fields */}
                        {formData.haveavendor === "Yes" && (
                          <div className="space-y-2">
                            <Label htmlFor="vendorName" className="text-sm font-medium">
                              Vendor Name *
                            </Label>
                            <div className="relative">
                              <Coffee className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="vendorName"
                                name="vendorName"
                                value={formData.vendorName}
                                onChange={handleInputChange}
                                placeholder="Enter Vendor Name"
                                className="pl-10 h-11"
                                required
                              />
                            </div>
                          </div>
                        )}

                        {formData.kioskNeeded === "Yes" && (
                          <div className="space-y-2">
                            <Label htmlFor="kioskArea" className="text-sm font-medium">
                              Available Area (sq.ft) *
                            </Label>
                            <Input
                              id="kioskArea"
                              name="kioskArea"
                              value={formData.kioskArea}
                              onChange={handleInputChange}
                              placeholder="Approximate area available"
                              className="h-11"
                              required
                            />
                          </div>
                        )}

                        {/* Message */}
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium">
                            Additional Details
                          </Label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Tell us about your gym and partnership goals..."
                              className="pl-10 min-h-[80px] sm:min-h-[100px] resize-none"
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            "Submit Gym Partnership Request"
                          )}
                        </Button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="h-16 w-16 sm:h-20 sm:w-20 text-green-500 mx-auto mb-4 sm:mb-6" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Request Submitted!</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 px-4">
                      Thank you for your interest in partnering with Brotein Bistro. Our team will contact you within 24
                      hours.
                    </p>
                    <div className="max-w-md mx-auto bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        Next steps: We'll schedule a call to discuss your gym's specifics and propose a customized
                        partnership model.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
