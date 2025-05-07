'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/banners/slide1.jpg',
    heading: 'Trusted Medicines Delivered Fast',
    description: 'Your health, our priority. Shop from a wide range of trusted medicines.',
    button: 'Shop Now',
  },
  {
    id: 2,
    image: '/banners/slide2.jpg',
    heading: 'Affordable Healthcare for All',
    description: 'Get quality medicines at prices you can afford. Delivered to your doorstep.',
    button: 'Browse Products',
  },
  {
    id: 3,
    image: '/banners/slide3.jpg',
    heading: 'Prescription? We’ve Got You Covered',
    description: 'Upload your prescription and get your meds delivered quickly.',
    button: 'Upload Prescription',
  },
  {
    id: 4,
    image: '/banners/slide4.jpg',
    heading: 'Stay Healthy with Supplements',
    description: 'Shop multivitamins, immunity boosters, and more.',
    button: 'Explore Supplements',
  },
  {
    id: 5,
    image: '/banners/slide5.jpg',
    heading: 'Cough? Cold? Fever? We’re Ready.',
    description: 'Quick relief from seasonal sickness—shop from trusted brands.',
    button: 'Buy Now',
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
            <div className="relative w-full h-[400px]">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-10">
                <div className="text-white max-w-xl space-y-4">
                  <h2 className="text-3xl font-bold">{slide.heading}</h2>
                  <p className="text-lg">{slide.description}</p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
