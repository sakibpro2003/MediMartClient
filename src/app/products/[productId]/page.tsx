import { getSingleProduct } from "@/services/Products";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { productId } = params; // No need for await

  try {
    const product = await getSingleProduct(productId);
    const productData = product?.data; // Ensure data is accessed correctly

    if (!productData) {
      return (
        <div className="flex items-center justify-center h-screen text-red-500 text-xl">
          Product not found
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        {/* Product Image */}
        <div className="w-full h-80 relative">
          <Image
            src={productData?.image || "/placeholder.jpg"} // Fallback image
            alt={productData?.name || "Product Image"}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold">{productData?.name || "No Name"}</h1>
          <p className="text-gray-500 mt-2">{productData?.category || "No Category"}</p>

          <p className="text-xl text-green-600 font-semibold mt-4">
            ${productData?.price || "N/A"}
          </p>

          <p className="mt-4 text-gray-700">{productData?.description || "No Description"}</p>

          <div className="mt-6 flex items-center space-x-4">
            <span
              className={`px-4 py-2 rounded-lg text-white ${
                productData?.inStock ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {productData?.inStock ? "In Stock" : "Out of Stock"}
            </span>

            {productData?.requiredPrescription && (
              <span className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
                Prescription Required
              </span>
            )}
          </div>

          <p className="mt-6 text-gray-600">
            Manufacturer:{" "}
            <span className="font-semibold">
              {productData?.manufacturer?.name || "Unknown"}
            </span>
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Failed to load product details
      </div>
    );
  }
};

export default ProductDetails;
