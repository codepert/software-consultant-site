import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
    navLinks: [
        { name: 'About us', url: '/#about'},
        { name: 'Services', url: '/#services'},
        { name: 'Pricing', url: '/#pricing' },
        { name: 'FAQ', url: '/#faq' },
    ],
    cta: {
        title: 'resume',
        url: `/${resumeFileName}`,
    },
}