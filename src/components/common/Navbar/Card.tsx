import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  href: string;
  image_url?: string;
}

const Card: React.FC<CardProps> = ({ title, description, href, image_url }) => {
  return (
    <Link href={href}>
      <div className="shadow-sm rounded-lg p-6 transition-transform transform flex flex-col hover:scale-102 shadow-sm hover:shadow-md hover:bg-gray-200 text-gray-700 h-full">
        {image_url && (
          <Image
            src={image_url}
            alt={title}
            width={80}
            height={80}
            className="rounded-t-lg mb-2"
          />
        )}
        <h3
          className={`text-md font-semibold font[family-name:var(--font-poppins-semi-bold)] uppercase hover:text-[#2e71f0] hover:underline`}
        >
          {title}
        </h3>
        <p className="text-gray-600 font-medium font[family-name:var(--font-poppins-medium)]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
