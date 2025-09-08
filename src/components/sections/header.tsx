"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLinkItem = {
  title: string;
  href: string;
  isExternal?: boolean;
  isButton?: boolean;
};

const cities = [
  "Delhi NCR",
  "Bengaluru", 
  "Mumbai",
  "Pune",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Kochi"
];

const navLinks: NavLinkItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Register As A Professional", href: "/register", isButton: true },
  { title: "Help", href: "/helpcenter" },
  { title: "Login / Sign Up", href: "#", isButton: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  const renderNavLink = (link: NavLinkItem, isMobile: boolean = false) => {
    const commonProps = isMobile ? { onClick: () => setIsMenuOpen(false) } : {};
    const className = "text-sm hover:text-gray-300 transition-colors whitespace-nowrap";

    if (link.isButton) {
      return (
        <div className={`${className} cursor-pointer`} {...commonProps}>
          {link.title}
        </div>
      );
    }

    if (link.isExternal) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...commonProps}
        >
          {link.title}
        </a>
      );
    }
    
    return (
      <Link href={link.href} className={className} {...commonProps}>
        {link.title}
      </Link>
    );
  };
  
  return (
    <header className="relative bg-black text-white w-full z-40">
      <div className="max-w-[2000px] mx-auto flex items-center justify-between h-16 px-5 md:px-10">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757279455442-abff6i79x37.png"
            alt="Groome"
            width={120}
            height={28}
            priority
          />
        </Link>

        {/* Right side - City Dropdown and Nav Links */}
        <div className="flex items-center space-x-6">
          {/* City Dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-sm transition-colors"
            >
              <span className={selectedCity ? "text-white" : "text-gray-400"}>
                {selectedCity || "Select your city"}
              </span>
              <ChevronDown 
                size={16} 
                className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 min-w-48 max-h-60 overflow-y-auto">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-gray-700 border-b border-gray-100 last:border-b-0"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.title}>{renderNavLink(link)}</li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 -mr-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black shadow-lg">
          <nav className="px-5 pt-2 pb-5">
            <ul className="flex flex-col items-start space-y-4">
              {navLinks.map((link) => (
                <li key={link.title}>{renderNavLink(link, true)}</li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;