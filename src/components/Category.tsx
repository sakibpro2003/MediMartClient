import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Category {
  name: string;
  description: string;
  image: string; // Image URL for the medicine category
}

const categories: Category[] = [
  {
    name: "Pain Relief",
    description:
      "Find effective pain relief medications for headaches, body pain, and more.",
    image: "https://via.placeholder.com/150?text=Pain+Relief",
  },
  {
    name: "Cold & Flu",
    description: "Medicines for cold, flu, cough, and sore throat relief.",
    image: "https://via.placeholder.com/150?text=Cold+%26+Flu",
  },
  {
    name: "Vitamins & Supplements",
    description:
      "Boost your immunity with a variety of vitamins and supplements.",
    image: "https://via.placeholder.com/150?text=Vitamins+%26+Supplements",
  },
  {
    name: "Digestive Health",
    description:
      "Medications for digestive problems, bloating, and indigestion.",
    image: "https://via.placeholder.com/150?text=Digestive+Health",
  },
  {
    name: "Skin Care",
    description:
      "Find solutions for acne, skin irritation, and other skin concerns.",
    image: "https://via.placeholder.com/150?text=Skin+Care",
  },
  {
    name: "Heart Health",
    description:
      "Medicines to support heart health, cholesterol, and blood pressure.",
    image: "https://via.placeholder.com/150?text=Heart+Health",
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Our Medicine Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center space-y-4"
          >
            {/* Medicine Category Image */}
            <Image
              width={200}
              height={200}
              src={category.image}
              alt={category.name}
              className="w-32 h-32 object-cover rounded-lg"
            />

            <div className="text-center">
              {/* Category Name */}
              <h3 className="text-lg font-semibold">{category.name}</h3>

              {/* Category Description */}
              <p className="text-gray-700">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  mt-4 w-full justify-center">
        <Link href={'/products'} className=" btn w-1/5">View All</Link>
      </div>
    </div>
  );
};

export default Categories;
