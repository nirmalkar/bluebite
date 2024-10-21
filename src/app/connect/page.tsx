import React from 'react';

import Navbar from '@/components/common/Navbar';

const Connect = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex h-full justify-center items-center">
        <p className="text-3xl font-regular font[family-name:var(--font-poppins-regular)]">
          Connect
        </p>
      </div>
    </div>
  );
};

export default Connect;