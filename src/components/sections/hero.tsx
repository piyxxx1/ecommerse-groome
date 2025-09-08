"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";


const mobileSliderImages = [
  {
    src: "/assest/sliderassest/painting.jpg",
    alt: "Professional painting services"
  },
  {
    src: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
    alt: "AC repair and maintenance services"
  },
  {
    src: "/assest/sliderassest/salon.jpg",
    alt: "Beauty and salon services"
  }
];

const Hero = () => {
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const refs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Auto-slide functionality for both mobile and desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % mobileSliderImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % mobileSliderImages.length);
  };

  const prevMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + mobileSliderImages.length) % mobileSliderImages.length);
  };

  const goToMobileSlide = (index: number) => {
    setCurrentMobileSlide(index);
  };

  // Service data with sub-services
  const services = [
    { 
      name: "Women's Salon & Spa", 
      icon: "/assest/icons/salonicon.jpeg",
      subServices: [
        { name: "Salon for Women", icon: "/assest/icons/salonicon.jpeg" },
        { name: "Spa for Women", icon: "/assest/icons/spa.jpeg" },
        { name: "Hair Studio for Women", icon: "/assest/icons/hair-studio.jpeg" },
        { name: "Makeup & Styling Studio", icon: "/assest/icons/makeup.jpeg" }
      ]
    },
    { 
      name: "Men's Salon & Massage", 
      icon: "/assest/icons/men-massage.jpeg",
      subServices: [
        { name: "Men's Salon", icon: "/assest/icons/salonicon.jpeg" },
        { name: "Men's Massage", icon: "/assest/icons/men-massage.jpeg" },
        { name: "Beard Grooming", icon: "/assest/icons/carpenter.jpeg" },
        { name: "Hair Styling", icon: "/assest/icons/hair-studio.jpeg" }
      ]
    },
    { 
      name: "AC & Appliance Repair", 
      icon: "/assest/icons/acrepair.jpeg",
      subServices: [
        { name: "AC Repair", icon: "/assest/icons/acrepair.jpeg" },
        { name: "Refrigerator Repair", icon: "/assest/icons/frige.jpeg" },
        { name: "Washing Machine Repair", icon: "/assest/icons/washing-machine.jpeg" },
        { name: "Microwave Repair", icon: "/assest/icons/microwave.jpeg" }
      ]
    },
    { 
      name: "Cleaning & Pest Control", 
      icon: "/assest/icons/Revamp-Wall-Makeover.jpeg",
      subServices: [
        { name: "Home Cleaning", icon: "/assest/icons/homemakeover.jpeg" },
        { name: "Deep Cleaning", icon: "/assest/icons/khichan-cleaning.jpeg" },
        { name: "Pest Control", icon: "/assest/icons/bathroom.jpeg" },
        { name: "Carpet Cleaning", icon: "/assest/icons/Sofa.jpeg" }
      ]
    },
    { 
      name: "Plumber", 
      icon: "/assest/icons/plumber.jpeg",
      subServices: [
        { name: "Plumbing Repair", icon: "/assest/icons/plumber.jpeg" },
        { name: "Pipe Installation", icon: "/assest/icons/plumber.jpeg" },
        { name: "Bathroom Fitting", icon: "/assest/icons/bathroom.jpeg" },
        { name: "Water Purifier", icon: "/assest/icons/Water-Purifier.jpeg" }
      ]
    },
    { 
      name: "Painting & Waterproofing", 
      icon: "/assest/icons/painting.jpeg",
      subServices: [
        { name: "Interior Painting", icon: "/assest/icons/painting.jpeg" },
        { name: "Exterior Painting", icon: "/assest/icons/painting.jpeg" },
        { name: "Waterproofing", icon: "/assest/icons/painting.jpeg" },
        { name: "Wall Makeover", icon: "/assest/icons/Revamp-Wall-Makeover.jpeg" }
      ]
    },
    { 
      name: "Carpenter", 
      icon: "/assest/icons/carpenter.jpeg",
      subServices: [
        { name: "Furniture Repair", icon: "/assest/icons/carpenter.jpeg" },
        { name: "Custom Furniture", icon: "/assest/icons/carpenter.jpeg" },
        { name: "Door Installation", icon: "/assest/icons/carpenter.jpeg" },
        { name: "Wood Polishing", icon: "/assest/icons/carpenter.jpeg" }
      ]
    }
  ];

  const openModal = (index: number) => {
    setOpenDropdown(index);
  };

  const closeModal = () => {
    setOpenDropdown(null);
  };

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown !== null) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('bg-black') || target.closest('.bg-black')) {
          closeModal();
        }
      }
    };

    if (openDropdown !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] bg-white">
      {/* Model Images Slider - Mobile */}
      <div className="md:hidden w-full px-4 py-4">
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          {mobileSliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentMobileSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        
        {/* Mobile Slider Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {mobileSliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToMobileSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentMobileSlide
                  ? 'bg-gray-800 scale-110'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Model Images Slider - Desktop */}
      <div className="hidden md:block absolute top-0 right-5 z-0 w-3/5 h-full px-44 py-32 mr-4">
        {/* Background behind slider */}
        <div className="absolute inset-x-44 inset-y-32 bg-gradient-to-l from-gray-100 to-gray-200"></div>
        
        <div className="relative w-full h-full overflow-hidden">
          {mobileSliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentMobileSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                priority={index === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-10 py-12 md:py-20">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight">
            Home services at your
            <br />
            doorstep
          </h1>

          {/* Services Card */}
          <div className="bg-white rounded-lg shadow-lg p-3 md:p-6 w-full max-w-fit">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
              What are you looking for?
            </h3>
            
            {/* Services Grid - 3-3-2 Layout */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => openModal(index)}
                  className={`bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md group flex flex-col items-center justify-center text-center ${
                    index >= 6 ? 'col-span-1' : ''
                  }`}
                  style={{
                    width: '110px',
                    height: '100px',
                    padding: '6px'
                  }}
                >
                  {/* Service Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 relative overflow-hidden rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Service Name */}
                  <div className="relative">
                    <h4 className="text-xs sm:text-xs font-medium text-gray-800 leading-tight text-center">
                      {service.name}
                    </h4>
                    {/* Black line on hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{height: '0.5px'}}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Desktop Slider Indicators */}
      <div className="hidden md:flex absolute bottom-8 right-8 z-20 space-x-1.5 md:space-x-2">
        {mobileSliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToMobileSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentMobileSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Modal Popup */}
      {openDropdown !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">
                {services[openDropdown]?.name}
              </h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {services[openDropdown]?.subServices.map((subService, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:shadow-md group"
                  >
                    {/* Sub-service Icon */}
                    <div className="w-12 h-12 mb-3 relative overflow-hidden rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={subService.icon}
                        alt={subService.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Sub-service Name */}
                    <h3 className="text-sm font-medium text-gray-800 text-center leading-tight mb-3">
                      {subService.name}
                    </h3>
                    
                    {/* Book Now Button */}
                    <button className="w-full bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;