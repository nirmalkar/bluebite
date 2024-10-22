'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { FeaturesCopy } from '@/constants/copies/landingPage';

const Features: React.FC = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:pt-24">
      <div className="text-center text-lg sm:text-xl text-semibold text-[#2e71f0] font-[family-name:var(--font-poppins-semi-bold)] mx-auto line-heading-snug">
        {FeaturesCopy.title}
      </div>
      <div className="text-center mt-4 text-lg text-gray-800 sm:text-2xl text-semibold font-[family-name:var(--font-poppins-semi-bold)] mx-auto">
        {FeaturesCopy.sub_title}
      </div>
      <div className="text-lg mt-4 sm:text-xl text-gray-600 font-light font-[family-name:var(--font-poppins-light)] text-center">
        {FeaturesCopy.description}
      </div>
      <div className="text-lg mt-4 sm:text-xl text-gray-600 font-light font-[family-name:var(--font-poppins-light)] text-center">
        {FeaturesCopy.summary}
      </div>
      <div className="my-8 flex justify-center flex-wrap items-center gap-4">
        {FeaturesCopy.buttons.map((button, index) => (
          <button
            onClick={() => router.push(button.link)}
            key={index}
            className={`w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-sm border bg-[${button.bg}] text-${button.color} flex justify-center items-center gap-2 text-base sm:text-lg hover:bg-[${button.hover_bg}] hover:shadow-md`}
          >
            {button.text}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-4 sm:gap-8 sm:pt-24">
        {FeaturesCopy.features.map((feature) => (
          <div
            className="p-4 rounded-lg bg-gray-50 shadow-sm flex flex-col justify-center items-center gap-4 hover:scale-105 hover:shadow-md transition-transform duration-300"
            key={feature.title}
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={100}
              height={100}
            />
            <h1 className="text-lg font-[family-name:var(--font-poppins-medium)] text-gray-800">
              {feature.title}
            </h1>
            <p className="text-gray-600 font-[family-name:var(--font-poppins-light)] text-center text-md">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
