"use client"

import { motion } from "framer-motion"
import { useInView as useInViewHook } from "react-intersection-observer"
import {
  Building2,
  Clock,
  IndianRupee,
  TrendingUp,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Globe,
  ArrowRight,
  Zap,
  Package,
  Target,
  Flame,
  Utensils,
  Dumbbell,
  Heart,
  Sparkles,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FranchiseSection() {

  const [franchiseRef, franchiseInView] = useInViewHook({ triggerOnce: false, threshold: 0.1 })
  const [whyExpressRef, whyExpressInView] = useInViewHook({ triggerOnce: false, threshold: 0.1 })
  const [modelRef, modelInView] = useInViewHook({ triggerOnce: false, threshold: 0.1 })
  const [menuRef, menuInView] = useInViewHook({ triggerOnce: false, threshold: 0.1 })
  const [uspRef, uspInView] = useInViewHook({ triggerOnce: false, threshold: 0.1 })
  const [statsRef, statsInView] = useInViewHook({ triggerOnce: false, threshold: 0.1 })
  const [contactRef, contactInView] = useInViewHook({ triggerOnce: false, threshold: 0.1 })

  const imageData = [
    {
      title: "Food Gallery",
      url: "https://res.cloudinary.com/dttagqqne/image/upload/v1751352724/471283983_952262540159800_2753058772975266394_n_xugdqx.jpg",
    },
    {
      title: "Store Images",
      url: "https://res.cloudinary.com/dttagqqne/image/upload/v1751350989/WhatsApp_Image_2025-06-30_at_12.45.58_d30d5930_yuua1m.jpg",
    },
    {
      title: "Team Photos",
      url: "https://res.cloudinary.com/dttagqqne/image/upload/v1751352831/450928539_7988658721178058_7809768330555429070_n_swe0sw.jpg",
    },
  ];


  const modelVariants = [
    {
      format: "Express Kiosk",
      space: "80–100",
      setupTime: "2 weeks",
      location: "Malls, Gyms, Colleges",
      footfall: "100–300",
      color: "from-emerald-500 to-teal-500",
    },
    {
      format: "Wall Unit",
      space: "120–150",
      setupTime: "3 weeks",
      location: "Corporate Zones",
      footfall: "150–400",
      color: "from-blue-500 to-purple-500",
    },
    {
      format: "Container Model",
      space: "160–200",
      setupTime: "4 weeks",
      location: "Events, Fests, Highways",
      footfall: "200–500",
      color: "from-orange-500 to-red-500",
    },
  ]

  const whyExpressFeatures = [
    {
      icon: Clock,
      title: "Speed",
      description: "Under 3-minute service",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Utensils,
      title: "Nutrition-first",
      description: "Macro blueprints for all meals",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Building2,
      title: "Compact",
      description: "80–120 sq.ft. setup",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: IndianRupee,
      title: "Franchise-ready",
      description: "Low CapEx, high RoI",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Package,
      title: "Cloud Kitchen",
      description: "Compatible",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const uspFeatures = [
    {
      icon: Flame,
      title: "Macro Engineered",
      description: "(lab-tested)",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Utensils,
      title: "Guilt-Free",
      description: "Desserts",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Dumbbell,
      title: "Mascot Marketing",
      description: "(Muscleman)",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "80% Repeat",
      description: "Rate",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const stats = [
    { number: "2", label: "Flagships in Nashik", icon: Building2 },
    { number: "80%", label: "Repeat Customers", icon: Users },
    { number: "9000+", label: "Meal Plans Sold", icon: Utensils },
    { number: "4.6+", label: "Zomato/Swiggy Ratings", icon: Star },
    { number: "25+", label: "Outlets Target by 2026", icon: TrendingUp },
  ]

  const sampleMenu = [
    { category: "Meals", item: "200g Chicken Rice Bowl", protein: "40g", price: "₹249", color: "emerald" },
    { category: "Desserts", item: "Whey Choco Lava Cake", protein: "20g", price: "₹99", color: "rose" },
    { category: "Snacks", item: "High-Protein Wrap", protein: "30g", price: "₹149", color: "blue" },
    { category: "Beverages", item: "Cold Brew Protein Coffee", protein: "25g", price: "₹129", color: "purple" },
  ]

  return (
    <section id="franchise" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-red-50 rounded-full -translate-y-16 translate-x-16 sm:-translate-y-24 sm:translate-x-24 md:-translate-y-32 md:translate-x-32 opacity-30" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-orange-50 rounded-full translate-y-24 -translate-x-24 sm:translate-y-32 sm:-translate-x-32 md:translate-y-48 md:-translate-x-48 opacity-20" />

      <div className="container relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          ref={franchiseRef}
          initial={{ opacity: 0, y: 30 }}
          animate={franchiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={franchiseInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-red-100 px-4 py-3 sm:px-6 sm:py-3 rounded-full mb-6 shadow-sm border border-red-200"
          >
            <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mr-2" />
            <span className="text-red-700 font-semibold text-sm sm:text-base">Franchise Opportunity</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-gray-900">
            BRÖTEIN BISTRO <span className="text-red-500 block sm:inline mt-2 sm:mt-0">EXPRESS</span>
          </h2>

          {/* <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 sm:mb-10 font-medium">Fast. Fit. Fuelled.</p> */}

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0 leading-relaxed">
            India's first protein-focused QSR, curated by{" "}
            <strong className="text-gray-900">MasterChef Ulka Santra</strong> and entrepreneur{" "}
            <strong className="text-gray-900">Omkar Shendage</strong>. High-protein, macro-balanced meals for India's
            evolving fitness culture.
          </p>

          <motion.div
            className="bg-gradient-to-r from-red-50 to-orange-50 p-6 sm:p-8 rounded-2xl border-2 border-red-100 max-w-5xl mx-auto shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={franchiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center text-red-800 text-center sm:text-left">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-0 sm:mr-3 mb-3 sm:mb-0 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base md:text-lg">
                <strong>Ideal Locations:</strong> Malls, Colleges, Airports, Fuel Stations, Corporate Parks, Gyms
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Why Express Section */}
        <motion.div
          ref={whyExpressRef}
          initial={{ opacity: 0, y: 30 }}
          animate={whyExpressInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 sm:mb-24 md:mb-28"
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={whyExpressInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center bg-green-100 px-4 py-3 sm:px-6 sm:py-3 rounded-full mb-6 shadow-sm border border-green-200"
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold text-sm sm:text-base">Why Express?</span>
            </motion.div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-red-500">'Express'?</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Five key advantages that make our franchise model unbeatable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyExpressFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={whyExpressInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <Card className="border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden h-full bg-white">
                  <CardContent className="p-6 sm:p-8 relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
                      <motion.div className="flex-shrink-0" whileHover={{  }} transition={{ duration: 0.6 }}>
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                        </div>
                      </motion.div>
                      <div className="text-center sm:text-left">
                        <h4 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300 text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-base sm:text-lg">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Model Variants Section */}
        <motion.div
          ref={modelRef}
          initial={{ opacity: 0, y: 30 }}
          animate={modelInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 sm:mb-24 md:mb-28"
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={modelInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-blue-100 px-4 py-3 sm:px-6 sm:py-3 rounded-full mb-6 shadow-sm border border-blue-200"
            >
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-semibold text-sm sm:text-base">Franchise Models</span>
            </motion.div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Model <span className="text-red-500">Variants</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect franchise model that fits your space and investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {modelVariants.map((model, index) => (
              <motion.div
                key={model.format}
                initial={{ opacity: 0, y: 30 }}
                animate={modelInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="shadow-2xl border-2 border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500 h-full bg-white">
                    <CardContent className="p-8 sm:p-10 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                      <div className="relative z-10">
                        <motion.div
                          className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${model.color} rounded-2xl flex items-center justify-center shadow-xl mb-6 sm:mb-8 mx-auto`}
                          whileHover={{ }}
                          transition={{ duration: 0.6 }}
                        >
                          <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                        </motion.div>

                        <h4 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center group-hover:text-red-600 transition-colors duration-300 text-gray-900">
                          {model.format}
                        </h4>

                        <div className="space-y-4 sm:space-y-5">
                          <div className="flex justify-between items-center py-3 border-b-2 border-gray-100">
                            <span className="text-gray-700 font-medium text-base sm:text-lg">Space</span>
                            <span className="font-bold text-base sm:text-lg text-gray-900">{model.space} sq.ft</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b-2 border-gray-100">
                            <span className="text-gray-700 font-medium text-base sm:text-lg">Setup Time</span>
                            <span className="font-bold text-base sm:text-lg text-gray-900">{model.setupTime}</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b-2 border-gray-100">
                            <span className="text-gray-700 font-medium text-base sm:text-lg">Location</span>
                            <span className="font-bold text-right text-sm sm:text-base text-gray-900">
                              {model.location}
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-3">
                            <span className="text-gray-700 font-medium text-base sm:text-lg">Daily Footfall</span>
                            <span className="font-bold text-base sm:text-lg text-gray-900">{model.footfall}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sample Menu & USP Combined */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 mb-20 sm:mb-24 md:mb-28">
          {/* Sample Menu */}
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: -30 }}
            animate={menuInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8 sm:mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={menuInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center bg-orange-100 px-4 py-3 sm:px-6 sm:py-3 rounded-full mb-6 shadow-sm border border-orange-200"
              >
                <Utensils className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mr-2" />
                <span className="text-orange-700 font-semibold text-sm sm:text-base">Our Menu</span>
              </motion.div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sample <span className="text-red-500">Menu</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600">High-protein dishes that customers love</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {sampleMenu.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={menuInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 bg-white">
                    <CardContent className="p-5 sm:p-6 relative overflow-hidden">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3">
                            <Badge
                              variant="outline"
                              className={`bg-${item.color}-50 text-${item.color}-700 border-${item.color}-200 text-sm font-semibold px-3 py-1`}
                            >
                              {item.category}
                            </Badge>
                            <span className="text-orange-600 font-bold text-sm sm:text-base bg-orange-50 px-3 py-1 rounded-full">
                              {item.protein} protein
                            </span>
                          </div>
                          <h4 className="font-bold text-base sm:text-lg group-hover:text-red-600 transition-colors duration-300 text-gray-900">
                            {item.item}
                          </h4>
                        </div>
                        <motion.div
                          className="text-2xl sm:text-3xl font-bold text-red-500 self-end sm:self-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.price}
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* USP Highlights */}
          <motion.div
            ref={uspRef}
            initial={{ opacity: 0, x: 30 }}
            animate={uspInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8 sm:mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={uspInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center bg-purple-100 px-4 py-3 sm:px-6 sm:py-3 rounded-full mb-6 shadow-sm border border-purple-200"
              >
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-2" />
                <span className="text-purple-700 font-semibold text-sm sm:text-base">Our USPs</span>
              </motion.div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                USP <span className="text-red-500">Highlights</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600">What makes us different from competitors</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {uspFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={uspInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 h-full bg-white">
                    <CardContent className="p-6 sm:p-8 relative h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                      <div className="relative z-10 h-full flex flex-col justify-center">
                        <motion.div
                          className="flex-shrink-0 mb-4 sm:mb-6"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div
                            className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg mx-auto`}
                          >
                            <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                          </div>
                        </motion.div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h4 className="font-bold text-lg sm:text-xl mb-2 group-hover:text-red-600 transition-colors duration-300 text-gray-900">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats & Growth Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 sm:mb-24 md:mb-28"
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-green-100 px-4 py-3 sm:px-6 sm:py-3 rounded-full mb-6 shadow-sm border border-green-200"
            >
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold text-sm sm:text-base">Our Growth</span>
            </motion.div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stats <span className="text-red-500">(June 2025)</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Proven track record of success and growth
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                className="text-center group"
              >
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 h-full bg-white">
                  <CardContent className="p-4 sm:p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <motion.div
                        className="mb-3 sm:mb-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-red-500 mx-auto" />
                      </motion.div>
                      <motion.div
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300 text-gray-900"
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-xs sm:text-sm md:text-base text-gray-600 leading-tight font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Growth Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="shadow-2xl border-2 border-gray-100 overflow-hidden bg-white">
              <CardContent className="p-8 sm:p-10 md:p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50" />

                <div className="relative z-10 text-center">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-900">
                    Growth <span className="text-red-500">Vision</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {[
                      { icon: Target, text: "25+ outlets by 2026" },
                      { icon: Dumbbell, text: "Gym/Campus Partnerships" },
                      { icon: Package, text: "Brotein-at-Home integration" },
                      { icon: Utensils, text: "Ready-to-eat product line" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 20 }}
                        animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-3 p-4 sm:p-0 bg-white sm:bg-transparent rounded-lg sm:rounded-none shadow-sm sm:shadow-none"
                      >
                        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                          <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-red-500 flex-shrink-0" />
                        </motion.div>
                        <span className="text-gray-700 text-sm sm:text-base md:text-lg text-center sm:text-left font-medium">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Contact & CTA Section */}
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {[
              { icon: MapPin, label: "Nashik, Maharashtra" },
              { icon: Phone, label: "+91 99229 69673" },
              
              { icon: Instagram, label: "@broteinbistro" },
              // { icon: Globe, label: "www.broteinbistro.in" },
              { icon: Mail, label: "broteinbistro@gmail.com" },
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 h-full bg-white">
                  <CardContent className="p-4 sm:p-6 text-center relative overflow-hidden h-full">
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <motion.div
                        className="mb-3 sm:mb-4"
                        whileHover={{ scale: 1.2,}}
                        transition={{ duration: 0.6 }}
                      >
                        <contact.icon className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mx-auto" />
                      </motion.div>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base font-semibold leading-tight">
                        {contact.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8 sm:p-12 md:p-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500" />
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative z-10 text-white">
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1 }}
                  >
                    Ready to Join the Protein Revolution?
                  </motion.h3>

                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-red-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.2 }}
                  >
                    Partner with India's fastest-growing protein-focused QSR franchise
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1.4, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <Button
                      size="lg"
                      className="bg-white text-red-600 hover:bg-red-50 text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 font-bold shadow-2xl rounded-full group relative overflow-hidden w-full sm:w-auto"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Dumbbell className="mr-3 sm:mr-4 h-6 w-6 sm:h-8 sm:w-8" />
                        <span className="hidden sm:inline">Become a Franchise Partner</span>
                        <span className="sm:hidden">Get Franchise</span>
                        <ArrowRight className="ml-3 sm:ml-4 h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-red-100 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                    </Button> */}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Image Placeholders */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20"
          >
            {imageData.map(({ title, url }, index) => (
              <motion.div
                key={title}
                className="h-48 sm:h-56 md:h-64 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-400 flex flex-col items-center justify-center group hover:border-red-400 transition-colors duration-300 shadow-lg overflow-hidden relative"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={url}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />

              </motion.div>
            ))}
          </motion.div> */}

        </motion.div>
      </div>
    </section>
  )
}