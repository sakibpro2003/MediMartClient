import type { Metadata } from "next";
import { ShieldCheck, Clock, HeartPulse, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - MediMart",
  description: "Learn more about MediMart and our commitment to healthcare excellence.",
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 text-gray-800">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MediMart</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are redefining how you access healthcare—delivering trust, quality, and convenience to your doorstep. 
          From genuine medicines to 24/7 support, we’re here to put your health first.
        </p>
      </section>

      {/* Mission Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
        <div className="bg-white p-8 rounded-xl shadow-lg border">
          <h3 className="text-2xl font-semibold">Fast, Secure, and Reliable</h3>
          <p className="mt-4 text-gray-600">
            Our state-of-the-art logistics network ensures quick and accurate deliveries across the country. 
            All transactions are secured with industry-standard encryption.
          </p>
          <p className="mt-4 text-gray-600">
            Around-the-clock customer support means we’re always here when you need us.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border">
          <h3 className="text-2xl font-semibold">Quality You Can Trust</h3>
          <p className="mt-4 text-gray-600">
            All products on MediMart come from certified distributors and manufacturers, ensuring every order meets strict quality standards.
          </p>
          <p className="mt-4 text-gray-600">
            Your well-being is our priority — every time, every order.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
              title: "Authenticity & Trust",
              description: "Only genuine, verified medicines. No compromises."
            },
            {
              icon: <HeartPulse className="w-8 h-8 text-red-500" />,
              title: "Customer-First Approach",
              description: "We’re here for you — anytime, anywhere."
            },
            {
              icon: <Clock className="w-8 h-8 text-green-600" />,
              title: "Innovation & Growth",
              description: "Constantly evolving to improve your care experience."
            }
          ].map(({ icon, title, description }, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg shadow-md text-center border">
              <div className="mb-4 mx-auto w-fit">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Choose MediMart?</h2>
        <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
          {[
            "Fast & Reliable Medicine Delivery",
            "100% Genuine & Certified Products",
            "Secure Online Payment & COD Options",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-lg shadow-md w-full md:w-[300px]">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Need Help?</h2>
        <p className="text-lg text-gray-600 mb-6">We’re here 24/7 to assist you with anything you need.</p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: "Email", value: "support@medimart.com" },
            { label: "Phone", value: "+123-456-7890" },
            { label: "Live Chat", value: "Available 24/7" },
          ].map((contact, i) => (
            <div key={i} className="p-5 bg-black text-white rounded-lg shadow-md">
              <p className="text-sm uppercase text-gray-400">{contact.label}</p>
              <p className="text-lg font-medium">{contact.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
