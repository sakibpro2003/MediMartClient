"use client";

import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserInfo } from "@/services/User";
import { toast } from "react-toastify";

const Profile = () => {
    const [user, setUser] = useState<{ name: string; phone: string }>({
        name: "",
        phone: "",
    });
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("accessToken="))
                ?.split("=")[1];

            if (!token) {
                console.error("No token available");
                setLoading(false);
                return;
            }

            const userProfile = await getUserProfile(token);
            if (userProfile?.data) {
                setUser({
                    name: userProfile.data.name || "",
                    phone: userProfile.data.phone || "",
                });
            }
            setLoading(false);
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("accessToken="))
            ?.split("=")[1];

        if (!token) {
            console.error("No token found");
            return;
        }

        setUpdating(true);
        try {
            const res = await updateUserInfo(token, user);
            console.log("Updated User:", res);
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error("Failed to update profile:", error);
            toast.error("Failed to update profile. Please try again.");
        }
        setUpdating(false);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-5 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Profile</h2>
            <div className="mb-3">
                <label className="block text-gray-700">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="border p-2 w-full rounded"
                />
            </div>
            <div className="mb-3">
                <label className="block text-gray-700">Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="border p-2 w-full rounded"
                />
            </div>
            <button
                onClick={handleSubmit}
                disabled={updating}
                className={`bg-blue-500 text-white px-4 py-2 rounded w-full ${
                    updating ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                {updating ? "Updating..." : "Submit"}
            </button>
        </div>
    );
};

export default Profile;
