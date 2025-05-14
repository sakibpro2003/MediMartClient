// components/ReviewCard.tsx
"use client";
import Link from "next/link";
import { StarRating } from "./StarRating";
import { Review } from "../../data/reviews";
import Image from "next/image";

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Link href={`/reviews/${review.id}`}>
      <div className="border rounded-2xl mb-6 p-4 shadow hover:shadow-md transition duration-300 cursor-pointer bg-white">
        <div className="w-24 h-24 mx-auto mb-4 relative">
          <Image
            className="rounded-full object-cover"
            alt="profile image"
            src={review.image}
            fill
            sizes="96px" 
          />
        </div>
        <h3 className="text-lg font-semibold mb-1 text-center">{review.title}</h3>
        <p className="text-sm text-gray-600 mb-2 text-center">{review.summary}</p>
        <div className="flex justify-center">
          <StarRating rating={review.rating} />
        </div>
        <p className="mt-2 text-sm text-gray-500 italic text-center">– {review.name}</p>
      </div>
    </Link>
  );
};
