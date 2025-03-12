"use client";
import Banner from "@/components/Banner";
import { useUser } from "@/context/UserContext";
import React from "react";
import Review from "./review/page";
import Categories from "@/components/Category";

const Home = () => {
  const user = useUser();
  console.log(user)
  return <div>
    <Banner></Banner>
    <Categories></Categories>
    <Review></Review>

  </div>;
};

export default Home;
