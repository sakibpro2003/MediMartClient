// data/reviews.ts
export interface Review {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  title: string;
  medicineUsed: string;
  image:string,
  summary: string;
  fullReview: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Alice",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s",
    location: "Dhaka, Bangladesh",
    date: "2025-05-01",
    rating: 5,
    title: "Fast Delivery",
    medicineUsed: "Paracetamol 500mg",
    summary: "Received my medicine within 2 hours!",
    fullReview:
      "I had an urgent need for Paracetamol 500mg due to a sudden fever, and I was genuinely surprised by how quickly the delivery was completed. I placed the order at 10 AM, and by 12 PM, the medicine was delivered to my doorstep. The delivery person was polite and ensured that the product was handled with care. The medicine came in a tamper-proof package and included a receipt and all necessary details. I especially appreciate the real-time tracking and order updates via SMS and email. The app's interface made it very easy to navigate and place the order. It also provided helpful recommendations and accurate descriptions of the medicines. I was also able to use a discount coupon, which was a nice bonus. Compared to other platforms I've used in the past, this one is far superior in terms of user experience and service quality. I strongly recommend this service to anyone looking for fast and reliable medicine delivery. It is a great solution for elderly patients and busy professionals who can't visit a pharmacy. I will definitely continue using this platform for future needs and have already recommended it to my family and friends.",
  },
  {
    id: "2",
    name: "Bob",
    location: "Chattogram, Bangladesh",
    date: "2025-04-28",
    rating: 4,
    title: "Genuine Products",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiAaKk2O5kUsjqJP01k24EW93PnSHjuJLTA&s",
    medicineUsed: "Aspirin 81mg",
    summary: "All medicines were sealed and authentic.",
    fullReview:
      "Ordering medicine online always made me skeptical due to concerns about authenticity. However, this platform has changed my perception completely. I ordered Aspirin 81mg for my father, and I was impressed with the quality of service from start to finish. The ordering process was smooth, and the product details listed on the site helped ensure I got exactly what I needed. When the product arrived, it was securely packed and sealed properly. I cross-checked the batch number and manufacturer details, and everything was genuine and verifiable. It’s reassuring to know that the platform partners with licensed pharmacies. Delivery was on time and the courier handled the package with care. The invoice included all relevant medical information, expiry date, and dosage guidance. This adds an extra layer of trust that most online stores don’t offer. While the price was slightly higher than my local pharmacy, the convenience, reliability, and assurance of authenticity more than made up for it. Overall, I am satisfied with my experience. I will be using this platform again, especially for medicines that are often unavailable locally. It saves time, effort, and offers peace of mind regarding quality. Excellent service for health-conscious families.",
  },
  {
    id: "3",
    name: "Clara",
    location: "Khulna, Bangladesh",
    date: "2025-04-26",
    rating: 4,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
    title: "Great Support",
    medicineUsed: "Antacid Syrup",
    summary: "Customer support was very helpful.",
    fullReview:
      "I ordered Antacid Syrup for my elderly mother and accidentally selected the wrong brand. I reached out to customer support through live chat, and within minutes, a representative was assisting me. They were extremely professional and understanding. They guided me through the process of canceling the wrong item and helped me place a new order with the correct product. I also received a follow-up call confirming the changes and reassuring me that the delivery would not be delayed. True to their word, the correct medicine arrived on time. The packaging was neat, and all labels were clearly printed. What stood out the most was the personalized care and quick resolution they provided. It felt like I was speaking with someone who genuinely cared about the issue, rather than just following a script. In an industry where customer service often feels robotic, this was a refreshing experience. It gave me confidence in the platform and showed that they truly value their customers. It’s also a great option for people with limited mobility or remote location. I’m happy with the overall process and will continue using this service for future medicine orders. I recommend it to anyone who values responsive customer care.",
  },
  {
    id: "4",
    name: "David",
    location: "Rajshahi, Bangladesh",
    date: "2025-04-22",
    rating: 5,
    image:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740",
    title: "Easy to Use",
    medicineUsed: "Vitamin C Tablets",
    summary: "Website is user-friendly and intuitive.",
    fullReview:
      "I’ve tried several online medicine delivery services before, but none have matched the usability and reliability of this one. I ordered Vitamin C Tablets to boost immunity and was impressed with how simple the ordering process was. The website layout is clean, and filters help you quickly find what you’re looking for. I particularly liked the feature that lets you upload prescriptions if needed. My order arrived within 24 hours, professionally packed with the right labeling. Notifications kept me updated at every step – from confirmation to delivery. The entire platform feels trustworthy and medically compliant. I also noticed the product pricing was reasonable and competitive with local stores. I used a new user discount which brought additional savings. Another great feature is the ability to view previous orders and reorder with just a click, which is perfect for chronic medications. Everything about the experience—from browsing to unboxing—felt premium and hassle-free. I’ve recommended this platform to several friends who now rely on it for their monthly medicine refills. Whether you are tech-savvy or a first-time user, the platform is easy to understand and use. I am thoroughly satisfied and will continue using this service for my health needs.",
  },
];
