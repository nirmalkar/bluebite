import Image from 'next/image';
import React from 'react';

import { TestimonialsCopy } from '@/constants/copies/landingPage';
import Quote from '@/icons/quote';

const Testimonials: React.FC = () => {
  return (
    <div className="py-8 px-4 sm:pt-24 sm:pb-8 mx-auto max-w-5xl">
      <div className="flex justify-center items-center pb-8 mx-auto">
        <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
          <Image
            src={TestimonialsCopy.image}
            alt={TestimonialsCopy.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="text-center text-lg lg:text-3xl font-semibold max-w-5xl mx-auto leading-snug text-gray-800 font-[family-name:var(--font-poppins-semi-bold)]">
        {TestimonialsCopy.title}
      </div>
      <p className="pt-8 text-lg lg:text-xl font-light text-gray-600 leading-relaxed mx-auto font-[family-name:var(--font-poppins-light)]">
        {TestimonialsCopy.description}
      </p>
      <div className="relative p-8 mx-auto text-center bg-gray-50 rounded-lg shadow-sm mt-12 transition-transform transform">
        <div className="absolute top-4 left-4">
          <Quote size={50} color="#2e71f0" />
        </div>
        {TestimonialsCopy.testimonials.map((testimonial) => (
          <React.Fragment key={testimonial.name}>
            <p className="pt-12 text-lg lg:text-xl font-light text-gray-500 italic font-[family-name:var(--font-poppins-light)]">
              &quot;{testimonial.description}&quot;
            </p>
            <p className="pt-4 text-lg lg:text-xl font-semibold text-gray-800 font-[family-name:var(--font-poppins-semi-bold)]">
              - {testimonial.logoText}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
