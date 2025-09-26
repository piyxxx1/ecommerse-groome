"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "@/lib/services";

const ServicesOffered = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {category.services.slice(0, 5).map((service, serviceIndex) => (
                <Link
                  key={serviceIndex}
                  href={`/services/${category.id}`}
                  className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer block"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {service.name}
                    </h3>
                    <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                      Book Now
                    </button>
                  </div>
                </Link>
              ))}
              
              {/* View More Button */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <Link href={`/services/${category.id}`}>
                  <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group">
                    <svg 
                      className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOffered;