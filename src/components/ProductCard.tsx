"use client";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { getAllProducts } from "@/services/AuthService";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/services/Cart";

const ProductCard = () => {
  const notify = () => toast("Wow so easy!");
  const handleAddToCart =async (id) => {
    const quantity = "1";
    const payload = {
      quantity,
      product: id,
    };
    const res = await addToCart(payload);
    console.log(res)
    if(res.success){
      <ToastContainer />
      toast.success("Added to cart successfully")
    }

    console.log(id, "id");
  };
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const itemsPerPage = 8; // Show 10 items per page

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
    // Filter products based on search query
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
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchQuery, products]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-6">
      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-lg w-full max-w-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No products found
          </p>
        ) : (
          selectedProducts.map((singleMed: any) => (
            <div key={singleMed._id} className="card bg-base-100 shadow-lg p-4">
              <figure className="relative rounded-lg w-full h-40">
                <Image
                  layout="fill"
                  src={singleMed?.image}
                  alt={singleMed?.name}
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">
                  {singleMed.name}
                  {singleMed.requiredPrescription && (
                    <div className="badge badge-secondary ml-2">Rx</div>
                  )}
                </h2>
                <p className="text-sm text-gray-500">{singleMed.description}</p>
                <p className="text-green-600 font-bold">${singleMed.price}</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">
                    {singleMed.manufacturer?.name || "Unknown"}
                  </div>
                  <div
                    className={`badge ${singleMed.inStock ? "badge-success" : "badge-error"}`}
                  >
                    {singleMed.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <Link href={`/products/${singleMed._id}`} className="btn">
                  View Details
                </Link>
                <button
                  onClick={() => handleAddToCart(singleMed._id)}
                  className="btn"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
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

