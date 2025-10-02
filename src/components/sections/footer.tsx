"use client";

import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Twitter", icon: <Twitter size={20} />, url: "https://twitter.com/orchids" },
    { name: "Facebook", icon: <Facebook size={20} />, url: "https://facebook.com/orchids" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://instagram.com/orchids" },
    { name: "YouTube", icon: <Youtube size={20} />, url: "https://youtube.com/orchids" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com/company/orchids" },
  ];

  const footerLinks = {
    about: [
      "About Us",
      "Terms & Conditions", 
      "Privacy Policy",
      "Services",
    ],
    forPartners: [
      "Register as a professional",
      "Contact Us",
      "My Account",
    ],
  };

  const cities = {
    IND: [
      "Delhi NCR",
      "Mumbai", 
      "Bangalore",
      "Hyderabad",
      "Ahmedabad",
      "Chennai",
      "Kolkata",
      "Surat",
      "Pune",
      "Jaipur",
      "Lucknow",
      "Kanpur",
      "Nagpur",
      "Indore",
      "Thane",
      "Bhopal",
      "Visakhapatnam",
      "Vadodara",
      "Patna",
      "Ludhiana",
      "Nashik",
      "Agra",
      "Coimbatore",
      "Madurai",
      "Meerut",
      "Rajkot",
      "Varanasi",
      "Srinagar",
      "Aurangabad",
      "Dhanbad",
      "Amritsar",
      "Navi Mumbai",
      "Allahabad",
      "Ranchi",
      "Howrah",
      "Jabalpur",
      "Gwalior",
      "Vijayawada",
      "Jodhpur",
      "Raipur",
      "Kota",
      "Guwahati",
      "Chandigarh",
      "Thiruvananthapuram",
      "Solapur",
      "Hubballi-Dharwad",
      "Tiruchirappalli",
      "Bareilly",
      "Mysore",
      "Tiruppur",
      "Gurgaon",
      "Aligarh",
      "Jalandhar",
      "Bhubaneswar",
      "Salem",
      "Warangal",
      "Guntur",
      "Bhiwandi",
      "Saharanpur",
      "Gorakhpur",
      "Bikaner",
      "Amravati",
      "Noida",
      "Jamshedpur",
      "Bhilai",
      "Cuttack",
      "Firozabad",
      "Kochi",
      "Nellore",
      "Bhavnagar",
      "Dehradun",
      "Durgapur",
      "Asansol",
      "Rourkela",
      "Nanded",
      "Kolhapur",
      "Ajmer",
      "Akola",
      "Gulbarga",
      "Jamnagar",
      "Ujjain",
      "Loni",
      "Siliguri",
      "Jhansi",
      "Ulhasnagar",
      "Jammu",
      "Sangli-Miraj & Kupwad",
      "Mangalore",
      "Erode",
      "Belgaum",
      "Ambattur",
      "Tirunelveli",
      "Malegaon",
      "Gaya",
      "Jalgaon",
      "Udaipur",
      "Maheshtala"
    ],
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-10 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link === "Services" ? "/services" : "#"} 
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">For Partners</h4>
            <ul className="space-y-2">
              {footerLinks.forPartners.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities - India */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">India</h4>
            <div className="grid grid-cols-2 gap-1 max-h-60 md:max-h-80 overflow-y-auto">
              {cities.IND.map((city, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-white text-xs">
                  {city}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757279455442-abff6i79x37.png"
                alt="Orchids"
                width={100}
                height={24}
                className="sm:w-[120px] sm:h-[28px]"
              />
              <span className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">© 2024 Orchids Technologies Pvt. Ltd.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label={social.name}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
        
        {/* Watermark */}
        <div>
          <div className="container mx-auto px-5 md:px-10">
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Made with ❤️ by <span className="font-semibold text-gray-700">QIKK SPACE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;