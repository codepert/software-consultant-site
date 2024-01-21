import {FaqSectionType} from '@/lib/types/sections';

export const FaqSection : FaqSectionType = {
  title: 'Frequently Asked Questions',
  description: 'Simple, transparent pricing with no hidden fees',
  items:[
    {
      question: 'Question1',
      answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
      isVisible: false,
    },
    {
      question: 'Question2',
      answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
      isVisible: false,
    },
    {
      question: 'Question3',
      answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
      isVisible: false,
    },
    {
      question: 'Question4',
      answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
      isVisible: false,
    },
  ]
}