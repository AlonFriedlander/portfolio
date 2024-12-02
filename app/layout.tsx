"use client";

import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

const sections = ["home", "projects", "contact"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Alon's Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-gray-100 text-gray-900">
            {/* Navbar */}
            <header className="fixed top-0 w-full bg-gray-200 shadow-md z-50">
              <nav className="flex justify-center space-x-6 py-4">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        if (window.location.pathname !== "/") {
                          // Redirect to the home page and scroll to the section after the page loads
                          window.location.href = `/#${section}`;
                        } else {
                          // Scroll to the section directly if already on the home page
                          const element = document.getElementById(section);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }
                    }}
                    className={`${
                      activeSection === section
                        ? "text-blue-500 font-bold"
                        : "text-gray-800"
                    } hover:text-blue-500`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </nav>
            </header>

            {/* Page Content */}
            <main className="pt-20 p-8 min-h-screen">{children}</main>

            {/* Footer */}
            <footer className="w-full bg-gray-800 text-white py-4 text-center">
              <p>© 2024 Alon Friedlander</p>
            </footer>
          </div>

          {/* Sidebar */}
          <aside className="hidden md:flex flex-col items-center justify-center w-1/4 bg-black text-white p-8 fixed right-0 top-0 min-h-screen">
            {/* Profile Picture */}
            <div className="relative mb-8">
              <img
                src="/profilePhoto.jpeg"
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-full border-4 border-white"
              />
            </div>
            {/* Social Links */}
            <div className="flex flex-col space-y-6 text-3xl">
              <a
                href="https://www.linkedin.com/in/alon-friedlander-42a851215/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/AlonFriedlander"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
