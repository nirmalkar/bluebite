import React from 'react';

import { heroCopy } from '@/constants/copies/landingPage';

import MiscLogo from '../MiscLogo';

const Hero: React.FC = () => {
  return (
    <section className="h-full w-full max-w-6xl mx-auto">
      <div className="py-8 px-4 sm:pt-24 text-center">
        <h1 className="text-2xl sm:text-4xl sm:text-5xl lg:text-6xl leading-snug font-semibold font-[family-name:var(--font-poppins-semi-bold)]">
          <span style={{ color: '#2e71f0' }}>
            {heroCopy.title.split(' ').slice(0, 2).join(' ')}
          </span>{' '}
          {heroCopy.title.split(' ').slice(2).join(' ')}
        </h1>
        <p className="pt-8 text-lg sm:text-xl lg:text-2xl font-light text-gray-500 font-[family-name:var(--font-poppins-light)]">
          {heroCopy.description}
        </p>
      </div>
      <div className="p-8 px-4 sm:pt-24 flex justify-center flex-wrap items-center gap-4">
        {heroCopy.buttons.map((button, index) => (
          <button
            key={index}
            className={`w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-sm border bg-[${button.bg}] text-${button.color} flex justify-center items-center gap-2 text-base sm:text-lg`}
          >
            {button.text}
            <MiscLogo color={button.color} icon={button.icon} size={22} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
