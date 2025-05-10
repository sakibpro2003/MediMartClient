import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home - MediMart",
  description: "Learn more about MediMart and our commitment to healthcare excellence.",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
