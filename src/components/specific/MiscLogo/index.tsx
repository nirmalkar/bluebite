import React from 'react';
import { AiOutlineQrcode } from 'react-icons/ai';
import { FaRegNewspaper } from 'react-icons/fa';
import { GoOrganization } from 'react-icons/go';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { RiBloggerLine } from 'react-icons/ri';
import { TbMessage } from 'react-icons/tb';

interface MiscLogoProps {
  icon: string;
  color?: string;
  size?: number;
}
const MiscLogo: React.FC<MiscLogoProps> = ({
  icon,
  color = '#555',
  size = 20,
}) => {
  switch (icon.toLowerCase()) {
    case 'academy':
      return <HiOutlineAcademicCap color={color} size={size} />;
    case 'blog':
      return <RiBloggerLine color={color} size={size} />;
    case 'about us':
      return <GoOrganization color={color} size={size} />;
    case 'news':
      return <FaRegNewspaper color={color} size={size} />;
    case 'careers':
      return <MdOutlineWorkOutline color={color} size={size} />;
    case 'qrcode':
      return <AiOutlineQrcode color={color} size={size} />;
    case 'message':
      return <TbMessage color={color} size={size} />;
    default:
      return 'misc';
  }
};
export default MiscLogo;
