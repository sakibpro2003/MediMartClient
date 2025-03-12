"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
export const registerUser = async (userData: FieldValues) => {
  try {
    console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
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
export const loginUser = async (userData: FieldValues) => {
  try {
    console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const result = await res.json();

    // const storeCoockies = await cookies();
    console.log(
      (await cookies()).set("accessToken", result?.data?.token),
      "dksljlkfsjddsjf"
    );
    console.log(result, "result ");
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};
