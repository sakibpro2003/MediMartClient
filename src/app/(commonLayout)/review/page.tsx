import Image from "next/image";
import React from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
  image: string; // Add customer image URL
}

const reviews: Review[] = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Great medicine! Helped me recover quickly.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Good quality, but the delivery was a bit slow.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Sam Wilson",
    rating: 5,
    comment: "Highly recommend! Will purchase again.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Alice Brown",
    rating: 3,
    comment: "Decent product, but not very effective for me.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Mark Lee",
    rating: 4,
    comment: "Good experience overall, will try other products.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Emily Davis",
    rating: 5,
    comment: "Fantastic! Really works as advertised.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const Review = () => {
  return (
    <div className="w-11/12 mx-auto p-4">
      <h2 className="text-4xl mt-10 font-bold text-center mb-10">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center space-y-4"
          >
          
            <Image
            width={50}
            height={50}
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />

            <div className="text-center">
        
              <div className="mb-2">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex justify-center">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-5.88 3.09 1.12-6.53L1 7.91l6.54-.95L10 1l2.46 5.01 6.54.95-4.24 4.65 1.12 6.53L10 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review Comment */}
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
