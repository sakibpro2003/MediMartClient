/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  changePrescriptionStatus,
  decreaseItemQuantity,
  getCartProducts,
  increaseItemQuantity,
  removeItem,
} from "@/services/Cart";
import { createOrder } from "@/services/Orders";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartPage = () => {
  const handleUploadPrescription = async (_id: string) => {
    const status = true;
    const res = await changePrescriptionStatus(status, _id);
    if (res.success) {
      toast.success("Prescription uploaded successfully");
    }
  };
  const [products, setProducts] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Bkash");

  const fetchCartProducts = async () => {
    const cartProducts = await getCartProducts();
    setProducts(cartProducts?.data || []);
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const handleIncrease = async (_id: string) => {
    const res = await increaseItemQuantity(_id);
    if (res.success) {
      fetchCartProducts();
    }
  };

  const handleDecrease = async (_id: string) => {
    const res = await decreaseItemQuantity(_id);
    if (res.success) {
      fetchCartProducts();
    }
  };

  const handleRemoveItem = async (id: string) => {
    await removeItem(id);
    fetchCartProducts();
  };

  const handleConfirmOrder = async () => {
    try {
      const paymentDetails = {
        address,
        paymentMethod,
      };
      const res = await createOrder(paymentDetails);

      if (!res.success) {
        toast.error(res.message);
      }
      setIsModalOpen(false);
      fetchCartProducts();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6 h-screen">
      <div className="flex justify-between">
        <h1 className="lg:text-2xl font-bold mb-4">Cart Products</h1>
        <>
          <button onClick={() => setIsModalOpen(true)} className="btn-custom">
            Proceed to Checkout
          </button>
        </>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border mt-4">
          <thead>
            <tr className="bg-black text-white">
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">In Stock</th>
              <th className="border px-4 py-2">Prescription Required</th>
              <th className="border px-4 py-2">Remove Item</th>
              <th className="border px-4 py-2">upload </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item) => (
                <tr key={item._id} className="text-center">
                  <td className="border px-4 py-2">
                    <Image
                      width={50}
                      height={50}
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.product.name}</td>
                  <td className="border px-4 py-2">${item.product.price}</td>
                  <td className="border px-4  py-2">
                    <button
                      onClick={() => handleDecrease(item?.product?._id)}
                      className="btn-custom"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => handleIncrease(item?.product?._id)}
                      className="btn-custom"
                    >
                      +
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    ${item.product.price * item.quantity}
                  </td>
                  <td className="border px-4 py-2">
                    {item.product.inStock ? "Yes" : "No"}
                  </td>
                  <td className="border px-4 py-2">
                    {item.product.requiredPrescription ? "Yes" : "No"}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className="btn-custom"
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleUploadPrescription(item._id)}
                      className="btn-custom"
                    >
                      Upload
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  No products in the cart
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className="block text-sm font-medium mb-1">
              Payment Method
            </label>
            <select
              className="select select-bordered w-full mb-4"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Bkash">Bkash</option>
              <option value="Nagad">Nagad</option>
              <option value="COD">Cash on Delivery</option>
              <option value="Card">Credit/Debit Card</option>
            </select>
            <div className="flex justify-between mt-4">
              <button
                className="btn btn-error"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="btn btn-success" onClick={handleConfirmOrder}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
