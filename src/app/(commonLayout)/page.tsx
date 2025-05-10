"use client";
// import type { Metadata } from "next";

// import Banner from "@/components/Banner";
import Review from "./review/page";
import Categories from "@/components/Category";
import BrandSection from "@/components/BrandSection";
import HomeBlogPreview from "@/components/BlogSection";
import BannerSlider from "@/components/BannerSlider";
import Discount from "@/components/DiscountSection";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <BannerSlider></BannerSlider>
      <BrandSection></BrandSection>
      <Categories />
      <Discount></Discount>
      <HomeBlogPreview></HomeBlogPreview>
      <Newsletter></Newsletter>
      <AboutSection></AboutSection>
      <Review />
    </div>
  );
};

export default Home;
