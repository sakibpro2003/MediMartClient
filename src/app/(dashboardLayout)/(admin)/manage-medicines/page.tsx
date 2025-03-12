"use client";

import { useState, useEffect } from "react";
import { getAllProducts } from "@/services/AuthService";

const ManageMedicines = () => {
  const [medicines, setMedicines] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        setMedicines(response.data || []);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };
    fetchData();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(medicines.length / itemsPerPage);
  const paginatedMeds = medicines.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Manage Medicines</h1>

      {medicines.length === 0 ? (
        <p className="text-gray-500">No medicines available.</p>
      ) : (
        <>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-3 border">Image</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Description</th>
                  <th className="p-3 border">Price</th>
                  <th className="p-3 border">Stock</th>
                  <th className="p-3 border">Manufacturer</th>
                </tr>
              </thead>
              <tbody>
                {paginatedMeds.map((med) => (
                  <tr key={med._id} className="hover:bg-gray-100 transition">
                    <td className="p-3 border">
                      <img src={med.image} alt={med.name} className="w-12 h-12 object-cover rounded" />
                    </td>
                    <td className="p-3 border">{med.name}</td>
                    <td className="p-3 border">{med.description}</td>
                    <td className="p-3 border">${med.price}</td>
                    <td className="p-3 border">{med.inStock ? "In Stock" : "Out of Stock"}</td>
                    <td className="p-3 border">{med.manufacturer?.name || "Unknown"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageMedicines;
