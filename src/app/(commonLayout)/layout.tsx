import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
