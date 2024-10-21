import React from 'react';

import { Loreal, Moethennessy, PAndG, Samsung } from './companies/P&GAndOthers';
import {
  Decathlon,
  Moose,
  RemyMartin,
  VitaCoco,
} from './companies/VitaCocoAndOthers';

interface BrandIconsProps {
  brand: string;
}

const BrandIcons: React.FC<BrandIconsProps> = ({ brand }) => {
  switch (brand) {
    case 'p&g':
      return <PAndG size={52} />;
    case 'loreal':
      return <Loreal size={150} />;
    case 'moethennessy':
      return <Moethennessy size={150} />;
    case 'decathlon':
      return <Decathlon size={150} />;
    case 'remy-martin':
      return <RemyMartin size={150} />;
    case 'vita-coco':
      return <VitaCoco size={50} />;
    case 'moose-knuckles':
      return <Moose size={180} />;
    case 'samsung':
      return <Samsung size={150} />;
    default:
      return null;
  }
};
export default BrandIcons;
