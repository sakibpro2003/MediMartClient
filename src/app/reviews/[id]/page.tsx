/* eslint-disable @typescript-eslint/no-explicit-any */
// app/reviews/[id]/page.tsx
import { reviews } from "../../../../data/reviews";
import { notFound } from "next/navigation";
import { StarRating } from "@/components/StarRating";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ReviewDetails({ params }:any) {
  const review = reviews.find((r) => r.id === params.id);
  if (!review) return notFound();

  return (
    <>
    <Navbar></Navbar>
     <main className="w-11/12 h-screen mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-2">{review.title}</h1>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 text-gray-600 text-sm">
        <div>
          <p>
            by <span className="font-medium">{review.name}</span> from{" "}
            <span>{review.location}</span>
          </p>
          <p className="text-xs text-gray-500">Reviewed on {review.date}</p>
        </div>
        <StarRating rating={review.rating} />
      </div>

      <div className="border-t border-gray-200 mt-4 pt-4">
        <p className="mb-1 text-sm font-semibold text-gray-700">
          Medicine/Service Reviewed:
        </p>
        <p className="text-base text-gray-800">{review.medicineUsed}</p>
      </div>

      <div className="mt-6">
        <p className="text-lg leading-relaxed text-gray-900">
          {review.fullReview}
        </p>
      </div>
    </main>
    <Footer></Footer>
    </>
   
  );
}
