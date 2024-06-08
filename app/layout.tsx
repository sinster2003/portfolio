import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/components/theme/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sindhur V Shabaraya",
  description: "Portfolio Website of Sindhur V Shabaraya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${GeistSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
