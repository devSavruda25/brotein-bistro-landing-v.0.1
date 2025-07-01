import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brotein Bistro - Protein-Rich Fitness Café in Nashik",
  description:
    "Fuel your fitness journey with delicious, protein-rich meals at Brotein Bistro, Nashik's premier fitness-focused café.",
  keywords: [
    "Brotein Bistro",
    "Fitness Café Nashik",
    "High-protein food Nashik",
    "Healthy food café",
    "Gym food Nashik",
    "Protein meals Nashik",
    "Fitness restaurant Nashik",
    "Diet meal plan café",
    "Clean eating Nashik",
    "Muscle gain food",
    "High-protein meals",
    "Low-carb meals Nashik",
    "Clean eating café",
    "Healthy protein shakes Nashik",
    "Meal prep Nashik",
    "Macro-balanced meals",
    "Keto meals Nashik",
    "Gym food delivery Nashik",
    "Diet-specific meals Nashik",
    "Fitness food for muscle gain",
    "Post-workout meals",
    "Protein for gym lovers",
    "Muscle gain food Nashik",
    "Gym-friendly restaurant",
    "Fitness meal café Nashik",
    "Bodybuilding food Nashik",
    "Healthy café options",
    "Sugar-free desserts Nashik",
    "Gluten-free café Nashik",
    "Weight-loss food Nashik",
    "Balanced diet meals",
    "Clean eating Nashik",
    "Best healthy café in Nashik",
    "Nashik gym food spots",
    "Healthy restaurants near College Road Nashik",
    "Where to eat healthy in Nashik",
    "Nashik diet food restaurants",
    "Best café in Nashik for gym-goers",
    "Where to eat protein-rich meals in Nashik",
    "Affordable fitness meals in Nashik",
    "Healthy meal café near me",
    "What to eat after gym in Nashik",
    "Fitness diet plan with meals in Nashik",

  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Brotein Bistro - Protein-Rich Fitness Café in Nashik",
    description:
      "Discover Brotein Bistro in Nashik, serving high-protein, delicious meals crafted for fitness enthusiasts.",
    url: "https://www.broteinbistro.com", // replace with your domain
    siteName: "Brotein Bistro",

    type: "website",
    locale: "en_IN",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
