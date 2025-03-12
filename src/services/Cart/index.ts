"use server";

import { cookies } from "next/headers";

export const addToCart = async (payload) => {
  // const token = (await cookies()).get("accessToken");
  // console.log(token,"token")
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const getCartProducts = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(payload),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};
