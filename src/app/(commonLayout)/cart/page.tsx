"use client";

import {
  decreaseItemQuantity,
  getCartProducts,
  increaseItemQuantity,
  removeItem,
} from "@/services/Cart";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const handleIncrease = async (_id) => {
    const res = await increaseItemQuantity(_id);
    if (res.success) {
      fetchCartProducts();
    }
    console.log(_id);
  };
  const handleDecrease = async (_id) => {
    const res = await decreaseItemQuantity(_id);
    if (res.success) {
      fetchCartProducts();
    }
    console.log(_id);
  };
  const [products, setProducts] = useState<any[]>([]);

  const fetchCartProducts = async () => {
    const cartProducts = await getCartProducts();
    setProducts(cartProducts?.data || []);
  };
  console.log(products, "cart");

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const handleRemoveItem = async (id: string) => {
    await removeItem(id);
    fetchCartProducts();
  };

  return (
    <div className="container mx-auto p-6 h-screen">
      <h1 className="text-2xl font-bold mb-4">Cart Products</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">In Stock</th>
              <th className="border px-4 py-2">Prescription Required</th>
              <th className="border px-4 py-2">Remove Item</th>
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
                  <td className="border px-4 py-2">
                    <button onClick={() => handleDecrease(item?.product?._id)}  className="btn bg-red-400">-</button>{" "}
                    {item.quantity}{" "}
                    <button
                      onClick={() => handleIncrease(item?.product?._id)}
                      className="btn bg-blue-400"
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
                      className="btn"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="text-center py-4">
                  No products in the cart
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
