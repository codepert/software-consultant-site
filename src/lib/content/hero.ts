import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: '',
    // title: 'vatsal singh.',
    // tagline: 'I create visually pleasing interfaces for the web.',
    // description:
    // "I'm a passionate Front-End web developer having an experience of web applications with React.js & Next.js with TypeScript & TailwindCSS and UI/UX designing.",
    // specialText: 'Currently available for a job & freelance',
    title: ['Boost', 'Your Presence'],
    tagline: [
        'Full Stack Developer',
        'With UI Design Experience',
    ],
    // "subtitles": [
    //     "Full-stack developer 🌐",
    //     "Cross-platform developer 📱💻",
    //     "Exploring cloud ☁️",
    //     "Beginner in devops ♾️",
    //     "Just getting started 📈"
    // ],
    description:[
        "We specialize in crafting websites that captivate, engage, and convert.",
        "Our expert team is here to make your online vision a reality. "
    ],
    // description:"皆さんのフレンドリーな開発者として、私はアーティストであると同時に、すべてのテクノロジー スタックを探索したいクレイジーなフルスタック開発者でもあります。私は昼も夜も絵を描いたりコーディングしたりして、インターネット キャンバス上であなたのインスピレーションやアイデアを生み出しています。",
    // specialText: '現在は就職もフリーランスも可能です',
    specialText: 'Currently, it is possible to work or freelance.',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
    img: '/vatsal-singh.jpg',
};