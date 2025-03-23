"use server";

import { cookies } from "next/headers";
import { toast } from "react-toastify";

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
export const getOrdersByAdmin = async (_id) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/order/${_id}`, {
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
      // console.log(res,'res')
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(paymentDetails),
    });
    const data = await res.json()
    console.log("data",data,'data')
    console.log(data.message)
    return data;
  } catch (err) {
    console.log(err);
  }
};




export const getAllOrders = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/order/get-all-orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(paymentDetails),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const getSuccessfulPayments = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/order/payments/successful-transactions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(paymentDetails),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const changeOrderStatus = async (status,_id) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/order/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({status}),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};
