// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useEffect, useState } from "react";
// import { getAllProducts } from "@/services/AuthService";
// import Image from "next/image";
// import Link from "next/link";
// import Loader from "./Loader";

// const ProductCard = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("default");
//   const itemsPerPage = 8;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getAllProducts();
//         if (Array.isArray(response?.data)) {
//           setProducts(response.data);
//           setFilteredProducts(response.data);
//         } else {
//           console.error("Unexpected API response:", response);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       updatedProducts = updatedProducts.filter(
//         (product) =>
//           product.name.toLowerCase().includes(query) ||
//           product.category?.toLowerCase().includes(query) ||
//           product.description?.toLowerCase().includes(query)
//       );
//     }

//     if (sortOption === "lowToHigh") {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOption === "highToLow") {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//     setCurrentPage(1);
//   }, [searchQuery, products, sortOption]);

//   if (loading) return <Loader />;

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const selectedProducts = filteredProducts.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   return (
//     <div className="p-4 w-11/12 mx-auto">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left Sidebar */}
//         <div className="lg:w-1/4 w-full">
//           <div className="mb-6">
//             <h3 className="font-bold text-2xl mb-4">Search By Name</h3>
//             <input
//               type="text"
//               placeholder="Search by name or symptoms"
//               className="border p-2 rounded-lg w-full mb-4"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
  
//             <select
//               className="border p-2 rounded-lg w-full"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="default">Sort by</option>
//               <option value="lowToHigh">Price: Low to High</option>
//               <option value="highToLow">Price: High to Low</option>
//             </select>
//           </div>
//         </div>
  
//         {/* Product Grid */}
//         <div className="lg:w-3/4 w-full">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
//             {selectedProducts.length === 0 ? (
//               <p className="text-center col-span-full text-gray-500">
//                 No products found
//               </p>
//             ) : (
//               selectedProducts.map((singleMed: any) => (
//                 <div key={singleMed._id} className="card bg-base-100 shadow-lg p-2">
//                   <figure className="relative rounded-lg w-2/3 mx-auto">
//                     <Image
//                       width={200}
//                       height={200}
//                       src={singleMed?.image}
//                       alt={singleMed?.name}
//                       objectFit="cover"
//                       className="rounded-t-lg"
//                     />
//                   </figure>
//                   <div className="card-body">
//                     <h2 className="card-title text-lg font-semibold">
//                       {singleMed.name}
//                       {singleMed.requiredPrescription && (
//                         <div className="bg-black text-white rounded-md text-sm font-light ml-2">
//                           Prescription
//                         </div>
//                       )}
//                     </h2>
//                     <p className="text-sm text-gray-500">{singleMed.description}</p>
//                     <p className="text-green-600 font-bold">${singleMed.price}</p>
//                     <div className="card-actions justify-between">
//                       <div className="badge badge-outline">
//                         {singleMed.manufacturer?.name || "Unknown"}
//                       </div>
//                       <div
//                         className={`badge ${singleMed.inStock ? "bg-black text-white p-2" : "badge-error"}`}
//                       >
//                         {singleMed.inStock ? "In Stock" : "Out of Stock"}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex justify-center">
//                     <Link href={`/products/${singleMed._id}`} className="btn-custom">
//                       Details
//                     </Link>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
  
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-6 space-x-4">
//               <button
//                 className="btn-custom disabled:opacity-50"
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               >
//                 Previous
//               </button>
//               <span className="px-4 py-2">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 className="btn-custom disabled:opacity-50"
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default ProductCard;

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
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [formFilter, setFormFilter] = useState("");
  const [prescriptionFilter, setPrescriptionFilter] = useState("");
  const [stockFilter, setStockFilter] = useState("");
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
    let updated = [...products];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      updated = updated.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query)
      );
    }

    // Filters
    if (categoryFilter) updated = updated.filter((p) => p.category === categoryFilter);
    if (formFilter) updated = updated.filter((p) => p.form === formFilter);
    if (prescriptionFilter)
      updated = updated.filter(
        (p) => p.requiredPrescription === (prescriptionFilter === "yes")
      );
    if (stockFilter)
      updated = updated.filter((p) => p.inStock === (stockFilter === "in"));

    // Sorting
    if (sortOption === "lowToHigh") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
    setCurrentPage(1);
  }, [searchQuery, products, sortOption, categoryFilter, formFilter, prescriptionFilter, stockFilter]);

  if (loading) return <Loader />;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4 w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4 w-full space-y-4">
          <div>
            <h3 className="font-bold text-xl mb-2">Search</h3>
            <input
              type="text"
              placeholder="Name or symptoms"
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Sort by Price</label>
            <select
              className="select select-bordered w-full mt-1"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Category</label>
            <select
              className="select select-bordered w-full mt-1"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Painkiller">Painkiller</option>
              <option value="Antibiotic">Antibiotic</option>
              <option value="Cold">Cold</option>
              <option value="Vitamin">Vitamin</option>
              <option value="Antacid">Antacid</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Form</label>
            <select
              className="select select-bordered w-full mt-1"
              value={formFilter}
              onChange={(e) => setFormFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Tablet">Tablet</option>
              <option value="Syrup">Syrup</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Prescription</label>
            <select
              className="select select-bordered w-full mt-1"
              value={prescriptionFilter}
              onChange={(e) => setPrescriptionFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="yes">Required</option>
              <option value="no">Not Required</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Stock</label>
            <select
              className="select select-bordered w-full mt-1"
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="in">In Stock</option>
              <option value="out">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedProducts.length === 0 ? (
              <p className="text-center col-span-full text-gray-500">No products found</p>
            ) : (
              selectedProducts.map((p) => (
                <div
                  key={p._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col justify-between"
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={200}
                    height={200}
                    className="rounded-xl mx-auto"
                  />
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">{p.name}</h3>
                      {p.requiredPrescription && (
                        <span className="bg-black text-white text-xs px-2 py-0.5 rounded">
                          Prescription
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{p.description}</p>
                    <p className="font-bold text-green-600 mb-1">${p.price}</p>
                    <div className="text-xs flex justify-between items-center mt-2">
                      <span className="text-gray-500">{p.manufacturer?.name}</span>
                      <span
                        className={`rounded-full text-white text-xs ${
                          p.inStock ? "bg-green-600" : "bg-red-500"
                        }`}
                      >
                        {p.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/products/${p._id}`}
                    className="mt-3 inline-block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                  >
                    View Details
                  </Link>
                </div>
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-4">
              <button
                className="btn btn-outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                Previous
              </button>
              <span className="py-2 px-4">Page {currentPage} of {totalPages}</span>
              <button
                className="btn btn-outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
