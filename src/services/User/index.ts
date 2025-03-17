import { cookies } from "next/headers";

export const getUserProfile = async () => {
     const cookieStore = await cookies();
      const token = cookieStore.get("accessToken")?.value;
    try {
      // console.log(userData, "from index");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/api/user/profile`,
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