import {
  CTAType,
  ExperienceType,
  FaqType,
  NavLinkType,
  PricingType,
  ProjectType,
  ServiceType,
  SocialLinkType,
  SoftwareSkillType} from '.';

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

export interface AboutSectionType extends Section {
  // description: string,
  list: {
    title: string;
    items: string[];
  };
  img: string;
}

type SkillType = {
  id: string;
  title: string;
  points: string[],
  lottie: {
    light: string;
    dark: string;
  };
  // points: string[];
  softwareSkills: SoftwareSkillType[];
};

export interface SkillsSectionType extends Section {
  skills: SkillType[];
}

export interface ExperienceSectionType extends Section {
  experiences: ExperienceType[];
}

export interface ProjectsSectionType extends Section {
  projects: ProjectType[];
}

export interface ContactSectionType extends Section {
  subtitle?: string;
  paragraphs: string[];
  link: string;
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
