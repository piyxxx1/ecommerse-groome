"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

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
  { title: "Mall", href: "/mall" },
  { title: "Register As A Professional", href: "/register", isButton: true },
  { title: "Help", href: "/helpcenter" },
  { title: "Login / Sign Up", href: "#", isButton: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { getTotalItems } = useCart();

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
      <div className="max-w-[2000px] mx-auto flex items-center h-16 px-5 md:px-10 relative">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-10">
          <Image
            src="/navlogo.png"
            alt="Groome"
            width={120}
            height={28}
            priority
          />
        </Link>

        {/* Center Navigation - Absolutely positioned */}
        <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>{renderNavLink(link)}</li>
            ))}
          </ul>
        </nav>

        {/* Right side - Cart, City Dropdown and Mobile menu */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Cart Icon - Desktop Only */}
          <div className="relative hidden md:block">
            <Link
              href="/cart"
              className="p-2 hover:bg-gray-800 rounded-md transition-colors relative block"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {/* Cart Badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {getTotalItems()}
              </span>
            </Link>
          </div>

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
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 min-w-48 max-h-60 overflow-y-auto">
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