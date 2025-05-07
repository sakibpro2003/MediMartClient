"use client";

import Link from "next/link";

const brands = [
  "NutraHealth Ltd.",
  "VitalPlus Pharma",
  "HealLife Pharmaceuticals",
  "NovaCure",
];

const BrandSection = () => {
  return (
    <section className="py-8 px-4 w-11/12 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shop by Brand</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand}
            href={`/products?brand=${encodeURIComponent(brand)}`}
            className="bg-white border border-yellow-400 text-black px-4 py-2 rounded-lg shadow hover:bg-yellow-100 text-center"
          >
            {brand}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
