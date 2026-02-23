import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/Navbar";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alberto Lopez Jimenez | Full Stack Developer",
  description:
    "Full Stack Developer based in Mexico with 7 years of experience building scalable client-server applications, backend architectures and modern frontend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Alberto Lopez Jimenez | Full Stack Developer</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-beige text-black transition-colors dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <Providers>
          <NavBar/>
          <main className="pt-16 md:pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
