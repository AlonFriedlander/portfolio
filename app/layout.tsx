"use client"
import React from "react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navbar */}
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
          <nav className="flex justify-center space-x-6 py-4">
            <button
              className="text-gray-800 hover:text-blue-500"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-gray-800 hover:text-blue-500"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              className="text-gray-800 hover:text-blue-500"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="text-gray-800 hover:text-blue-500"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
 
            <button
              className="text-gray-800 hover:text-blue-500"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-gray-800 text-white py-4 text-center">
          <p>© 2024 Alon Friedlander</p>
        </footer>
      </body>
    </html>
  );
}


