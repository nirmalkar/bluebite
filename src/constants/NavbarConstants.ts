interface MenuItem {
  title: string;
  items: {
    title: string;
    isLogo?: boolean;
    description?: string;
    href: string;
    image_url?: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Products',
    items: [
      {
        title: 'Experience Studio & Object Manager',
        isLogo: true,
        description:
          'Create personalized mobile experiences at scale and manage millions of Connected Products',
        href: '/products',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/6520318a0182db211f09f838_object-studio-03.svg`,
      },
      {
        title: 'Connect | Free QR Code Generator',
        isLogo: true,
        description:
          'DEffortlessly customize, create and track up to 100 dynamic QR Touchpoints',
        href: '/connect',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/652031b48c5bff8151aa2350_BB-Connect-02.svg`,
      },
    ],
  },
  {
    title: 'Solutions',
    items: [
      {
        title: 'Brand Protection',
        isLogo: true,
        description: '',
        href: '/brand-protection',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/5eb449205171c0e023932369_Brand-Protection.svg`,
      },
      {
        title: 'Storytelling',
        isLogo: true,
        description: ' Tell your story, your way direct to consumers',
        href: '/storytelling',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/60cbbae795ba36239cfa0729_Storytelling-2.svg`,
      },
      {
        title: 'Product Commerce',
        isLogo: true,
        description: 'Turn every product into a point of sale',
        href: '/product-commerce',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/60cbbafac53ff56d8f1f5353_Product-Commerce.svg`,
      },
      {
        title: 'Circularity',
        isLogo: true,
        description: 'Encourage sustainable practices & behavior',
        href: '/circularity',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/5eb449205171c0416993236a_Sustainability.svg`,
      },
    ],
  },
  {
    title: 'Industries',
    items: [
      {
        title: 'For Lifestyle & Footwear',
        isLogo: false,
        description: '',
        href: '/lifestyle-apparel-and-footwear',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/5e6687af510abc20dd5c0405_Lifestyle_Footwear-HeroImage.jpg`,
      },
      {
        title: 'For Luxury Brands',
        isLogo: false,
        description: '',
        href: '/luxury',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/6036953333378e3ba6347d33_Luxury-Header-Open-Graph.jpg`,
      },
      {
        title: 'For CPG Brands',
        isLogo: false,
        description: '',
        href: '/cpg',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/5e4315462e6fb96bcfa4e0b7_CPG-Header-Banner.jpg`,
      },
      {
        title: 'For Wine and Spirits',
        isLogo: false,
        description: '',
        href: '/wine-spirits-and-beer',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/5dd6bfa58bbffc12d0c92540_Wine%26Spirits-Header.jpg`,
      },
      {
        title: 'Media',
        isLogo: false,
        description: '',
        href: '/media',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/643803cc02675b1b9ccbfdef_Media.jpg`,
      },
    ],
  },
  {
    title: 'Success Stories',
    items: [
      {
        title: 'adidas UltraBOOST UNCAGED',
        isLogo: false,
        description: '',
        href: '/lifestyle-apparel-and-footwear',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3f/657a15ad406d11d138a33d74_cs-didas-ultra-boost-hero.jpg`,
      },
      {
        title: 'eBay',
        isLogo: false,
        description: '',
        href: '/case-studies/ebay',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3f/6182985cf202b9488e90e923_eBay%20Blue%20Bite%20Authentication%20Case%20Study.jpg`,
      },
      {
        title: 'LOUIS XIII',
        isLogo: false,
        description: '',
        href: '/case-studies/louis-xiii',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3f/639cbc08fd3998d1dcda24fc_LouisXIII-Blue-Bite-hero.jpg`,
      },
      {
        title: 'Redken - In-Home',
        isLogo: false,
        description: '',
        href: '/case-studies/redken-in-home',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3f/621e1bc737b3aecbe794d47b_Redken%20In-Home%20Hero.jpg`,
      },
      {
        title: 'View All',
        isLogo: false,
        description: '',
        href: '/case-studies',
        image_url: `${process.env.NEXT_PUBLIC_FILES_BASE_URL}/5aa16619a722600001c19c3b/5eb59f8d97631880697ade23_case-study-thumb.jpg`,
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Academy',
        isLogo: false,
        description: '',
        href: '/academy',
        image_url: '',
      },
      {
        title: 'Blog',
        isLogo: false,
        description: '',
        href: '/blog',
        image_url: '',
      },
      {
        title: 'News',
        isLogo: false,
        description: '',
        href: '/news',
        image_url: '',
      },
      {
        title: 'About Us',
        isLogo: false,
        description: '',
        href: '/about',
        image_url: '',
      },
      {
        title: 'Careers',
        isLogo: false,
        description: '',
        href: '/careers',
        image_url: '',
      },
    ],
  },
];
export { menuItems };
