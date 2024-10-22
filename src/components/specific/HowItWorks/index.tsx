'use client';
import React from 'react';

import YouTubeEmbed from '@/components/common/VideoPlayer';
import { HowItWorksCopy } from '@/constants/copies/landingPage';

const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:pt-24">
      <h1 className="text-center mt-4 text-lg text-gray-800 sm:text-2xl text-semibold font-[family-name:var(--font-poppins-semi-bold)] mx-auto">
        {HowItWorksCopy.title}
      </h1>
      <p className="text-center mt-4 text-lg text-gray-600">
        {HowItWorksCopy.description}
      </p>
      <div className="my-8">
        <YouTubeEmbed
          videoId={HowItWorksCopy.videoId}
          title={HowItWorksCopy.title}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
