
"use client";

import { changeOrderStatus, getAllOrders } from "@/services/Orders";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const statusOptions = ["pending", "processing", "completed", "canceled"];

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const allOrders = await getAllOrders();
        setOrders(allOrders.data || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Function to update order status (Replace with API call)
  const handleStatusChange = async(orderId: string, newStatus: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
    const res = await changeOrderStatus(newStatus,orderId)
    console.log(res)
    console.log(newStatus,orderId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-3 text-center">Orders Management</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-blue-600 text-white text-xs">
            <tr>
              <th className="border px-2 py-2">#</th>
              <th className="border px-2 py-2">Customer</th>
              <th className="border px-2 py-2">Email</th>
              <th className="border px-2 py-2">Total ($)</th>
              <th className="border px-2 py-2">Status</th>
              <th className="border px-2 py-2">Address</th>
              <th className="border px-2 py-2">Payment</th>
              <th className="border px-2 py-2">Products</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order._id} className="text-center hover:bg-gray-100 transition">
                  <td className="border px-2 py-2">{index + 1}</td>
                  <td className="border px-2 py-2">{order.user.name}</td>
                  <td className="border px-2 py-2">{order.user.email}</td>
                  <td className="border px-2 py-2 font-semibold">${order.totalAmount}</td>
                  <td className="border px-2 py-2">
                    <select
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "processing"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                      value={order.status}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border px-2 py-2">{order.address || "N/A"}</td>
                  <td className="border px-2 py-2">{order.paymentMethod || "N/A"}</td>
                  <td className="border px-2 py-2">
                    {order.products.map((product, i) => (
                      <div key={i} className="flex items-center space-x-2 py-1">
                        <Image
                          width={40}
                          height={40}
                          src={product.product.image}
                          alt={product.product.name}
                          className="rounded shadow-md"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-gray-700">{product.product.name}</p>
                          <p className="text-xs text-gray-500">Qty: {product.quantity} | ${product.product.price}</p>
                        </div>
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
