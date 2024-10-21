import { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

const poppinsRegular = localFont({
  src: '../typography/fonts/PoppinsRegular.ttf',
  variable: '--font-poppins-regular',
  weight: '400', // Regular
});

const poppinsMedium = localFont({
  src: '../typography/fonts/PoppinsMedium.ttf',
  variable: '--font-poppins-medium',
  weight: '500', // Medium
});

const poppinsSemiBold = localFont({
  src: '../typography/fonts/PoppinsSemiBold.ttf',
  variable: '--font-poppins-semi-bold',
  weight: '600', // Semi-Bold
});

const poppinsBold = localFont({
  src: '../typography/fonts/PoppinsBold.ttf',
  variable: '--font-poppins-bold',
  weight: '700', // Bold
});
const PoppinsLight = localFont({
  src: '../typography/fonts/PoppinsLight.ttf',
  variable: '--font-poppins-bold',
  weight: '700', // Bold
});
export const metadata: Metadata = {
  title: 'Blue Bite | Connecting Possibilities',
  description: 'Connecting brands and consumers through products',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsRegular.variable} ${poppinsMedium.variable} ${poppinsSemiBold.variable} ${poppinsBold.variable} ${PoppinsLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
