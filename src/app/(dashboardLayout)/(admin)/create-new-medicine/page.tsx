"use client";

import withAdminAuth from "@/hoc/withAdminAuth";
import { createProduct } from "@/services/Products";
import { TProduct } from "@/types/product";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductForm = () => {
    const router = useRouter()
    const [product, setProduct] = useState<TProduct>({
      _id: "", // Initially empty, you can set this when the product is fetched or created
      name: "",
      product: {
        name: "",
        image: "",
      },
      image: "",
      totalPrice: 0, // You can calculate or set the total price when needed
      description: "",
      price: 0,
      inStock: true,
      quantity: 0,
      requiredPrescription: false,
      expiryDate: "",
      manufacturer: {
        name: "",
        address: "",
        contact: "",
      },
      updated_at: "", // You can set the updated_at when the product is fetched or updated
    });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value, type, checked } = e.target;

  //   if (name.includes("manufacturer.")) {
  //     const field = name.split(".")[1];
  //     setProduct((prev) => ({
  //       ...prev,
  //       manufacturer: { ...prev.manufacturer, [field]: value },
  //     }));
  //   } else {
  //     setProduct((prev) => ({
  //       ...prev,
  //       [name]: type === "checkbox" ? checked : value,
  //     }));
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement; // Explicitly cast target
  
    const { name, value, type } = target;
    const checked = target.checked; // Safe access for checkboxes
  
    if (name.includes("manufacturer.")) {
      const field = name.split(".")[1];
      setProduct((prev) => ({
        ...prev,
        manufacturer: { ...prev.manufacturer, [field]: value },
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await createProduct(product);
    if (res.data._id) {
      toast.success("Medicine added succesfully");
        router.push('/manage-medicines')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-auto">
      <div className="max-w-3xl w-full p-6 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create New Medicine
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Medicine Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                name="image"
                value={product.image}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="inStock"
                checked={product.inStock}
                onChange={handleChange}
              />
              <label className="text-sm font-medium">In Stock</label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="requiredPrescription"
                checked={product.requiredPrescription}
                onChange={handleChange}
              />
              <label className="text-sm font-medium">
                Requires Prescription
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium">Expiry Date</label>
              <input
                type="date"
                name="expiryDate"
                value={product.expiryDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Manufacturer Name
              </label>
              <input
                type="text"
                name="manufacturer.name"
                value={product.manufacturer.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Manufacturer Address
              </label>
              <input
                type="text"
                name="manufacturer.address"
                value={product.manufacturer.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Manufacturer Contact
              </label>
              <input
                type="text"
                name="manufacturer.contact"
                value={product.manufacturer.contact}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Submit Button (Spans Two Columns) */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withAdminAuth(ProductForm);
