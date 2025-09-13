"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DollarSign, 
  Clock, 
  MapPin, 
  Smartphone,
  CheckCircle,
  FileText,
  Search,
  Navigation,
  CreditCard,
  Bike,
  Car,
  Truck,
  Plus,
  Calendar,
  Award,
  User,
  Shield,
  Phone
} from "lucide-react";

const DeliveryPartnerPage = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Flexible Earnings",
      description: "Earn money on your own schedule with competitive rates"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Choose Your Hours",
      description: "Work when you want with complete schedule flexibility"
    },
    {
      icon: <MapPin className="w-8 h-8 text-purple-600" />,
      title: "Local Deliveries",
      description: "Deliver in your neighborhood and familiar areas"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Easy App",
      description: "User-friendly driver app with navigation and tracking"
    }
  ];

  const vehicleEarnings = [
    {
      icon: <Bike className="w-8 h-8 text-blue-600" />,
      vehicle: "Bike/Scooter",
      rate: "$3-5 per delivery",
      description: "Small packages, documents"
    },
    {
      icon: <Car className="w-8 h-8 text-green-600" />,
      vehicle: "Car",
      rate: "$5-8 per delivery",
      description: "Medium packages, groceries"
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      vehicle: "Van/Truck",
      rate: "$10-15 per delivery",
      description: "Large items, furniture"
    }
  ];

  const additionalEarnings = [
    {
      icon: <Plus className="w-6 h-6 text-green-600" />,
      amount: "+$2",
      type: "Peak hour bonus"
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      amount: "+$5",
      type: "Weekend bonus"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      amount: "+$50",
      type: "Monthly completion bonus"
    }
  ];

  const steps = [
    {
      number: "1",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Sign Up",
      description: "Complete registration and verification"
    },
    {
      number: "2", 
      icon: <Search className="w-8 h-8 text-green-600" />,
      title: "Get Approved",
      description: "Background check and document verification"
    },
    {
      number: "3",
      icon: <Navigation className="w-8 h-8 text-purple-600" />,
      title: "Start Delivering",
      description: "Accept orders and start earning"
    },
    {
      number: "4",
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
      title: "Get Paid",
      description: "Weekly automatic payments"
    }
  ];

  const personalRequirements = [
    "18+ years old",
    "Valid driver's license",
    "Clean background check",
    "Smartphone with GPS"
  ];

  const vehicleRequirements = [
    "Valid vehicle registration",
    "Vehicle insurance",
    "Good vehicle condition",
    "Delivery bag/equipment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Become a Delivery Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            Join our delivery network and start earning on your schedule. 
            Flexible work, competitive pay, and the freedom to be your own boss.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Delivering Today
          </Button>
        </div>
      </section>

      {/* Why Deliver With Us Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Why Deliver With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Potential Section */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Earning Potential
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleEarnings.map((earning, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {earning.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {earning.vehicle}
                  </CardTitle>
                  <div className="text-2xl font-bold text-green-600">
                    {earning.rate}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {earning.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Earnings Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Additional Earnings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalEarnings.map((earning, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {earning.icon}
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {earning.amount}
                  </div>
                  <p className="text-gray-700 font-medium">
                    {earning.type}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full mb-6">
                  {step.number}
                </div>
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Requirements */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                  <User className="w-6 h-6 text-blue-600 mr-3" />
                  Personal Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Requirements */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                  <Car className="w-6 h-6 text-purple-600 mr-3" />
                  Vehicle Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {vehicleRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-5 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Earning?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto">
            Join thousands of delivery partners who are earning flexible income with us. 
            Sign up today and start delivering tomorrow!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Apply to Deliver
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-3 text-lg font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Separator line */}
      <div className="border-t border-gray-300"></div>

      <Footer />
    </div>
  );
};

export default DeliveryPartnerPage;
