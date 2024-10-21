import React from 'react';

import Card from './Card';

interface Item {
  title: string;
  description?: string;
  image_url?: string;
  isLogo?: boolean;
  href: string;
}
interface DropdownAndCardMenuProps {
  title: string;
  items: Item[];
}

const DropdownMenu: React.FC<DropdownAndCardMenuProps> = ({ title, items }) => {
  return (
    <div className="absolute left-0 right-0 top-full z-10 hidden group-hover:flex flex-col shadow-md p-4 rounded-lg w-full max-w-6xl mx-auto">
      <h2 className="text-sm mb-2 font-[family-name:var(--font-poppins-semi-bold)] uppercase text-gray-400">
        {title}
      </h2>
      <CardComponent
        {...{
          title,
          items,
        }}
      />
    </div>
  );
};

const CardComponent: React.FC<DropdownAndCardMenuProps> = ({
  title,
  items,
}) => {
  switch (title) {
    case 'Products':
      return (
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <React.Fragment key={item.title}>
              <Card {...{ ...item }} />
            </React.Fragment>
          ))}
        </div>
      );
    case 'Solutions':
      return (
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <React.Fragment key={item.title}>
              <Card {...{ ...item }} />
            </React.Fragment>
          ))}
        </div>
      );
    default:
      return (
        <div className="grid grid-cols-5 gap-4">
          {items.map((item) => (
            <React.Fragment key={item.title}>
              <Card {...{ ...item }} />
            </React.Fragment>
          ))}
        </div>
      );
  }
};

export default DropdownMenu;
