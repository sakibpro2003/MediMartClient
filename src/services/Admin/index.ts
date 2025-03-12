"use server";

export const getAllUsers = async () => {
  try {
    // console.log(userData, "from index");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/user/get-all-user`,
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
