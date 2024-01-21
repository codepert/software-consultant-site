export type NavLinkType = {
  name: string;
  url: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
};

export type CTAType = {
  title: string;
  url: string;
  sameTab?: boolean;
};

// env
export type ExperienceType = {
  role: string;
  company: string;
  companyUrl: string;
  started: Date | string;
  upto: Date | 'present' | string;
  tasks: string[];
};

export type ProjectType = {
  id: string;
  name: string;
  category: string,
  description: string,
  url: string;
  year: number;
  img: string;
  tags: string[];
  repo: string;
};

export interface ServiceType {
  title: string,
  content: string
}
export interface PricingType {
  title: string,
  discountPrice: string,
  price: string,
  plan: string[],
  index: number
}

export interface FaqType {
  question: string,
  answer: string,
  isVisible: boolean,
}

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type SoftwareSkillType = { name: string; icon: string };

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
