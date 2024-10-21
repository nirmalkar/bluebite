import React, { useState } from 'react';

import { menuItems } from '@/constants/copies/NavbarConstants';
import ArrowIcon from '@/icons/arrow';

import CheckIsImageLogo from '../CheckIsImageLogo';
import HamburgerButton from '../HamburgerButton';
import MiscLogo from '../MiscLogo';

interface MenuItem {
  title: string;
  items: {
    title: string;
    isLogo?: boolean;
    description?: string;
    href: string;
    image_url?: string;
  }[];
}

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div>
      <HamburgerButton {...{ isOpen, toggleMenu }} />
      <div
        className={`block lg:hidden absolute inset-x-0 top-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[-10] h-[90vh] ${
          isOpen ? 'translate-y-[0%]' : 'translate-y-[-140%]'
        }`}
      >
        <ul className="space-y-4 p-4">
          {menuItems.map((menuItem: MenuItem, index) => (
            <div key={index}>
              <div
                tabIndex={0}
                role={'button'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    toggleSubmenu(index);
                  }
                }}
                className="flex justify-between items-center font-bold text-lg text-gray-800 cursor-pointer"
                onClick={() => toggleSubmenu(index)}
              >
                {menuItem.title}
                <span
                  className={`transition-transform duration-300 ${
                    openSubmenu === index ? 'rotate-180 text-[#2e71f0]' : ''
                  }`}
                >
                  <ArrowIcon />
                </span>
              </div>
              <div
                className={`overflow-y-auto transition-max-height duration-300 ease-in-out ${
                  openSubmenu === index ? 'max-h-[55vh]' : 'max-h-0'
                }`}
              >
                <ul className="ml-4 grid grid-cols-2 gap-3 h-full">
                  {menuItem.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="sm:py-6 hover:underline text-center hover:text-[#2e71f0]"
                    >
                      <div className="shadow-sm rounded-lg p-4 transition-transform transform flex flex-col hover:scale-102 hover:shadow-md hover:bg-gray-200 text-gray-700 h-full">
                        {item.image_url && (
                          <div className="flex justify-center mb-2">
                            <CheckIsImageLogo
                              title={item.title}
                              image_url={item.image_url}
                              isLogo={item.isLogo}
                            />
                          </div>
                        )}
                        <h3
                          className={`text-xs sm:text-md font[family-name:var(--font-poppins-regular)] uppercase flex justify-between items-center text-center`}
                        >
                          {item.title}
                          {!item.image_url && (
                            <MiscLogo
                              color="#444"
                              size={20}
                              icon={item.title}
                            />
                          )}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
