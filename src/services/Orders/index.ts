"use server";

import { cookies } from "next/headers";

export const getOrders = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/order`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const createOrder = async (paymentDetails) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(paymentDetails),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};
