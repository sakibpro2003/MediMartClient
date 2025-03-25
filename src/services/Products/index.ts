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
// export const getSingleProduct = async (_id) => {
//   try {
//     // console.log(userData, "from index");
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/api/products/${_id}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // body: JSON.stringify(userData),
//       }
//     );
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };
export const createProduct = async (payload) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    // console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const updateProduct = async (payload,id) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    // console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const deleteSingleProduct = async (_id) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    // console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/products/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(payload),
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
