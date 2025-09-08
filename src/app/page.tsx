import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-4xl mx-auto px-5">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                View Our Services
              </Link>
              <button className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors duration-200">
                Get Notified
              </button>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's Coming?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Services</h3>
                  <p className="text-gray-600">Expert home and grooming services at your doorstep</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy Booking</h3>
                  <p className="text-gray-600">Simple and convenient online booking system</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">Verified professionals and guaranteed satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}