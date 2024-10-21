import React from 'react';

import Navbar from '@/components/common/Navbar';

const Products = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex h-full justify-center items-center">
        <p className="text-3xl font-regular font[family-name:var(--font-poppins-regular)]">
          Products
        </p>
      </div>
    </div>
  );
};

export default Products;
