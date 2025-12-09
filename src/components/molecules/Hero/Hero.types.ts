
export interface SocialLink {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  download?: boolean | string;
}


export interface HeroProps {
  name: string;
  subtitle: string;
  email: string;
  avatarUrl?: string;
  socialLinks: SocialLink[];
}