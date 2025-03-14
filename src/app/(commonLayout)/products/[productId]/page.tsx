"use client";

import { addToCart } from "@/services/Cart";
import { getSingleProduct } from "@/services/Products";
import Image from "next/image";
import React, { useEffect, useState, use } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = use(params); // ✅ Unwrap params

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getSingleProduct(productId);
        setProduct(response?.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async (id: string) => {
    const payload = { quantity: 1, product: id };

    try {
      const res = await addToCart(payload);
      if (res?.success) {
        toast.success("Added to cart successfully!");
      } 
      else {
        toast.error("Failed to add to cart.");
      }
    } catch (error) {
      toast.error("An error occurred while adding to cart.");
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Product Image */}
      <div className="w-full h-80 relative">
        <Image
          src={product?.image || "/placeholder.jpg"}
          alt={product?.name || "Product Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{product?.name || "No Name"}</h1>
        <p className="text-gray-500 mt-2">{product?.category || "No Category"}</p>

        <p className="text-xl text-green-600 font-semibold mt-4">
          ${product?.price || "N/A"}
        </p>

        <p className="mt-4 text-gray-700">{product?.description || "No Description"}</p>

        <div className="mt-6 flex items-center space-x-4">
          <span
            className={`px-4 py-2 rounded-lg text-white ${
              product?.inStock ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {product?.inStock ? "In Stock" : "Out of Stock"}
          </span>

          {product?.requiredPrescription && (
            <span className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
              Prescription Required
            </span>
          )}
        </div>

        <p className="mt-6 text-gray-600">
          Manufacturer: <span className="font-semibold">{product?.manufacturer?.name || "Unknown"}</span>
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => handleAddToCart(productId)}
          className="btn bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
