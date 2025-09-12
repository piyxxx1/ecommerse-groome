"use client";

import React from "react";
import Image from "next/image";

type ServiceCard = {
  name: string;
  image: string;
  description?: string;
};

const serviceCategories = [
  {
    title: "Book Appointment For Female Saloons",
    services: [
      { name: "Sunrise Spa And Salon", image: "/assest/sliderassest/salon.jpg" },
      { name: "Equinox Beauty Parlor", image: "/assest/sliderassest/salon.jpg" },
      { name: "Sri Manisha", image: "/assest/sliderassest/salon.jpg" },
      { name: "Hilite Salon And Spa", image: "/assest/sliderassest/salon.jpg" },
      { name: "V2 Ladies Salon", image: "/assest/sliderassest/salon.jpg" },
    ]
  },
  {
    title: "Book Appointment For Male Saloons",
    services: [
      { name: "The Jawed Habib", image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg" },
      { name: "Rossano Ferretti", image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg" },
      { name: "Naturals Salons", image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg" },
      { name: "Men's Grooming Studio", image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg" },
    ]
  },
  {
    title: "Book Appointment For Paint",
    services: [
      { name: "Interior Painting", image: "/assest/sliderassest/painting.jpg" },
      { name: "Exterior Painting", image: "/assest/sliderassest/painting.jpg" },
      { name: "Wall Makeover", image: "/assest/sliderassest/painting.jpg" },
      { name: "Waterproofing", image: "/assest/sliderassest/painting.jpg" },
      { name: "Color Consultation", image: "/assest/sliderassest/painting.jpg" },
    ]
  }
];

const ServicesOffered = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOffered;