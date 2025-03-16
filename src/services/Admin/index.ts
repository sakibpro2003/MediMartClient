"use server";

import { cookies } from "next/headers";

export const getAllUsers = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    // console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/user/get-all-user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(userData),
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
// export const getAllUsers = async () => {
//   try {
//     // console.log(userData, "from index");
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/api/user/get-all-user`,
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
