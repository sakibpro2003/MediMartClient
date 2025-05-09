'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: '/banners/slide1.jpg',
    heading: 'Trusted Medicines Delivered Fast',
    description: 'Your health, our priority. Shop from a wide range of trusted medicines.',
    button: 'Medicines',
  },
  {
    id: 2,
    image: "/banners/slide2.jpg",
    heading: 'Affordable Healthcare for All',
    description: 'Get quality medicines at prices you can afford. Delivered to your doorstep.',
    button: 'Medicines',

  },
  {
    id: 3,
    image: '/banners/slide3.jpg',
    heading: 'Prescription? We’ve Got You Covered',
    description: 'Upload your prescription and get your meds delivered quickly.',
    button: 'Medicines',

  },
  {
    id: 4,
    image: '/banners/slide4.jpg',
    heading: 'Stay Healthy with Supplements',
    description: 'Shop multivitamins, immunity boosters, and more.',
    button: 'Medicines',

  },
  {
    id: 5,
    image: '/banners/slide5.jpg',
    heading: 'Cough? Cold? Fever? We’re Ready.',
    description: 'Quick relief from seasonal sickness—shop from trusted brands.',
    button: 'Medicines',

  },
];

const BannerSlider = () => {
  return (
    <div className="w-11/12 mx-auto relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[600px]">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-10 text-center">
  <div className="text-white max-w-xl space-y-4">
    <h2 className="text-3xl font-bold">{slide.heading}</h2>
    <p className="text-lg">{slide.description}</p>
  </div>
  <Link
    href="/products"
    className="mt-4 bg-black text-white font-semibold px-5 py-2 rounded"
  >
    {slide.button}
  </Link>
</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
