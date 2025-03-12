"use server";

import { cookies } from "next/headers";

export const getAllProducts = async () => {
  try {
    // console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(userData),
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const getSingleProduct = async (productId) => {
  try {
    // console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/products/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(userData),
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};




export const logout = async () => {
  (await cookies()).delete("accessToken");
};
