"use client";
// import type { Metadata } from "next";

// import Banner from "@/components/Banner";
import Review from "./review/page";
import Categories from "@/components/Category";
import BrandSection from "@/components/BrandSection";
import HomeBlogPreview from "@/components/BlogSection";
import BannerSlider from "@/components/BannerSlider";
// import Head from "next/head";
// import BrandsSection from "@/components/BrandSection";
// export async function generateMetadata(): Promise<Metadata> {
//   const storeName = "MediStore"; // You can fetch this from an API
//   return {
//     title: `Welcome to ${storeName}`,
//     description: "Home page for MediStore",
//   };
// }
const Home = () => {
  
  return (
    <div>
     
      
      {/* <Banner /> */}
      <BannerSlider></BannerSlider>
      <BrandSection></BrandSection>
      <Categories />
      <HomeBlogPreview></HomeBlogPreview>
      <Review />
    </div>
  );
};

export default Home;
