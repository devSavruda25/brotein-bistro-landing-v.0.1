"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from 'next/image'

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const isPrivacyPage = pathname === "/privacy-policy"

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/Brotein Bistro.png"
                  alt="Brotein Bistro Logo"
                  width={150}
                  height={150}
                  loading="lazy"
                  className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
                />
              </div>
            </Link>
          </motion.div>

          {/* Go Back Button (only shown on privacy page) */}
          {isPrivacyPage && (
            <Button
              onClick={() => router.back()}
              // variant={isScrolled ? "outline" : "ghost"}
              className={cn(
                "transition-all duration-300","text-white bg-red-500  hover:bg-gray-800",
              )}
            >
              Go Back
            </Button>
          )}

          {/* Mobile Menu Button (hidden on privacy page) */}
          {!isPrivacyPage && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors duration-200",
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Menu (hidden on privacy page) */}
      {!isPrivacyPage && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Why Us
                  </Link>
                  <Link
                    href="#plans"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Meal Plans
                  </Link>
                  <Link
                    href="#locations"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Locations
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.nav>
  )
}