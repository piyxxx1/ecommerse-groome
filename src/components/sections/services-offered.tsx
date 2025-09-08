"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  name: string;
  icon: string;
};

type Category = {
  name: string;
  code: string;
  services: Service[];
};

const categories: Category[] = [
  {
    name: "Grooming Services",
    code: "grooming",
    services: [
      { name: 'Salon Classic', icon: '/assest/icons/salonicon.jpeg' },
      { name: 'Salon Prime', icon: '/assest/icons/salon-prime.jpeg' },
      { name: 'Hair Studio For Women', icon: '/assest/icons/hair-studio.jpeg' },
      { name: 'Massage For Men', icon: '/assest/icons/men-massage.jpeg' },
      { name: 'Spa For Women', icon: '/assest/icons/spa.jpeg' },
      { name: 'Makeup & Styling Studio', icon: '/assest/icons/makeup.jpeg' },
    ]
  },
  {
    name: "Home Services",
    code: "home",
    services: [
      { name: 'Kitchen And Bathroom Deep Cleaning', icon: '/assest/icons/khichan-cleaning.jpeg' },
      { name: 'Painting & Waterproofing', icon: '/assest/icons/painting.jpeg' },
      { name: 'Revamp Wall Makeover', icon: '/assest/icons/Revamp-Wall-Makeover.jpeg' },
      { name: 'Plumber', icon: '/assest/icons/plumber.jpeg' },
      { name: 'Sofa & Carpet Cleaning', icon: '/assest/icons/Sofa.jpeg' },
      { name: 'Bathroom & Kitchen Cleaning', icon: '/assest/icons/bathroom.jpeg' },
      { name: 'Full Home/ Move-in Cleaning', icon: '/assest/icons/homemakeover.jpeg' },
      { name: 'Carpenter', icon: '/assest/icons/carpenter.jpeg' },
    ]
  },
  {
    name: "Repairing Services",
    code: "repairing",
    services: [
      { name: 'Washing Machine Repair', icon: '/assest/icons/washing-machine.jpeg' },
      { name: 'Microwave Repair', icon: '/assest/icons/microwave.jpeg' },
      { name: 'Refrigerator Repair', icon: '/assest/icons/frige.jpeg' },
      { name: 'AC Repair', icon: '/assest/icons/acrepair.jpeg' },
      { name: 'Electrician', icon: '/assest/icons/electric.jpeg' },
    ]
  }
];

const ServicesOffered = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && refs.current[openDropdown] && !refs.current[openDropdown]!.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  // Flatten all services from all regions into a single array
  const allServices = categories.flatMap(category => category.services);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Services Offered</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional services designed to make your life easier
          </p>
        </div>
        
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 md:gap-6">
          {allServices.map((service, serviceIndex) => {
            const uniqueKey = `service-${serviceIndex}`;
                const isOpen = openDropdown === uniqueKey;

                return (
                  <div
                    key={uniqueKey}
                className="relative group"
                    ref={(el) => { refs.current[uniqueKey] = el; }}
                  >
                    <button
                      onClick={() => toggleDropdown(uniqueKey)}
                              className="w-full flex flex-col items-center bg-white border border-gray-200 rounded-xl md:rounded-2xl p-3 md:p-6 cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all duration-300 group-hover:scale-105"
                    >
                  <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4 relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={`${service.name} icon`}
                        width={32}
                        height={32}
                      className="md:w-10 md:h-10 object-cover"
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1 md:mb-2 text-center leading-tight">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-blue-600 text-xs md:text-sm font-medium">
                    <span>Book Now</span>
                      <ChevronDown
                        className={cn(
                        'w-3 h-3 md:w-4 md:h-4 ml-1 transition-transform duration-300',
                          isOpen && 'rotate-180'
                        )}
                      />
                  </div>
                    </button>
                
                    {isOpen && (
                  <div className="absolute top-full left-0 right-0 z-20 bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 mt-2">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        {service.name}
                      </h4>
                      <button className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Book Now
                      </button>
                    </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
      </div>
    </div>
  );
};

export default ServicesOffered;