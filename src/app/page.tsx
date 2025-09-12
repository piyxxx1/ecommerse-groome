import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import SearchSection from "@/components/sections/search-section";
import BannerSlider from "@/components/sections/banner-slider";
import BannerSlider2 from "@/components/sections/banner-slider-2";
import CategoryCircles from "@/components/sections/category-circles";
import FeaturedProducts from "@/components/sections/featured-products";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-20 md:pb-0">
      <Header />
      <SearchSection />
      <BannerSlider />
      <CategoryCircles />
      <BannerSlider2 />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}