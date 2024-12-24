export const inclusions = [
  {
    title: 'Free Shipping',
    description: 'Free shipping for order above $150',
    icon: '/shipping.svg',
  },
  {
    title: 'Money Guarantee',
    description: 'Within 30 days for an exchange',
    icon: '/dollar.svg',
  },
  {
    title: 'Online Support',
    description: '24 hours a day, 7 days a week',
    icon: '/support.svg',
  },
  {
    title: 'Flexible Payment',
    description: 'Pay with multiple credit cards',
    icon: '/payment.svg',
  },
]

export const noHeaderFooterUrls = ['/create-account', '/login', '/recover-password']


// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/contact', key: 'contact_us', label: 'Contact Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];

  export const CATEGORY_IMAGES: { [key: string]: string } = {
    "Category 1": "/exhibition-img-1.jpg",
    "Category 2": "/exhibition-img-2.jpg",
    "Category 3": "/exhibition3.png",
    // Add more categories as needed
  };
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Price Match Guarantee',
      icon: '/map.svg',
      variant: 'green',
      description:
        'We guarantee all the best prices. If you find a lower price for the same sculpture, we will match it or offer an additional 10% off.',
    },
    {
      title: 'Handmade',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "Each and every one of our products is handmade, from start to finish, ensuring the highest quality and unique characteristics in every piece.",
    },
    {
      title: 'Five-Star Ratings',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'On average, our reviews are 4.9 stars, reflecting our commitment to providing exceptional products and services to our valued customers.',
    },
    {
      title: 'Trusted Payment Methods',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'Our website utilizes industry-leading, trusted payment methods to ensure the security and reliability of all transactions.',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Us',
        'Privacy Policy',
        'Contact Us',
        'Blogs',
      ],
    },
  
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Email', value: 'boardkenya@gmail.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
    ],
  };

  // FAQ SECTION
  export const FAQ_DATA = [
    {
        idx: 0,
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase. Items must be in original condition and include all original packaging."
    },
    {
        idx: 1,
        question: "How long does shipping take?",
        answer: "Shipping times vary by location. In the US, standard shipping usually takes 5-7 business days."
    },
    {
        idx: 2,
        question: "Do you offer international shipping?",
        answer: "Yes, we ship internationally. Additional charges will apply. Shipping times vary depending on the destination."
    },
    {
        idx: 3,
        question: "How do I track my order?",
        answer: "Once your order is shipped, you will receive an email with a tracking link. Click on the link to view the current status of your shipment."
    }
];
  
