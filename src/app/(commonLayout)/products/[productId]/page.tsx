/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { addToCart } from "@/services/Cart";
import { getSingleProduct } from "@/services/Products";
import Image from "next/image";
import React, { useEffect, useState, use } from "react";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";
import Loader from "@/components/Loader";

const ProductDetails = ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = use(params);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

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

  type TAddCart = {
    quantity: number;
    product: string;
  };

  const handleAddToCart = async (id: string) => {
    setIsAddingToCart(true); 
    const payload: TAddCart = { quantity: 1, product: id };

    try {
      const res = await addToCart(payload);
      if (res?.success) {
        toast.success("Added to cart successfully!");
      } else {
        toast.error("Failed to add to cart.");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsAddingToCart(false); 
    }
  };

  if (loading) {
    return <Loader></Loader>;
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl m-10 mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 border border-gray-300">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <Image
            width={300}
            height={300}
            src={product?.image || "/placeholder.jpg"}
            alt={product?.name || "Product Image"}
          />
        </div>

        {/* Product Details */}
        <div className="text-black">
          <h1 className="text-3xl font-bold">{product?.name || "No Name"}</h1>
          <p className="text-gray-700 mt-2">
            {product?.description || "No Description"}
          </p>

          <p className="text-xl text-black font-semibold mt-4 border-b pb-2 border-gray-300">
            Price: ${product?.price || "N/A"}
          </p>

          <p className="mt-2 text-gray-700">
            Quantity: {product?.quantity || "N/A"}
          </p>

          <div className="mt-6 flex items-center space-x-4">
            <span
              className={`px-4 py-2 rounded-lg text-white text-sm ${
                product?.inStock ? "bg-black" : "bg-gray-700"
              }`}
            >
              {product?.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="mt-6 text-gray-700">
            <p>
              <strong>Manufacturer:</strong>{" "}
              {product?.manufacturer?.name || "Unknown"}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {product?.manufacturer?.address || "N/A"}
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              {product?.manufacturer?.contact || "N/A"}
            </p>
          </div>

          <p className="mt-2 text-gray-700">
            Expiry Date:{" "}
            {product?.expiryDate
              ? new Date(product.expiryDate).toLocaleDateString()
              : "N/A"}
          </p>

          {product?.requiredPrescription && (
            <div className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg">
              Prescription Required
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => handleAddToCart(productId)}
        className="mt-6 w-full py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-900 transition flex justify-center items-center"
        disabled={isAddingToCart}
      >
        {isAddingToCart ? (
          <>
            <Loader2 className="animate-spin mr-2 h-5 w-5" />
            Adding to Cart...
          </>
        ) : (
          "Add To Cart"
        )}
      </button>
    </div>
  );
};

export default ProductDetails;
