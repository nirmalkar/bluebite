import Link from 'next/link';
import React from 'react';

import CheckIsImageLogo from '@/components/specific/CheckIsImageLogo';
import MiscLogo from '@/components/specific/MiscLogo';

interface CardProps {
  title: string;
  description?: string;
  href: string;
  isLogo?: boolean;
  image_url?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  href,
  image_url,
  isLogo,
}) => {
  return (
    <Link href={href}>
      <div className="shadow-sm rounded-lg p-6 transition-transform transform flex flex-col hover:scale-102 shadow-sm hover:shadow-md hover:bg-gray-200 text-gray-700 h-full bg-gray-100 hover:text-[#2e71f0] text-gray-800">
        {image_url && (
          <CheckIsImageLogo
            title={title}
            image_url={image_url}
            isLogo={isLogo}
          />
        )}
        <h3
          className={`text-md font-semibold font[family-name:var(--font-poppins-semi-bold)] uppercase flex justify-between items-center`}
        >
          {title}
          {!image_url && <MiscLogo color="#444" size={40} icon={title} />}
        </h3>
        <p className="text-gray-600 font-medium font[family-name:var(--font-poppins-medium)]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
