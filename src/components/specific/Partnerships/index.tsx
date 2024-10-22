'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import { PartnershipsCopy } from '@/constants/copies/landingPage';
import CompanyIcons from '@/icons/brandIcons';

const Partnerships: React.FC = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:pt-24">
      <div className="text-center text-lg lg:text-3xl font-[family-name:var(--font-poppins-semi-bold)] mx-auto line-heading-snug">
        {PartnershipsCopy.title}
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {PartnershipsCopy.icons.map((brand, index) => (
            <li key={index}>
              <CompanyIcons brand={brand.name} />
            </li>
          ))}
          {PartnershipsCopy.icons.map((brand, index) => (
            <li key={index}>
              <CompanyIcons brand={brand.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center flex-wrap items-center gap-4">
        {PartnershipsCopy.buttons.map((button, index) => (
          <button
            onClick={() => router.push(button.link)}
            key={index}
            className={`w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-sm border bg-[${button.bg}] text-${button.color} 
            flex justify-center items-center gap-2 text-base sm:text-lg  hover:bg-[${button.hover_bg}] hover:shadow-md`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
