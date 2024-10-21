import Image from 'next/image';
import React from 'react';

interface CheckIsImageLogoProps {
  title: string;
  image_url: string;
  isLogo?: boolean;
}

const CheckIsImageLogo: React.FC<CheckIsImageLogoProps> = ({
  title,
  image_url,
  isLogo,
}) => {
  switch (isLogo) {
    case false:
      return (
        <React.Fragment>
          {image_url && (
            <Image
              src={image_url}
              alt={title}
              width={200}
              height={100}
              className="rounded-t-lg mb-2 w-full h-full"
            />
          )}
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          {image_url && (
            <Image
              src={image_url}
              alt={title}
              width={80}
              height={80}
              className="rounded-t-lg mb-2"
            />
          )}
        </React.Fragment>
      );
  }
};
export default CheckIsImageLogo;
