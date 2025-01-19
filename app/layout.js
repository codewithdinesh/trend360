import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '600'],
  display: 'swap',
});

// SEO Metadata
export const metadata = {
  metadataBase: new URL("https://trend360.vercel.app"),
  title: "Trend360: AI-Powered Ad Research Tool",
  description: "Automate your ad research with AI-driven insights, competitor analysis, and actionable recommendations.",
  keywords: "Trend360, AI Ad Research, automated research, marketing insights, ad optimization, data-driven ads, next.js, react, AI-powered research tool",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Trend360: AI-Powered Ad Research Tool",
    description: "Automate your ad research with AI-driven insights, competitor analysis, and actionable recommendations.",
    url: "https://trend360.vercel.app",
    siteName: "Trend360",
    images: [
      {
        url: "/trend360-dashboard.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trend360: AI-Powered Ad Research Tool",
    description: "Discover how Trend360 can revolutionize your ad research process.",
    creator: "codewithdinesh",
    images: [
      {
        url: "/trend360-dashboard.png",
        alt: "Trend360: AI-Powered Ad Research Tool",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} antialiased min-h-screen`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}

        <Header />

        {children}
        {/* </ThemeProvider> */}

      </body>
    </html>
  );
}
