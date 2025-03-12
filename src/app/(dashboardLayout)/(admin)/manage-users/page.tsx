import { getAllUsers } from "@/services/Admin";
import React from "react";

const Page = async () => {
  const users = await getAllUsers();

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
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {users?.data?.map((user: any, index: number) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
