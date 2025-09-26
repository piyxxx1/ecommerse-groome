export interface Service {
  id: number;
  name: string;
  image: string;
  description?: string;
  price?: string;
  rating?: number;
  reviews?: number;
  category: string;
  location?: string;
  availability?: string;
  duration?: string;
  features?: string[];
  images?: string[];
  address?: string;
  phone?: string;
  email?: string;
  workingHours?: string;
}

export interface BookingSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  price?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "female-salons",
    title: "Book Appointment For Female Saloons",
    services: [
      { 
        id: 1, 
        name: "Sunrise Spa And Salon", 
        image: "/assest/sliderassest/salon.jpg",
        description: "Premium beauty services for women with state-of-the-art facilities and experienced professionals. We offer a wide range of treatments including facials, hair styling, makeup, and spa services.",
        price: "₹299",
        rating: 4.8,
        reviews: 120,
        category: "female-salons",
        location: "Delhi NCR",
        availability: "Available Today",
        duration: "60-90 minutes",
        features: [
          "Professional Hair Styling",
          "Facial Treatments",
          "Makeup Services",
          "Spa & Wellness",
          "Bridal Packages",
          "Skin Care Consultation"
        ],
        images: [
          "/assest/sliderassest/salon.jpg",
          "/assest/sliderassest/salon.jpg",
          "/assest/sliderassest/salon.jpg"
        ],
        address: "123 Connaught Place, New Delhi, 110001",
        phone: "+91 98765 43210",
        email: "info@sunrisesalon.com",
        workingHours: "9:00 AM - 9:00 PM (Mon-Sun)"
      },
      { 
        id: 2, 
        name: "Equinox Beauty Parlor", 
        image: "/assest/sliderassest/salon.jpg",
        description: "Complete beauty solutions and spa treatments",
        price: "₹399",
        rating: 4.9,
        reviews: 95,
        category: "female-salons",
        location: "Mumbai",
        availability: "Available Today"
      },
      { 
        id: 3, 
        name: "Sri Manisha", 
        image: "/assest/sliderassest/salon.jpg",
        description: "Traditional and modern beauty services",
        price: "₹249",
        rating: 4.7,
        reviews: 150,
        category: "female-salons",
        location: "Bangalore",
        availability: "Available Tomorrow"
      },
      { 
        id: 4, 
        name: "Hilite Salon And Spa", 
        image: "/assest/sliderassest/salon.jpg",
        description: "Luxury spa and salon services",
        price: "₹599",
        rating: 4.6,
        reviews: 80,
        category: "female-salons",
        location: "Pune",
        availability: "Available Today"
      },
      { 
        id: 5, 
        name: "V2 Ladies Salon", 
        image: "/assest/sliderassest/salon.jpg",
        description: "Modern beauty treatments and styling",
        price: "₹349",
        rating: 4.5,
        reviews: 200,
        category: "female-salons",
        location: "Chennai",
        availability: "Available Today"
      },
      { 
        id: 6, 
        name: "Glamour Studio", 
        image: "/assest/sliderassest/salon.jpg",
        description: "Professional makeup and beauty services",
        price: "₹449",
        rating: 4.8,
        reviews: 75,
        category: "female-salons",
        location: "Hyderabad",
        availability: "Available Tomorrow"
      },
      { 
        id: 7, 
        name: "Beauty Haven", 
        image: "/assest/sliderassest/salon.jpg",
        description: "Complete beauty and wellness center",
        price: "₹399",
        rating: 4.7,
        reviews: 110,
        category: "female-salons",
        location: "Kolkata",
        availability: "Available Today"
      },
      { 
        id: 8, 
        name: "Elite Beauty Lounge", 
        image: "/assest/sliderassest/salon.jpg",
        description: "Premium beauty treatments and spa services",
        price: "₹699",
        rating: 4.9,
        reviews: 65,
        category: "female-salons",
        location: "Ahmedabad",
        availability: "Available Today"
      }
    ]
  },
  {
    id: "male-salons",
    title: "Book Appointment For Male Saloons",
    services: [
      { 
        id: 9, 
        name: "The Jawed Habib", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Professional grooming services for men",
        price: "₹199",
        rating: 4.8,
        reviews: 120,
        category: "male-salons",
        location: "Delhi NCR",
        availability: "Available Today"
      },
      { 
        id: 10, 
        name: "Rossano Ferretti", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Luxury men's grooming and styling",
        price: "₹599",
        rating: 4.9,
        reviews: 95,
        category: "male-salons",
        location: "Mumbai",
        availability: "Available Today"
      },
      { 
        id: 11, 
        name: "Naturals Salons", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Natural grooming solutions for men",
        price: "₹299",
        rating: 4.7,
        reviews: 150,
        category: "male-salons",
        location: "Bangalore",
        availability: "Available Tomorrow"
      },
      { 
        id: 12, 
        name: "Men's Grooming Studio", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Complete men's grooming services",
        price: "₹399",
        rating: 4.6,
        reviews: 80,
        category: "male-salons",
        location: "Pune",
        availability: "Available Today"
      },
      { 
        id: 13, 
        name: "Gentleman's Barber Shop", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Classic barber services and styling",
        price: "₹249",
        rating: 4.5,
        reviews: 200,
        category: "male-salons",
        location: "Chennai",
        availability: "Available Today"
      },
      { 
        id: 14, 
        name: "Urban Grooming", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Modern men's grooming and wellness",
        price: "₹449",
        rating: 4.8,
        reviews: 75,
        category: "male-salons",
        location: "Hyderabad",
        availability: "Available Tomorrow"
      },
      { 
        id: 15, 
        name: "The Grooming Co", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Professional men's grooming services",
        price: "₹349",
        rating: 4.7,
        reviews: 110,
        category: "male-salons",
        location: "Kolkata",
        availability: "Available Today"
      },
      { 
        id: 16, 
        name: "Elite Men's Salon", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Premium grooming and styling for men",
        price: "₹499",
        rating: 4.9,
        reviews: 65,
        category: "male-salons",
        location: "Ahmedabad",
        availability: "Available Today"
      }
    ]
  },
  {
    id: "paint",
    title: "Book Appointment For Paint",
    services: [
      { 
        id: 17, 
        name: "Interior Painting", 
        image: "/assest/sliderassest/painting.jpg",
        description: "Professional interior wall painting services",
        price: "₹299",
        rating: 4.8,
        reviews: 120,
        category: "paint",
        location: "Delhi NCR",
        availability: "Available Today"
      },
      { 
        id: 18, 
        name: "Exterior Painting", 
        image: "/assest/sliderassest/painting.jpg",
        description: "Exterior wall painting and weatherproofing",
        price: "₹399",
        rating: 4.9,
        reviews: 95,
        category: "paint",
        location: "Mumbai",
        availability: "Available Today"
      },
      { 
        id: 19, 
        name: "Wall Makeover", 
        image: "/assest/sliderassest/painting.jpg",
        description: "Complete wall transformation and design",
        price: "₹599",
        rating: 4.7,
        reviews: 150,
        category: "paint",
        location: "Bangalore",
        availability: "Available Tomorrow"
      },
      { 
        id: 20, 
        name: "Waterproofing", 
        image: "/assest/sliderassest/painting.jpg",
        description: "Wall waterproofing and leak repair",
        price: "₹799",
        rating: 4.6,
        reviews: 80,
        category: "paint",
        location: "Pune",
        availability: "Available Today"
      },
      { 
        id: 21, 
        name: "Color Consultation", 
        image: "/assest/sliderassest/painting.jpg",
        description: "Professional color selection and design advice",
        price: "₹199",
        rating: 4.5,
        reviews: 200,
        category: "paint",
        location: "Chennai",
        availability: "Available Today"
      },
      { 
        id: 22, 
        name: "Textured Painting", 
        image: "/assest/sliderassest/painting.jpg",
        description: "Special textured wall finishes and effects",
        price: "₹899",
        rating: 4.8,
        reviews: 75,
        category: "paint",
        location: "Hyderabad",
        availability: "Available Tomorrow"
      },
      { 
        id: 23, 
        name: "Decorative Painting", 
        image: "/assest/sliderassest/painting.jpg",
        description: "Artistic and decorative wall painting",
        price: "₹1299",
        rating: 4.7,
        reviews: 110,
        category: "paint",
        location: "Kolkata",
        availability: "Available Today"
      },
      { 
        id: 24, 
        name: "Commercial Painting", 
        image: "/assest/sliderassest/painting.jpg",
        description: "Office and commercial space painting",
        price: "₹1999",
        rating: 4.9,
        reviews: 65,
        category: "paint",
        location: "Ahmedabad",
        availability: "Available Today"
      }
    ]
  },
  {
    id: "other-services",
    title: "Book other services",
    services: [
      { 
        id: 25, 
        name: "AC Repair & Service", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Professional AC repair and maintenance services",
        price: "₹399",
        rating: 4.8,
        reviews: 120,
        category: "other-services",
        location: "Delhi NCR",
        availability: "Available Today"
      },
      { 
        id: 26, 
        name: "Plumbing Services", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Complete plumbing solutions and repairs",
        price: "₹299",
        rating: 4.9,
        reviews: 95,
        category: "other-services",
        location: "Mumbai",
        availability: "Available Today"
      },
      { 
        id: 27, 
        name: "Electrical Services", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Electrical repairs and installations",
        price: "₹499",
        rating: 4.7,
        reviews: 150,
        category: "other-services",
        location: "Bangalore",
        availability: "Available Tomorrow"
      },
      { 
        id: 28, 
        name: "Carpentry Work", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Custom furniture and woodwork services",
        price: "₹599",
        rating: 4.6,
        reviews: 80,
        category: "other-services",
        location: "Pune",
        availability: "Available Today"
      },
      { 
        id: 29, 
        name: "Home Cleaning", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Professional home and office cleaning",
        price: "₹199",
        rating: 4.5,
        reviews: 200,
        category: "other-services",
        location: "Chennai",
        availability: "Available Today"
      },
      { 
        id: 30, 
        name: "Appliance Repair", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Home appliance repair and maintenance",
        price: "₹349",
        rating: 4.8,
        reviews: 75,
        category: "other-services",
        location: "Hyderabad",
        availability: "Available Tomorrow"
      },
      { 
        id: 31, 
        name: "Pest Control", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Professional pest control and extermination",
        price: "₹449",
        rating: 4.7,
        reviews: 110,
        category: "other-services",
        location: "Kolkata",
        availability: "Available Today"
      },
      { 
        id: 32, 
        name: "Home Security", 
        image: "/assest/sliderassest/repairman-doing-air-conditioner-service.jpg",
        description: "Security system installation and maintenance",
        price: "₹1299",
        rating: 4.9,
        reviews: 65,
        category: "other-services",
        location: "Ahmedabad",
        availability: "Available Today"
      }
    ]
  }
];

export const getServicesByCategory = (categoryId: string): Service[] => {
  const category = serviceCategories.find(cat => cat.id === categoryId);
  return category ? category.services : [];
};

export const getCategoryById = (categoryId: string): ServiceCategory | undefined => {
  return serviceCategories.find(cat => cat.id === categoryId);
};

// Generate booking slots for the next 7 days
export const generateBookingSlots = (serviceId: number): BookingSlot[] => {
  const slots: BookingSlot[] = [];
  const today = new Date();
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateStr = date.toISOString().split('T')[0];
    
    const timeSlots = [
      { time: "09:00", available: Math.random() > 0.3 },
      { time: "10:00", available: Math.random() > 0.2 },
      { time: "11:00", available: Math.random() > 0.4 },
      { time: "12:00", available: Math.random() > 0.3 },
      { time: "14:00", available: Math.random() > 0.2 },
      { time: "15:00", available: Math.random() > 0.3 },
      { time: "16:00", available: Math.random() > 0.4 },
      { time: "17:00", available: Math.random() > 0.2 },
      { time: "18:00", available: Math.random() > 0.3 },
    ];
    
    timeSlots.forEach((slot, index) => {
      slots.push({
        id: `${serviceId}-${dateStr}-${slot.time}`,
        date: dateStr,
        time: slot.time,
        available: slot.available,
        price: "₹299"
      });
    });
  }
  
  return slots;
};

export const getServiceById = (serviceId: number): Service | undefined => {
  for (const category of serviceCategories) {
    const service = category.services.find(s => s.id === serviceId);
    if (service) return service;
  }
  return undefined;
};
