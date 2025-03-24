import { cookies } from "next/headers";
import { json } from "stream/consumers";



export const getUserProfile = async (token: string | null) => {
  if (!token) {
      console.error("No token found");
      return null;
  }

  try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/user/profile`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
      });

      if (!res.ok) {
          throw new Error("Failed to fetch user profile");
      }

      return res.json();
  } catch (err) {
      console.error("Error fetching user profile:", err);
      return null;
  }
};


export const updateUserInfo = async (token: string | null, payload: { name: string; phone: string }) => {
  if (!token) {
      console.error("No token found");
      return null;
  }

  try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/user/change-user-info`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload), // ✅ Convert payload to JSON string
      });

      if (!res.ok) {
          throw new Error("Failed to update user info");
      }

      return res.json();
  } catch (err) {
      console.error("Error updating user info:", err);
      return null;
  }
};
