import React from 'react';
import LinkedinIcon from '../Icons/Svg/Linkedin';
import { IconGithub } from '../Icons';
import type { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = ({ copyright, designedBy }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-slate-200 text-center py-8 px-4 rounded-b-lg">
      <p className="mb-4 text-lg text-[color:var(--neutral1)]">
        © {year} Marcos Lopez. {copyright}
      </p>
      <div className="flex justify-center items-center gap-4 mb-4">
        <a
          href="https://www.linkedin.com/in/marcos-lopez-7890ba184/" // pon tu perfil real
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors text-lg"
        >
          <LinkedinIcon width={34} height={34} color={'var(--neutral1)'} />
        </a>
        <a
          href="https://github.com/mlopezmartin" // pon tu perfil real
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors text-lg"
        >
          <IconGithub width={34} height={34} color={'var(--neutral1)'}/>
        </a>
      </div>
      <p className="text-base opacity-80 text-[color:var(--neutral1)]">
       {designedBy}
      </p>
    </footer>
  );
};

export default Footer;
