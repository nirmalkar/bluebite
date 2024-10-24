import React from 'react';

import Navbar from '@/components/common/Navbar';
import Features from '@/components/specific/Features';
import Hero from '@/components/specific/Hero';
import HowItWorks from '@/components/specific/HowItWorks';
import Partnerships from '@/components/specific/Partnerships';
import Testimonials from '@/components/specific/Testimonials';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Testimonials />
      <Partnerships />
      <Features />
      <HowItWorks />
    </div>
  );
}
export default Home;
