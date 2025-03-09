"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    console.log(userData,'from index');
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
