import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Tooth Studio | Modern Dental Care",
  description: "Experience exceptional dental care at The Tooth Studio. We provide comprehensive dental services in a comfortable, state-of-the-art environment.",
  icons: {
    icon: "https://res.cloudinary.com/dfzlugyei/image/upload/c_fill,g_center,r_max,w_32,h_32/v1759543582/Untitled_design_2_p3hctr.png",
    shortcut: "https://res.cloudinary.com/dfzlugyei/image/upload/c_fill,g_center,r_max,w_32,h_32/v1759543582/Untitled_design_2_p3hctr.png",
    apple: "https://res.cloudinary.com/dfzlugyei/image/upload/c_fill,g_center,r_max,w_180,h_180/v1759543582/Untitled_design_2_p3hctr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/dfzlugyei/image/upload/c_fill,g_center,r_max,w_32,h_32/v1759543582/Untitled_design_2_p3hctr.png" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dfzlugyei/image/upload/c_fill,g_center,r_max,w_32,h_32/v1759543582/Untitled_design_2_p3hctr.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/dfzlugyei/image/upload/c_fill,g_center,r_max,w_180,h_180/v1759543582/Untitled_design_2_p3hctr.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
