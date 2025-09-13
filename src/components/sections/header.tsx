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
  subnav?: NavLinkItem[];
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
  { 
    title: "Register As A Professional", 
    href: "/register", 
    isButton: true,
    subnav: [
      { title: "Become an Affiliate", href: "/affiliate" },
      { title: "Become a Vendor", href: "/vendor" },
      { title: "Become a Manufacturer", href: "/manufacturer" },
      { title: "Become a Delivery Partner", href: "/delivery-partner" },
      { title: "Own a Digital Mall", href: "/digital-mall" },
    ]
  },
  { title: "Help", href: "/helpcenter" },
  { title: "Login / Sign Up", href: "/auth", isButton: true },
];

const mobileNavLinks: NavLinkItem[] = [
  { title: "Become an Affiliate", href: "/affiliate" },
  { title: "Become a Vendor", href: "/vendor" },
  { title: "Become a Manufacturer", href: "/manufacturer" },
  { title: "Become a Delivery Partner", href: "/delivery-partner" },
  { title: "Own a Digital Mall", href: "/digital-mall" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [user, setUser] = useState<{name: string; email: string} | null>(null);
  const { getTotalItems } = useCart();

  // Check if user is logged in and get user data
  React.useEffect(() => {
    const checkUserStatus = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        } catch (error) {
          console.error("Error parsing user data:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    
    checkUserStatus();
    // Listen for storage changes to update user status
    window.addEventListener('storage', checkUserStatus);
    
    return () => window.removeEventListener('storage', checkUserStatus);
  }, []);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  // Get dynamic navigation links based on user status
  const getDynamicNavLinks = () => {
    const baseNavLinks = [...navLinks];
    
    if (user && user.name) {
      // Replace "Login / Sign Up" with user's name when logged in
      const loginButtonIndex = baseNavLinks.findIndex(link => link.title === "Login / Sign Up");
      if (loginButtonIndex !== -1) {
        baseNavLinks[loginButtonIndex] = { title: `Hi ${user.name}`, href: "/profile", isButton: true };
      }
    }
    
    // Return links with user name replacing login button when logged in
    return baseNavLinks;
  };

  const renderNavLink = (link: NavLinkItem, isMobile: boolean = false) => {
    const commonProps = isMobile ? { onClick: () => setIsMenuOpen(false) } : {};
    const className = "text-sm hover:text-gray-300 transition-colors whitespace-nowrap";

    if (link.isButton) {
      if (link.subnav && !isMobile) {
        return (
          <div 
            className="relative"
            onMouseEnter={() => setHoveredNavItem(link.title)}
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <div className={`${className} cursor-pointer flex items-center space-x-1 group`} {...commonProps}>
              <span>{link.title}</span>
              <ChevronDown size={14} className="transform transition-transform duration-200 group-hover:rotate-180" />
            </div>
            {hoveredNavItem === link.title && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-56 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="py-2">
                  {link.subnav.map((subItem, index) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block w-full text-left px-6 py-3 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none text-gray-800 text-sm transition-all duration-200 hover:text-blue-600 hover:pl-8 border-l-4 border-transparent hover:border-blue-500 group"
                      onClick={() => setHoveredNavItem(null)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gray-300 rounded-full transition-colors duration-200 group-hover:bg-blue-500"></div>
                        <span className="font-medium">{subItem.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      }
      
      return (
        <Link 
          href={link.href} 
          className={`${className} cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors`} 
          {...commonProps}
        >
          {link.title}
        </Link>
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
            {getDynamicNavLinks().map((link) => (
              <li key={link.title}>{renderNavLink(link)}</li>
            ))}
          </ul>
        </nav>

        {/* Right side - Cart, City Dropdown and Mobile menu */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Cart Icon - Desktop Only */}
          <div className="relative hidden lg:block">
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

          {/* City Dropdown - Medium to Large screens */}
          <div className="hidden lg:block relative">
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

          {/* Mobile City Dropdown and Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile City Dropdown - Only for small screens */}
            <div className="relative lg:hidden">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-sm transition-colors"
              >
                <span className={selectedCity ? "text-white" : "text-gray-400"}>
                  {selectedCity || "Select your city"}
                </span>
                <ChevronDown 
                  size={14} 
                  className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 min-w-40 max-h-48 overflow-y-auto">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="w-full text-left px-3 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-gray-700 border-b border-gray-100 last:border-b-0 text-sm"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
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
              {/* Show only professional registration links for both logged-in and non-logged-in users */}
              {mobileNavLinks.map((link) => (
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