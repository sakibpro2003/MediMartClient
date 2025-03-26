/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserInfo } from "@/services/User";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";

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

            const userProfile = await getUserProfile();
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
            const res = await updateUserInfo(user);
            if(res.success){

                toast.success("Profile updated successfully!");
            }
        } catch (error:any) {
            toast.error(error.message);
        }
        setUpdating(false);
    };

    if (loading)
        return <Loader></Loader>;

    return (
        <div className="flex items-center justify-center min-h-screen flex-col lg:p-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 font-medium">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={updating}
                    className={` btn-custom w-full py-3 text-white font-semibold rounded-lg transition duration-200 ${
                        updating ? "bg-black cursor-not-allowed" : "bg-black-600"
                    }`}
                >
                    {updating ? "Updating..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
};

export default Profile;
