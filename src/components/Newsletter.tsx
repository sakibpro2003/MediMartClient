"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const NewsletterSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks for subscribing to our newsletter!");
    }, 1000);
  };

  return (
    <section className="mt-12">
      <h2 className="text-center font-bold text-3xl mb-4">
        Subscribe To Our Latest News
      </h2>

      <div
        className="mt-6 w-11/12 mx-auto relative bg-cover bg-center bg-no-repeat text-white py-20 px-4 md:px-10"
        style={{
          backgroundImage:
            "url('https://assets-eu-01.kc-usercontent.com/80e06f8f-fc39-0158-c90c-a3da02f900f2/87545b77-ac1d-4eb3-83ca-2ffd9540c2a6/Inside%20Health%20Tile%20iStock-1459130407.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with MediStore</h2>
          <p className="mb-8 text-lg">
            Subscribe to our newsletter for health tips, latest offers, and
            updates delivered right to your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-6 py-3 rounded-md text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="btn-custom flex items-center justify-center gap-2 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
