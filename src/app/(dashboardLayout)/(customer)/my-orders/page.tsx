"use client";

import { useEffect, useState } from "react";
import { getOrders } from "@/services/Orders";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        if (response.success) {
          setOrders(response.data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold mt-5">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return <div className="text-center text-lg font-semibold mt-5">No orders found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
   
      <h2 className="text-2xl font-bold mb-4 text-center">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {/* <th>ID</th> */}
              <th>Products</th>
              <th>Total Amount</th> 
              <th>Status</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="bg-base-300 p-4" key={order?._id}>
                {/* <td className="font-semibold">{order?._id}</td> */}
                <td>
                  <ul>
                    {order.products.map((item) => (
                      <li key={item._id} className="flex items-center gap-2">
                       
                        <div>
                          <p className="font-medium">{item?.product?.name}</p>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity} | Price: ${item?.totalPrice}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="font-semibold">${order?.totalAmount}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-md text-white ${
                      order?.status === "pending" ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  >
                    {order?.status}
                  </span>
                </td>
                <td>{new Date(order?.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
