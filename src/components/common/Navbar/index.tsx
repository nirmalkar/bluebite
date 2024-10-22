'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import MobileMenu from '@/components/specific/Sheet';
import { menuItems } from '@/constants/copies/NavbarConstants';
import { imageUrls } from '@/constants/ImageUrlConstants';
import ArrowIcon from '@/icons/arrow';

import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  return (
    <nav className="p-4 lg:p-0 relative shadow-sm text-gray-600 z-20 bg-white">
      <div className="flex justify-between bg-white items-center md:px-8 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src={imageUrls['appLogo']}
            className="w-24 h-auto w-16 sm:w-24 lg:w-22"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
        <div className="hidden lg:flex text-md justify-center">
          {menuItems.map((menuItem, index) => (
            <div className="group h-full" key={index}>
              <Link
                href="#"
                className="text-md px-4 text-gray-800 hover:text-[#2e71f0] flex items-center py-6 font-[family-name:var(--font-poppins-semi-bold)]"
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
        <div className="flex items-center gap-4 justify-between">
          <button
            onClick={() =>
              window.open(
                `${process.env.NEXT_PUBLIC_LOGIN_URL}`,
                '_blank',
                'noopener,noreferrer'
              )
            }
            className="bg-[#2e71f0] text-white rounded-md cursor-pointer py-2 px-3 text-sm md:py-2 md:px-4 md:text-base hover:bg-[#1a61e8] hover:shadow-md"
          >
            Login
          </button>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
