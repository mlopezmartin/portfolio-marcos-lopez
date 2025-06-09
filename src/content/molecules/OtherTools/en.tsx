import type { OtherToolsProps } from '@/components/molecules/OtherTools/OtherTools.types';
import { IconClose } from '@/components/organisms/Icons';



const otherToolsContent: OtherToolsProps = {
  sectionTitle: '💼 Other Tools',
  groups: [
    {
      title: 'Developer Tools',
      tools: [
        { name: 'WordPress', icon: <IconClose /> },
        { name: 'Next.js', icon: <IconClose /> },
        { name: 'Strapi', icon: <IconClose /> },
        { name: 'Postman', icon: <IconClose /> },
        { name: 'FTP Clients', icon: <IconClose /> },
        { name: 'Git', icon: <IconClose /> },
        { name: 'JIRA', icon: <IconClose /> },
      ],
    },
    {
      title: 'Other Tools (Design, etc.)',
      tools: [
        { name: 'Photoshop', icon: <IconClose /> },
        { name: 'Illustrator', icon: <IconClose /> },
        { name: 'Adobe XD', icon: <IconClose /> },
        { name: 'PowerPoint', icon: <IconClose /> },
      ],
    },
  ],
};

export default otherToolsContent;
