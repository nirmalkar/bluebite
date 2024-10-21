type heroType = {
  title: string;
  hero_image: string;
  description: string;
  buttons: {
    text: string;
    bg: string;
    color: string;
    icon: string;
  }[];
};
type PartnershipsType = {
  title: string;
  icons: {
    name: string;
    url: string;
  }[];
  buttons: {
    text: string;
    bg: string;
    color: string;
    icon: string;
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
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
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
    },
    {
      text: 'Create Free QR Code',
      bg: '#2e71f0',
      color: 'white',
      icon: 'qrcode',
    },
  ],
};

export const PartnershipsCopy: PartnershipsType = {
  title:
    'We have successfully transformed tens of millions of products for the largest and most innovative brands',
  icons: [
    {
      name: 'p&g',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2ca9fe8fac91_p%26g-05.svg`,
    },
    {
      name: 'adidas',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2c75f08fac93_adidas-blue-bite.svg`,
    },
    {
      name: 'loreal',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2c02618fac90_L%27oreal-01.svg`,
    },
    {
      name: 'bvlgari',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2c39338fac92_BVLGARI-02.svg`,
    },
    {
      name: 'moethennessy',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2c32d38fac94_Moet-hennessy-blue-bite.svg`,
    },
    {
      name: 'decathlon',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2c188e8fac95_Decathlon-blue-bite.svg`,
    },
    {
      name: 'remy-martin',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2cf16f8fac96_Remy-Martin-blue-bite.svg`,
    },
    {
      name: 'vita-coco',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2c07ba8fac97_Vita-Coco-Blue-Bite.svg`,
    },
    {
      name: 'moose-knuckles',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/64371952d86b2c1d608fac98_Moose-Knuckles-Blue-Blue-Bite.svg`,
    },
    {
      name: 'pernod-ricard',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/64371952d86b2c5e5f8fac99_Pernod-Ricard-Pernod-Ricard.svg`,
    },
    {
      name: 'samsung',
      url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/5efa14b3efc8cf5e91917bba_Samsung-5.svg`,
    },
  ],
  buttons: [
    {
      text: 'Improve Your Connected Products Today',
      bg: '#f1f1f1',
      color: '#333',
      icon: 'message',
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
