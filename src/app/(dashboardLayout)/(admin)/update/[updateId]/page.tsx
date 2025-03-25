"use client";

import { getSingleProduct, updateProduct } from "@/services/Products";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateProductPage = () => {
  const router = useRouter();
  const { updateId } = useParams(); // Get the product ID from the URL params

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    expiryDate: "",
    image: "",
    inStock: false,
    requiredPrescription: false,
    manufacturer: {
      name: "",
      address: "",
      contact: "",
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (!updateId) return;

      try {
        const productData = await getSingleProduct(updateId);
        if (productData?.data) {
          setProduct(productData.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [updateId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleManufacturerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      manufacturer: {
        ...prev.manufacturer,
        [name]: value,
      },
    }));
  };

  const handleUpdate = async () => {
    const res = await updateProduct(product, updateId);
    console.log(res,'ressss')
    if (res.success) {
      toast.success("Medicine updated successfully");
    }
    router.push('/manage-medicines')
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Update Product
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Name */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Expiry Date */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Expiry Date
          </label>
          <input
            type="date"
            name="expiryDate"
            value={product.expiryDate?.split("T")[0] || ""}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="input input-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* In Stock */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="inStock"
            checked={product.inStock}
            onChange={handleChange}
            className="checkbox checkbox-primary"
          />
          <label className="font-semibold text-gray-700">In Stock</label>
        </div>

        {/* Requires Prescription */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="requiredPrescription"
            checked={product.requiredPrescription}
            onChange={handleChange}
            className="checkbox checkbox-primary"
          />
          <label className="font-semibold text-gray-700">
            Requires Prescription
          </label>
        </div>

        {/* Manufacturer Name */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Manufacturer Name
          </label>
          <input
            type="text"
            name="name"
            value={product.manufacturer.name}
            onChange={handleManufacturerChange}
            className="input input-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Manufacturer Address */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Manufacturer Address
          </label>
          <input
            type="text"
            name="address"
            value={product.manufacturer.address}
            onChange={handleManufacturerChange}
            className="input input-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Manufacturer Contact */}
        <div>
          <label className="font-semibold text-gray-700 mb-2 block">
            Manufacturer Contact
          </label>
          <input
            type="text"
            name="contact"
            value={product.manufacturer.contact}
            onChange={handleManufacturerChange}
            className="input input-bordered w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="btn btn-primary py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
          onClick={handleUpdate}
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProductPage;
