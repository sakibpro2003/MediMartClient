"use client";
import { useUser } from "@/context/UserContext";
import React from "react";

const Home = () => {
  const user = useUser();
  console.log(user)
  return <div>
    welcome to the home
  </div>;
};

export default Home;
