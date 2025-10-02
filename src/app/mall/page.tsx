"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, MapPin, Clock, Phone, ShoppingBag } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { useRouter } from "next/navigation";

const shops = [
  {
    id: 1,
    name: "Fashion Hub",
    category: "Fashion & Clothing",
    rating: 4.8,
    image: "/assest/icons/salonicon.jpeg",
    description: "Latest fashion trends and designer clothing",
    location: "Ground Floor, Block A",
    timings: "10:00 AM - 10:00 PM",
    phone: "+91 98765 43210",
    isOpen: true
  },
  {
    id: 2,
    name: "Tech Store",
    category: "Electronics",
    rating: 4.6,
    image: "/assest/icons/acrepair.jpeg",
    description: "Latest gadgets and electronic accessories",
    location: "First Floor, Block B",
    timings: "9:00 AM - 9:00 PM",
    phone: "+91 98765 43211",
    isOpen: true
  },
  {
    id: 3,
    name: "Beauty Corner",
    category: "Beauty & Wellness",
    rating: 4.9,
    image: "/assest/icons/makeup.jpeg",
    description: "Premium beauty products and cosmetics",
    location: "Ground Floor, Block C",
    timings: "10:00 AM - 11:00 PM",
    phone: "+91 98765 43212",
    isOpen: false
  },
  {
    id: 4,
    name: "Home Decor",
    category: "Home & Living",
    rating: 4.7,
    image: "/assest/icons/homemakeover.jpeg",
    description: "Beautiful home decoration items",
    location: "Second Floor, Block A",
    timings: "10:00 AM - 8:00 PM",
    phone: "+91 98765 43213",
    isOpen: true
  },
  {
    id: 5,
    name: "Sports Zone",
    category: "Sports & Fitness",
    rating: 4.5,
    image: "/assest/icons/men-massage.jpeg",
    description: "Sports equipment and fitness gear",
    location: "First Floor, Block C",
    timings: "8:00 AM - 10:00 PM",
    phone: "+91 98765 43214",
    isOpen: true
  },
  {
    id: 6,
    name: "Book Paradise",
    category: "Books & Stationery",
    rating: 4.8,
    image: "/assest/icons/plumber.jpeg",
    description: "Wide collection of books and stationery",
    location: "Second Floor, Block B",
    timings: "9:00 AM - 9:00 PM",
    phone: "+91 98765 43215",
    isOpen: true
  }
];

const categories = [
  "All",
  "Fashion & Clothing",
  "Electronics",
  "Beauty & Wellness",
  "Home & Living",
  "Sports & Fitness",
  "Books & Stationery"
];

export default function MallPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredShops = shops.filter(shop => {
    const matchesCategory = selectedCategory === "All" || shop.category === selectedCategory;
    const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shop.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleVisitShop = (shopId: number) => {
    router.push(`/store/${shopId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* Header */}
      <Header />

      {/* Digital Mall Title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Digital Mall</h1>
            <p className="text-gray-600 text-sm md:text-lg">Discover amazing shops & exclusive offers</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search shops, products, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mall Map/Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop) => (
            <div key={shop.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Shop Image */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={shop.image}
                  alt={shop.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    shop.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {shop.isOpen ? 'Open' : 'Closed'}
                  </div>
                </div>
              </div>

              {/* Shop Details */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{shop.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400" size={16} fill="currentColor" />
                    <span className="text-sm font-medium text-gray-700">{shop.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-2">{shop.category}</p>
                <p className="text-sm text-gray-700 mb-3">{shop.description}</p>

                {/* Shop Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={14} className="mr-2" />
                    <span>{shop.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={14} className="mr-2" />
                    <span>{shop.timings}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={14} className="mr-2" />
                    <span>{shop.phone}</span>
                  </div>
                </div>


                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleVisitShop(shop.id)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Visit Shop
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <ShoppingBag size={48} className="mx-auto" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No shops found</h2>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
}
