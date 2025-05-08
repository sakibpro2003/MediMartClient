"use client";
// import Banner from "@/components/Banner";
import Review from "./review/page";
import Categories from "@/components/Category";
import BrandSection from "@/components/BrandSection";
import HomeBlogPreview from "@/components/BlogSection";
import BannerSlider from "@/components/BannerSlider";
// import BrandsSection from "@/components/BrandSection";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <BannerSlider></BannerSlider> */}
      <BrandSection></BrandSection>
      <Categories />
      {/* <HomeBlogPreview></HomeBlogPreview> */}
      <Review />
    </div>
  );
};

export default Home;
