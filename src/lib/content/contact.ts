import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'Contact',
    subtitle: "",
    paragraphs: [
    // '現在、リモートでの仕事や新しい機会を探しています。',
    "I am currently looking for remote work and new opportunities.",
    // '議論したいプロジェクトがある場合でも、単に挨拶したい場合でも、私の受信箱は誰でも利用できます。',
    'Whether you have a project to discuss or just want to say hi, my inbox is open to everyone.',
    ],
    link: `mailto:${author.email}`,
};