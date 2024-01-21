import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: '',
    title: ['Boost', 'Your Presence'],
    tagline: [
        'Full Stack Developer',
        'With UI Design Experience',
    ],
    description:[
        "We specialize in crafting websites that captivate, engage, and convert.",
        "Our expert team is here to make your online vision a reality. "
    ],
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
    img: '/vatsal-singh.jpg',
};