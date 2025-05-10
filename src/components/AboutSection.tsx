"use client";

import { ShieldCheck, HeartPulse, Leaf, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "Trusted Quality",
    description:
      "We ensure the highest standards of safety and effectiveness in every product.",
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-red-500" />,
    title: "Health Focused",
    description:
      "Our mission is to improve your well-being through trusted healthcare products.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-500" />,
    title: "Sustainable & Natural",
    description: "We promote eco-friendly practices and natural ingredients.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Customer First",
    description:
      "A dedicated team working to ensure your satisfaction and support.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full h-96">
          <Image
            src="https://www.creativehatti.com/wp-content/uploads/2021/03/Social-media-banner-design-template-for-online-medicine-order-15-small.jpg"
            alt="About us"
            fill
            className="object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-6">
            At MediMart💊, we believe that healthcare should be accessible,
            reliable, and convenient. Our platform bridges the gap between
            patients and trusted medical products, delivering care that empowers
            lives. From essential medicines to expert support, we are committed
            to keeping your health first.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href={"/about"} className="btn-custom ">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
