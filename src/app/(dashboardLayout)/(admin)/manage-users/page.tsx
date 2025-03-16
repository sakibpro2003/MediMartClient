"use client"; // ✅ Mark as Client Component

import { getAllUsers } from "@/services/Admin";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  // Fetch users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response?.data || []);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="overflow-x-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <table className="table w-full border border-gray-200 shadow-md">
        {/* Table Head */}
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Status</th>
            <th>View Order</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {users.length > 0 ? (
            users.map((user: any, index: number) => (
              <tr key={user._id} className={`${user.isBlocked ? "bg-red-100" : ""}`}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.role}</td>
                <td>{user.phone || "No Phone"}</td>
                <td>
                  <span className={`badge ${user.isBlocked ? "badge-error" : "badge-success"}`}>
                    {user.isBlocked ? "Blocked" : "Active"}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => router.push(`/${user._id}`)}
                    className="btn btn-sm btn-primary"
                  >
                    Order History
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-4 text-gray-500">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
