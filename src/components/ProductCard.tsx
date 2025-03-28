/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/AuthService";
import Image from "next/image";
import Link from "next/link";
import Loader from "./Loader";

const ProductCard = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        if (Array.isArray(response?.data)) {
          setProducts(response.data);
          setFilteredProducts(response.data);
        } else {
          console.error("Unexpected API response:", response);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(products);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  }, [searchQuery, products]);

  if (loading) return <Loader></Loader>;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-center flex-col items-center content-center">
        <h3 className="font-bold text-3xl text-center">Search medicine</h3>
        <input
          type="text"
          placeholder="Name or symptoms..."
          className="border p-2 rounded-lg w-full max-w-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No products found
          </p>
        ) : (
          selectedProducts.map((singleMed: any) => (
            <div key={singleMed._id} className="card bg-base-100 shadow-lg p-4">
              <figure className="relative rounded-lg w-2/3 mx-auto h-40">
                <Image
                  width={200}
                  height={200}
                  src={singleMed?.image}
                  alt={singleMed?.name}
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title text-lg font-semibold">
                  {singleMed.name}
                  {singleMed.requiredPrescription && (
                    <div className="bg-black text-white rounded-md text-sm font-light ml-2">
                      Prescription
                    </div>
                  )}
                </h2>
                <p>{singleMed.requiredPrescription}</p>
                <p className="text-sm text-gray-500">{singleMed.description}</p>
                <p className="text-green-600 font-bold">${singleMed.price}</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">
                    {singleMed.manufacturer?.name || "Unknown"}
                  </div>
                  <div
                    className={`badge ${singleMed.inStock ? "bg-black text-white p-2" : "badge-error"}`}
                  >
                    {singleMed.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <Link
                  href={`/products/${singleMed._id}`}
                  className="btn-custom"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="btn-custom disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn-custom disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
