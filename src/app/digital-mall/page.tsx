"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Store, 
  Users, 
  BarChart3, 
  Globe,
  CheckCircle,
  Package,
  Palette,
  UserPlus,
  Rocket,
  Crown,
  Star,
  DollarSign,
  Heart,
  TrendingUp
} from "lucide-react";

const DigitalMallPage = () => {
  const features = [
    {
      icon: <Store className="w-8 h-8 text-blue-600" />,
      title: "Virtual Storefront",
      description: "Create your own branded digital storefront"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Vendor Management",
      description: "Manage multiple vendors and their products"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Analytics Dashboard",
      description: "Track sales, performance, and customer insights"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Global Reach",
      description: "Access customers worldwide with multi-language support"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$299/month",
      popular: false,
      features: [
        "Up to 10 vendors",
        "Basic storefront design",
        "Payment processing",
        "Customer support",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: "$599/month",
      popular: true,
      features: [
        "Up to 50 vendors",
        "Custom storefront design",
        "Advanced payment options",
        "Priority support",
        "Advanced analytics",
        "Marketing tools"
      ]
    },
    {
      name: "Enterprise",
      price: "$1299/month",
      popular: false,
      features: [
        "Unlimited vendors",
        "White-label solution",
        "Multi-currency support",
        "24/7 dedicated support",
        "Custom integrations",
        "API access"
      ]
    }
  ];

  const steps = [
    {
      number: "1",
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Choose Package",
      description: "Select the perfect plan for your business"
    },
    {
      number: "2", 
      icon: <Palette className="w-8 h-8 text-green-600" />,
      title: "Setup Store",
      description: "Customize your mall design and branding"
    },
    {
      number: "3",
      icon: <UserPlus className="w-8 h-8 text-purple-600" />,
      title: "Add Vendors",
      description: "Invite vendors and list their products"
    },
    {
      number: "4",
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "Go Live",
      description: "Launch and start generating revenue"
    }
  ];

  const successStories = [
    {
      name: "TechMall Pro",
      category: "Electronics Marketplace",
      stats: [
        { label: "Vendors", value: "150+", icon: <Users className="w-5 h-5" /> },
        { label: "Annual Revenue", value: "$2.5M", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Satisfaction", value: "98%", icon: <Heart className="w-5 h-5" /> }
      ]
    },
    {
      name: "Fashion Hub",
      category: "Fashion & Lifestyle Mall",
      stats: [
        { label: "Brands", value: "200+", icon: <Store className="w-5 h-5" /> },
        { label: "Monthly Sales", value: "$1.8M", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Retention", value: "95%", icon: <Star className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Own Your Digital Mall
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            Create and manage your own digital marketplace. Connect vendors, serve customers, 
            and build a thriving online business ecosystem.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Your Digital Mall
          </Button>
        </div>
      </section>

      {/* Everything You Need to Succeed Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Package Section */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${pkg.popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                  <Button className={`w-full mt-6 ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Your Mall in 4 Steps Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Launch Your Mall in 4 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
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

      {/* Success Stories Section */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {story.name}
                  </CardTitle>
                  <p className="text-blue-600 font-medium">
                    {story.category}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="flex justify-center mb-2 text-blue-600">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-5 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto">
            Join our network of professional service providers and start reaching more customers today. 
            The application process is simple and free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Apply Now
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

export default DigitalMallPage;
