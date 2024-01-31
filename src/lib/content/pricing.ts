import { PricingSectionType } from '@/lib/types/sections';

export const PricingSection: PricingSectionType = {
  title: 'Pricing Plans',
  description: 'Simple, transparent pricing with no hidden fees',
  items: [
    {
      title: 'Basic',
      discountPrice: '$1499',
      price: '$999',
      plan: [
        '25 GB storage',
        'Free domain',
        'Monthly updates and tips',
        'Limited access to standard tools and features',
      ],
      index: 0,
    },
    {
      title: 'Economy',
      discountPrice: '$2999',
      price: '$2499',
      plan: [
        '35 GB storage',
        'All features on Basic plan',
        'Access to exculsive webinars',
        'Acces to analytics',
      ],
      index: 1,
    },
    {
      title: 'Business',
      discountPrice: '$5999',
      price: '$4999',
      plan: [
        '50 GB storag',
        'All features on Economy plan',
        'Early access to beta programs',
        'High-priority customer service with instant chat support',
      ],
      index: 2,
    },
    {
      title: 'Enterprise',
      discountPrice: '',
      price: 'Custom',
      plan: ['Customize you plan and get a fixed price'],
      index: 3,
    },
  ],
};
