// "use client";
// import Banner from "@/components/Banner";
// import { useUser } from "@/context/UserContext";
// import React, { useEffect } from "react";
// import Review from "./review/page";
// import Categories from "@/components/Category";

// const Home = () => {
//   const user = useUser();
//   // const user = useUser();

//   useEffect(() => {
//     if (user?.user) {
//       window.location.reload();
//     }
//   }, [user?.user]);
//   console.log(user);
//   return (
//     <div>
//       <Banner></Banner>
//       <Categories></Categories>
//       <Review></Review>
//     </div>
//   );
// };

// export default Home;


"use client";
import Banner from "@/components/Banner";
import { useUser } from "@/context/UserContext";
import React, { useEffect } from "react";
import Review from "./review/page";
import Categories from "@/components/Category";

const Home = () => {
  const user = useUser();

  useEffect(() => {
    const hasReloaded = localStorage.getItem("hasReloaded");

    if (user?.user && !hasReloaded) {
      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, [user?.user]);

  useEffect(() => {
    // Reset reload flag when the component mounts
    return () => {
      localStorage.removeItem("hasReloaded");
    };
  }, []);

  console.log(user);
  return (
    <div>
      <Banner />
      <Categories />
      <Review />
    </div>
  );
};

export default Home;
