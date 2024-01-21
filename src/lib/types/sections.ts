import {
  CTAType,
  FaqType,
  NavLinkType,
  PricingType,
  ServiceType,
  SocialLinkType} from '.';
export interface Section {
  title: string;
}
export interface NavbarSectionType {
  navLinks: NavLinkType[];
  cta: CTAType;
}
export interface HeroSectionType {
  subtitle?: string;
  tagline: string[],
  description: string[];
  specialText?: string;
  cta?: CTAType & {
    hideInDesktop?: boolean;
  };
  img: string,
  title: string[]
}
export interface ServiceSectionType {
  title: string[],
  description: string[],
  items: ServiceType[]
}
export interface PricingSectionType {
  title: string,
  description:string,
  items: PricingType[]
}
export interface FaqSectionType {
  title: string,
  description: string,
  items: FaqType[],
}
export interface SocialSectionType {
  socialLinks: SocialLinkType[];
}
export interface FooterSectionType  {
  title: string,
  termsAndCondition:  string,
  privacyPolicy: string,
  readToGetStarted: string
}
