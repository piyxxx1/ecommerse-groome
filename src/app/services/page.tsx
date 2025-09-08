import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ServicesOffered from "@/components/sections/services-offered";
import MobileAppSection from "@/components/sections/mobile-app";
import Footer from "@/components/sections/footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesOffered />
        <MobileAppSection />
      </main>
      <Footer />
    </div>
  );
}
