import React from 'react';

import CrossIcon from '@/icons/cross';
import HamburgerIcon from '@/icons/hamburger';

interface HamburgerButtonProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  toggleMenu,
}) => {
  const toggleIcon = () => {
    toggleMenu();
  };

  return (
    <button onClick={toggleIcon} className="lg:hidden relative w-6 h-6">
      <div
        className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
        }`}
      >
        <HamburgerIcon size={10} />
      </div>

      <div
        className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
        }`}
      >
        <CrossIcon size={10} />
      </div>
    </button>
  );
};

export default HamburgerButton;
