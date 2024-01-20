import { ExperienceSectionType } from '@/lib/types/sections'

export const experienceSection: ExperienceSectionType = {
    title: "Experience",
    experiences: [
    {
        company: 'Freelancing',
        companyUrl: '',
        role: 'full stack developer',
        started: 'july 2022',
        upto: 'present',
        tasks: [
            'クライアントのニーズを理解し、効果的なソリューションを提案します。これには戦略と計画も含まれます。',
            '主にWordPressやVue.js、Next.js、tailwindcssを利用してWeb Application（LP、HP、…）制作',
            'Adobe photoshop, Figmaを使ったウェブサイトデザイン',
        ],
    },
    {
        company: 'Seuoden',
        companyUrl: '',
        role: 'frontend developer',
        started: 'april 2019',
        upto: 'july 2022',
        // tasks: [
        // 'Built trading platform using TradingView library.',
        // 'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        // 'Collaborated with diverse nationwide team of developers.',
        // ],
        tasks: [
        'JavaScriptフレームワーク（主にReact）を使用し、SPAやPWAを含む7つ以上のJavaScriptフロントエンドアプリケーションを構築',
        'AWSのS3上でReactページを開発し、HTML/CSSでレスポンシブなメールテンプレート（EDM）を構築'
        ],
    },
    {
        company: 'webpeda',
        companyUrl: '',
        role: 'frontend developer intern',
        started: 'june 2016',
        upto: 'january 2019',
        // tasks: [
        // 'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        // 'Architected the folder structure and initial setup of the app.',
        // 'Reviewed and approved multiple Pull requests.',
        // 'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
        // ],
        tasks: [
        'Next.js と Figma ハンドオーバー設計を使用して、静的フロントエンド UI をゼロから構築しました。',
        '世界中の分散チームとリモートで作業し、画面共有を使用して緊密に連携しました。',
        ],
    },
    ],
};