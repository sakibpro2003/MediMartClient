"use client";
import Banner from "@/components/Banner";
import Review from "./review/page";
import Categories from "@/components/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Review />
    </div>
  );
};

export default Home;
