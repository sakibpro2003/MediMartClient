"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/AuthService";
import Image from "next/image";

const ProductCard = () => {
  const [products, setProducts] = useState<any[]>([]); // Ensure it's an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        if (Array.isArray(response)) {
          setProducts(response); 
        } else if (response?.data && Array.isArray(response.data)) {
          setProducts(response.data); 
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

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">
          No products available
        </p>
      ) : (
        products.map((singleMed: any) => (
          <div key={singleMed._id} className="card bg-base-100 shadow-lg p-4">
            <figure className="relative rounded-lg w-full h-40">
              <Image
              
            //   width={200}
            //   height={300}
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
                <div className={`badge ${singleMed.inStock ? "badge-success" : "badge-error"}`}>
                  {singleMed.inStock ? "In Stock" : "Out of Stock"}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCard;
