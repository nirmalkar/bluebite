import React from 'react';

import Navbar from '@/components/common/Navbar';
import Hero from '@/components/specific/Hero';
import Partnerships from '@/components/specific/Partnerships';
import Testimonials from '@/components/specific/Testimonials';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Testimonials />
      <Partnerships />
    </div>
  );
}
export default Home;
