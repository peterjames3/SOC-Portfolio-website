import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import ScrollToTopBtn from "./components/scroll-to-top-btn";
import { Analytics } from "@vercel/analytics/next"
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});



export const metadata: Metadata = {
  title: {
    default: "James kamau | Cybersecurity Portfolio & SOC Analyst Projects",
    template: "%s | SOC Analyst Portfolio",
  },
  description:
    "A portfolio showcasing SOC analyst skills including threat detection, incident response, SIEM monitoring, log analysis, and cybersecurity operations.",
  keywords: [
    "SOC analyst",
    "security operations center",
    "threat detection",
    "incident response",
    "SIEM monitoring",
    "log analysis",
    "cybersecurity portfolio",
    "network security monitoring",
    "malware analysis",
    "vulnerability assessment",
    "security analyst",
    "blue team",
    "endpoint detection and response",
    "EDR",
    "cyber threat intelligence",
    "digital forensics",
    "security operations",
    "intrusion detection",
  ],
  robots: "index, follow",
  openGraph: {
    title: {
      default: "My SOC Analyst Portfolio | Cybersecurity & Threat Detection",
      template: "%s | SOC Analyst Portfolio",
    },
    description:
      "Explore my cybersecurity portfolio featuring hands-on SOC analyst projects, threat hunting, incident response workflows, and security monitoring experience.",
    url: "https://yourportfolio.com/",
    type: "website",
    locale: "en_US",
    siteName: "SOC Analyst Portfolio",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        <body
          className={`${playfair.variable} ${inter.variable}  ${jetbrains.variable} antialiased bg-background`}
        >
          <Analytics/>
        
          {/* <Navbar /> */}
          {children}
          <ScrollToTopBtn />
          {/* <Footer /> */}
        
          <ToastContainer />
        </body>
     
    </html>
  );
}
