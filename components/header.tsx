"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  User,
  Hammer,
  Briefcase,
  Brush,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  // Remove unused isScrolled state and useEffect
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
  //
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const navItems = [
    {
      name: "Home",
      href: "#home",
      gradient: "from-[#a955ff] to-[#ea51ff]",
      icon: <Home size={20} />,
    },
    {
      name: "About",
      href: "#about",
      gradient: "from-[#56ccf2] to-[#2f80ed]",
      icon: <User size={20} />,
    },
    {
      name: "Skills",
      href: "#skills",
      gradient: "from-[#ff9966] to-[#ff5e62]",
      icon: <Hammer size={20} />,
    },
    {
      name: "Projects",
      href: "#projects",
      gradient: "from-[#80ff72] to-[#7ee8fa]",
      icon: <Briefcase size={20} />,
    },
    {
      name: "Drawings",
      href: "#drawing",
      gradient: "from-[#ffa9c6] to-[#f434e2]",
      icon: <Brush size={20} />,
    },
    {
      name: "Contact",
      href: "#contact",
      gradient: "from-[#f6d365] to-[#fda085]",
      icon: <Phone size={20} />,
    },
  ];

  return (
    <header className="sticky top-4 z-50 transition-all duration-200 flex justify-center">
      <div>
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
              <ul className="absolute left-0 m-5">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="relative list-none w-13 h-13 bg-white shadow-lg rounded-full cursor-pointer flex justify-center items-center transition-all duration-500 group hover:w-32"
                    style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-sm font-medium text-gray-500 transition-all duration-500 group-hover:text-white group-hover:scale-0 absolute">
                        {item.icon}
                      </span>
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                      ></div>
                      <div
                        className={`absolute top-2 w-full h-full rounded-full bg-gradient-to-r ${item.gradient} transition-opacity duration-500 opacity-0 group-hover:opacity-50 blur-md -z-10`}
                      ></div>
                      <span className="text-white text-sm font-medium uppercase tracking-wider scale-0 transition-transform duration-500 group-hover:scale-100 absolute">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative list-none w-13 h-13 bg-white shadow-lg rounded-full cursor-pointer flex justify-center items-center transition-all duration-500 group hover:w-32"
                style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              >
                <Link
                  href={item.href}
                  className="relative flex justify-center items-center w-full h-full rounded-full overflow-hidden"
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  ></div>
                  {/* Blur effect on hover */}
                  <div
                    className={`absolute top-2 w-full h-full rounded-full bg-gradient-to-r ${item.gradient} transition-opacity duration-500 opacity-0 group-hover:opacity-50 blur-md -z-10`}
                  ></div>
                  {/* Icon before hover */}
                  <span className="text-sm font-medium text-gray-500 transition-all duration-500 group-hover:text-white group-hover:scale-0 absolute">
                    {item.icon}
                  </span>
                  {/* Text after hover */}
                  <span className="text-white text-sm font-medium uppercase tracking-wider scale-0 transition-transform duration-500 group-hover:scale-100 absolute">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
