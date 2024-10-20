'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { imageUrls } from '@/constants/ImageUrlConstants';
import { menuItems } from '@/constants/NavbarConstants';
import ArrowIcon from '@/icons/arrow';

import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  return (
    <nav className="p-4 lg:p-0 relative shadow-sm bg-white text-gray-600">
      <div className="flex justify-between items-center px-8 max-w-6xl mx-auto">
        <div>
          <Image
            src={imageUrls['appLogo']}
            alt="Logo"
            width={100}
            height={50}
          />
        </div>
        <div className="hidden lg:flex text-md justify-center">
          {menuItems.map((menuItem, index) => (
            <div className="group h-full" key={index}>
              <Link
                href="#"
                className="px-4 hover:text-[#2e71f0] flex items-center py-6 font-[family-name:var(--font-poppins-semi-bold)]"
              >
                {menuItem.title}
                <span className="ml-2 transition-transform duration-300 group-hover:rotate-[180deg]">
                  <ArrowIcon />
                </span>
              </Link>
              <DropdownMenu title={menuItem.title} items={menuItem.items} />
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            window.open(
              `${process.env.NEXT_PUBLIC_LOGIN_URL}`,
              '_blank',
              'noopener,noreferrer'
            )
          }
          className="bg-[#2e71f0] text-white py-2 px-4 rounded-md hover:bg-[#1a61e8] cursor-pointer"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
