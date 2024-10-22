type heroType = {
  title: string;
  hero_image: string;
  description: string;
  buttons: {
    text: string;
    bg: string;
    color: string;
    icon: string;
    hover_bg: string;
    link: string;
  }[];
};
type PartnershipsType = {
  title: string;
  icons: {
    name: string;
  }[];
  buttons: {
    text: string;
    bg: string;
    color: string;
    icon: string;
    link: string;
    hover_bg: string;
  }[];
};
type TestimonialsType = {
  title: string;
  description: string;
  image: string;
  testimonials: {
    name: string;
    image: string;
    description: string;
    logoText: string;
  }[];
};
type FeaturesCopyType = {
  title: string;
  sub_title: string;
  description: string;
  summary: string;
  buttons: {
    text: string;
    bg: string;
    color: string;
    link: string;
    hover_bg: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
};

type HowItWorksCopyType = {
  title: string;
  description: string;
  videoId: string;
};

export const heroCopy: heroType = {
  title: 'Connecting brands and consumers through products®',
  hero_image: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/6437188f21cf93110e5b9588_2023-Website%20Hero-4.jpg`,
  description:
    'Your partner for everything you need in a successful Connected Product strategy',
  buttons: [
    {
      text: 'Get a Demo',
      bg: '#f1f1f1',
      color: '#333',
      icon: 'message',
      link: '/demo-request',
      hover_bg: '#f1f1f1',
    },
    {
      text: 'Create Free QR Code',
      bg: '#2e71f0',
      color: 'white',
      icon: 'qrcode',
      link: '/connect',
      hover_bg: '#1a61e8',
    },
  ],
};

export const PartnershipsCopy: PartnershipsType = {
  title:
    'We have successfully transformed tens of millions of products for the largest and most innovative brands',
  icons: [
    {
      name: 'p&g',
    },
    {
      name: 'adidas',
    },
    {
      name: 'loreal',
    },
    {
      name: 'bvlgari',
    },
    {
      name: 'moethennessy',
    },
    {
      name: 'decathlon',
    },
    {
      name: 'remy-martin',
    },
    {
      name: 'vita-coco',
    },
    {
      name: 'moose-knuckles',
    },
    {
      name: 'pernod-ricard',
    },
    {
      name: 'samsung',
    },
  ],
  buttons: [
    {
      text: 'Improve Your Connected Products Today',
      bg: '#2e71f0',
      color: 'white',
      icon: 'message',
      link: '/demo-request',
      hover_bg: '#1a61e8',
    },
  ],
};

export const TestimonialsCopy: TestimonialsType = {
  title: 'Connecting Possibilities®',
  description:
    "Build value for your brand and consumers by transforming your products into a two-way, digital channel. Take advantage of our enterprise-grade platform and team of experts to improve measurable results in less time, without the guesswork. We’ve been doing this for over 15 years — we've got you covered.",
  image: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/6437193447dac93596931b7f_Connecting-Possibilities_Connecting%20Possibilities%20copy.svg`,
  testimonials: [
    {
      name: 'loreal',
      image: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2c5e5f8fac99_Pernod-Ricard-Pernod-Ricard.svg`,
      description:
        'With Blue Bite’s connected packaging, 40% of salon patrons scanned our QR code to receive a personalized prescription of complementary Redken products to use at home — right on their mobile phone.',
      logoText: ` L'Oréal`,
    },
  ],
};
export const FeaturesCopy: FeaturesCopyType = {
  title: 'AUTOMATED INTELLIGENCE ',
  sub_title:
    'Proven to Drive Higher Engagement, Conversion and Loyalty with Connected Products',
  description:
    'Don’t let a QR Code redirecting to a static webpage tarnish your brand’s reputation. Instead, surprise and delight your consumers with a personalized experience that delivers dynamic landing pages and web-apps for each consumer, product and situation.',
  summary:
    'In short — the right message, in the right place, at the right time.',
  buttons: [
    {
      text: 'Increase Engagement with Blue Bite Personalization',
      bg: '#2e71f0',
      color: 'white',
      link: '/personalization',
      hover_bg: '#1a61e8',
    },
  ],
  features: [
    {
      icon: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/6437193ed86b2c723a8fabac_Manage_Manage%20copy.svg`,
      title: 'A Strategy for Success',
      description:
        'Brands that lack a robust Connected Product strategy  waste time and effort, risking project failure',
    },
    {
      icon: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/6437193ed86b2c051f8fabab_Make_Make%20copy.svg`,
      title: 'Better Connected Products',
      description:
        'Eliminate bad consumer experiences and the need to build many individual webpages',
    },
    {
      icon: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/6437193ed86b2c71358fabad_Measure_Measure%20copy.svg`,
      title: 'Actionable Insights',
      description:
        'Stop missing out on valuable in-store data and post-purchase intelligence',
    },
  ],
};

export const HowItWorksCopy: HowItWorksCopyType = {
  title: 'HOW IT WORKS?',
  description: 'Watch this video to find out in just over one minute',
  videoId: 'zEhF5avFnL4',
};
