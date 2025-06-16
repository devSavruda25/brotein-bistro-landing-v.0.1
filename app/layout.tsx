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
    "Protein-rich food",
    "Healthy meals Nashik",
    "Gym diet food café",
    "High-protein restaurant",
    "Fitness food Nashik",
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
