"use client";
import Banner from "@/components/Banner";
import Review from "./review/page";
import Categories from "@/components/Category";
import BrandSection from "@/components/BrandSection";
import HomeBlogPreview from "@/components/BlogSection";
// import BrandsSection from "@/components/BrandSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandSection></BrandSection>
      <HomeBlogPreview></HomeBlogPreview>
      <Categories />
      <Review />
    </div>
  );
};

export default Home;
