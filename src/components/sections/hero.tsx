"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

  // Service data with category mappings
  const services = [
    { 
      name: "Women's Salon & Spa", 
      icon: "/assest/icons/salonicon.jpeg",
      category: "female-salons"
    },
    { 
      name: "Men's Salon & Massage", 
      icon: "/assest/icons/men-massage.jpeg",
      category: "male-salons"
    },
    { 
      name: "AC & Appliance Repair", 
      icon: "/assest/icons/acrepair.jpeg",
      category: "other-services"
    },
    { 
      name: "Cleaning & Pest Control", 
      icon: "/assest/icons/Revamp-Wall-Makeover.jpeg",
      category: "other-services"
    },
    { 
      name: "Plumber", 
      icon: "/assest/icons/plumber.jpeg",
      category: "other-services"
    },
    { 
      name: "Painting & Waterproofing", 
      icon: "/assest/icons/painting.jpeg",
      category: "paint"
    },
    { 
      name: "Carpenter", 
      icon: "/assest/icons/carpenter.jpeg",
      category: "other-services"
    }
  ];


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
      
      <div className="relative z-10 container mx-auto px-4 md:px-10 py-4 md:py-20">
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
                <Link
                  key={index}
                  href={`/services/${service.category}`}
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};

export default Hero;