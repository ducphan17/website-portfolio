"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-4 z-50 transition-all duration-200 flex justify-center`}
    >
      <div
        className={`px-6 py-3 flex items-center justify-center rounded-full shadow-md border 
      transition-all duration-200
      ${isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/50"}
    `}
      >
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-background z-40 p-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
