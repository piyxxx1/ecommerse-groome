"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const bannerSlides = [
  {
    id: 1,
    image: "/assest/homeassest/Black-and-White-Model-2.jpg"
  },
  {
    id: 2,
    image: "/assest/homeassest/Black-white-model.jpg"
  }
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section 
      className="relative w-full bg-white -mt-6 md:mt-0 z-0 pb-0 md:pb-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile Banner Slider */}
      <div className="md:hidden w-full">
        <div className="relative w-full h-64 ">
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={`Banner slide ${slide.id}`}
                fill
                className="object-contain"
                priority={index === 0}
                quality={90}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Banner Slider */}
      <div className="hidden md:block relative w-full h-[600px] lg:h-[600px] overflow-hidden px-6 lg:px-8">
        <div className="relative w-full h-full">
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={`Banner slide ${slide.id}`}
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


    </section>
  );
};

export default BannerSlider;
