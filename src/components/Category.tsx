// import Image from "next/image";
// import React from "react";
// import Link from "next/link";

// interface Category {
//   name: string;
//   description: string;
//   image: string; 
// }

// const categories: Category[] = [
//   {
//     name: "Pain Relief",
//     description:
//       "Find effective pain relief medications for headaches, body pain, and more.",
//     image: "https://tucsontea.com/cdn/shop/articles/pain-relief-image-2.png?v=1685729195",
//   },
//   {
//     name: "Cold & Flu",
//     description: "Medicines for cold, flu, cough, and sore throat relief.",
//     image: "https://lloydspharmacy.ie/cdn/shop/articles/Flu_or_cold_Blog_Banner.jpg?v=1694613194",
//   },
//   {
//     name: "Vitamins & Supplements",
//     description:
//       "Boost your immunity with a variety of vitamins and supplements.",
//     image: "https://www.naturemade.com/cdn/shop/articles/Commonly_Asked_Questions_About_Vitamins_Supplements-464469702_2000x1000_8f8fc9f9-1e6a-4987-8ec2-42460ff8997b.jpg?v=1590421151",
//   },
//   {
//     name: "Digestive Health",
//     description:
//       "Medications for digestive problems, bloating, and indigestion.",
//     image: "https://www.unchealth.org/content/dam/unchealth/images/areas-of-care/digestive-health/AdobeStock_318882999.jpeg",
//   },
//   {
//     name: "Skin Care",
//     description:
//       "Find solutions for acne, skin irritation, and other skin concerns.",
//     image: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-06/240610-beauty-awards-2024-skincare-winners-vl-social-91be20.jpg",
//   },
//   {
//     name: "Heart Health",
//     description:
//       "Medicines to support heart health, cholesterol, and blood pressure.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQge_KYRXFDehUONU-u7HUF4zfU0NCC0uODdw&s",
//   },
// ];

// const Categories = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-4 mt-10">
//       <h2 className="text-4xl  font-bold text-center mb-10">
//         Our Medicine Categories
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center space-y-4"
//           >
//             <Image
//               width={200}
//               height={200}
//               src={category.image}
//               alt={category.name}
//               className="w-32 h-32 object-cover rounded-lg"
//             />

//             <div className="text-center">
//               <h3 className="text-lg font-semibold">{category.name}</h3>

//               <p className="text-gray-700">{category.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex  mt-4 w-full justify-center">
//         <Link href={'/products'} className=" btn-custom w-1/5">View All</Link>
//       </div>
//     </div>
//   );
// };

// export default Categories;

import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Category {
  name: string;
  description: string;
  image: string;
  query: string;
}

const categories: Category[] = [
  {
    name: "Painkiller",
    description: "Find effective pain relief medications for headaches, body pain, and more.",
    image: "https://tucsontea.com/cdn/shop/articles/pain-relief-image-2.png?v=1685729195",
    query: "Painkiller",
  },
  {
    name: "Antibiotic",
    description: "Medicines for treating various bacterial infections.",
    image: "https://www.nsta.org/sites/default/files/2022-03/std_resist_1024.jpg",
    query: "Antibiotic",
  },
  {
    name: "Cold & Cough",
    description: "Medicines for treating various bacterial infections.",
    image: "https://lloydspharmacy.ie/cdn/shop/articles/Flu_or_cold_Blog_Banner.jpg?v=1694613194",
    query: "Cold",
  },
  {
    name: "Vitamin",
    description: "Boost your immunity with a variety of vitamins and supplements.",
    image: "https://www.naturemade.com/cdn/shop/articles/Commonly_Asked_Questions_About_Vitamins_Supplements-464469702_2000x1000_8f8fc9f9-1e6a-4987-8ec2-42460ff8997b.jpg?v=1590421151",
    query: "Vitamin",
  },
];

const Categories = () => {
  return (
    <div className="w-11/12 mx-auto py-4 mt-10">
      <h2 className="text-4xl font-bold text-center mb-10">Our Medicine Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/products?category=${encodeURIComponent(category.query)}`}
            className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center space-y-4 hover:shadow-xl transition"
          >
            <Image
              width={200}
              height={200}
              src={category.image}
              alt={category.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-gray-700">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

