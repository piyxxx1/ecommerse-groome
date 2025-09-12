"use client";

import React from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Salon & Spa",
    icon: "/assest/icons/salonicon.jpeg",
    color: "bg-pink-100 hover:bg-pink-200"
  },
  {
    id: 2,
    name: "Home Repair",
    icon: "/assest/icons/acrepair.jpeg",
    color: "bg-blue-100 hover:bg-blue-200"
  },
  {
    id: 3,
    name: "Cleaning",
    icon: "/assest/icons/khichan-cleaning.jpeg",
    color: "bg-green-100 hover:bg-green-200"
  },
  {
    id: 4,
    name: "Painting",
    icon: "/assest/icons/painting.jpeg",
    color: "bg-yellow-100 hover:bg-yellow-200"
  },
  {
    id: 5,
    name: "Plumbing",
    icon: "/assest/icons/plumber.jpeg",
    color: "bg-purple-100 hover:bg-purple-200"
  }
];

const CategoryCircles = () => {
  return (
    <section className="pt-6 pb-8 md:py-20 bg-white -mt-2 md:mt-0">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          Categories
        </h2>
        <div className="flex flex-nowrap justify-center items-center gap-2 md:gap-16 overflow-x-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0"
            >
              {/* Circular Category */}
              <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full ${category.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md group-hover:shadow-lg flex-shrink-0`}>
                <div className="w-10 h-10 md:w-14 md:h-14 relative">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Category Name */}
              <h3 className="text-xs md:text-sm font-medium text-gray-800 mt-2 md:mt-4 text-center max-w-16 md:max-w-20">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircles;
