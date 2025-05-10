

"use client";

import Link from "next/link";
import Image from "next/image";

const brands = [
  {
    name: "NutraHealth Ltd.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoO8Axs7OMFsz_SD0lvtO47h1XPVZytAXuktjDAorApR3xazTiDL0QhZ5TqqF1FyMszMg&usqp=CAU",

  },
  {
    name: "VitalPlus Pharma",
    image: "https://us1-photo.nextdoor.com/business_logo/c5/6a/c56a38b17d673b254f2a6f90edcb5d61.png",
  },
  {
    name: "HealLife Pharmaceuticals",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73juFtSox5s6x44depOhzm0lQZ6EHl9h1U5hTaEzXatACc-Hsr9o2hSaqq9sJ15G5rig&usqp=CAU",
  },
  {
    name: "NovaCure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6VQ-yX8zOWWzfjnh8TwKGNozxWM793I4Hg&s",
  },
];

const BrandSection = () => {
  return (
    <section className="py-8 w-11/12 mt-6 mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6">Shop by Brand</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={`/products?brand=${encodeURIComponent(brand.name)}`}
            className="bg-white border border-black-400 text-black px-4 py-4 rounded-lg shadow hover:bg-yellow-100 text-center flex flex-col items-center"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={80}
              height={80}
              className="mb-2 rounded object-cover"
            />
            <span className="text-sm font-medium">{brand.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
