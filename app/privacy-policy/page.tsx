import { PrivacyPolicy } from "@/components/privacy-policy"
import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "Privacy Policy - Brotein Bistro | Data Protection & User Privacy",
  description:
    "Learn how Brotein Bistro collects, uses, and protects your personal information. Our comprehensive privacy policy ensures transparency and data security.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <PrivacyPolicy />
      </div>
    </div>
  )
}
